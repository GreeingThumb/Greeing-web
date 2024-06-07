import { style } from '@vanilla-extract/css'
import { COLOR } from '@/shared/styles/color'

export const navBarLink = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'default',
  transition: 'color 0.3s ease',
  gap: '4px',
  flexDirection: 'column',
  ':hover': {
    color: COLOR.primary,
  },
})

export const activeLink = style({
  color: COLOR.primary,
})

export const inactiveLink = style({
  color: COLOR.gray900,
})
