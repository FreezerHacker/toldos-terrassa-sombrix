import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { PageHero } from '@/components/Sections';
import { paths } from '@/lib/site';

export const metadata: Metadata = { title: 'Política de cookies | Toldos Terrassa Sombrix', description: 'Información sobre el uso de cookies en toldosterrassasombrix.es. Esta web no usa cookies de análisis ni publicidad.', alternates: { canonical: paths.cookies }, robots: { index: false, follow: true } };

export default function CookiesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Toldos Terrassa', href: '/' }, { label: 'Cookies' }]} />
      <PageHero eyebrow="Información legal" title="Política de cookies" />
      <section className="section">
        <article className="container prose">
          <h2>¿Usamos cookies?</h2>
          <p>Esta web no instala cookies de análisis, publicidad ni redes sociales. Solo podrían utilizarse cookies técnicas estrictamente necesarias para su funcionamiento, que no requieren consentimiento.</p>
          <p>El enlace a Google Maps abre el servicio de Google en una pestaña nueva; a partir de ahí se aplica la política de cookies de Google.</p>
          <h2>Cambios</h2>
          <p>Si en el futuro añadimos analítica u otros servicios que usen cookies, actualizaremos esta política e incluiremos un aviso para pedir tu consentimiento.</p>
        </article>
      </section>
    </>
  );
}
