import type { ReactNode } from 'react'
import PageLayout, { createLayoutConfig } from '@/widgets/page-layout'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const config = createLayoutConfig({
    isHeader: true,
    header: {
      isBack: true,
      title: '회원가입',
    },
    isBottomNav: true,
  })
  return <PageLayout config={config}>{children}</PageLayout>
}

export default Layout
