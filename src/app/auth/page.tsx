import { PageLayout } from '@/widgets/page-layout'
import { createLayoutConfig } from '@/shared/utils/layout/createLayoutConfig'
import { AuthView } from '@/views/auth'

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
