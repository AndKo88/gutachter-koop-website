import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Datenschutz' }

export default function DatenschutzPage() {
  return (
    <>
      <section className="bg-navy-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4"><h1 className="text-4xl font-bold">Datenschutzerklärung</h1></div>
      </section>
      <section className="bg-white section-padding">
        <div className="max-w-3xl mx-auto px-4 text-gray-700 space-y-6">
          <div><h2 className="text-xl font-bold text-navy-900 mb-3">1. Datenschutz auf einen Blick</h2><p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p></div>
          <div><h2 className="text-xl font-bold text-navy-900 mb-3">2. Verantwortliche Stelle</h2><p>Andreas Koop<br />Kfz-Gutachter Andreas Koop<br />Lennestraße 3, 58511 Lüdenscheid<br />Telefon: +49 170 / 500 40 22<br />E-Mail: info@gutachter-koop.de</p></div>
          <div><h2 className="text-xl font-bold text-navy-900 mb-3">3. Datenerfassung auf dieser Website</h2><p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst.</p></div>
          <div><h2 className="text-xl font-bold text-navy-900 mb-3">4. Hosting</h2><p>Diese Website wird bei Vercel Inc. gehostet. Details entnehmen Sie der Datenschutzerklärung von Vercel.</p></div>
          <div><h2 className="text-xl font-bold text-navy-900 mb-3">5. Ihre Rechte</h2><p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.</p></div>
        </div>
      </section>
    </>
  )
}
