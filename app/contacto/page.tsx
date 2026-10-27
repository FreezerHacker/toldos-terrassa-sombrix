import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { LocalSection, PageHero, QuoteSection } from '@/components/Sections';
import { getServices } from '@/lib/content';
import { breadcrumbSchema } from '@/lib/schema';
import { paths, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contacto y presupuesto | Toldos Terrassa Sombrix',
  description: `Pide presupuesto de toldos en Terrassa: llama al ${site.phoneDisplay} de lunes a sábado de 08:00 a 21:00 o rellena el formulario. Medición sin compromiso.`,
  alternates: { canonical: paths.contact },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Toldos Terrassa', path: '/' }, { name: 'Contacto', path: paths.contact }])} />
      <Breadcrumbs items={[{ label: 'Toldos Terrassa', href: '/' }, { label: 'Contacto' }]} />
      <PageHero eyebrow="Contacto" title="Hablemos de tu toldo">
        <p>Llámanos o déjanos tus datos y te llamamos para concretar la visita de medición en Terrassa. Atendemos en català, castellano e English.</p>
      </PageHero>
      <QuoteSection services={getServices()} title="Formulario de presupuesto" />
      <LocalSection />
    </>
  );
}
