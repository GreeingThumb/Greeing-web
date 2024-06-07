import { useState } from 'react'

import { isAxiosError } from 'axios'
import type { EmailVerificationRequestDto } from '@/entities/model'
import { useVerifyEmailCode } from '@/entities/api/auth-apis/auth-apis'

const useEmailAuthenticate = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [isVerified, setIsVerified] = useState(false)
  const emailVerifyMutate = useVerifyEmailCode()

  const verifyEmailCode = (
    verificationRequestDto: EmailVerificationRequestDto,
    callback: (isVerified: boolean) => void,
  ) => {
    emailVerifyMutate.mutate(
      {
        data: verificationRequestDto,
      },
      {
        onSuccess: ({ data }) => {
          setIsVerified(data.isVerified)
          setErrorMessage('')
          callback(data.isVerified)
        },
        onError: error => {
          if (isAxiosError(error)) {
            setErrorMessage(error?.response?.data.message)
          }
        },
      },
    )
  }

  return { errorMessage, isVerified, verifyEmailCode }
}

export default useEmailAuthenticate
