'use client'

import * as style from './style.css'
import NavBarLink from '../nav-link'
import search from '@/shared/ui/icons/lottie/search.json'
import { Lottie } from '@/shared/ui/icons/lottieTheme'
import plant from '@/shared/ui/icons/lottie/plant.json'
import home from '@/shared/ui/icons/lottie/home.json'
import community from '@/shared/ui/icons/lottie/community.json'
import myPage from '@/shared/ui/icons/lottie/my-page.json'

const NavBar = () => {
  return (
    <nav className={style.nav}>
      <NavBarLink to="#" title="홈">
        <Lottie animationData={home} width={30} height={30} i />
      </NavBarLink>
      <NavBarLink to="#" title="그링카드">
        <Lottie animationData={plant} width={30} height={30} />
      </NavBarLink>
      <NavBarLink to="#" title="커뮤니티">
        <Lottie animationData={community} width={40} height={40} />
      </NavBarLink>
      <NavBarLink to="#" title="검색">
        <Lottie animationData={search} width={45} height={40} />
      </NavBarLink>
      <NavBarLink to="#" title="설정">
        <Lottie animationData={myPage} width={25} height={25} />
      </NavBarLink>
    </nav>
  )
}

export default NavBar
