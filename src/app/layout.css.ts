import { style } from '@vanilla-extract/css'
import { theme } from '@/shared/styles/theme.css'

export const body = style({
  width: '100vw',
  maxWidth: '500px',
  height: '100%',
  minHeight: '100vh',
  margin: '0 auto',
  position: 'relative',
  backgroundColor: theme.color.white,
  color: theme.color.black,
})
