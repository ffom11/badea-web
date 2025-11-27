import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'
export const revalidate = 86400 // 24h

export default function robots(): MetadataRoute.Robots {
  const base = 'https://albadea-salam-medina.netlify.app'
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  }
}
