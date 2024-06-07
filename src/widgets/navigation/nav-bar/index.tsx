'use client'
import * as style from './style.css'
import NavBarLink from '../nav-link'
import search from '@/shared/ui/icons/lottie/search.json'
import { Lottie } from '@/shared/ui/icons/lottieTheme'
import plant from '@/shared/ui/icons/lottie/plant.json'
import home from '@/shared/ui/icons/lottie/home.json'
import community from '@/shared/ui/icons/lottie/community.json'
import myPage from '@/shared/ui/icons/lottie/my-page.json'

export default function NavBar() {
  return (
    <nav className={style.nav}>
      <NavBarLink to="/home">
        <Lottie animationData={home} width={30} height={30} />
        <span>홈</span>
      </NavBarLink>
      <NavBarLink to="/plant">
        <Lottie animationData={plant} width={30} height={30} />
        <span>그링카드</span>
      </NavBarLink>
      <NavBarLink to="/community">
        <Lottie animationData={community} width={30} height={30} />
        <span>커뮤니티</span>
      </NavBarLink>
      <NavBarLink to="/search">
        <Lottie animationData={search} width={30} height={30} />
        <span>검색</span>
      </NavBarLink>
      <NavBarLink to="/mypage">
        <Lottie animationData={myPage} width={30} height={30} />
        <span>설정</span>
      </NavBarLink>
    </nav>
  )
}
