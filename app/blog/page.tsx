import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import Icon from '@/components/Icon';
import { PageHero } from '@/components/Sections';
import { getPosts } from '@/lib/content';
import { paths } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Blog de toldos | Toldos Terrassa Sombrix',
  description: 'Guías prácticas sobre toldos de brazo, toldos cofre, motorización, pérgolas y mantenimiento de lonas, escritas por Toldos Terrassa Sombrix.',
  alternates: { canonical: paths.blog },
};

const fmt = new Intl.DateTimeFormat('es-ES', { dateStyle: 'medium', timeZone: 'UTC' });

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Toldos Terrassa', href: '/' }, { label: 'Blog' }]} />
      <PageHero eyebrow="Blog" title="Guías sobre toldos">
        <p>Respuestas claras a las dudas que más nos plantean antes de poner o reparar un toldo.</p>
      </PageHero>
      <section className="section">
        <div className="container post-list">
          {getPosts().map((p) => (
            <Link key={p.slug} className="post-card" href={paths.post(p.slug)}>
              <time dateTime={p.publishDate}>{fmt.format(new Date(p.publishDate))}</time>
              <div><h2>{p.title}</h2><p>{p.description}</p></div>
              <Icon name="arrow" size={21} />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
