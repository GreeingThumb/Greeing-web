'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import CircularProgress from '@/shared/ui/circle-progress/circle-progress'
import { layout } from '@/views/auth/account/kakao-callback/kakao-callback.css'
import { useLoginKakaoHandler } from '@/entities/auth/signup/query/useKakaoLoginHandler'

const KakaoCallbackView = () => {
  const searchParams = useSearchParams()
  const code = searchParams.get('code')
  const {
    handleLogin,
    handleRegistrationRequired,
    handleAuthenticated,
    registrationRequiredResponse,
    authenticatedResponse,
  } = useLoginKakaoHandler()

  useEffect(() => {
    if (code) handleLogin(code)
  }, [code])

  useEffect(() => {
    handleRegistrationRequired()
  }, [registrationRequiredResponse])

  useEffect(() => {
    handleAuthenticated()
  }, [authenticatedResponse])

  return (
    <div className={layout}>
      <CircularProgress />
    </div>
  )
}

export default KakaoCallbackView
