import type { ReactNode } from 'react'
import { signupTitleStyle } from '@/entities/auth/signup/ui/signup-page-title/signup-page-title.css'

interface SignupPageTitleProps {
  children?: ReactNode
}

const SignupPageTitle = ({ children }: SignupPageTitleProps) => {
  return <h3 className={signupTitleStyle}>{children}</h3>
}

export default SignupPageTitle
