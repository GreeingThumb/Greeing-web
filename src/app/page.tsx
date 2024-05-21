'use client'

import { Button } from '@/shared/components/Button'
import * as styles from './page.css'
import Footer from '@/widgets/footer'
import { useLogin } from '@/shared/hooks/useLogin'
import { SessionProvider } from 'next-auth/react'

export default function Home() {
  const { handleLogin } = useLogin()

  return (
    <SessionProvider>
      <main className={styles.page}>
        <Button onClick={() => handleLogin('ghksa2ls09041@gmail.com', 'wjdghksals1!')}>Button</Button>
        <Footer />
      </main>
    </SessionProvider>
  )
}
