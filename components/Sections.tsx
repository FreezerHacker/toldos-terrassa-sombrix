import Link from 'next/link';
import Icon from './Icon';
import SectionHeading from './SectionHeading';
import Valance from './Valance';
import ContactForm from './ContactForm';
import type { Faq, Service, Step } from '@/lib/content';
import { fullAddress, mapsUrl, paths, phoneHref, site } from '@/lib/site';

export function Hero() {
  return (
    <section className="hero">
      <Valance tone="accent" />
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="eyebrow">Toldos Terrassa · Sombrix</p>
          <h1>Toldos en Terrassa <em>a medida para tu casa</em></h1>
          <p className="hero__description">
            Somos <strong>Toldos Terrassa Sombrix</strong>: toldos de brazo, cofre y motorizados, pérgolas bioclimáticas y reparación de lonas.
            Vamos a medir sin compromiso y te damos el presupuesto por escrito.
          </p>
          <div className="hero__actions">
            <a className="button button--primary button--lg" href={phoneHref}><Icon name="phone" size={20} /> Llamar al {site.phoneDisplay}</a>
            <a className="button button--outline button--lg" href="#presupuesto">Pedir presupuesto</a>
          </div>
          <ul className="hero__facts">
            <li><Icon name="euro" size={18} /><span><strong>{site.priceFrom}</strong> trabajos</span></li>
            <li><Icon name="ruler" size={18} /><span><strong>Medición</strong> sin compromiso</span></li>
            <li><Icon name="clock" size={18} /><span><strong>08–21 h</strong> lunes a sábado</span></li>
          </ul>
        </div>
        <figure className="hero__visual">
          <img src="/images/hero-imagen-toldos-terrassa.webp" width={640} height={640} alt="Toldo a rayas instalado en la fachada de una casa en Terrassa" fetchPriority="high" />
          <figcaption>
            <strong>{site.name}</strong>
            <span>{site.address.street}, {site.address.locality}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export function ServicesSection({
  services,
  eyebrow = 'Servicios de toldos en Terrassa',
  title = 'Lo que instalamos y reparamos en Terrassa',
  description = 'Cinco servicios, todos hechos a medida. Si no sabes cuál necesitas, llámanos y lo vemos juntos.',
}: { services: Service[]; eyebrow?: string; title?: string; description?: string }) {
  return (
    <section className="section" id="servicios">
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="services-grid">
          {services.map((s) => (
            <Link key={s.slug} className="service-card" href={paths.service(s.slug)}>
              <span className="service-card__media">
                <img src={s.image} alt={s.imageAlt} width={600} height={420} loading="lazy" decoding="async" />
              </span>
              <span className="service-card__body">
                <h3>{s.title}</h3>
                <p>{s.shortDescription}</p>
                {s.idealFor && <small><strong>Ideal para:</strong> {s.idealFor}</small>}
                <span className="text-link">Ver {s.name.toLowerCase()} <Icon name="arrow" size={17} /></span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const reasonIcons = ['pin', 'clock', 'euro', 'globe'];
export function ReasonsSection({ items }: { items: Step[] }) {
  return (
    <section className="section section--surface">
      <div className="container reasons-layout">
        <SectionHeading eyebrow="Por qué Sombrix" title="Una empresa de toldos de Terrassa, para Terrassa" description="Nada de comerciales de otra provincia ni presupuestos a ciegas. Te atendemos nosotros, vamos a tu casa y medimos." />
        <ul className="reasons-list">
          {items.map((item, i) => (
            <li key={item.title}>
              <span className="reasons-list__icon"><Icon name={reasonIcons[i] || 'check'} size={24} /></span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function GuideSection({ items }: { items: Array<{ need: string; option: string; slug: string }> }) {
  return (
    <section className="section">
      <div className="container guide-layout">
        <SectionHeading eyebrow="Guía rápida" title="¿Qué toldo necesitas?" description="Una orientación para empezar. En la visita lo confirmamos según tu fachada y tu uso." />
        <ol className="guide-list">
          {items.map((item) => (
            <li key={item.slug}>
              <Link href={paths.service(item.slug)}>
                <span className="guide-list__need">{item.need}</span>
                <span className="guide-list__option">{item.option} <Icon name="arrow" size={18} /></span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ProcessSection({
  items,
  title = 'Así trabajamos',
  description = 'Sin letra pequeña: medimos, te damos el precio por escrito y, si te encaja, instalamos.',
}: { items: Step[]; title?: string; description?: string }) {
  return (
    <section className="section section--dark">
      <Valance tone="paper" />
      <div className="container process-layout">
        <SectionHeading eyebrow="Proceso" title={title} description={description} />
        <ol className="process-list">
          {items.map((item) => (
            <li key={item.title} className="process-item">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function LocalSection() {
  return (
    <section className="section section--surface">
      <div className="container local-layout">
        <div>
          <p className="eyebrow">Terrassa</p>
          <h2>Estamos en Pompeu Fabra y solo trabajamos en Terrassa.</h2>
          <p>Casas con terraza, áticos, patios, bajos con jardín y también locales y empresas de la ciudad. Al trabajar en un solo municipio podemos organizar las visitas de medición con más facilidad y estar cerca cuando necesites un ajuste.</p>
          <p>Si tu casa está fuera de Terrassa, lo sentimos: no es nuestra zona de trabajo.</p>
        </div>
        <ul className="local-card">
          <li><Icon name="pin" size={20} /><div><small>Dirección</small><span>{fullAddress}</span><a className="text-link" href={mapsUrl} rel="noopener" target="_blank">Ver en Google Maps <Icon name="arrow" size={15} /></a></div></li>
          <li><Icon name="clock" size={20} /><div><small>Horario</small><span>{site.hours.label}</span></div></li>
          <li><Icon name="phone" size={20} /><div><small>Teléfono</small><a href={phoneHref}>{site.phoneDisplay}</a></div></li>
          <li><Icon name="mail" size={20} /><div><small>Correo</small><a href={`mailto:${site.email}`}>{site.email}</a></div></li>
        </ul>
      </div>
    </section>
  );
}

export function FaqSection({ items, title = 'Preguntas frecuentes', description = 'Lo que más nos preguntan antes de pedir presupuesto.' }: { items: Faq[]; title?: string; description?: string }) {
  if (!items.length) return null;
  return (
    <section className="section">
      <div className="container faq-layout">
        <header>
          <p className="eyebrow">Dudas</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </header>
        <div className="faq-list">
          {items.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <div>{item.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function QuoteSection({
  services,
  selected = '',
  title = 'Pide tu presupuesto de toldos en Terrassa',
  description = 'Déjanos tu teléfono y qué necesitas. Te llamamos para concretar la visita de medición. Si prefieres hablar ya, llámanos.',
}: { services: Array<{ name: string }>; selected?: string; title?: string; description?: string }) {
  return (
    <section className="section quote-section" id="presupuesto">
      <div className="container quote-layout">
        <div className="quote-layout__intro">
          <p className="eyebrow">Presupuesto sin compromiso</p>
          <h2>{title}</h2>
          <p>{description}</p>
          <a className="quote-phone" href={phoneHref}>
            <Icon name="phone" size={26} />
            <span><small>Llama de 08:00 a 21:00</small>{site.phoneDisplay}</span>
          </a>
          <p className="quote-mail">O escríbenos a <a href={`mailto:${site.email}`}>{site.email}</a></p>
        </div>
        <ContactForm services={services.map((s) => s.name)} selected={selected} />
      </div>
    </section>
  );
}

export function CTASection({ title = '¿Quieres saber cuánto cuesta tu toldo?', description = 'Medimos sin compromiso en Terrassa y te damos el presupuesto por escrito.' }: { title?: string; description?: string }) {
  return (
    <section className="section section--tight">
      <div className="container cta-panel">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="cta-panel__actions">
          <a className="button button--primary button--lg" href={phoneHref}><Icon name="phone" size={19} /> {site.phoneDisplay}</a>
          <Link className="button button--light button--lg" href={`${paths.contact}#presupuesto`}>Pedir presupuesto</Link>
        </div>
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <header className="page-hero">
      <div className="container page-hero__grid">
        <div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1></div>
        <div className="page-hero__summary">{children}</div>
      </div>
    </header>
  );
}
