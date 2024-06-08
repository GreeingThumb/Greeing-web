'use client'

import '@/shared/styles/globalStyle.css'
import type { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'
import QueryProvider from './_providers/query-provider'
import * as styles from './layout.css'

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode
}>) => {
  return (
    <html lang="ko">
      <body className={styles.body}>
        <SessionProvider>
          <QueryProvider>{children}</QueryProvider>
        </SessionProvider>
      </body>
    </html>
  )
}

export default RootLayout
