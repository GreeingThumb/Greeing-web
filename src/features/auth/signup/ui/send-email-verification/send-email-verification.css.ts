import { style } from '@vanilla-extract/css'
import { COLOR } from '@/shared/styles/color'
import { TYPOGRAPHY } from '@/shared/styles/typography'

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
  ...TYPOGRAPHY.Medium13,
  color: COLOR.gray800,
  marginTop: '8px',
})

export const targetEmailStyle = style({
  fontWeight: 600,
  color: COLOR.blue600,
})
