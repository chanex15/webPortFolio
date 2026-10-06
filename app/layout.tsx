import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'
import { siteUrl } from '@/lib/site'
import { profile } from '@/lib/portfolio-data'
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

const title = 'Christian Paul Amantiad — Full-Stack Web Developer'
const description =
  'Portfolio of Christian Paul P. Amantiad — a full-stack web developer from Cagayan de Oro, Philippines, building fast, secure, user-centered web applications end to end.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: 'Who is Zircon — Portfolio',
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  keywords: [
    'Christian Paul Amantiad',
    'Full-Stack Web Developer',
    'Web Developer',
    'Philippines',
    'Cagayan de Oro',
    'Next.js',
    'TypeScript',
    'Cybersecurity',
    'UI UX Design',
    'Portfolio',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Christian Paul Amantiad — Portfolio',
    title,
    description,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: '/zircon-logo.png', type: 'image/png' }],
    shortcut: '/zircon-logo.png',
    apple: '/zircon-logo.png',
  },
}

export const viewport = {
  themeColor: '#000005',
  width: 'device-width',
  initialScale: 1,
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  url: siteUrl,
  image: `${siteUrl}${profile.heroImage}`,
  jobTitle: 'Full-Stack Web Developer',
  email: `mailto:${profile.emailUser}@${profile.emailDomain}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cagayan de Oro',
    addressCountry: 'PH',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'University of Science and Technology of Southern Philippines (USTP)',
  },
  sameAs: [profile.github, profile.linkedin, profile.facebook],
  knowsAbout: [
    'Web Development',
    'Next.js',
    'TypeScript',
    'React',
    'UI/UX Design',
    'Cybersecurity',
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
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
