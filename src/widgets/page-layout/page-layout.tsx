import type { ReactNode } from 'react'
import Header from '@/widgets/header'
import Footer from '../footer'
import type { LayoutConfig } from '@/shared/utils/layout/createLayoutConfig'
import { BottomNavigation } from '@/widgets/navigation/bottomNavigation'

interface LayoutProps {
  children?: ReactNode
  config: LayoutConfig
}

const PageLayout = ({ children, config }: LayoutProps) => (
  <div>
    {config.isHeader && <Header config={config.header} />}
    <div>{children}</div>
    {config.isFooter && <Footer />}
    {config.isBottomNav && <BottomNavigation />}
  </div>
)

export default PageLayout
