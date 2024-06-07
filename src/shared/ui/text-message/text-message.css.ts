import { style, styleVariants } from '@vanilla-extract/css'
import { COLOR } from '@/shared/styles/color'
import { TYPOGRAPHY } from '@/shared/styles/typography'

export const baseStyle = style({
  ...TYPOGRAPHY.Medium14,
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
