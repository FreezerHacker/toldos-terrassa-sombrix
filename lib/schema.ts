import { abs, site } from './site';
import type { Faq, Post, Service } from './content';

const area = { '@type': 'City', name: 'Terrassa' };

export function businessSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['HomeAndConstructionBusiness', 'LocalBusiness'],
        '@id': abs('/#business'),
        name: site.name,
        legalName: site.legalName,
        url: abs('/'),
        image: abs('/images/hero-imagen-toldos-terrassa.webp'),
        description: site.description,
        telephone: site.phoneE164,
        email: site.email,
        priceRange: site.priceFrom,
        address: {
          '@type': 'PostalAddress',
          streetAddress: site.address.street,
          postalCode: site.address.postalCode,
          addressLocality: site.address.locality,
          addressRegion: site.address.region,
          addressCountry: site.address.country,
        },
        areaServed: area,
        knowsLanguage: ['ca', 'es', 'en'],
        openingHoursSpecification: [
          { '@type': 'OpeningHoursSpecification', dayOfWeek: site.hours.days, opens: site.hours.opens, closes: site.hours.closes },
        ],
      },
      { '@type': 'WebSite', '@id': abs('/#website'), url: abs('/'), name: site.name, inLanguage: 'es-ES', publisher: { '@id': abs('/#business') } },
    ],
  };
}

export function serviceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': abs(`/${service.slug}/#service`),
    name: service.title,
    serviceType: service.name,
    description: service.shortDescription,
    provider: { '@id': abs('/#business') },
    areaServed: area,
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, item: abs(item.path) })),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
  };
}

export function articleSchema(post: Post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    author: { '@type': 'Organization', name: post.author },
    publisher: { '@id': abs('/#business') },
    mainEntityOfPage: abs(`/blog/${post.slug}/`),
  };
}
