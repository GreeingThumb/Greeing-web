'use client'

import * as style from './style.css'
import NavBarLink from '../nav-link'
import search from '@/shared/ui/icons/lottie/search.json'
import { Lottie } from '@/shared/ui/icons/lottieTheme'
import plant from '@/shared/ui/icons/lottie/plant.json'
import home from '@/shared/ui/icons/lottie/home.json'
import community from '@/shared/ui/icons/lottie/community.json'
import myPage from '@/shared/ui/icons/lottie/my-page.json'

export const NavBar = () => {
  return (
    <nav className={style.nav}>
      <NavBarLink to="/home" title="홈">
        <Lottie animationData={home} width={30} height={30} />
      </NavBarLink>
      <NavBarLink to="/plant" title="그링카드">
        <Lottie animationData={plant} width={30} height={30} />
      </NavBarLink>
      <NavBarLink to="/community" title="커뮤니티">
        <Lottie animationData={community} width={30} height={30} />
      </NavBarLink>
      <NavBarLink to="/search" title="검색">
        <Lottie animationData={search} width={30} height={30} />
      </NavBarLink>
      <NavBarLink to="/mypage" title="설정">
        <Lottie animationData={myPage} width={30} height={30} />
      </NavBarLink>
    </nav>
  )
}

export default NavBar
