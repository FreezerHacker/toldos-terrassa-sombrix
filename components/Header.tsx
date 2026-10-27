'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Icon from './Icon';
import Logo from './Logo';
import { paths, phoneHref, site } from '@/lib/site';

const navigation = [
  { label: 'Servicios', href: paths.services },
  { label: 'Nosotros', href: paths.about },
  { label: 'Blog', href: paths.blog },
  { label: 'Contacto', href: paths.contact },
];

export default function Header({ services }: { services: Array<{ slug: string; name: string }> }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);
  const isServicePage = services.some((s) => pathname === paths.service(s.slug));

  return (
    <>
      <header className="site-header">
        <div className="topbar">
          <div className="container topbar__inner">
            <span><Icon name="pin" size={15} /> Toldos solo en Terrassa</span>
            <span><Icon name="clock" size={15} /> {site.hours.label}</span>
            <span className="topbar__lang"><Icon name="globe" size={15} /> {site.languages}</span>
          </div>
        </div>
        <div className="container site-header__inner">
          <Link className="brand" href={paths.home} aria-label={`${site.name}, inicio`}>
            <Logo />
            <span className="brand__text">
              <strong>{site.brand}</strong>
              <small>Toldos Terrassa</small>
            </span>
          </Link>

          <button className="nav-toggle" type="button" aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(!open)}>
            <Icon name={open ? 'close' : 'menu'} size={22} />
            <span>Menú</span>
          </button>

          <nav id="primary-nav" className="primary-nav" aria-label="Navegación principal" data-open={open || undefined}>
            <ul>
              {navigation.map((item) => {
                const active = pathname.startsWith(item.href) || (item.href === paths.services && isServicePage);
                return (
                  <li key={item.href}>
                    <Link href={item.href} aria-current={active ? 'page' : undefined}>{item.label}</Link>
                  </li>
                );
              })}
            </ul>
            <ul className="primary-nav__services">
              {services.map((s) => (
                <li key={s.slug}><Link href={paths.service(s.slug)}>{s.name}</Link></li>
              ))}
            </ul>
          </nav>

          <a className="header-call" href={phoneHref}>
            <Icon name="phone" size={18} />
            <span>{site.phoneDisplay}</span>
          </a>
        </div>
      </header>

      <div className="mobile-bar">
        <a className="mobile-bar__call" href={phoneHref}><Icon name="phone" size={19} /> Llamar</a>
        <Link className="mobile-bar__quote" href={`${paths.contact}#presupuesto`}><Icon name="mail" size={19} /> Presupuesto</Link>
      </div>
    </>
  );
}
