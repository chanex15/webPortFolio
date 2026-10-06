/**
 * Canonical site URL — override with NEXT_PUBLIC_SITE_URL if the
 * production domain ever changes.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://whoiszircon.vercel.app'
