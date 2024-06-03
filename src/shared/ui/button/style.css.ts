import { style, styleVariants } from '@vanilla-extract/css'
import { COLOR } from '@/shared/styles/color'

export const buttonBaseStyle = style({
  height: '44px',
  borderRadius: '6px',
  color: 'white',
  fontSize: '1.1rem',
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
  backgroundColor: COLOR.gray800,
  color: COLOR.gray300,
  cursor: 'not-allowed',
  ':hover': {
    backgroundColor: COLOR.gray100,
  },
})
