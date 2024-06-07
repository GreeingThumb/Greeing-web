import { sizes } from './style.css'
import type { IconSize } from './types'

export const iconSizeToClassName: Record<IconSize, string> = {
  xs: sizes.xs,
  xxs: sizes.xxs,
  sm: sizes.sm,
  md: sizes.md,
  lg: sizes.lg,
}
