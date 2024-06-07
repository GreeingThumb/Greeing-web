import { style, styleVariants } from '@vanilla-extract/css'
import { COLOR } from '@/shared/styles/color'

export const baseStyle = style({
  marginTop: '4px',
  fontSize: '1.4rem',
})

export const messageStyles = styleVariants({
  error: {
    color: COLOR.red500,
  },
  info: {
    color: COLOR.blue500,
  },
  warning: {
    color: 'yellow',
  },
})
