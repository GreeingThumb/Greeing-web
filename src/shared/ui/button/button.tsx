import { ButtonHTMLAttributes, PropsWithoutRef, ReactNode } from 'react'
import { buttonStyle } from '@/shared/ui/button/style.css'

interface ButtonProps extends PropsWithoutRef<ButtonHTMLAttributes<HTMLButtonElement>> {
  children: ReactNode
}

// TODO: variant: contained, outlined 받아서 처리할 수 있도록 수정하기
// TODO: disable 디자인 추가하기
const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button className={buttonStyle} {...props}>
      {children}
    </button>
  )
}

export default Button
