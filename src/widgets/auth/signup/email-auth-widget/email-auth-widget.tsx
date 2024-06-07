import { useFormContext } from 'react-hook-form'
import { useState } from 'react'
import { InputLabel } from '@/shared/ui/input-label'
import { Button } from '../../../../shared/ui/button'
import { PageAnimation } from '@/shared/ui/page-animation'
import { SignupPageTitle } from '@/entities/auth/signup/ui/signup-page-title'
import { emailAuthContentWrapper, emailAuthWrapper } from './email-auth-widget.css'
import type { SignUpFunnelActions } from '@/views/signup'
import { SendEmailVerification } from '@/features/auth/signup/ui/send-email-verification'
import { AuthenticateEmailCode } from '@/features/auth/signup/ui/authenticate-email-code'

const EmailAuthWidget = ({ onNextButtonClick }: SignUpFunnelActions) => {
  const [isEmailSend, setIsEmailSend] = useState(false)
  const {
    watch,
    formState: { errors },
  } = useFormContext()

  const handleSendEmail = () => {
    setIsEmailSend(true)
  }

  const isEmailAuthenticated = watch('isEmailAuthenticated')
  const isError = !!errors.email?.message

  return (
    <PageAnimation>
      <div className={emailAuthWrapper}>
        <SignupPageTitle>{`가입을 진행하기 위해\n이메일을 인증해 주세요!`}</SignupPageTitle>
        <div className={emailAuthContentWrapper}>
          <div>
            <InputLabel isError={isError}>이메일</InputLabel>
            <SendEmailVerification isEmailSend={isEmailSend} handleSendEmail={handleSendEmail} />
          </div>
          <AuthenticateEmailCode isEmailSend={isEmailSend} isVerified={isEmailAuthenticated} />
          <Button fullWidth disabled={!isEmailAuthenticated} onClick={onNextButtonClick}>
            다음
          </Button>
        </div>
      </div>
    </PageAnimation>
  )
}

export default EmailAuthWidget
