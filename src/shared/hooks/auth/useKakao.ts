import { useEffect, useState, useCallback } from 'react'

const SDK_ID = 'kakao-sdk'
const SDK_SRC = 'https://t1.kakaocdn.net/kakao_js_sdk/2.4.0/kakao.min.js'
const KAKAO_CALLBACK_URL = process.env.NEXT_PUBLIC_KAKAO_CALLBACK_URL

declare global {
  interface Window {
    Kakao: KakaoSDK
  }
}

interface KakaoSDK {
  isInitialized: () => boolean
  init: (key: string) => void
  Auth: {
    logout: () => void
    authorize: (options: { redirectUri: string }) => void
  }
}

export type KakaoAuthResponse = {
  accessToken: string
  expiresIn: number
  refreshToken: string
  refreshTokenExpiresIn: number
  scope: string
  tokenType: 'bearer' | string
}

export type KakaoStatus = {
  status: 'connected' | 'not_connected'
  connectedAt: Date
  id: number
  kakaoAccount: KakaoAccount
}

type KakaoAccount = {
  email: string
  emailNeedsAgreement: boolean
  hasEmail: boolean
  isEmailValid: boolean
  isEmailVerified: boolean
  profile: UserProfile
  profileNeedsAgreement: boolean
}

type UserProfile = {
  nickname: string
  thumbnailImageUrl: string
  profileImageUrl: string
  isDefaultImage: boolean
}

type KakaoActions = {
  logout: () => void
  login: () => void
}

const loadSdk = () => {
  return new Promise<void>(resolve => {
    const existingScript = document.getElementById(SDK_ID)
    if (existingScript) {
      resolve()
      return
    }
    const js = document.createElement('script')
    js.id = SDK_ID
    js.src = SDK_SRC
    js.onload = () => resolve()
    document.body.append(js)
  })
}

const removeScriptElement = () => {
  const existingScript = document.getElementById(SDK_ID)
  if (existingScript) {
    document.body.removeChild(existingScript)
  }
}

const useKakao = () => {
  const [kakao, setKakao] = useState<KakaoSDK | null>(null)

  const initSdk = useCallback(async () => {
    if (typeof window === 'undefined') {
      return
    }
    await loadSdk()
    const { Kakao } = window
    if (Kakao && !Kakao.isInitialized()) {
      const appKey = process.env.NEXT_PUBLIC_KAKAO_APP_KEY
      if (appKey) {
        Kakao.init(appKey)
        setKakao(Kakao)
      } else {
        console.error('카카오 앱 키가 정의되지 않았습니다.')
      }
    }
  }, [])

  useEffect(() => {
    initSdk()
    return removeScriptElement
  }, [initSdk])

  const logout = () => {
    if (!kakao) return
    kakao.Auth.logout()
  }

  const login = () => {
    if (!kakao || !KAKAO_CALLBACK_URL) return
    kakao.Auth.authorize({
      redirectUri: KAKAO_CALLBACK_URL,
    })
  }

  const kakaoActions: KakaoActions = {
    logout,
    login,
  }

  return { kakaoActions }
}

export default useKakao
