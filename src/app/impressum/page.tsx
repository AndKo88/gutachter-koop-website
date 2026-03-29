import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Impressum' }

export default function ImpressumPage() {
  return (
    <>
      <section className="bg-navy-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4"><h1 className="text-4xl font-bold">Impressum</h1></div>
      </section>
      <section className="bg-white section-padding">
        <div className="max-w-3xl mx-auto px-4 text-gray-700 space-y-6">
          <div><h2 className="text-xl font-bold text-navy-900 mb-3">Angaben gemäß § 5 TMG</h2><p>Andreas Koop<br />Kfz-Gutachter Andreas Koop<br />Lennestraße 3<br />58511 Lüdenscheid</p></div>
          <div><h2 className="text-xl font-bold text-navy-900 mb-3">Kontakt</h2><p>Telefon: +49 2351 / 667876<br />Mobil: +49 170 / 500 40 22<br />E-Mail: info@gutachter-koop.de</p></div>
          <div><h2 className="text-xl font-bold text-navy-900 mb-3">Umsatzsteuer</h2><p>Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:<br />DE295562634</p></div>
          <div><h2 className="text-xl font-bold text-navy-900 mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2><p>Andreas Koop<br />Lennestraße 3<br />58511 Lüdenscheid</p></div>
        </div>
      </section>
    </>
  )
}
