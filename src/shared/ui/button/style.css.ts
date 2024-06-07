import { style, styleVariants } from '@vanilla-extract/css'
import { COLOR } from '@/shared/styles/color'
import { TYPOGRAPHY } from '@/shared/styles/typography'

export const buttonBaseStyle = style({
  ...TYPOGRAPHY.Medium16,
  height: '44px',
  borderRadius: '6px',
  color: 'white',
  width: 'fit-content',
  whiteSpace: 'nowrap',
  padding: '0 12px',
  cursor: 'pointer',
  outline: 'none',
  border: 'none',
  transition: 'background-color 0.3s, border-color 0.3s, color 0.3s',
})

export const buttonVariants = styleVariants({
  contained: {
    backgroundColor: COLOR.green500,
  },
  outlined: {
    backgroundColor: 'transparent',
    color: COLOR.green500,
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: COLOR.green500,
  },
})

export const buttonDisabled = style({
  backgroundColor: COLOR.gray300,
  color: 'white',
  cursor: 'not-allowed',
})

export const buttonFullWidth = style({
  width: '100%',
})
