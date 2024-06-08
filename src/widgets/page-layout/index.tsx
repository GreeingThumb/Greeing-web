import type { ReactNode } from 'react'
import Header from '@/widgets/header'
import NavBar from '@/widgets/navigation/nav-bar'
import Footer from '../footer'

interface LayoutProps {
  children?: ReactNode
  config: LayoutConfig
}

const PageLayout = ({ children, config }: LayoutProps) => (
  <div>
    {config.isHeader && <Header config={config.header} />}
    <div>{children}</div>
    {config.isFooter && <Footer />}
    {config.isBottomNav && <NavBar />}
  </div>
)

export default PageLayout

export interface HeaderConfig {
  title?: string
  isBack?: boolean
  isLogo?: boolean
  rightIcon?: ReactNode
  rightIconClick?: () => void
}

interface LayoutConfig {
  isHeader?: boolean
  isFooter?: boolean
  isBottomNav?: boolean
  header: HeaderConfig
}

export const createLayoutConfig = (config: LayoutConfig): LayoutConfig => ({
  isHeader: config.isHeader ?? false,
  isFooter: config.isFooter ?? false,
  isBottomNav: config.isBottomNav ?? false,
  header: {
    isLogo: config.header.isLogo ?? false,
    isBack: config.header.isBack ?? false,
    title: config.header.title ?? '',
    rightIcon: config.header.rightIcon,
    rightIconClick: config.header.rightIconClick,
  },
})
