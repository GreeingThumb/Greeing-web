import type { InputHTMLAttributes, PropsWithRef } from 'react'
import { forwardRef } from 'react'
import { errorInputStyle, inputStyle } from '@/shared/ui/input/input.css'

interface InputProps extends PropsWithRef<InputHTMLAttributes<HTMLInputElement>> {
  isError?: boolean
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ isError = false, ...props }, ref) => {
  const className = `${inputStyle} ${isError ? errorInputStyle : ''}`
  return <input ref={ref} className={className} {...props} />
})

export default Input
