import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { PageHero } from '@/components/Sections';
import { fullAddress, paths, site } from '@/lib/site';

export const metadata: Metadata = { title: 'Aviso legal | Toldos Terrassa Sombrix', description: 'Información legal del titular del sitio web toldosterrassasombrix.es y condiciones de uso.', alternates: { canonical: paths.legal }, robots: { index: false, follow: true } };

export default function LegalPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Toldos Terrassa', href: '/' }, { label: 'Aviso legal' }]} />
      <PageHero eyebrow="Información legal" title="Aviso legal" />
      <section className="section">
        <article className="container prose">
          <h2>Titular del sitio web</h2>
          <p>En cumplimiento de la Ley 34/2002 de Servicios de la Sociedad de la Información (LSSI-CE):</p>
          <ul>
            <li><strong>Titular:</strong> {site.legalName}</li>
            {site.nif && <li><strong>NIF:</strong> {site.nif}</li>}
            <li><strong>Domicilio:</strong> {fullAddress}</li>
            <li><strong>Correo:</strong> {site.email}</li>
            <li><strong>Teléfono:</strong> {site.phoneDisplay}</li>
            <li><strong>Dominio:</strong> {site.url}</li>
          </ul>
          <h2>Uso del sitio</h2>
          <p>El acceso a este sitio web es gratuito y atribuye la condición de usuario. El usuario se compromete a hacer un uso lícito del sitio y de sus contenidos, sin perjudicar derechos ni sistemas de terceros.</p>
          <h2>Propiedad intelectual</h2>
          <p>Los textos, ilustraciones, logotipos y diseño de este sitio pertenecen a {site.legalName} o se usan con autorización. No se permite su reproducción sin consentimiento previo.</p>
          <h2>Responsabilidad</h2>
          <p>La información de esta web es orientativa. Los precios y condiciones definitivos de cada trabajo se indican en el presupuesto por escrito que entregamos tras la visita de medición.</p>
          <h2>Legislación aplicable</h2>
          <p>Estas condiciones se rigen por la legislación española.</p>
        </article>
      </section>
    </>
  );
}
