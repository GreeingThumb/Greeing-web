import { style } from '@vanilla-extract/css'
import { COLOR } from '@/shared/styles/color'

export const inputButtonWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  width: '100%',
})

export const sendEmailInfoStyle = style({
  display: 'flex',
  gap: '4px',
  alignItems: 'center',
  fontSize: '1.3rem',
  color: COLOR.gray800,
  marginTop: '8px',
})

export const targetEmailStyle = style({
  fontWeight: 600,
  color: COLOR.blue600,
})
