import '@/shared/styles/globalStyle.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Suspense } from 'react'
import NextTopLoader from 'nextjs-toploader'
import Header from '@/widgets/header'
import Footer from '@/widgets/footer'
import QueryProvider from './_providers/query-provider'
import * as styles from './layout.css'
import NavBar from '@/widgets/navigation/nav-bar'

export const metadata: Metadata = {
  title: 'Greeing',
  description: 'Green your life with Greeing',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode
}>) => {
  return (
    <html lang="ko">
      <body className={styles.body}>
        <Header />
        <NextTopLoader height={2} showSpinner={false} color="#000" />
        <QueryProvider>{children}</QueryProvider>
        <Suspense fallback={<span>loading</span>} />
        <NavBar />
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
