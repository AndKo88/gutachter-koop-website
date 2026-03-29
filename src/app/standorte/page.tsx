import type { Metadata } from 'next';
import Link from 'next/link';
import { CITIES, CONTACT } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Standorte',
  description: 'Kfz-Gutachter im Märkischen Kreis und Umgebung. Wir sind in Lüdenscheid, Iserlohn, Hagen, Arnsberg und vielen weiteren Städten für Sie da.',
};

export default function StandortePage() {
  return (
    <>
      <section className="bg-primary section-padding">
        <div className="container-custom">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Unsere Standorte</h1>
          <p className="text-white/60 text-lg max-w-2xl">Wir sind im gesamten Märkischen Kreis und darüber hinaus für Sie da. Unser Hauptsitz mit eigener 300m² Prüfhalle befindet sich in Lüdenscheid.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CITIES.map((city) => (
              <Link key={city.slug} href={`/${city.slug}`} className="group bg-gray-light rounded-xl p-6 hover:shadow-md transition-all border border-gray-100">
                <div className="flex justify-between items-start mb-3">
                  <h2 className="font-heading text-lg font-bold text-primary group-hover:text-accent transition-colors">{city.name}</h2>
                  <span className="text-primary/40 text-sm">{city.distance}</span>
                </div>
                <p className="text-primary/50 text-sm mb-3">{city.region}</p>
                <p className="text-primary/60 text-sm leading-relaxed line-clamp-2">{city.description}</p>
                <span className="text-accent text-sm font-medium flex items-center gap-1 mt-3">
                  Mehr erfahren
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">Ihre Stadt nicht dabei?</h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-8">Kein Problem – wir kommen auch zu Ihnen. Rufen Sie uns einfach an.</p>
          <a href={CONTACT.phoneLink} className="btn-primary text-lg py-5 px-10">{CONTACT.phone}</a>
        </div>
      </section>
    </>
  );
}
