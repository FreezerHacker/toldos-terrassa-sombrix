import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { PageHero } from '@/components/Sections';
import { fullAddress, paths, site } from '@/lib/site';

export const metadata: Metadata = { title: 'Política de privacidad | Toldos Terrassa Sombrix', description: 'Cómo trata Toldos Terrassa Sombrix los datos personales enviados a través del formulario de presupuesto.', alternates: { canonical: paths.privacy }, robots: { index: false, follow: true } };

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Toldos Terrassa', href: '/' }, { label: 'Privacidad' }]} />
      <PageHero eyebrow="Información legal" title="Política de privacidad"><p>Cómo tratamos los datos que nos envías a través de esta web.</p></PageHero>
      <section className="section">
        <article className="container prose">
          <h2>Responsable del tratamiento</h2>
          <p>{site.legalName}{site.nif ? ` (NIF ${site.nif})` : ''}. Dirección: {fullAddress}. Correo: {site.email}. Teléfono: {site.phoneDisplay}.</p>
          <h2>Qué datos recogemos y para qué</h2>
          <p>A través del formulario de presupuesto recogemos nombre, teléfono, correo electrónico (opcional), el servicio que te interesa y el mensaje que quieras añadir. Los usamos únicamente para contactarte, concertar la visita de medición y preparar tu presupuesto.</p>
          <h2>Base jurídica</h2>
          <p>La aplicación de medidas precontractuales a petición tuya (art. 6.1.b RGPD) al solicitar un presupuesto, y tu consentimiento al marcar la casilla del formulario.</p>
          <h2>Conservación</h2>
          <p>Conservamos los datos mientras se gestiona tu solicitud y, si llegas a contratar, durante los plazos legales aplicables. Si no hay contratación, los eliminamos en un plazo razonable.</p>
          <h2>Destinatarios</h2>
          <p>No cedemos tus datos a terceros salvo obligación legal. El proveedor de alojamiento web y correo actúa como encargado del tratamiento.</p>
          <h2>Tus derechos</h2>
          <p>Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a {site.email}. También puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es).</p>
        </article>
      </section>
    </>
  );
}
