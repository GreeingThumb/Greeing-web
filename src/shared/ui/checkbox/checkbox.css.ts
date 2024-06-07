import { style, styleVariants } from '@vanilla-extract/css'
import { COLOR } from '@/shared/styles/color'
import { TYPOGRAPHY } from '@/shared/styles/typography'

export const checkboxWrapperStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
})

export const baseCheckboxStyle = style({
  appearance: 'none',
  borderRadius: '4px',
})

// medium, large 사이즈 정의 필요
export const sizeVariants = styleVariants({
  small: {
    width: '18px',
    height: '18px',
  },
  medium: {
    width: '22px',
    height: '22px',
  },
  large: {
    width: '26px',
    height: '26px',
  },
})

export const uncheckedStyle = style({
  border: '2px solid gainsboro',
})

export const checkedStyle = style({
  border: 'none',
  backgroundColor: COLOR.green500,
  backgroundImage:
    "url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e\")",
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
})

export const labelVariants = styleVariants({
  small: {
    ...TYPOGRAPHY.Regular16,
  },
  medium: {
    ...TYPOGRAPHY.Regular17,
  },
  large: {
    ...TYPOGRAPHY.Regular18,
  },
})

export const labelStyle = style({
  color: COLOR.gray800,
})
