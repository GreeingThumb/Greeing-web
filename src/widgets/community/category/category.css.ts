import { style } from '@vanilla-extract/css'
import { COLOR } from '@/shared/styles/color'
import { TYPOGRAPHY } from '@/shared/styles/typography'

export const categoryWrapper = style({
  display: 'flex',
  gap: '20px 25px',
  margin: '0 auto',
  flexWrap: 'wrap',
  width: '320px',
})

export const categoryLink = style({
  ...TYPOGRAPHY.Medium13,
  color: COLOR.gray700,
  textDecoration: 'none',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '5px',
  height: '80px',
  width: '60px',
})

export const categoryImg = style({
  backgroundColor: COLOR.green100,
  borderRadius: '12px',
  padding: '12px',
  ':hover': {
    opacity: '0.8',
    transition: 'all 0.2s ease-out',
  },
})

export const selectedCategory = style({
  backgroundColor: COLOR.green300,
  ':hover': {
    opacity: '1',
  },
})
