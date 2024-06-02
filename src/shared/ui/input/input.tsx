import { forwardRef, InputHTMLAttributes, PropsWithRef } from 'react'
import { inputStyle } from '@/shared/ui/input/input.css'

interface InputProps extends PropsWithRef<InputHTMLAttributes<HTMLInputElement>> {}

// TODO: error input style 적용하기
const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input ref={ref} className={inputStyle} {...props} />
})

export default Input

Input.displayName = 'Input'
