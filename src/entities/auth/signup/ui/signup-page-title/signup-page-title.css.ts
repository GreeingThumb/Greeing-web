import { style } from '@vanilla-extract/css'
import { TYPOGRAPHY } from '@/shared/styles/typography'

export const signupTitleStyle = style({
  whiteSpace: 'pre-wrap',
  marginBottom: '24px',
  ...TYPOGRAPHY.Bold24,
})
