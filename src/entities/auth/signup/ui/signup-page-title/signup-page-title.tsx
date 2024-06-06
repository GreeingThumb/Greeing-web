import { signupTitleStyle } from '@/entities/auth/signup/ui/signup-page-title/signup-page-title.css'
import { ReactNode } from 'react'

interface SignupPageTitleProps {
  children?: ReactNode
}

const SignupPageTitle = ({ children }: SignupPageTitleProps) => {
  return <h3 className={signupTitleStyle}>{children}</h3>
}

export default SignupPageTitle
