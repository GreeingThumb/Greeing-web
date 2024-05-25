// src/components/Header.tsx
import React from 'react'
import * as styles from './style.css'
import Image from 'next/image'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrap}>
        <Image src="/assets/icon/logo.svg" width={60} height={40} alt="greeing" className={styles.imgIcon} />
        <div className={styles.links}>
          <Image src="/assets/icon/bell.svg" width={23} height={24} alt="greeing" className={styles.imgIcon} />
          <Image src="/assets/icon/search.svg" width={27} height={30} alt="greeing" className={styles.imgIcon} />
        </div>
      </div>
    </header>
  )
}

export default Header
