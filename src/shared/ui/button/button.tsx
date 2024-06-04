import { ButtonHTMLAttributes, PropsWithoutRef, ReactNode } from 'react'
import { buttonBaseStyle, buttonVariants, buttonDisabled } from '@/shared/ui/button/style.css'
import classNames from 'classnames'

type ButtonVariants = 'contained' | 'outlined'

interface ButtonProps extends PropsWithoutRef<ButtonHTMLAttributes<HTMLButtonElement>> {
  children: ReactNode
  variant?: ButtonVariants
}

const Button = ({ children, variant = 'contained', disabled, ...props }: ButtonProps) => {
  const buttonClassNames = classNames(buttonBaseStyle, buttonVariants[variant], { [buttonDisabled]: disabled })

  return (
    <button className={buttonClassNames} disabled={disabled} {...props}>
      {children}
    </button>
  )
}

export default Button
