import { getServerSideSitemap } from 'next-sitemap'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://localhost:9001/api/v1'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ur-customer-support-web-nextjs.vercel.app'

const fetchSlugs = async (endpoint: string) => {
  try {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      next: { revalidate: 86400 },
    })
    if (!res.ok)
      throw new Error(`Failed to fetch ${API_BASE_URL}${endpoint}`)
    const json = await res.json()
    return json.data || []
  } catch (error) {
    console.error(error)
    return []
  }
}

export async function GET() {
  const [products, news, projects] = await Promise.all([
    fetchSlugs('/product/slugs'),
    fetchSlugs('/news/slugs'),
    fetchSlugs('/project/slugs'),
  ])

  const urls = [
    ...products.map((p: any) => ({
      loc: `${SITE_URL}/products/${p.slug}`,
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    })),
    ...news.map((n: any) => ({
      loc: `${SITE_URL}/news/${n.slug}`,
      changefreq: 'daily',
      priority: 0.6,
      lastmod: new Date().toISOString(),
    })),
    ...projects.map((prj: any) => ({
      loc: `${SITE_URL}/projects/${prj.slug}`,
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    })),
  ]

  return getServerSideSitemap(urls)
}