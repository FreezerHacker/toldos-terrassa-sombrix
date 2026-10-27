import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const clean = (v: unknown, max = 500) => String(v ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, max);

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (body.website) return NextResponse.json({ ok: true }); // honeypot

  const name = clean(body.name, 120);
  const phone = clean(body.phone, 40);
  const emailRaw = clean(body.email, 160);
  const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailRaw) ? emailRaw : '';
  const service = clean(body.service, 120);
  const message = String(body.message ?? '').trim().slice(0, 3000);

  if (!name || !phone || body.privacy !== 'si') {
    return NextResponse.json({ ok: false, error: 'missing' }, { status: 422 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, MAIL_TO, MAIL_FROM } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !MAIL_TO) {
    console.error('[contacto] Faltan variables SMTP en .env.local');
    return NextResponse.json({ ok: false, error: 'config' }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT || 465),
    secure: (SMTP_SECURE ?? 'true') === 'true',
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: MAIL_FROM || SMTP_USER,
      to: MAIL_TO,
      replyTo: email || undefined,
      subject: `Nueva solicitud web: ${service}`,
      text: `Nombre: ${name}\nTeléfono: ${phone}\nEmail: ${email || '-'}\nServicio: ${service}\n\nMensaje:\n${message || '-'}\n\nEnviado: ${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}`,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[contacto] Error SMTP', error);
    return NextResponse.json({ ok: false, error: 'smtp' }, { status: 502 });
  }
}
