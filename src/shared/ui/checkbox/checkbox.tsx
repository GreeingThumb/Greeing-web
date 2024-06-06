import { InputHTMLAttributes, PropsWithRef } from 'react'
import classNames from 'classnames'
import {
  baseCheckboxStyle,
  checkboxWrapperStyle,
  checkedStyle,
  labelStyle,
  labelVariants,
  sizeVariants,
  uncheckedStyle,
} from '@/shared/ui/checkbox/checkbox.css'

type CheckboxVariants = 'small' | 'medium' | 'large'

interface CheckboxProps extends PropsWithRef<InputHTMLAttributes<HTMLInputElement>> {
  label?: string
  sizeVariant: CheckboxVariants
}

const Checkbox = ({ label, sizeVariant = 'small', checked = false, ...props }: CheckboxProps) => {
  const checkboxClass = classNames(
    baseCheckboxStyle,
    sizeVariants[sizeVariant],
    {
      [checkedStyle]: checked,
      [uncheckedStyle]: !checked,
    },
    {},
  )

  return (
    <label className={checkboxWrapperStyle}>
      <input className={checkboxClass} type="checkbox" checked={checked} {...props} />
      <span className={classNames(labelStyle, labelVariants[sizeVariant])}>{label}</span>
    </label>
  )
}

export default Checkbox
