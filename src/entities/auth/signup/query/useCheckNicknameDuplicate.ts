import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { useCheckNickname } from '@/entities/api/auth-apis/auth-apis'

const useCheckNicknameDuplicate = (nickname: string, isValid: boolean) => {
  const { setError } = useFormContext()
  const { data } = useCheckNickname(
    {
      nickname,
    },
    {
      query: {
        enabled: nickname.length >= 2 && isValid,
      },
    },
  )

  const isUsedNickname = data?.data?.isUsedNickname ?? false

  useEffect(() => {
    if (isUsedNickname) {
      setError('nickname', {
        message: '이미 사용중인 닉네임 입니다.',
      })
    }
  }, [isUsedNickname])

  return { isUsedNickname }
}

export default useCheckNicknameDuplicate
