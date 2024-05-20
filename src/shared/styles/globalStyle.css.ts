import { globalFontFace, globalStyle } from '@vanilla-extract/css'
import { theme } from './theme.css'

globalStyle(
  'html, body, div, span, h1, h2, h3, h4, h5, h6, p, pre, a, img, strong, article, footer, header, main, nav, section',
  {
    margin: 0,
    padding: 0,
    border: 0,
    verticalAlign: 'baseline',
    fontFamily: theme.font.pretendard,
  },
)

globalStyle('*, *:after, *:before', {
  boxSizing: 'border-box',
})

globalStyle('body', {
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
})

globalStyle('h1, h2, h3, h4, h5, h6, p', {
  wordBreak: 'keep-all',
  whiteSpace: 'pre-wrap',
})

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
})

globalStyle('button, select, input, textarea', {
  border: 0,
  outline: 0,
  backgroundColor: 'transparent',
  fontFamily: theme.font.pretendard,
})

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
})

globalStyle('a, button', {
  cursor: 'pointer',
})

globalStyle('ol, ul', {
  margin: 0,
  padding: 0,
  listStyle: 'none',
})

globalFontFace(theme.font.pretendard, {
  fontWeight: 900,
  src: `url('/fonts/Pretendard-Black.woff2') format('woff2')`,
})

globalFontFace(theme.font.pretendard, {
  fontWeight: 800,
  src: `url('/fonts/Pretendard-ExtraBold.woff2') format('woff2')`,
})

globalFontFace(theme.font.pretendard, {
  fontWeight: 700,
  src: `url('/fonts/Pretendard-Bold.woff2') format('woff2')`,
})

globalFontFace(theme.font.pretendard, {
  fontWeight: 600,
  src: `url('/fonts/Pretendard-SemiBold.woff2') format('woff2')`,
})

globalFontFace(theme.font.pretendard, {
  fontWeight: 500,
  src: `url('/fonts/Pretendard-Medium.woff2') format('woff2')`,
})

globalFontFace(theme.font.pretendard, {
  fontWeight: 400,
  src: `url('/fonts/Pretendard-Regular.woff2') format('woff2')`,
})

globalFontFace(theme.font.pretendard, {
  fontWeight: 300,
  src: `url('/fonts/Pretendard-Light.woff2') format('woff2')`,
})

globalFontFace(theme.font.pretendard, {
  fontWeight: 200,
  src: `url('/fonts/Pretendard-ExtraLight.woff2') format('woff2')`,
})

globalFontFace(theme.font.pretendard, {
  fontWeight: 100,
  src: `url('/fonts/Pretendard-Thin.woff2') format('woff2')`,
})
