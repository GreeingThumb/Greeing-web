import { style } from '@vanilla-extract/css'
import { COLOR } from '@/shared/styles/color'

export const buttonStyle = style({
  height: '44px',
  backgroundColor: COLOR.green500,
  borderRadius: '6px',
  color: 'white',
  fontSize: '1.1rem',
  width: 'fit-content',
  whiteSpace: 'nowrap',
  padding: '0 12px',
})
