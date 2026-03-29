import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES, CONTACT } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Leistungen',
  description: 'Unfallgutachten, Wertminderung, Fahrzeugbewertung, Sachverständigenverfahren und mehr. Professionelle Kfz-Gutachten vom Sachverständigenbüro Koop in Lüdenscheid.',
};

export default function LeistungenPage() {
  return (
    <>
      <section className="bg-primary section-padding">
        <div className="container-custom">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Unsere Leistungen</h1>
          <p className="text-white/60 text-lg max-w-2xl">Professionelle Kfz-Gutachten für jeden Bedarf – von der Unfallschadensbegutachtung bis zur Oldtimer-Bewertung.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {SERVICES.map((service, i) => (
              <div key={service.slug} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">{service.title}</h2>
                  <p className="text-primary/70 leading-relaxed mb-6">{service.description}</p>
                  <a href={CONTACT.phoneLink} className="btn-primary">
                    Jetzt Termin vereinbaren
                  </a>
                </div>
                <div className={`bg-gray-light rounded-2xl p-12 flex items-center justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="w-24 h-24 rounded-2xl gold-gradient flex items-center justify-center">
                    <span className="text-white font-heading font-bold text-3xl">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">Kostenlos bei Haftpflichtschäden</h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-8">Als Geschädigter bei einem Haftpflichtschaden entstehen Ihnen keine Kosten. Die gegnerische Versicherung übernimmt die Gutachterkosten.</p>
          <a href={CONTACT.phoneLink} className="btn-primary text-lg py-5 px-10">{CONTACT.phone}</a>
        </div>
      </section>
    </>
  );
}
