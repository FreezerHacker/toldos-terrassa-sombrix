# Toldos Terrassa Sombrix — Next.js 14

```bash
npm install
cp .env.example .env.local   # rellenar SMTP
npm run dev                  # http://localhost:3000
npm run build && npm start   # producción (Node)
```

## Dónde se edita
- Datos del negocio (teléfono, dirección, horario, NIF): `lib/site.ts`
- Servicios (1 archivo = 1 URL en la raíz): `content/servicios/*.md`
- Blog: `content/blog/*.md`
- Textos de la home (proceso, FAQ, guía): `lib/home.ts`
- Estilos: `app/globals.css`
- Imágenes: `public/images/` (sustituir los SVG por fotos reales y cambiar `image` en cada .md)

## URLs
/ · /toldos-de-brazo-terrassa/ · /toldos-cofre-terrassa/ · /toldos-motorizados-terrassa/ · /pergolas-bioclimaticas-terrassa/ · /reparacion-lonas-toldos-terrassa/ · /servicios/ · /sobre-nosotros/ · /contacto/ · /blog/ · /aviso-legal/ · /privacidad/ · /cookies/

## Formulario
POST `/api/contacto/` → Nodemailer con las variables de `.env.local`. Incluye honeypot anti-spam y redirige a `/gracias/`.
