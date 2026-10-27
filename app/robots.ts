import type { MetadataRoute } from 'next';
import { abs, site } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: site.indexable ? { userAgent: '*', allow: '/', disallow: ['/api/', '/gracias/'] } : { userAgent: '*', disallow: '/' },
    sitemap: abs('/sitemap.xml'),
  };
}
