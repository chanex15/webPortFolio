import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/site'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/install', // utility page, already noindex
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
