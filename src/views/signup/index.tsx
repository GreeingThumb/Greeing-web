'use client'

import useFunnel from '@/shared/hooks/useFunnel'
import { FormProvider, useForm } from 'react-hook-form'
import { SignupRequestDto } from '@/entities/model'
import { EmailAuthWidget } from '@/widgets/auth/signup/email-auth-widget'
import { SignUpAgreeWidget } from '@/widgets/auth/signup/signup-agree-widget'

const STEPS = ['약관동의', '이메일인증', '닉네임설정', '가입축하']

const initialValues: SignupRequestDto = {
  nickname: '',
  isEmailAuthenticated: false,
  marketingConsent: false,
  personalInfoConsent: false,
  serviceConsent: false,
  password: '',
  email: '',
  role: 'MEMBER',
}

export interface SignUpFunnelActions {
  onNextButtonClick: () => void
}

const SignUpPage = () => {
  const { Funnel, Step, setNextStep } = useFunnel({ initialStep: STEPS[0] })

  const methods = useForm<SignupRequestDto>({
    mode: 'onChange',
    defaultValues: initialValues,
  })

  return (
    <FormProvider {...methods}>
      <div style={{ padding: '12px' }}>
        <Funnel>
          <Step name={STEPS[0]}>
            <SignUpAgreeWidget onNextButtonClick={() => setNextStep(STEPS[1])} />
          </Step>
          <Step name={STEPS[1]}>
            <EmailAuthWidget />
          </Step>
          <Step name={STEPS[2]}>
            <div>닉네임과 비밀번호 설정</div>
            <button onClick={() => setNextStep(STEPS[3])}>3</button>
          </Step>
          <Step name={STEPS[3]}>
            <div>가입축하</div>
          </Step>
        </Funnel>
      </div>
    </FormProvider>
  )
}

export default SignUpPage
