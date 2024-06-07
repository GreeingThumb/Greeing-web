import { useState } from 'react'
import { useVerifyEmailCode } from '@/entities/api/auth-controller/auth-controller'
import type { EmailVerificationRequestDto } from '@/entities/model'

const useEmailAuthenticate = () => {
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
          callback(data.isVerified)
        },
      },
    )
  }

  return { isVerified, verifyEmailCode }
}

export default useEmailAuthenticate
