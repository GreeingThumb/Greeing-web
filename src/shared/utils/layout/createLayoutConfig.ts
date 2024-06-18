import type { ReactNode } from 'react'

export interface HeaderConfig {
  title?: string
  isBack?: boolean
  isLogo?: boolean
  rightIcon?: ReactNode
  rightIconClick?: () => void
}

export interface LayoutConfig {
  isHeader?: boolean
  isFooter?: boolean
  isBottomNav?: boolean
  header?: HeaderConfig
}

export const createLayoutConfig = (config: LayoutConfig): LayoutConfig => ({
  isHeader: config.isHeader ?? false,
  isFooter: config.isFooter ?? false,
  isBottomNav: config.isBottomNav ?? false,
  header: {
    isLogo: config.header?.isLogo ?? false,
    isBack: config.header?.isBack ?? false,
    title: config.header?.title ?? '',
    rightIcon: config.header?.rightIcon,
    rightIconClick: config.header?.rightIconClick,
  },
})
