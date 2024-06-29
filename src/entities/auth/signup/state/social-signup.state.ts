import { create } from 'zustand'
import type { OAuthInfoResponse } from '@/entities/model'
import { SignupRequestDtoSignupType } from '@/entities/model'

interface SocialUserState extends OAuthInfoResponse {
  signupType: SignupRequestDtoSignupType
  temporaryToken: string
}

interface SocialSignUpState {
  userInfo: SocialUserState
}

interface SocialSignUpActions {
  setUserInfo: (userInfo: SocialUserState) => void
  resetUserInfo: () => void
}

const initialSocialUserState: SocialUserState = {
  email: '',
  nickname: '',
  oauthProvider: 'KAKAO',
  signupType: SignupRequestDtoSignupType.EMAIL,
  temporaryToken: '',
  uniqueIdentificationValue: '',
}

const useSocialAuthStore = create<SocialSignUpState & SocialSignUpActions>(set => ({
  userInfo: initialSocialUserState,
  setUserInfo: ({ email, nickname, oauthProvider, uniqueIdentificationValue, signupType, temporaryToken }) =>
    set({
      userInfo: { email, nickname, oauthProvider, uniqueIdentificationValue, signupType, temporaryToken },
    }),
  resetUserInfo: () =>
    set({
      userInfo: initialSocialUserState,
    }),
}))

export default useSocialAuthStore
