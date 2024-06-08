import { Suspense } from 'react'
import CommunityPage from '@/views/community'

const Community = async () => {
  return (
    <Suspense>
      <CommunityPage />
    </Suspense>
  )
}

export default Community
