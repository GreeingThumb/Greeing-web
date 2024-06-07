import { style } from '@vanilla-extract/css'
import { COLOR } from '@/shared/styles/color'
import { TYPOGRAPHY } from '@/shared/styles/typography'

export const inputLabelStyle = style({
  ...TYPOGRAPHY.Bold16,
  color: '#2F3438',
  letterSpacing: '-0.3px',
  wordBreak: 'keep-all',
  paddingBottom: '20px',
})

export const inputLabelErrorStyle = style({
  color: COLOR.red500,
})
