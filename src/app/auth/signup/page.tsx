import { Suspense } from 'react'
import SignUpPage from '@/views/signup'

const SignUp = async () => {
  return (
    <Suspense>
      <SignUpPage />
    </Suspense>
  )
}

export default SignUp
