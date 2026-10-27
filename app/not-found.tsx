import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/Sections';
import { paths } from '@/lib/site';

export const metadata: Metadata = { title: 'Página no encontrada | Toldos Terrassa Sombrix', robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <PageHero eyebrow="Error 404" title="Esta página no existe">
      <p>Vuelve al inicio o llámanos si buscabas algo concreto.</p>
      <p><Link className="button button--primary" href={paths.home}>Volver al inicio</Link></p>
    </PageHero>
  );
}
