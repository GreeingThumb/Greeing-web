import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useLoginKakao } from '@/entities/api/auth-apis/auth-apis'
import type { AuthenticatedResponse, RegistrationRequiredResponse } from '@/entities/model'
import { SignupRequestDtoSignupType } from '@/entities/model'
import { isRegistrationRequiredResponse } from '@/entities/auth/signup/utils/isRegistrationRequiredResponse'
import { isAuthenticatedResponse } from '@/entities/auth/signup/utils/isAuthenticatedResponse'
import useSocialAuthStore from '@/entities/auth/signup/state/social-signup.state'

export const useLoginKakaoHandler = () => {
  const router = useRouter()
  const setUserInfo = useSocialAuthStore(state => state.setUserInfo)

  const [registrationRequiredResponse, setRegistrationRequiredResponse] = useState<RegistrationRequiredResponse | null>(
    null,
  )
  const [authenticatedResponse, setAuthenticatedResponse] = useState<AuthenticatedResponse | null>(null)

  const kakaoLoginMutate = useLoginKakao()

  const handleLogin = (authorizationCode: string) => {
    kakaoLoginMutate.mutate(
      { data: { authorizationCode } },
      {
        onSuccess: ({ data }) => {
          if (!data) return
          if (isRegistrationRequiredResponse(data)) {
            setRegistrationRequiredResponse(data)
          } else if (isAuthenticatedResponse(data)) {
            setAuthenticatedResponse(data)
          }
        },
      },
    )
  }

  const handleSessionTokenUpdater = async () => {
    await signIn('session-token-updater', {
      user: JSON.stringify(authenticatedResponse?.authenticationResponse),
      callbackUrl: '/',
    })
    // TODO: 안드로이드 쿠키 토큰 상태 동기화 로직 필요
  }

  const handleRegistrationRequired = () => {
    if (!registrationRequiredResponse) return

    setUserInfo({
      email: registrationRequiredResponse.oauthUserDetails?.email || '',
      nickname: registrationRequiredResponse.oauthUserDetails?.nickname || '',
      signupType: SignupRequestDtoSignupType.SOCIAL,
      uniqueIdentificationValue: registrationRequiredResponse?.oauthUserDetails?.uniqueIdentificationValue || '',
      oauthProvider: registrationRequiredResponse.oauthUserDetails?.oauthProvider || 'KAKAO',
      temporaryToken: registrationRequiredResponse.temporaryToken || '',
    })

    router.replace('/auth/signup')
  }

  const handleAuthenticated = () => {
    if (!authenticatedResponse) return

    handleSessionTokenUpdater()
  }

  return {
    handleLogin,
    handleRegistrationRequired,
    handleAuthenticated,
    registrationRequiredResponse,
    authenticatedResponse,
  }
}
