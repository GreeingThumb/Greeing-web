import { style } from '@vanilla-extract/css'
import { COLOR } from '@/shared/styles/color'

export const inputStyle = style({
  borderRadius: '6px',
  border: `solid 1px ${COLOR.gray300}`,
  height: '44px',
  color: COLOR.gray900,
  padding: '12px',
  fontSize: '1rem',
  transition: 'border-color 0.2s, box-shadow 0.2s',
  width: '100%',

  selectors: {
    '&:focus': {
      outline: 'none',
      borderColor: COLOR.green500,
    },
  },
})
