import { style } from '@vanilla-extract/css'
import { TYPOGRAPHY } from '@/shared/styles/typography'

export const header = style({
  display: 'flex',
  position: 'sticky',
  top: 0,
  height: 50,
  width: '100%',
  backgroundColor: 'white',
  padding: '12px',
  zIndex: 99,
})

export const headerWrap = style({
  width: '100%',
  height: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  alignItems: 'center',
})

export const leftSection = style({
  display: 'flex',
  justifyContent: 'flex-start',
})

export const titleStyle = style({
  ...TYPOGRAPHY.Bold18,
})

export const centerSection = style({
  display: 'flex',
  justifyContent: 'center',
})

export const rightSection = style({
  display: 'flex',
  justifyContent: 'flex-end',
})
