import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'
import { SiteBackground } from '@/components/site-background'
import { Navbar } from '@/components/navbar'
import { CustomCursor } from '@/components/custom-cursor'

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '700', '900'],
})
const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700'],
})
const dmMono = DM_Mono({
  variable: '--font-dm-mono',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  title: 'Christian Paul Amantiad — Web Developer & Designer',
  description:
    'Portfolio of Christian Paul P. Amantiad — an IT graduate from Cagayan de Oro, Philippines building fast, secure, user-centered web applications from concept to deployment.',
  generator: 'v0.app',
  icons: {
    icon: [{ url: '/zircon-logo.png', type: 'image/png' }],
    shortcut: '/zircon-logo.png',
    apple: '/zircon-logo.png',
  },
  keywords: [
    'Christian Paul Amantiad',
    'Web Developer',
    'Philippines',
    'Next.js',
    'Cybersecurity',
    'UI UX Design',
    'Portfolio',
  ],
  openGraph: {
    title: 'Christian Paul Amantiad — Web Developer & Designer',
    description:
      'Fast, secure, user-centered web applications from concept to deployment.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#000005',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <CustomCursor />
        <SiteBackground />
        <div className="noise-overlay" aria-hidden="true" />
        <Navbar />
        <main className="relative z-10">{children}</main>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
