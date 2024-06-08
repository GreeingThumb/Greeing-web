'use client'

import { useRouter } from 'next/navigation'
import * as styles from './style.css'
import type { HeaderConfig } from '@/widgets/page-layout'
import LogoIcon from '@/shared/assets/svg/logo.svg'
import ArrowLeftIcon from '@/shared/assets/svg/arrow-left.svg'
import { COLOR } from '@/shared/styles/color'

interface HeaderProps {
  config: HeaderConfig
}

const Header = ({ config }: HeaderProps) => {
  const router = useRouter()
  const { isBack, rightIcon, rightIconClick, isLogo, title } = config

  return (
    <header className={styles.header}>
      <div className={styles.headerWrap}>
        <div className={styles.leftSection}>
          {isBack && (
            <button type="button" onClick={router.back}>
              <ArrowLeftIcon width={26} height={26} fill={COLOR.gray900} />
            </button>
          )}
          {isLogo && <LogoIcon width={46} height={46} />}
        </div>
        <div className={styles.centerSection}>{title && <h2 className={styles.titleStyle}>{title}</h2>}</div>
        <div className={styles.rightSection}>
          {rightIcon && (
            <button type="button" onClick={rightIconClick}>
              {rightIcon}
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
