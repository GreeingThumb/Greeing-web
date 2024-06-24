import { style } from '@vanilla-extract/css'
import { TYPOGRAPHY } from '@/shared/styles/typography'
import { COLOR } from '@/shared/styles/color'

export const pageWrapper = style({
  padding: '12px',
})

export const authTitle = style({
  ...TYPOGRAPHY.Bold24,
  textAlign: 'center',
})

export const subtitle = style({
  ...TYPOGRAPHY.Regular15,
  textAlign: 'center',
  marginTop: '8px',
})

export const logoWrapper = style({
  display: 'flex',
  justifyContent: 'center',
})

export const divider = style({
  height: '12px',
  width: '1px',
  backgroundColor: COLOR.gray700,
})

export const linWrapper = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'center',
  gap: '12px',
  marginTop: '24px',
})

export const authLink = style({
  ...TYPOGRAPHY.Medium16,
  color: COLOR.gray700,
  textDecoration: 'underline',
})

export const hardLoginText = style({
  ...TYPOGRAPHY.Medium14,
  color: COLOR.gray600,
  textAlign: 'center',
  marginTop: '36px',
})

export const nextSignUpText = style({
  ...TYPOGRAPHY.Medium14,
  color: COLOR.gray600,
  textAlign: 'center',
  marginTop: '48px',
})
