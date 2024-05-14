import { Button } from '@/shared/components/button'
import * as styles from './page.css'
import Footer from '@/widgets/footer'

export default function Home() {
  return (
    <>
      <main className={styles.page}>
        <Button>Button</Button>
        <Footer />
      </main>
    </>
  )
}
