import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CITIES, CONTACT, QUALIFICATIONS, SERVICES } from '@/lib/data';

export const dynamicParams = false;

export async function generateStaticParams() {
  return CITIES.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const city = CITIES.find((c) => c.slug === params.city);
  if (!city) return {};
  return {
    title: `Kfz Gutachter ${city.name}`,
    description: `Kfz Gutachter in ${city.name} – Unfallgutachten, Wertminderung, Fahrzeugbewertung. Gutachter Koop kommt zu Ihnen! ☎ ${CONTACT.phone}`,
  };
}

export default function CityPage({ params }: { params: { city: string } }) {
  const city = CITIES.find((c) => c.slug === params.city);
  if (!city) notFound();

  const neighbors = CITIES.filter((c) => c.slug !== city.slug && c.region === city.region).slice(0, 4);

  return (
    <>
      <section className="bg-primary section-padding">
        <div className="container-custom">
          <Link href="/standorte" className="text-white/40 hover:text-accent transition-colors text-sm flex items-center gap-2 mb-4">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Alle Standorte
          </Link>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Kfz Gutachter {city.name}</h1>
          <p className="text-white/60 text-lg max-w-2xl">Ihr Kfz-Sachverständiger für {city.name} und Umgebung. Unfallgutachten, Wertminderung und Fahrzeugbewertung – professionell und zuverlässig.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-bold text-primary mb-6">Kfz-Sachverständiger in {city.name}</h2>
              <p className="text-primary/70 leading-relaxed mb-6">{city.description}</p>
              <p className="text-primary/70 leading-relaxed mb-6">
                Als Geschädigter bei einem Haftpflichtschaden entstehen Ihnen keine Kosten – die gegnerische Versicherung übernimmt die Gutachterkosten. Wir erstellen ein detailliertes, gerichtsfestes Gutachten, das alle Schäden an Ihrem Fahrzeug dokumentiert und als Grundlage für die Schadensregulierung dient.
              </p>
              <p className="text-primary/70 leading-relaxed mb-8">
                Unser Büro mit eigener 300m² Prüfhalle befindet sich in der Lennestraße 3 in Lüdenscheid – nur {city.distance} von {city.name} entfernt. Auf Wunsch kommen wir auch direkt zu Ihnen nach {city.name}.
              </p>

              <h3 className="font-heading text-xl font-bold text-primary mb-4">Unsere Leistungen in {city.name}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {SERVICES.map((service) => (
                  <div key={service.slug} className="flex items-center gap-3 p-4 bg-gray-light rounded-lg">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-primary/80 font-medium text-sm">{service.title}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-heading text-xl font-bold text-primary mb-4">Warum Gutachter Koop?</h3>
              <div className="space-y-3 mb-8">
                {QUALIFICATIONS.map((q) => (
                  <div key={q} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-primary/80 font-medium">{q}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-accent/5 border border-accent/20 rounded-2xl p-8 sticky top-24">
                <h3 className="font-heading text-xl font-bold text-primary mb-4">Jetzt Gutachten anfragen</h3>
                <p className="text-primary/60 text-sm mb-6">Kostenlos bei Haftpflichtschäden. Wir sind schnell für Sie da.</p>
                <a href={CONTACT.phoneLink} className="btn-primary w-full mb-3">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  {CONTACT.phone}
                </a>
                <a href={`mailto:${CONTACT.email}`} className="btn-secondary w-full text-sm">{CONTACT.email}</a>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-primary/50 text-sm"><strong className="text-primary/70">Adresse:</strong><br />{CONTACT.street}<br />{CONTACT.zip} {CONTACT.city}</p>
                  <p className="text-primary/50 text-sm mt-3"><strong className="text-primary/70">Entfernung:</strong> {city.distance} von {city.name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {neighbors.length > 0 && (
        <section className="section-padding bg-gray-light">
          <div className="container-custom">
            <h2 className="font-heading text-2xl font-bold text-primary mb-8">Kfz-Gutachter in der Nähe</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {neighbors.map((n) => (
                <Link key={n.slug} href={`/${n.slug}`} className="bg-white rounded-xl p-6 hover:shadow-md transition-all border border-gray-100 group">
                  <h3 className="font-heading font-bold text-primary group-hover:text-accent transition-colors">{n.name}</h3>
                  <p className="text-primary/40 text-sm">{n.distance}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
