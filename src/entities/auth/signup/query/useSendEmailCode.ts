import { useState } from 'react'
import { useSendVerificationCode } from '@/entities/api/auth-apis/auth-apis'

const useSendEmailCode = () => {
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
          setTargetEmail(data.targetEmail)
          handleSendEmail()
        },
      },
    )
  }

  return { targetEmail, sendVerificationCode }
}

export default useSendEmailCode
