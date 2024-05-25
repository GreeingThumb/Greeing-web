import Image from 'next/image'
import * as style from './style.css'

export default function Footer() {
  return (
    <footer className={style.footer}>
      <Image src="/assets/icon/logo-gray.svg" width={42} height={28} alt="그링" />
      <div className={style.linkWrapper}>
        <div className={style.linkWrap}>
          <span className={style.link}>이용약관</span>
          <div className={style.divider} />
          <span className={style.link}>개인정보처리방침</span>
          <div className={style.divider} />
          <span className={style.link}>그링소개</span>
        </div>
        <Image src="/assets/icon/arrow-down.svg" width={12} height={12} alt="그링" />
      </div>
      <div className={style.linkWrap}>
        <Image src="/assets/icon/email.svg" width={30} height={28} alt="그링" />
        <Image src="/assets/icon/kakao.svg" width={30} height={28} alt="그링" />
      </div>
    </footer>
  )
}
