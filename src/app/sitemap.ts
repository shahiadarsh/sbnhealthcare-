import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sbnhealthcare.com'
  
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/seo`, { next: { revalidate: 3600 } })
    const { data: seoEntries } = await res.json()

    const sitemapEntries = seoEntries.map((seo: any) => ({
      url: `${baseUrl}/${seo.page === 'home' ? '' : seo.page}`,
      lastModified: new Date(seo.updatedAt || Date.now()),
      changeFrequency: 'weekly' as const,
      priority: seo.page === 'home' ? 1.0 : 0.8,
    }))

    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      ...sitemapEntries
    ]
  } catch (error) {
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
    ]
  }
}
