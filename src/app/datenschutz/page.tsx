import type { Metadata } from 'next';
import { CONTACT } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Datenschutz',
  description: 'Datenschutzerklärung des Kfz-Sachverständigenbüros Andreas Koop in Lüdenscheid.',
};

export default function DatenschutzPage() {
  return (
    <>
      <section className="bg-primary section-padding">
        <div className="container-custom">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">Datenschutzerklärung</h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="text-primary/70 leading-relaxed space-y-8">
            <div>
              <h2 className="font-heading text-2xl font-bold text-primary mb-4">1. Datenschutz auf einen Blick</h2>
              <h3 className="font-heading text-lg font-bold text-primary mb-2">Allgemeine Hinweise</h3>
              <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-primary mb-4">2. Verantwortliche Stelle</h2>
              <p>{CONTACT.company}<br />{CONTACT.name}<br />{CONTACT.street}<br />{CONTACT.zip} {CONTACT.city}</p>
              <p className="mt-2">Telefon: {CONTACT.phone}<br />E-Mail: {CONTACT.email}</p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-primary mb-4">3. Datenerfassung auf dieser Website</h2>
              <h3 className="font-heading text-lg font-bold text-primary mb-2">Server-Log-Dateien</h3>
              <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse.</p>
              <p className="mt-2">Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-bold text-primary mb-2">Kontaktformular</h3>
              <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-primary mb-4">4. Ihre Rechte</h2>
              <p>Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.</p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-primary mb-4">5. Hosting</h2>
              <p>Diese Website wird bei Vercel Inc. gehostet. Die Server befinden sich in der EU. Details zum Datenschutz von Vercel finden Sie unter: <a href="https://vercel.com/legal/privacy-policy" className="text-accent hover:text-accent-light transition-colors" target="_blank" rel="noopener noreferrer">vercel.com/legal/privacy-policy</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
