import { style } from '@vanilla-extract/css'
import { COLOR } from '@/shared/styles/color'

export const inputLabelStyle = style({
  fontSize: '1.1rem',
  lineHeight: '20px',
  fontWeight: 700,
  color: '#2F3438',
  letterSpacing: '-0.3px',
  wordBreak: 'keep-all',
  paddingBottom: '20px',
})

export const inputLabelErrorStyle = style({
  color: COLOR.red500,
})
