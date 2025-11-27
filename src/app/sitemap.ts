import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'
export const revalidate = 86400 // 24h

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://albadea-salam-medina.netlify.app'
  const now = new Date()
  return [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/products`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/map`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/policies`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
