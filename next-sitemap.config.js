/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://ur-customer-support-web-nextjs.vercel.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL || 'https://ur-customer-support-web-nextjs.vercel.app'}/sitemap-dynamic.xml`,
    ],
    includeNonIndexSitemaps: false,
  },
  exclude: [
    '/products/*',
    '/projects/*',
    '/news/*',
    '/error',
    '/sitemap.xml',
    '/sitemap-dynamic.xml',
  ],
  transform: async (config, path) => {
    let priority = 0.7;
    let changefreq = 'monthly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'monthly';
    } else if (path === '/contact') {
      priority = 0.5;
      changefreq = 'yearly';
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
};
