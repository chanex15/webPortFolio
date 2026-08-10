import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Who is Zircon — Android app',
  description:
    'Download the official Android app for the Who is Zircon portfolio.',
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#000005',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
