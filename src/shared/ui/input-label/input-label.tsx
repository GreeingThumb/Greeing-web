import { InputHTMLAttributes, PropsWithoutRef, ReactNode } from 'react'
import { inputLabelErrorStyle, inputLabelStyle } from '@/shared/ui/input-label/input-label.css'

interface InputLabelProps extends PropsWithoutRef<InputHTMLAttributes<HTMLLabelElement>> {
  children: ReactNode | string
  isError?: boolean
}

const InputLabel = ({ isError, ...props }: InputLabelProps) => {
  const className = `${inputLabelStyle} ${isError ? inputLabelErrorStyle : ''}`
  return (
    <label className={className} {...props}>
      {props.children}
    </label>
  )
}

export default InputLabel
