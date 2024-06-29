import { useRouter } from 'next/navigation'
import { useCreateUser } from '@/entities/api/auth-apis/auth-apis'
import type { SignupRequestDto } from '@/entities/model'

const useSignUp = () => {
  const { push } = useRouter()
  const createUserMutate = useCreateUser()

  const handleSuccess = () => {
    push('/auth/welcome')
  }

  const signUp = (requestDto: SignupRequestDto) => {
    createUserMutate.mutate(
      {
        data: requestDto,
      },
      {
        onSuccess: handleSuccess,
      },
    )
  }

  return { signUp, isLoading: createUserMutate.isPending }
}

export default useSignUp
