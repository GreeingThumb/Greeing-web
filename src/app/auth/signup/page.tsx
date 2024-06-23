import { Suspense } from 'react'
import { PageLayout } from '@/widgets/page-layout'
import { createLayoutConfig } from '@/shared/utils/layout/createLayoutConfig'
import { SignUpView } from '@/views/auth/signup'

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
        <SignUpView />
      </Suspense>
    </PageLayout>
  )
}

export default SignUp
