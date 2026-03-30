import type { Metadata } from 'next'
import { VT323 } from 'next/font/google'
import './globals.css'

const vt323 = VT323({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-vt323',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://lokizorrilla.com'),
  title: 'Loki Zorrilla',
  description: 'Musician. Producer. Songwriter.',
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={vt323.variable}>
      <body>
        {children}
      </body>
    </html>
  )
}
