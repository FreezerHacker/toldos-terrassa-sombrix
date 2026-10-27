import type { MetadataRoute } from 'next';
import { getPosts, getServices } from '@/lib/content';
import { abs, paths } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: abs('/'), lastModified: now, priority: 1 },
    ...getServices().map((s) => ({ url: abs(paths.service(s.slug)), lastModified: now, priority: 0.9 })),
    { url: abs(paths.services), lastModified: now, priority: 0.7 },
    { url: abs(paths.contact), lastModified: now, priority: 0.7 },
    { url: abs(paths.about), lastModified: now, priority: 0.5 },
    { url: abs(paths.blog), lastModified: now, priority: 0.5 },
    ...getPosts().map((p) => ({ url: abs(paths.post(p.slug)), lastModified: new Date(p.publishDate), priority: 0.5 })),
  ];
}
