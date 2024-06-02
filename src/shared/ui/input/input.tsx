import { forwardRef, InputHTMLAttributes, PropsWithRef } from 'react'
import { inputStyle } from '@/shared/ui/input/input.css'

interface InputProps extends PropsWithRef<InputHTMLAttributes<HTMLInputElement>> {}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input ref={ref} className={inputStyle} {...props} />
})

export default Input

Input.displayName = 'Input'
