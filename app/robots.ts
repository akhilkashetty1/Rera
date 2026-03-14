import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Sitemap {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/_next/'],
        },
        sitemap: 'https://rerabypooja.com/sitemap.xml',
    }
}
