import type { ReactNode } from 'react'
import { PageLayout } from '@/widgets/page-layout'
import { createLayoutConfig } from '@/shared/utils/layout/createLayoutConfig'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const config = createLayoutConfig({
    isBottomNav: true,
    isHeader: true,
    header: {
      isLogo: true,
    },
  })
  return <PageLayout config={config}>{children}</PageLayout>
}

export default Layout
