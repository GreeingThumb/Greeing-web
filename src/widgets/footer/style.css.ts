import { style } from '@vanilla-extract/css'
import { COLOR } from '@/shared/styles/color'
import { sprinkles } from '@/shared/styles/sprinkle.css'

export const footer = style({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  position: 'relative',
  bottom: '0',
  left: '0',
  width: '100%',
  textAlign: 'center',
  padding: '24px 24px 80px 24px',
  boxSizing: 'border-box',
  background: COLOR.gray200,
  color: COLOR.gray600,
  gap: '10px',
})

export const linkWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
  borderBottom: `1px solid ${COLOR.gray300}`,
  justifyContent: 'space-between',
})

export const linkWrap = style({
  display: 'flex',
  gap: '10px',
  alignItems: 'flex-start',
  marginBottom: '10px',
})

export const link = style([
  sprinkles({ typography: 'Regular12' }),
  {
    color: 'inherit',
    textDecorationThickness: '1px',
    textUnderlineOffset: '3px',
    cursor: 'pointer',
    ':hover': {
      opacity: '0.7',
      transition: 'all 0.4s ease-out',
    },
  },
])

export const divider = style({
  width: '1px',
  height: '10px',
  background: COLOR.gray700,
  margin: 'auto 3px',
})
