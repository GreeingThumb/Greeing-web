import { Controller, useFormContext } from 'react-hook-form'
import useSendEmailCode from '@/entities/auth/signup/query/useSendEmailCode'
import { Button } from '@/shared/ui/button'
import {
  inputButtonWrapper,
  sendEmailInfoStyle,
} from '@/features/auth/signup/ui/send-email-verification/send-email-verification.css'
import { TextMessage } from '@/shared/ui/text-message'
import { validateEmail } from '@/shared/utils/validateRules/validateEmail'
import { Input } from '@/shared/ui/input'

interface SendEmailVerificationProps {
  isEmailSend: boolean
  handleSendEmail: () => void
}

const SendEmailVerification = ({ isEmailSend, handleSendEmail }: SendEmailVerificationProps) => {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext()
  const email = watch('email')

  const { errorMessage, targetEmail, sendVerificationCode } = useSendEmailCode()

  const handleSendButtonClick = () => {
    sendVerificationCode(email, handleSendEmail)
  }

  const isError = !!errors.email?.message

  return (
    <>
      <div className={inputButtonWrapper}>
        <Controller
          control={control}
          name="email"
          rules={{
            validate: validateEmail,
          }}
          render={({ field }) => <Input placeholder="이메일" isError={isError} {...field} />}
        />
        <Button variant="contained" disabled={isError || !email} onClick={handleSendButtonClick}>
          {isEmailSend ? '재전송' : '인증받기'}
        </Button>
      </div>
      {errors?.email?.message && <TextMessage type="error">{errors?.email?.message.toString()}</TextMessage>}
      {errorMessage && <TextMessage type="error">{errorMessage}</TextMessage>}
      {isEmailSend && targetEmail && (
        <div className={sendEmailInfoStyle}>
          <TextMessage type="info">{targetEmail}</TextMessage> <span>이메일을 전송했어요</span>
        </div>
      )}
    </>
  )
}

export default SendEmailVerification
