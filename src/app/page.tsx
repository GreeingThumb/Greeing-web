import { Button } from '@/shared/components/Button'
import * as styles from './page.css'
import Footer from '@/widgets/footer/ui'

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
