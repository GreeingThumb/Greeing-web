/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AxiosInstance } from 'axios'
import axios from 'axios'
import { retryWithRefreshToken, setAuthorizationHeader } from '@/shared/api/axiosAuthInterceptors'

const DEFAULT_API_ENDPOINT = 'http://localhost:8080'
const DEFAULT_ACCEPT_LANGUAGE = 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7'

const DEFAULT_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json;charset=UTF-8',
  'Accept-Language': DEFAULT_ACCEPT_LANGUAGE,
}

const BASE_URL = `${process.env.NEXT_PUBLIC_API_ENDPOINT || DEFAULT_API_ENDPOINT}`

const createAxiosInstance = (): AxiosInstance => {
  return axios.create({
    baseURL: BASE_URL,
    headers: DEFAULT_HEADERS,
  })
}

export const axiosInstance: AxiosInstance = createAxiosInstance()
export const refreshTokenAxiosInstance: AxiosInstance = createAxiosInstance()
export const loginAxiosInstance: AxiosInstance = createAxiosInstance()

const handleRequestError = (error: any) => Promise.reject(error)
const handleResponse = (response: any) => response

axiosInstance.interceptors.request.use(setAuthorizationHeader, handleRequestError)
axiosInstance.interceptors.response.use(handleResponse, retryWithRefreshToken)
