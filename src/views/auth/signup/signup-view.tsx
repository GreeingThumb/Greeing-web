'use client'

import { FormProvider, useForm } from 'react-hook-form'
import useFunnel from '@/shared/hooks/useFunnel'
import type { SignupRequestDto } from '@/entities/model'
import { SignupRequestDtoSignupType, SignupRequestDtoRole } from '@/entities/model'
import { EmailAuthWidget } from '@/widgets/auth/signup/email-auth-widget'
import { SignUpAgreeWidget } from '@/widgets/auth/signup/signup-agree-widget'
import { NicknamePasswordWidget } from '@/widgets/auth/signup/nickname-password-widget'
import useAuthStore from '@/entities/auth/signup/state/social-signup.state'

const STEPS = ['약관동의', '이메일인증', '닉네임설정', '가입축하']

const makeSignUpInitialValue = ({
  type,
  email = '',
  nickname = '',
}: {
  type: SignupRequestDtoSignupType
  email?: string
  nickname?: string
}): SignupRequestDto => ({
  email,
  nickname,
  password: '',
  marketingConsent: false,
  personalInfoConsent: false,
  serviceConsent: false,
  role: SignupRequestDtoRole.MEMBER,
  isEmailAuthenticated: type === SignupRequestDtoSignupType.SOCIAL,
  signupType: type,
})

export interface SignUpFunnelActions {
  onNextButtonClick: () => void
}

const SignUpView = () => {
  const socialUserInfo = useAuthStore(state => state.userInfo)
  const { Funnel, Step, setNextStep } = useFunnel({ initialStep: STEPS[0] })

  const methods = useForm<SignupRequestDto>({
    mode: 'onChange',
    defaultValues: makeSignUpInitialValue({
      type: socialUserInfo.signupType,
      email: socialUserInfo.email,
      nickname: socialUserInfo.nickname,
    }),
  })

  return (
    <FormProvider {...methods}>
      <div style={{ padding: '12px' }}>
        <Funnel>
          <Step name={STEPS[0]}>
            <SignUpAgreeWidget
              onNextButtonClick={() => {
                const nextStep = socialUserInfo.signupType === SignupRequestDtoSignupType.SOCIAL ? STEPS[2] : STEPS[1]
                setNextStep(nextStep)
              }}
            />
          </Step>
          <Step name={STEPS[1]}>
            <EmailAuthWidget onNextButtonClick={() => setNextStep(STEPS[2])} />
          </Step>
          <Step name={STEPS[2]}>
            <NicknamePasswordWidget />
          </Step>
        </Funnel>
      </div>
    </FormProvider>
  )
}

export default SignUpView
