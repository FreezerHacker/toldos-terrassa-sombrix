'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useId, useState } from 'react';
import { paths, phoneHref, site } from '@/lib/site';

export default function ContactForm({ services, selected = '' }: { services: string[]; selected?: string }) {
  const id = useId();
  const router = useRouter();
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle');

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    try {
      const res = await fetch('/api/contacto/', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error('send');
      router.push('/gracias/');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate={false}>
      <div className="form-grid">
        <div className="field">
          <label htmlFor={`${id}-name`}>Nombre</label>
          <input id={`${id}-name`} name="name" autoComplete="name" required maxLength={120} />
        </div>
        <div className="field">
          <label htmlFor={`${id}-phone`}>Teléfono</label>
          <input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" inputMode="tel" required maxLength={40} />
        </div>
        <div className="field field--full">
          <label htmlFor={`${id}-email`}>Correo electrónico <span className="field__optional">(opcional)</span></label>
          <input id={`${id}-email`} name="email" type="email" autoComplete="email" maxLength={160} />
        </div>
        <div className="field field--full">
          <label htmlFor={`${id}-service`}>¿Qué necesitas?</label>
          <select id={`${id}-service`} name="service" defaultValue={selected || services[0]}>
            {services.map((s) => <option key={s} value={s}>{s}</option>)}
            <option value="No lo sé">No lo sé, necesito consejo</option>
          </select>
        </div>
        <div className="field field--full">
          <label htmlFor={`${id}-message`}>Cuéntanos un poco más <span className="field__optional">(opcional)</span></label>
          <textarea id={`${id}-message`} name="message" rows={4} maxLength={3000} placeholder="Por ejemplo: terraza de 4 metros de ancho, orientada al sur." />
        </div>
        <div className="field field--hp" aria-hidden="true">
          <label htmlFor={`${id}-website`}>No rellenar</label>
          <input id={`${id}-website`} name="website" tabIndex={-1} autoComplete="off" />
        </div>
      </div>
      <label className="form-consent">
        <input type="checkbox" name="privacy" value="si" required />
        <span>He leído la <Link href={paths.privacy}>información de privacidad</Link> y acepto que me contactéis para responder a mi solicitud.</span>
      </label>
      {status === 'error' && (
        <p className="form-error" role="alert">No hemos podido enviar tu solicitud. Llámanos al <a href={phoneHref}>{site.phoneDisplay}</a> o vuelve a intentarlo.</p>
      )}
      <button className="button button--primary button--lg button--block" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Enviando…' : 'Enviar y que me llamen'}
      </button>
      <p className="form-note">Respondemos de lunes a sábado. Tus datos solo se usan para atender esta solicitud.</p>
    </form>
  );
}
