import type { Metadata } from 'next';
import { CONTACT } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: `Kontaktieren Sie das Kfz-Sachverständigenbüro Koop in Lüdenscheid. ☎ ${CONTACT.phone} – Lennestraße 3, 58511 Lüdenscheid.`,
};

export default function KontaktPage() {
  return (
    <>
      <section className="bg-primary section-padding">
        <div className="container-custom">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Kontakt</h1>
          <p className="text-white/60 text-lg max-w-2xl">Wir sind für Sie da – rufen Sie uns an oder schreiben Sie uns.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-heading text-2xl font-bold text-primary mb-6">Schnellanfrage</h2>
              <p className="text-primary/70 mb-8">Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen zurück.</p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">Name *</label>
                    <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">Telefon *</label>
                    <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">E-Mail</label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">Ihre Nachricht *</label>
                  <textarea id="message" name="message" rows={5} required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none" />
                </div>
                <button type="submit" className="btn-primary w-full sm:w-auto">Nachricht senden</button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-light rounded-2xl p-8">
                <h3 className="font-heading text-xl font-bold text-primary mb-6">Kontaktdaten</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <p className="font-medium text-primary">{CONTACT.company}</p>
                      <p className="text-primary/60">{CONTACT.street}</p>
                      <p className="text-primary/60">{CONTACT.zip} {CONTACT.city}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div>
                      <p className="font-medium text-primary">Telefon</p>
                      <a href={CONTACT.phoneLink} className="text-accent font-semibold text-lg">{CONTACT.phone}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <p className="font-medium text-primary">E-Mail</p>
                      <a href={`mailto:${CONTACT.email}`} className="text-primary/70 hover:text-accent transition-colors">{CONTACT.email}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <p className="font-medium text-primary">Öffnungszeiten</p>
                      <p className="text-primary/60">{CONTACT.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-2xl p-8">
                <h3 className="font-heading text-xl font-bold text-primary mb-3">Rückruf gewünscht?</h3>
                <p className="text-primary/70 mb-4">Wir rufen Sie zurück – kostenlos und unverbindlich.</p>
                <a href={CONTACT.phoneLink} className="btn-primary">Jetzt anrufen: {CONTACT.phone}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
