import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/bricolage-grotesque/index.css';
import '@fontsource-variable/manrope/index.css';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getServices } from '@/lib/content';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'Toldos Terrassa | Instalación de toldos a medida | Sombrix', template: '%s' },
  description: 'Toldos en Terrassa: toldos de brazo, cofre y motorizados, pérgolas bioclimáticas y reparación de lonas. Medición sin compromiso. Desde 100 €. Llama al 936 943 613.',
  applicationName: site.name,
  robots: site.indexable ? { index: true, follow: true } : { index: false, follow: true },
  icons: { icon: '/icons/favicon.svg' },
  openGraph: { type: 'website', locale: 'es_ES', siteName: site.name, images: ['/images/hero-imagen-toldos-terrassa.webp'] },
};

export const viewport: Viewport = { themeColor: '#1F3B2D' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const services = getServices().map(({ slug, name }) => ({ slug, name }));
  return (
    <html lang="es-ES">
      <body>
        <a className="skip-link" href="#contenido">Saltar al contenido</a>
        <Header services={services} />
        <main id="contenido">{children}</main>
        <Footer services={services} />
      </body>
    </html>
  );
}
