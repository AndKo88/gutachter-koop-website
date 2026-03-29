import type { Metadata } from 'next';
import Link from 'next/link';
import { CONTACT } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Mietwagen nach Unfall',
  description: 'Mietwagen nach Unfall – kostenlos bei Haftpflichtschäden. Wir vermitteln Ihnen einen Mietwagen in vergleichbarer Klasse.',
};

export default function MietwagenPage() {
  return (
    <>
      <section className="bg-primary section-padding">
        <div className="container-custom">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Mietwagen nach Unfall</h1>
          <p className="text-white/60 text-lg max-w-2xl">Kostenloser Mietwagen bei Haftpflichtschäden – wir kümmern uns darum.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-primary mb-6">Ihr Recht auf einen Mietwagen</h2>
          <p className="text-primary/70 leading-relaxed mb-6">
            Nach einem unverschuldeten Unfall haben Sie Anspruch auf einen Mietwagen in vergleichbarer Klasse. Die Kosten trägt die gegnerische Versicherung. Wir unterstützen Sie bei der Vermittlung und stellen sicher, dass Ihre Mobilität gewährleistet bleibt.
          </p>
          <p className="text-primary/70 leading-relaxed mb-6">
            Alternativ zum Mietwagen können Sie eine Nutzungsausfallentschädigung geltend machen. Die Höhe richtet sich nach der Fahrzeugklasse und liegt typischerweise zwischen 23€ und 175€ pro Tag.
          </p>

          <h3 className="font-heading text-xl font-bold text-primary mb-4">Unser Service</h3>
          <div className="space-y-4 mb-8">
            {[
              'Vermittlung eines Mietwagens in vergleichbarer Klasse',
              'Direkte Abrechnung mit der gegnerischen Versicherung',
              'Keine Kosten für Sie bei Haftpflichtschäden',
              'Beratung zu Nutzungsausfall vs. Mietwagen',
              'Schnelle und unkomplizierte Abwicklung',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="text-primary/80">{item}</span>
              </div>
            ))}
          </div>

          <div className="p-8 bg-accent/5 border border-accent/20 rounded-2xl">
            <h3 className="font-heading text-xl font-bold text-primary mb-3">Mietwagen benötigt?</h3>
            <p className="text-primary/70 mb-4">Rufen Sie uns an – wir kümmern uns um alles.</p>
            <a href={CONTACT.phoneLink} className="btn-primary">{CONTACT.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
