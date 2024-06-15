import { style } from '@vanilla-extract/css'
import { COLOR } from '@/shared/styles/color'
import { TYPOGRAPHY } from '@/shared/styles/typography'

export const navBarLink = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'default',
  transition: 'color 0.3s ease',
  gap: '4px',
  flexDirection: 'column',
  ...TYPOGRAPHY.Medium11,
})

export const activeLink = style({
  color: COLOR.primary,
})

export const inactiveLink = style({
  color: COLOR.gray900,
})
