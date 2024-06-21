import { Suspense } from 'react'
import SignUpPage from '../../../views/auth/signup'
import { PageLayout } from '@/widgets/page-layout'
import { createLayoutConfig } from '@/shared/utils/layout/createLayoutConfig'

const SignUp = async () => {
  const config = createLayoutConfig({
    isHeader: true,
    header: {
      isBack: true,
    },
  })
  return (
    <PageLayout config={config}>
      <Suspense>
        <SignUpPage />
      </Suspense>
    </PageLayout>
  )
}

export default SignUp
