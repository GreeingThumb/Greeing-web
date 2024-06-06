import type { InputHTMLAttributes, PropsWithoutRef } from 'react'
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

type CheckboxAttributes = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>

interface CheckboxProps extends PropsWithoutRef<CheckboxAttributes> {
  label?: string
  size: CheckboxVariants
  htmlFor?: string
}

const Checkbox = ({ label, size = 'small', checked = false, htmlFor, ...props }: CheckboxProps) => {
  const checkboxClass = classNames(
    baseCheckboxStyle,
    sizeVariants[size],
    {
      [checkedStyle]: checked,
      [uncheckedStyle]: !checked,
    },
    {},
  )

  return (
    <label className={checkboxWrapperStyle} htmlFor={htmlFor}>
      <input className={checkboxClass} type="checkbox" checked={checked} {...props} />
      <span className={classNames(labelStyle, labelVariants[size])}>{label}</span>
    </label>
  )
}

export default Checkbox
