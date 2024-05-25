import { style } from '@vanilla-extract/css'

export const header = style({
  display: 'flex',
  position: 'sticky',
  top: 0,
  height: 60,
  width: '100%',
  backgroundColor: 'white',
  padding: '20px 20px',
  zIndex: 99,
})

export const headerWrap = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  position: 'relative',
  alignItems: 'center',
})

export const links = style({
  display: 'flex',
  alignItems: 'center',
  gap: 20,
})

export const imgIcon = style({
  cursor: 'pointer',
})
