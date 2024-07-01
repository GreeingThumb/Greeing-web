import { PageLayout } from '@/widgets/page-layout'
import { createLayoutConfig } from '@/shared/utils/layout/createLayoutConfig'
import { HomeView } from '@/views/home'

const HomePage = () => {
  const config = createLayoutConfig({
    isBottomNav: true,
    isHeader: true,
    header: {
      isLogo: true,
    },
  })
  return (
    <PageLayout config={config}>
      <HomeView />
    </PageLayout>
  )
}

export default HomePage
