import { createGlobalTheme } from '@vanilla-extract/css'
import { COLOR } from './color'
import { FONT } from './typography'
import { MEDIA_QUERY } from './media.css'

export const theme = createGlobalTheme(':root', {
  font: FONT,
  color: COLOR,
  mediaQuery: MEDIA_QUERY,
})
