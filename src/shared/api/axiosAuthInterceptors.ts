/* eslint-disable @typescript-eslint/no-explicit-any */
import { getSession, signIn, signOut } from 'next-auth/react'
import { getServerSession } from 'next-auth'
import type { NextApiRequest, NextApiResponse } from 'next'
import type { AxiosRequestConfig } from 'axios'
import authOptions from '@/app/api/auth/[...nextauth]/authOptions'
import { axiosInstance } from '@/shared/api/axiosInstance'

const BEARER_TOKEN_PREFIX = 'Bearer'
const UNAUTHORIZED_STATUS = 401
const ACCESS_TOKEN = 'accessToken'

function isValidSession(session: any): boolean {
  return session && session.user && session.user.accessToken
}

const hasValidRefreshToken = (session: any): boolean => {
  return session && session.user && session.user.refreshToken
}

function getAccessTokenFromLocalStorage(): string | null {
  if (typeof window === 'undefined') return null

  const accessToken = localStorage.getItem(ACCESS_TOKEN)
  return accessToken ? accessToken : null
}

async function getAccessTokenFromSession(context?: {
  nextApiRequest: NextApiRequest
  nextApiResponse: NextApiResponse
}) {
  const session = context
    ? await getServerSession(context.nextApiRequest, context.nextApiResponse, authOptions)
    : await getSession()
  return isValidSession(session) ? session?.user.accessToken : null
}

export async function setAuthorizationHeader(config: any, context: any = null) {
  if (config.isSkipInterceptor) return config

  const accessToken = getAccessTokenFromLocalStorage() || (await getAccessTokenFromSession(context))

  if (accessToken) {
    config.headers.Authorization = `${BEARER_TOKEN_PREFIX} ${accessToken}`
  }

  return config
}

let tokenRefreshInProgress = false

interface FailedRequest {
  config: AxiosRequestConfig
  resolve: (value: any) => void
  reject: (reason?: any) => void
}

// 이 큐는 전역 변수로 관리되므로, 애플리케이션의 모든 컨텍스트에서 접근이 가능합니다.
const failedQueue: FailedRequest[] = []

const processQueue = (error: any, token: any = null) => {
  failedQueue.forEach((prom: FailedRequest) => {
    if (error) {
      prom.reject(error)
    } else {
      prom.config.headers = prom.config.headers || {}
      // 새 토큰으로 각 요청 재시도
      prom.config.headers.Authorization = `${BEARER_TOKEN_PREFIX} ${token}`
      axiosInstance(prom.config).then(prom.resolve, prom.reject)
    }
  })

  failedQueue.length = 0
}
const clearStorageTokens = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('accessToken')
  }
}

const refreshAccessToken = async (
  session: any,
  context?: {
    nextApiRequest: NextApiRequest
    nextApiResponse: NextApiResponse
  },
): Promise<string | null> => {
  clearStorageTokens()
  const { refreshToken } = session.user
  const result = await signIn('refresh-access-token', {
    refreshToken,
    redirect: false,
  })

  // `result`가 `undefined`이거나, `result.error`가 존재하는 경우 에러 핸들링
  if (!result || result.error || result.status === 401) {
    await signOut({ redirect: false })
    return null
  }

  const refreshedSession = context
    ? await getServerSession(context.nextApiRequest, context.nextApiResponse, authOptions)
    : await getSession()

  if (isValidSession(refreshedSession)) {
    return refreshedSession!.user?.accessToken
  }

  throw new Error('No refresh token available')
}

const resetAuthenticationState = async () => {
  await signIn()
  // resetAllStores()
  localStorage.clear()
}

export const retryWithRefreshToken = async (error: any, context: any = null) => {
  const originalRequest = error.config
  if (!error.response || error.response.status !== UNAUTHORIZED_STATUS || originalRequest.isSkipInterceptor) {
    return Promise.reject(error)
  }

  if (!tokenRefreshInProgress) {
    tokenRefreshInProgress = true

    try {
      const session = context ? await getServerSession(context.req, context.res, authOptions) : await getSession()

      if (!hasValidRefreshToken(session)) {
        await resetAuthenticationState()
        processQueue(null)
        return Promise.reject(new Error('No valid refresh token'))
      }

      // 여기서 호출되는 refreshAccessToken API 는 재차 해당 인터셉터를 호출하지 않습니다.
      const newAccessToken = await refreshAccessToken(session, context)
      if (newAccessToken === null) {
        await resetAuthenticationState()
        return Promise.reject(new Error('Failed to refresh access token'))
      }

      originalRequest.headers.Authorization = `${BEARER_TOKEN_PREFIX} ${newAccessToken}`
      processQueue(null, newAccessToken)
      return axiosInstance(originalRequest)
    } catch (refreshError) {
      await resetAuthenticationState()
      processQueue(refreshError, null)
      return Promise.reject(refreshError)
    } finally {
      tokenRefreshInProgress = false
    }
  } else {
    return new Promise((resolve, reject) => {
      failedQueue.push({ config: originalRequest, resolve, reject })
    })
  }
}
