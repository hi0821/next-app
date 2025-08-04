import '@/globals.css'
import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'サイトタイトル',
  description: 'サイトディスクリプション',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <Header />
        <main className='pt-12 md:pt-16'>
            {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
