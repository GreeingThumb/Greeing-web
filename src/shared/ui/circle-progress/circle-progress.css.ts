import { style, keyframes } from '@vanilla-extract/css'
import { COLOR } from '@/shared/styles/color'

const spin = keyframes({
  to: {
    transform: 'rotate(360deg)',
  },
})

export const circularProgress = style({
  display: 'inline-block',
  width: '60px',
  height: '60px',
  border: '6px solid rgba(0, 0, 0, 0.1)',
  borderRadius: '50%',
  borderTopColor: COLOR.green500,
  animation: `${spin} 1s ease-in-out infinite`,
})
