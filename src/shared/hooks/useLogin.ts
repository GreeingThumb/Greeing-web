import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const DEFAULT_CALLBACK_URL = '/'
const LOGIN_ERROR_MESSAGE = '로그인 중 오류가 발생했습니다.'

export const useLogin = () => {
  const router = useRouter()

  const handleLogin = async (email: string, password: string): Promise<string | undefined> => {
    try {
      const response = await signIn('email-login', {
        email,
        password,
        redirect: false,
        callbackUrl: DEFAULT_CALLBACK_URL,
      })

      if (response?.ok) {
        await router.replace(DEFAULT_CALLBACK_URL)
        return undefined
      }
      return response?.error ?? LOGIN_ERROR_MESSAGE
    } catch (error) {
      console.error(LOGIN_ERROR_MESSAGE, error)
      return LOGIN_ERROR_MESSAGE
    }
  }

  return { handleLogin }
}
