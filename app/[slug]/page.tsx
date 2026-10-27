import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import { FaqSection, ProcessSection, QuoteSection } from '@/components/Sections';
import { getService, getServices } from '@/lib/content';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema';
import { paths, phoneHref, site } from '@/lib/site';

export const dynamicParams = false;

export function generateStaticParams() {
  return getServices().map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = getService(params.slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: paths.service(s.slug) },
    openGraph: { url: paths.service(s.slug), title: s.metaTitle, description: s.metaDescription, images: [s.image] },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();
  const all = getServices();
  const others = all.filter((s) => s.slug !== service.slug);
  const url = paths.service(service.slug);

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={breadcrumbSchema([{ name: 'Toldos Terrassa', path: '/' }, { name: 'Servicios', path: paths.services }, { name: service.title, path: url }])} />
      {service.faqs.length > 0 && <JsonLd data={faqSchema(service.faqs)} />}
      <Breadcrumbs items={[{ label: 'Toldos Terrassa', href: '/' }, { label: 'Servicios', href: paths.services }, { label: service.title }]} />
      <header className="page-hero page-hero--service">
        <div className="container page-hero__grid">
          <div>
            <p className="eyebrow">Toldos Terrassa · {service.name}</p>
            <h1>{service.title}</h1>
            <p className="page-hero__statement">{service.heroStatement}</p>
            <div className="hero__actions">
              <a className="button button--primary button--lg" href={phoneHref}><Icon name="phone" size={19} /> {site.phoneDisplay}</a>
              <a className="button button--outline button--lg" href="#presupuesto">Pedir presupuesto</a>
            </div>
          </div>
          <figure className="page-hero__media">
            <img src={service.image} alt={service.imageAlt} width={600} height={420} fetchPriority="high" />
          </figure>
        </div>
      </header>

      <div className="container content-layout">
        <article className="prose">
          <p className="lead">{service.shortDescription}</p>
          <ul className="benefit-grid">
            {service.benefits.map((b) => (
              <li key={b} className="benefit-card"><Icon name="check" size={22} /><p>{b}</p></li>
            ))}
          </ul>
          <div dangerouslySetInnerHTML={{ __html: service.html }} />
        </article>
        <aside>
          <div className="sidebar-card">
            <p className="eyebrow">Presupuesto</p>
            <h2>Medimos sin compromiso</h2>
            <p>Vamos a tu casa en Terrassa, medimos y te damos el precio por escrito. Hay trabajos desde 100 €.</p>
            <a className="button button--primary button--block" href={phoneHref}><Icon name="phone" size={18} /> Llamar</a>
            <a className="button button--outline button--block" href="#presupuesto">Escribirnos</a>
            <p className="sidebar-card__note"><Icon name="clock" size={15} /> {site.hours.label}</p>
          </div>
          <nav className="sidebar-links" aria-label="Otros servicios">
            <p className="eyebrow">Más toldos en Terrassa</p>
            <ul>
              {others.map((o) => <li key={o.slug}><Link href={paths.service(o.slug)}>{o.title} <Icon name="arrow" size={15} /></Link></li>)}
            </ul>
          </nav>
        </aside>
      </div>

      <ProcessSection items={service.process} title={`Cómo trabajamos: ${service.name.toLowerCase()}`} description="Paso a paso, desde la primera llamada hasta que el toldo queda funcionando." />
      <FaqSection items={service.faqs} title={`Dudas sobre ${service.name.toLowerCase()} en Terrassa`} />
      <QuoteSection services={all} selected={service.name} title={`Presupuesto de ${service.name.toLowerCase()} en Terrassa`} />
    </>
  );
}
