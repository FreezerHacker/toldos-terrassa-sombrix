import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';
import { PageHero } from '@/components/Sections';
import { paths, phoneHref, site } from '@/lib/site';

export const metadata: Metadata = { title: 'Solicitud recibida | Toldos Terrassa Sombrix', robots: { index: false, follow: true } };

export default function ThanksPage() {
  return (
    <PageHero eyebrow="Solicitud recibida" title="Gracias. Te llamamos pronto.">
      <p>Hemos recibido tus datos. Te llamaremos en nuestro horario ({site.hours.label}) para concretar la visita de medición.</p>
      <p><a className="button button--primary" href={phoneHref}><Icon name="phone" size={18} /> Si es urgente: {site.phoneDisplay}</a></p>
      <p><Link className="text-link" href={paths.home}>Volver al inicio <Icon name="arrow" size={16} /></Link></p>
    </PageHero>
  );
}
