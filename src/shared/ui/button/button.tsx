import type { ButtonHTMLAttributes, PropsWithoutRef, ReactNode } from 'react'
import classNames from 'classnames'
import { buttonBaseStyle, buttonVariants, buttonDisabled } from '@/shared/ui/button/style.css'

type ButtonVariants = 'contained' | 'outlined'

interface ButtonProps extends PropsWithoutRef<ButtonHTMLAttributes<HTMLButtonElement>> {
  children: ReactNode
  variant?: ButtonVariants
  type?: 'button' | 'submit' | 'reset'
}

const Button = ({ children, variant = 'contained', disabled, type = 'button', ...props }: ButtonProps) => {
  const buttonClassNames = classNames(buttonBaseStyle, buttonVariants[variant], { [buttonDisabled]: disabled })

  return (
    <button className={buttonClassNames} type={type || 'button'} disabled={disabled} {...props}>
      {children}
    </button>
  )
}

export default Button
