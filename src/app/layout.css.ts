import { style } from '@vanilla-extract/css'
import { theme } from '@/shared/styles/theme.css'

export const body = style({
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  margin: 'auto',
  position: 'relative',
  backgroundColor: theme.color.white,
  color: theme.color.black,
})
