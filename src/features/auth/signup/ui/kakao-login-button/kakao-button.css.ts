import { style } from '@vanilla-extract/css'
import { TYPOGRAPHY } from '@/shared/styles/typography'

export const kakaoLoginButton = style({
  ...TYPOGRAPHY.SemiBold16,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 8,
  padding: '12px 16px',
  textTransform: 'none',
  width: '100%',
  backgroundColor: '#FEE500',
  borderRadius: 12,
})
