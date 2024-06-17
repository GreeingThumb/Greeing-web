'use client'

import { useSession } from 'next-auth/react'
import * as style from './style.css'
import NavBarLink from '../nav-link'
// import search from '@/shared/ui/icons/lottie/search.json'
import plant from '@/shared/ui/icons/lottie/plant.json'
import home from '@/shared/ui/icons/lottie/home.json'
import community from '@/shared/ui/icons/lottie/community.json'
import myPage from '@/shared/ui/icons/lottie/my-page.json'

const BottomNavigation = () => {
  const { data: session } = useSession()
  return (
    <nav className={style.nav}>
      <NavBarLink href="/home" title="홈" animationData={home} width={30} height={30} />
      <NavBarLink href="#" title="그링카드" animationData={plant} width={30} height={30} />
      <NavBarLink href="#" title="커뮤니티" animationData={community} width={40} height={40} />
      {/* <NavBarLink href="#" title="검색" animationData={search} width={45} height={40} /> */}
      <NavBarLink
        href={session?.user ? 'my' : 'auth'}
        title={session?.user ? '마이페이지' : '로그인'}
        animationData={myPage}
        width={25}
        height={25}
      />
    </nav>
  )
}

export default BottomNavigation
