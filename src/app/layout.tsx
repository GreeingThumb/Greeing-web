import '@/shared/styles/globalStyle.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Suspense } from 'react'
import NextTopLoader from 'nextjs-toploader'
import Header from '@/widgets/header'
import Footer from '@/widgets/footer'
import QueryProvider from './_providers/query-provider'
import * as styles from './layout.css'

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
        <Footer />
        <Suspense fallback={<span>loading</span>} />
      </body>
    </html>
  )
}

export default RootLayout
