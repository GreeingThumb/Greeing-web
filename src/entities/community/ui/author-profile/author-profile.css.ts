import { style } from '@vanilla-extract/css'
import { TYPOGRAPHY } from '@/shared/styles/typography'
import { COLOR } from '@/shared/styles/color'

export const profileWrap = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '8px',
})

export const imgWrap = style({
  width: '34px',
  height: '34px',
  borderRadius: '50%',
  overflow: 'hidden',
})

export const profileImg = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})

export const infoWrap = style({
  display: 'flex',
  flexDirection: 'column',
})

export const nameWrap = style({
  display: 'flex',
  gap: '7px',
})

export const name = style({
  ...TYPOGRAPHY.Bold13,
  color: COLOR.gray900,
  lineHeight: '18px',
})

export const sub = style({
  ...TYPOGRAPHY.Regular13,
  color: COLOR.gray500,
  lineHeight: '18px',
})
