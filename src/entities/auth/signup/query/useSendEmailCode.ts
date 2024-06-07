import { useState } from 'react'
import { isAxiosError } from 'axios'
import { useSendVerificationCode } from '@/entities/api/auth-apis/auth-apis'

const useSendEmailCode = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [targetEmail, setTargetEmail] = useState('')
  const sendVerificationCodeMutate = useSendVerificationCode()

  const sendVerificationCode = (email: string, handleSendEmail: () => void) => {
    sendVerificationCodeMutate.mutate(
      {
        data: {
          email,
        },
      },
      {
        onSuccess: ({ data }) => {
          setErrorMessage('')
          setTargetEmail(data.targetEmail)
          handleSendEmail()
        },
        onError: error => {
          if (isAxiosError(error)) {
            setErrorMessage(error?.response?.data.message)
          }
        },
      },
    )
  }

  return { errorMessage, targetEmail, sendVerificationCode }
}

export default useSendEmailCode
