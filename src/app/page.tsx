'use client'

import { redirect } from 'next/navigation'
import * as styles from './page.css'
import { useLogin } from '@/shared/hooks/useLogin'
import { Button } from '@/shared/ui/button'

const Home = () => {
  const { handleLogin } = useLogin()

  redirect('/home')

  return (
    <main className={styles.page}>
      <Button onClick={() => handleLogin('ghksa2ls09041@gmail.com', 'wjdghksals1!')}>Button</Button>
    </main>
  )
}
export default Home
