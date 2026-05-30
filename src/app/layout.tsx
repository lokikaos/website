import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://lokizorrilla.info'),
  title: 'Loki Zorrilla',
  description: 'Photography by Loki Zorrilla. Based in Bend, Oregon.',
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="bg-sand text-ink font-sans antialiased">
        {/* film grain + paper texture overlays */}
        <div className="grain-overlay" aria-hidden />
        <div className="vignette-overlay" aria-hidden />

        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
