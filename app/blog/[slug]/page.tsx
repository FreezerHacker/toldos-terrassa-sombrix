import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { CTASection, PageHero } from '@/components/Sections';
import { getPost, getPosts } from '@/lib/content';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';
import { paths } from '@/lib/site';

export const dynamicParams = false;
export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getPost(params.slug);
  if (!p) return {};
  return { title: `${p.title} | Sombrix`, description: p.description, alternates: { canonical: paths.post(p.slug) }, openGraph: { type: 'article', url: paths.post(p.slug), title: p.title, description: p.description } };
}

const fmt = new Intl.DateTimeFormat('es-ES', { dateStyle: 'long', timeZone: 'UTC' });

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();
  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <JsonLd data={breadcrumbSchema([{ name: 'Toldos Terrassa', path: '/' }, { name: 'Blog', path: paths.blog }, { name: post.title, path: paths.post(post.slug) }])} />
      <Breadcrumbs items={[{ label: 'Toldos Terrassa', href: '/' }, { label: 'Blog', href: paths.blog }, { label: post.title }]} />
      <PageHero eyebrow={post.category} title={post.title}>
        <p>{post.description}</p>
        <p><time dateTime={post.publishDate}>{fmt.format(new Date(post.publishDate))}</time> · {post.author}</p>
      </PageHero>
      <div className="container content-layout">
        <article className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />
        <aside>
          <div className="sidebar-card">
            <p className="eyebrow">{post.category}</p>
            <h2>¿Dudas con tu toldo?</h2>
            <p>Medimos sin compromiso en Terrassa.</p>
            <Link className="button button--primary button--block" href={`${paths.contact}#presupuesto`}>Pedir presupuesto</Link>
          </div>
        </aside>
      </div>
      <CTASection />
    </>
  );
}
