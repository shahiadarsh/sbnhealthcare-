import { MetadataRoute } from 'next'

export default async function robots(): Promise<MetadataRoute.Robots> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/settings/robots_txt`, { next: { revalidate: 3600 } })
  const data = await res.json()
  const robotsContent = data?.success ? data.data.value : 'User-agent: *\nAllow: /'

  // Parse basic rules if needed, but Next.js robots.ts expects an object
  // For simplicity, we'll return a standard object but you can expand this
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin/',
    },
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://sbnhealthcare.com'}/sitemap.xml`,
  }
}
