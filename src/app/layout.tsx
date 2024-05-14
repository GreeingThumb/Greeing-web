import '../shared/styles/globalStyle.css'
import type { Metadata } from 'next'
import { Suspense } from 'react'
import QueryProvider from './_providers/query-provider'
import NextTopLoader from 'nextjs-toploader'

export const metadata: Metadata = {
  title: 'Greeing',
  description: 'Green your life with Greeing',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body>
        <NextTopLoader height={2} showSpinner={false} color="#000" />
        <QueryProvider>{children}</QueryProvider>
        <Suspense fallback={<span>loading</span>}></Suspense>
      </body>
    </html>
  )
}
