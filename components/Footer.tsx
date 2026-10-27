import Link from 'next/link';
import Icon from './Icon';
import Logo from './Logo';
import Valance from './Valance';
import { fullAddress, paths, phoneHref, site } from '@/lib/site';

export default function Footer({ services }: { services: Array<{ slug: string; name: string }> }) {
  return (
    <footer className="site-footer">
      <Valance tone="primary" />
      <div className="container site-footer__grid">
        <div className="footer-brand">
          <Link className="brand brand--light" href={paths.home}>
            <Logo />
            <span className="brand__text"><strong>{site.brand}</strong><small>Toldos Terrassa</small></span>
          </Link>
          <p>{site.description}</p>
          <p className="footer-lang"><Icon name="globe" size={16} /> Atendemos en català, castellano e English.</p>
        </div>
        <div>
          <h2 className="footer-title">Toldos en Terrassa</h2>
          <ul>{services.map((s) => <li key={s.slug}><Link href={paths.service(s.slug)}>{s.name}</Link></li>)}</ul>
        </div>
        <div>
          <h2 className="footer-title">Empresa</h2>
          <ul>
            <li><Link href={paths.about}>Sobre nosotros</Link></li>
            <li><Link href={paths.blog}>Blog</Link></li>
            <li><Link href={paths.contact}>Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="footer-title">Contacto</h2>
          <ul className="footer-contact">
            <li><Icon name="phone" size={17} /><a href={phoneHref}>{site.phoneDisplay}</a></li>
            <li><Icon name="mail" size={17} /><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><Icon name="pin" size={17} /><span>{fullAddress}</span></li>
            <li><Icon name="clock" size={17} /><span>{site.hours.label}</span></li>
          </ul>
        </div>
      </div>
      <div className="container site-footer__bottom">
        <p>© {new Date().getFullYear()} {site.legalName}</p>
        <nav aria-label="Información legal">
          <Link href={paths.legal}>Aviso legal</Link>
          <Link href={paths.privacy}>Privacidad</Link>
          <Link href={paths.cookies}>Cookies</Link>
        </nav>
      </div>
    </footer>
  );
}
