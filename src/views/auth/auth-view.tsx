'use client'

import Link from 'next/link'
import { PageAnimation } from '@/shared/ui/page-animation'
import * as S from '@/views/auth/auth.css'
import GreeingLogoEngIcon from '@/shared/assets/svg/greeing-logo-eng.svg'
import { KakaoLoginButton } from '@/features/auth/signup/ui/kakao-login-button'

const AuthView = () => {
  return (
    <PageAnimation>
      <div className={S.pageWrapper}>
        <h1 className={S.authTitle}>지금 가입시 식물 지식이 쑥쑥!</h1>
        <h3 className={S.subtitle}>그링을 통해 식집사 즐거움을 나누어볼까요?</h3>
        <div className={S.logoWrapper}>
          <GreeingLogoEngIcon width={300} height={180} />
        </div>
        <KakaoLoginButton />
        <div className={S.linWrapper}>
          <Link className={S.authLink} href="/auth/login">
            이메일로 로그인
          </Link>
          <div className={S.divider} />
          <Link className={S.authLink} href="/auth/signup">
            이메일로 회원가입
          </Link>
        </div>
        <p className={S.hardLoginText}>로그인에 어렴움을 겪고 계신가요?</p>
        <p className={S.nextSignUpText}>나중에 가입할래요</p>
      </div>
    </PageAnimation>
  )
}

export default AuthView
