import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Vorteile' }

const compareData = [
  { feature: 'Zerlegung von Bauteilen', koop: 'Standard bei uns', frei: 'Möglich', versicherung: 'Selten' },
  { feature: 'Achsvermessung', koop: 'Vor Ort verfügbar', frei: 'Nicht immer vor Ort', versicherung: 'Nicht vor Ort' },
  { feature: 'Karosserievermessung', koop: 'Vor Ort verfügbar', frei: 'Nicht immer vor Ort', versicherung: 'Nicht vor Ort' },
  { feature: 'Mietwagenservice', koop: 'Immer verfügbar und kundenorientiert', frei: 'Nach Verfügbarkeit', versicherung: 'Nach Verfügbarkeit' },
  { feature: 'Anwaltservice', koop: 'Vollumfänglicher Service', frei: 'Selten', versicherung: 'Nein' },
  { feature: 'Prüfhalle mit guter Belichtung', koop: 'Spezialisierte Prüfhalle mit optimaler Beleuchtung', frei: 'Variiert', versicherung: 'Nein' },
  { feature: 'Kundenbetreuung', koop: 'Persönlich, individuell und engagiert', frei: 'Variiert', versicherung: 'Standardisiert' },
]

export default function VorteilePage() {
  return (
    <>
      <section className="bg-navy-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Unsere Vorteile</h1>
          <p className="text-white/70 text-lg">Warum Gutachter Koop die richtige Wahl für Ihr Kfz Gutachten ist.</p>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-900 mb-10 text-center">Kfz Gutachter Andreas Koop im Vergleich</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="bg-navy-900 text-white"><th className="text-left p-4 font-semibold rounded-tl-lg">Leistung</th><th className="text-left p-4 font-semibold text-accent">Gutachter Koop</th><th className="text-left p-4 font-semibold">Freier Gutachter</th><th className="text-left p-4 font-semibold rounded-tr-lg">Versicherungsgutachter</th></tr></thead>
              <tbody>{compareData.map((row, i) => (<tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}><td className="p-4 font-medium text-navy-900">{row.feature}</td><td className="p-4 text-green-700 font-medium">&#10003; {row.koop}</td><td className="p-4 text-gray-600">{row.frei}</td><td className="p-4 text-gray-600">{row.versicherung}</td></tr>))}</tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 section-padding">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">Warum ein Kostenvoranschlag nicht genügt</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>Viele Versicherungen fordern zunächst einen Kostenvoranschlag, jedoch erfordert eine genaue Bewertung des Schadens <strong>ein professionelles Kfz Gutachten</strong>, da es verborgene und spätere Schäden aufdecken kann, die in einem Kostenvoranschlag oft übersehen werden.</p>
            <p>Viele Kostenvoranschläge mögen auf den ersten Blick detailliert erscheinen, sind jedoch oft standardisiert und lassen wichtige Fakten außen vor. Bei uns wird jedes Fahrzeug detailliert untersucht: Wir zerlegen Bauteile in unserer eigenen Prüfhalle, analysieren Schäden gründlich, führen Achs- und Karosserievermessungen durch und sorgen dank digitaler Prozesse für schnelle Ergebnisse.</p>
          </div>
        </div>
      </section>

      <section className="bg-accent py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">Überzeugt?</h2>
          <p className="text-navy-800 mb-8">Rufen Sie uns jetzt an für eine kostenlose Erstberatung.</p>
          <a href="tel:01705004022" className="inline-flex items-center justify-center px-8 py-4 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-all text-sm">0170 - 500 40 22</a>
        </div>
      </section>
    </>
  )
}
