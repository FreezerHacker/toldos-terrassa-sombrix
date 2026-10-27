import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import Icon from '@/components/Icon';
import { CTASection, PageHero, ReasonsSection } from '@/components/Sections';
import { homeReasons } from '@/lib/home';
import { fullAddress, paths, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Sobre nosotros | Toldos Terrassa Sombrix',
  description: 'Toldos Terrassa Sombrix: instaladores de toldos y pérgolas con base en Pompeu Fabra que trabajan solo en Terrassa. Así trabajamos y esto es lo que nos importa.',
  alternates: { canonical: paths.about },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Toldos Terrassa', href: '/' }, { label: 'Sobre nosotros' }]} />
      <PageHero eyebrow="Sobre nosotros" title="Toldos hechos en Terrassa, para casas de Terrassa">
        <p>Somos Sombrix. Instalamos y reparamos toldos y pérgolas desde {fullAddress}, y solo trabajamos en nuestra ciudad.</p>
      </PageHero>
      <section className="section">
        <div className="container content-layout">
          <article className="prose">
            <h2>Por qué solo Terrassa</h2>
            <p>Podríamos decir que vamos a todas partes. Preferimos lo contrario: trabajar en una sola ciudad y conocerla bien. Las fachadas de Terrassa, sus terrazas, áticos y patios, y la forma en que les da el sol según la calle.</p>
            <p>Eso nos permite organizar mejor las visitas de medición y estar cerca cuando un toldo necesita un ajuste.</p>
            <h2>Cómo trabajamos</h2>
            <ul>
              <li><strong>Primero medimos.</strong> No damos precios cerrados por teléfono sin ver la fachada.</li>
              <li><strong>Presupuesto por escrito.</strong> Con medidas, tipo de toldo, lona y accionamiento.</li>
              <li><strong>Te decimos lo que no necesitas.</strong> Si basta con cambiar la lona, no te vendemos un toldo nuevo.</li>
              <li><strong>Hablamos tu idioma.</strong> Català, castellano o English.</li>
            </ul>
            <h2>Para quién trabajamos</h2>
            <p>Sobre todo para casas: terrazas, balcones, áticos y jardines. También para negocios con terraza, locales y empresas de Terrassa que necesitan sombra o una pérgola.</p>
          </article>
          <aside>
            <div className="sidebar-card">
              <p className="eyebrow">Datos</p>
              <h2>{site.legalName}</h2>
              <ul>
                <li><Icon name="pin" size={17} />{fullAddress}</li>
                <li><Icon name="clock" size={17} />{site.hours.label}</li>
                <li><Icon name="globe" size={17} />Català, castellano, English</li>
              </ul>
              <Link className="button button--primary button--block" href={paths.contact}>Contactar</Link>
            </div>
          </aside>
        </div>
      </section>
      <ReasonsSection items={homeReasons} />
      <CTASection />
    </>
  );
}
