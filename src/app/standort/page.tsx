import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Standort Lüdenscheid' }

export default function StandortPage() {
  return (
    <>
      <section className="bg-navy-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Standort Lüdenscheid</h1>
          <p className="text-white/70 text-lg">Besuchen Sie uns in unserer Prüfhalle.</p>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-6">Kfz Sachverständigenbüro Koop</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
              <p>Das Sachverständigenbüro Koop befindet sich an der Lennestraße 3, im Herzen von Lüdenscheid. Doch in der heutigen digitalen Zeit sind wir nicht nur an diesen Standort gebunden. Selbstverständlich sind persönliche Treffen und Vor-Ort-Begutachtungen in Lüdenscheid und Umgebung immer möglich. Mit dieser Flexibilität bedienen wir Kunden nicht nur in Lüdenscheid, sondern in der gesamten Region und darüber hinaus.</p>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <div><strong className="text-navy-900">Adresse</strong><br />Lennestraße 3, 58511 Lüdenscheid</div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <div><strong className="text-navy-900">Telefon</strong><br /><a href="tel:01705004022" className="text-accent hover:underline">0170 / 500 40 22</a><br /><a href="tel:+492351667876" className="hover:underline">02351 / 667876</a></div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <div><strong className="text-navy-900">E-Mail</strong><br /><a href="mailto:info@gutachter-koop.de" className="text-accent hover:underline">info@gutachter-koop.de</a></div>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="tel:01705004022" className="btn-primary">Jetzt Anrufen</a>
              <a href="https://wa.me/491705004022" target="_blank" rel="noopener noreferrer" className="btn-outline">Direkt Nachricht</a>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.8!2d7.6278!3d51.2197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b94f0a0a0a0a0a%3A0x0!2sLennestraße+3%2C+58511+Lüdenscheid!5e0!3m2!1sde!2sde!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Standort Kfz Gutachter Koop Lüdenscheid"
            />
          </div>
        </div>
      </section>
    </>
  )
}
