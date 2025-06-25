/** @type {import('next-sitemap').IConfig} */
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://localhost:9001/api/v1';

const fetchSlugs = async (endpoint) => {
    const res = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!res.ok) throw new Error(`Failed to fetch ${API_BASE_URL}${endpoint}`);
    const json = await res.json();
    console.log(`Fetched ${json.data.length} slugs from ${API_BASE_URL}${endpoint}`);
    return json.data || [];
};

module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://ur-customer-support-web-nextjs.vercel.app',
    generateRobotsTxt: true,
    transform: async (config, path) => {
        // Default values
        let priority = 0.7;
        let changefreq = 'weekly';

        if (path === '/') {
            priority = 1.0;
            changefreq = 'daily';
        } else if (['/signin', '/signup', '/error'].includes(path)) {
            return null;
        } else if (path === '/contact') {
            priority = 0.5;
            changefreq = 'yearly';
        } else if (path.startsWith('/products')) {
            priority = 0.8;
            changefreq = 'weekly';
        } else if (path.startsWith('/news')) {
            priority = 0.8;
            changefreq = 'daily';
        } else if (path.startsWith('/projects')) {
            priority = 0.7;
            changefreq = 'monthly';
        } else if (path === '/about' || path.startsWith('/about/')) {
            priority = 0.6;
            changefreq = 'yearly';
        }

        return {
            loc: path,
            changefreq,
            priority,
            lastmod: new Date().toISOString(),
        };
    },
    additionalPaths: async () => {
        const paths = [];

        const products = await fetchSlugs('/product/slugs');
        products.forEach((p) => {
            paths.push({
                loc: `/products/${p.slug}`,
                lastmod: new Date().toISOString(),
                changefreq: 'weekly',
                priority: 0.8,
            });
        });

        const news = await fetchSlugs('/news/slugs');
        news.forEach((n) => {
            paths.push({
                loc: `/news/${n.slug}`,
                lastmod: new Date().toISOString(),
                changefreq: 'monthly',
                priority: 0.6,
            });
        });

        const projects = await fetchSlugs('/project/slugs');
        projects.forEach((prj) => {
            paths.push({
                loc: `/projects/${prj.slug}`,
                lastmod: new Date().toISOString(),
                changefreq: 'monthly',
                priority: 0.7,
            });
        });

        return paths;
    },
};
