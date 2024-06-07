import type { InputHTMLAttributes, PropsWithoutRef, ReactNode } from 'react'
import { inputLabelStyle, inputLabelErrorStyle } from '@/shared/ui/input-label/input-label.css'

interface InputLabelProps extends PropsWithoutRef<InputHTMLAttributes<HTMLLabelElement>> {
  children: ReactNode | string
  isError?: boolean
  htmlFor?: string
}

const InputLabel = ({ isError, ...props }: InputLabelProps) => {
  const className = `${inputLabelStyle} ${isError ? inputLabelErrorStyle : ''}`
  return (
    <label className={className} {...props} htmlFor={props.htmlFor}>
      {props.children}
    </label>
  )
}

export default InputLabel
