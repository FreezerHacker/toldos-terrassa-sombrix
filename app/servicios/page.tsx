import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { CTASection, GuideSection, PageHero, ServicesSection } from '@/components/Sections';
import { getServices } from '@/lib/content';
import { homeGuide } from '@/lib/home';
import { breadcrumbSchema } from '@/lib/schema';
import { paths } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Servicios de toldos en Terrassa | Toldos Terrassa Sombrix',
  description: 'Toldos de brazo, toldos cofre, toldos motorizados, pérgolas bioclimáticas y reparación de lonas en Terrassa. Medición sin compromiso y presupuesto por escrito.',
  alternates: { canonical: paths.services },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Toldos Terrassa', path: '/' }, { name: 'Servicios', path: paths.services }])} />
      <Breadcrumbs items={[{ label: 'Toldos Terrassa', href: '/' }, { label: 'Servicios' }]} />
      <PageHero eyebrow="Servicios" title="Servicios de toldos en Terrassa">
        <p>Instalamos toldos nuevos, motorizamos los que ya tienes, montamos pérgolas bioclimáticas y reparamos lonas. Todo a medida y solo en Terrassa.</p>
      </PageHero>
      <ServicesSection services={getServices()} eyebrow="Catálogo" title="Elige por lo que necesitas" description="Cada servicio tiene su página con proceso, ventajas y dudas frecuentes." />
      <GuideSection items={homeGuide} />
      <CTASection />
    </>
  );
}
