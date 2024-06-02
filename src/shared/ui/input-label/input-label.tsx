import { InputHTMLAttributes, PropsWithoutRef } from 'react'
import { inputLabelStyle } from '@/shared/ui/input-label/input-label.css'

interface InputLabelProps extends PropsWithoutRef<InputHTMLAttributes<HTMLLabelElement>> {
  label: string
}

const InputLabel = (props: InputLabelProps) => {
  return (
    <label className={inputLabelStyle} {...props}>
      {props.label}
    </label>
  )
}

export default InputLabel
