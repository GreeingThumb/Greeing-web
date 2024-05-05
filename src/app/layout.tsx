import '@/styles/fonts.css';
import '@/styles/reset.css';
import '@/styles/index.css';
import type {Metadata} from 'next';
import {Suspense} from 'react';
import Provider from './provider';
import dynamic from 'next/dynamic';

const NextProgress = dynamic(() => import('@/components/NextProgress'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'Greeing',
  description: 'Green your life with Greeing',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <NextProgress />
        <Provider>{children}</Provider>
        <Suspense fallback={<span>loading</span>}></Suspense>
      </body>
    </html>
  );
}
