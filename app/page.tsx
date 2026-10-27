import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import { FaqSection, GuideSection, Hero, LocalSection, ProcessSection, QuoteSection, ReasonsSection, ServicesSection } from '@/components/Sections';
import { getServices } from '@/lib/content';
import { homeFaqs, homeGuide, homeProcess, homeReasons } from '@/lib/home';
import { businessSchema, faqSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Toldos Terrassa | Instalación de toldos a medida | Sombrix',
  description: 'Toldos en Terrassa: toldos de brazo, cofre y motorizados, pérgolas bioclimáticas y reparación de lonas. Medición sin compromiso. Desde 100 €. Llama al 936 943 613.',
  alternates: { canonical: '/' },
  openGraph: { url: '/', title: 'Toldos Terrassa | Toldos Terrassa Sombrix' },
};

export default function Home() {
  const services = getServices();
  return (
    <>
      <JsonLd data={businessSchema()} />
      <JsonLd data={faqSchema(homeFaqs)} />
      <Hero />
      <ServicesSection services={services} />
      <ReasonsSection items={homeReasons} />
      <GuideSection items={homeGuide} />
      <ProcessSection items={homeProcess} />
      <LocalSection />
      <FaqSection items={homeFaqs} title="Preguntas frecuentes sobre toldos en Terrassa" />
      <QuoteSection services={services} />
    </>
  );
}
