import type { ReactNode } from 'react'
import { createLayoutConfig } from '@/shared/utils/layout/createLayoutConfig'
import { PageLayout } from '@/widgets/page-layout'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const config = createLayoutConfig({
    isBottomNav: true,
  })
  return <PageLayout config={config}>{children}</PageLayout>
}

export default Layout
