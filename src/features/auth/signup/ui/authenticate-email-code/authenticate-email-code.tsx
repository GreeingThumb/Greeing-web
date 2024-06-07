import type { ChangeEvent } from 'react'
import { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { EmailAuthCode } from '@/entities/auth/signup/ui/email-auth-code'
import useEmailAuthenticate from '@/entities/auth/signup/query/useEmailAuthenticate'
import { TextMessage } from '@/shared/ui/text-message'

interface AuthenticateEmailCodeProps {
  isEmailSend: boolean
  isVerified: boolean
}

const AuthenticateEmailCode = ({ isEmailSend, isVerified }: AuthenticateEmailCodeProps) => {
  const { getValues, setValue } = useFormContext()
  const [verificationCode, setVerificationCode] = useState('')

  const handleSetAuthenticate = (isAuthenticated: boolean) => {
    setValue('isEmailAuthenticated', isAuthenticated)
  }

  const { errorMessage, verifyEmailCode } = useEmailAuthenticate()

  useEffect(() => {
    if (verificationCode.length === 6) {
      verifyEmailCode(
        {
          email: getValues('email'),
          verificationCode,
        },
        handleSetAuthenticate,
      )
    }
  }, [verificationCode])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setVerificationCode(event.target.value)
  }

  return (
    <>
      <EmailAuthCode
        isError={!!errorMessage}
        isVerified={isVerified}
        isEmailSend={isEmailSend}
        handleChange={handleChange}
        value={verificationCode}
      />
      {errorMessage && <TextMessage type="error">{errorMessage}</TextMessage>}
    </>
  )
}

export default AuthenticateEmailCode
