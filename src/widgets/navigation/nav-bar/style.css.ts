import { COLOR } from '@/shared/styles/color'
import { style } from '@vanilla-extract/css'

export const nav = style({
  display: 'flex',
  gridTemplateColumns: 'repeat(4, 1fr)',
  justifyContent: 'space-between',
  padding: '0 50px',
  width: '100%',
  position: 'fixed',
  bottom: 0,
  backgroundColor: 'red',
  zIndex: 20,
  maxWidth: '500px',
  height: '70px',
  background: 'white',
  borderTop: `1px solid ${COLOR.gray300}`,
})
