import AuthView from '@/views/auth'
import { PageLayout } from '@/widgets/page-layout'
import { createLayoutConfig } from '@/shared/utils/layout/createLayoutConfig'

const AuthPage = () => {
  const config = createLayoutConfig({
    isHeader: true,
    header: {
      isBack: true,
    },
  })
  return (
    <PageLayout config={config}>
      <AuthView />
    </PageLayout>
  )
}

export default AuthPage
