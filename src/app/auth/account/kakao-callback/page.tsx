import { Suspense } from 'react'
import KakaoCallbackView from '@/views/auth/account/kakao-callback/kakao-callback-view'

const KakaoCallbackPage = () => {
  return (
    <Suspense>
      <KakaoCallbackView />
    </Suspense>
  )
}

export default KakaoCallbackPage
