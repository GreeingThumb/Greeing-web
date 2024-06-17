import { style } from '@vanilla-extract/css'
import { COLOR } from '@/shared/styles/color'

export const nav = style({
  display: 'flex',
  gridTemplateColumns: 'repeat(4, 1fr)',
  justifyContent: 'space-around',
  padding: '0 24px',
  width: '100%',
  position: 'fixed',
  bottom: 0,
  zIndex: 20,
  maxWidth: '500px',
  height: '70px',
  background: 'white',
  borderTop: `1px solid ${COLOR.gray300}`,
})
