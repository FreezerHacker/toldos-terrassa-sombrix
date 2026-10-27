export const site = {
  name: 'Toldos Terrassa Sombrix',
  brand: 'Sombrix',
  legalName: 'Toldos Terrassa Sombrix',
  /** Obligatorio por LSSI: rellenar antes de publicar */
  nif: '',
  url: 'https://toldosterrassasombrix.es',
  description:
    'Instalamos toldos de brazo, toldos cofre, toldos motorizados y pérgolas bioclimáticas, y reparamos lonas. Trabajamos solo en Terrassa, sobre todo en casas, y también en negocios y empresas.',
  phoneDisplay: '936 943 613',
  phoneE164: '+34936943613',
  email: 'info@toldosterrassasombrix.es',
  address: {
    street: 'Carrer de Pompeu Fabra, 94',
    postalCode: '08226',
    locality: 'Terrassa',
    region: 'Barcelona',
    country: 'ES',
  },
  hours: { label: 'Lunes a sábado, 08:00–21:00', short: '08–21 h lunes a sábado', opens: '08:00', closes: '21:00', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] },
  priceFrom: 'Desde 100 €',
  languages: 'Català · Castellano · English',
  /** Cambiar a true al publicar para permitir indexación */
  indexable: true,
};

export const fullAddress = `${site.address.street}, ${site.address.postalCode} ${site.address.locality}, ${site.address.region}`;
export const phoneHref = `tel:${site.phoneE164}`;
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.name}, ${fullAddress}`)}`;
export const abs = (path = '/') => new URL(path, site.url).href;

export const paths = {
  home: '/',
  services: '/servicios/',
  service: (slug: string) => `/${slug}/`,
  about: '/sobre-nosotros/',
  contact: '/contacto/',
  blog: '/blog/',
  post: (slug: string) => `/blog/${slug}/`,
  legal: '/aviso-legal/',
  privacy: '/privacidad/',
  cookies: '/cookies/',
};
