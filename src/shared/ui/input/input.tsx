import { forwardRef, InputHTMLAttributes, PropsWithoutRef } from 'react'
import { inputStyle } from '@/shared/ui/input/input.css'

interface InputProps extends PropsWithoutRef<InputHTMLAttributes<HTMLInputElement>> {}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input ref={ref} className={inputStyle} {...props} />
})

export default Input

Input.displayName = 'Input'
