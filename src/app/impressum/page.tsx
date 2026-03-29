import type { Metadata } from 'next';
import { CONTACT } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum des Kfz-Sachverständigenbüros Andreas Koop in Lüdenscheid.',
};

export default function ImpressumPage() {
  return (
    <>
      <section className="bg-primary section-padding">
        <div className="container-custom">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">Impressum</h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-primary mb-4">Angaben gemäß § 5 TMG</h2>
          <div className="text-primary/70 leading-relaxed space-y-6">
            <div>
              <p className="font-semibold text-primary">{CONTACT.company}</p>
              <p>{CONTACT.name}</p>
              <p>{CONTACT.street}</p>
              <p>{CONTACT.zip} {CONTACT.city}</p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-bold text-primary mb-2">Kontakt</h3>
              <p>Telefon: {CONTACT.phone}</p>
              <p>E-Mail: {CONTACT.email}</p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-bold text-primary mb-2">Berufsbezeichnung</h3>
              <p>Kfz-Techniker-Meister, ausgebildet an der BVSK-Akademie</p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-bold text-primary mb-2">Umsatzsteuer-ID</h3>
              <p>Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz: wird nachgetragen</p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-bold text-primary mb-2">Streitschlichtung</h3>
              <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" className="text-accent hover:text-accent-light transition-colors" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a></p>
              <p className="mt-2">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-bold text-primary mb-2">Haftung für Inhalte</h3>
              <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
