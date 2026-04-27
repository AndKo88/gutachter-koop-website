import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Achsvermessung nach Unfall | Koch HD-10 Messsystem',
  description: 'Präzise Achsvermessung in Lüdenscheid nach einem Unfall. Beweissicherung mit dem Motorsport-Messsystem Koch HD-10 EasyTouch. 0€ Kosten für Geschädigte.',
  keywords: ['Achsvermessung Lüdenscheid', 'Achsvermessung nach Unfall', 'Koch Achsmesssystem', 'Fahrwerkvermessung', 'Eingangsvermessung', 'Unfallgutachten', 'Koch HD-10'],
  alternates: { canonical: 'https://gutachter-koop.de/achsvermessung' },
  openGraph: {
    title: 'Achsvermessung nach Unfall | Koch HD-10 | Gutachter Koop',
    description: 'Präzise Achsvermessung in Lüdenscheid nach einem Unfall. Beweissicherung mit dem Motorsport-Messsystem Koch HD-10. 0€ Kosten für Geschädigte.',
    url: 'https://gutachter-koop.de/achsvermessung',
    siteName: 'Kfz Gutachter Koop',
    locale: 'de_DE',
    type: 'website',
  },
}

const faqData = [
  {
    q: 'Wann ist eine Achsvermessung nach einem Unfall nötig?',
    a: 'Eine Achsvermessung ist immer dann dringend anzuraten, wenn es bei einem Unfall zu einem Anstoß im Bereich der Räder, der Felgen, des Fahrwerks oder der Lenkung kam. Auch bei scheinbar leichten Kratzern an der Felge kann die empfindliche Achsgeometrie bereits verstellt sein.',
  },
  {
    q: 'Wer zahlt die Achsvermessung nach einem Unfall?',
    a: 'Wenn Sie unverschuldet in einen Verkehrsunfall verwickelt wurden, übernimmt die gegnerische Haftpflichtversicherung die Kosten für die Achsvermessung. Sie zählt zu den notwendigen Kosten der Schadensfeststellung.',
  },
  {
    q: 'Warum wird bei der Begutachtung nur gemessen und nicht eingestellt?',
    a: 'Als unabhängige Gutachter führen wir ausschließlich eine sogenannte Eingangsvermessung durch. Das bedeutet, wir dokumentieren den Ist-Zustand nach dem Unfall zur Beweissicherung. Eine sofortige Einstellung würde diesen Beweis vernichten. Die Einstellung erfolgt später in der Reparaturwerkstatt.',
  },
  {
    q: 'Was ist das Besondere am Koch HD-10 Messsystem?',
    a: 'Das Koch HD-10 EasyTouch System ermöglicht eine hochpräzise Laser-Vermessung im Fahrzustand, ohne dass das Fahrzeug angehoben werden muss. Diese Technologie aus dem Motorsport garantiert absolut verfälschungsfreie und gerichtsfeste Messergebnisse.',
  },
]

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Achsvermessung nach Unfall',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Kfz Gutachter Andreas Koop',
    telephone: '0170 500 4022',
    url: 'https://gutachter-koop.de',
    address: { '@type': 'PostalAddress', addressLocality: 'Lüdenscheid', addressRegion: 'NRW', postalCode: '58507', addressCountry: 'DE' },
  },
  description: 'Präzise Eingangsvermessung des Fahrwerks nach einem Unfall zur Beweissicherung mit dem Koch HD-10 EasyTouch Achsmesssystem.',
  areaServed: { '@type': 'City', name: 'Lüdenscheid' },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function AchsvermessungPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── Hero ── */}
      <section className="bg-navy-900 text-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">Leistung</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Achsvermessung nach Unfall
            </h1>
            <p className="text-xl md:text-2xl text-white/70 mb-8 leading-relaxed">
              Nur ein Kratzer an der Felge? Gehen Sie kein Risiko ein. Wir decken verborgene Fahrwerksschäden mit dem Koch&nbsp;HD&#8209;10 Lasermesssystem auf.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:01705004022" className="btn-primary text-base px-8 py-4">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                0170 - 500 40 22
              </a>
              <a href="https://wa.me/491705004022" target="_blank" rel="noopener noreferrer" className="btn-secondary text-base px-8 py-4">
                Termin per WhatsApp
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/60">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Eingangsvermessung zur Beweissicherung
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Koch HD-10 EasyTouch System
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                0&thinsp;€ Kosten für Geschädigte
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem / Lösung ── */}
      <section className="bg-white section-padding">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Verborgene Schäden erkennen</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Nach einem Verkehrsunfall konzentriert sich der Blick oft nur auf offensichtliche Blechschäden. Doch gerade wenn der Anstoß im Bereich der Räder erfolgte &ndash; selbst wenn es nur ein scheinbar harmloser Felgenkratzer ist &ndash; können massive Kräfte auf die Fahrwerksgeometrie gewirkt haben.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Eine verstellte Spur oder ein fehlerhafter Sturz sind mit dem bloßen Auge nicht zu erkennen, stellen aber ein erhebliches Sicherheitsrisiko dar. Das Fahrzeug zieht zur Seite, der Bremsweg verlängert sich und die Reifen verschleißen einseitig.
              </p>
              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg">
                <h3 className="text-lg font-bold text-navy-900 mb-2">Wichtig für Ihr Gutachten:</h3>
                <p className="text-gray-700">
                  Wir führen ausschließlich eine <strong>Eingangsvermessung</strong> durch. Wir dokumentieren den exakten Ist-Zustand nach dem Unfall, ohne etwas einzustellen. Nur so bleibt der Beweis für den Fahrwerksschaden erhalten und kann gegenüber der Versicherung geltend gemacht werden.
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/achsvermessung/achsvermessung-pruefhalle-mustang.webp"
                alt="Achsvermessung am Ford Mustang in der Prüfhalle von Gutachter Koop Lüdenscheid"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Koch HD-10 System ── */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Motorsport-Präzision in Lüdenscheid</h2>
            <p className="text-lg text-gray-600">
              Wir vertrauen auf das renommierte Koch HD-10 EasyTouch Achsmesssystem &ndash; für absolute Genauigkeit bei der Beweissicherung.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-14">
            {[
              {
                title: 'Messung im Fahrzustand',
                text: 'Das Fahrzeug muss für die Messung nicht angehoben werden. Dies verhindert Verfälschungen der Achsgeometrie und liefert exakte Ergebnisse.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M22 12h-4M6 12H2M12 6V2M12 22v-4" /><circle cx="12" cy="12" r="3" /></svg>
                ),
              },
              {
                title: 'Grüne Lasertechnologie',
                text: 'Hochpräzise Lasermessköpfe erfassen Spur, Sturz, Spurdifferenzwinkel und Achsschrägstand auf den Millimeter genau.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></svg>
                ),
              },
              {
                title: 'Gerichtsfeste Beweise',
                text: 'Die detaillierten Messprotokolle des Koch-Systems dienen als unumstößlicher Beweis gegenüber der Versicherung.',
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                ),
              },
            ].map((card) => (
              <div key={card.title} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6 text-accent">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bilder ── */}
      <section className="bg-white section-padding">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/achsvermessung/achsvermessung-rad-detail-koch.webp"
                alt="Detailaufnahme des Koch HD-10 Achsmesssystems am Rad – Lasermessung der Spurgeometrie"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/achsvermessung/achsvermessung-heck-messsystem.webp"
                alt="Heckansicht mit montiertem Koch Messsystem – Achsvermessung in der Prüfhalle Lüdenscheid"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy-900 mb-10 text-center">Häufige Fragen zur Achsvermessung</h2>
          <div className="space-y-4">
            {faqData.map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-navy-900 mb-3">{faq.q}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-accent py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">Verdacht auf Fahrwerksschaden?</h2>
          <p className="text-navy-800 mb-8 text-lg">Lassen Sie Ihr Fahrzeug professionell vermessen. Als Geschädigter zahlen Sie dafür keinen Cent.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:01705004022" className="inline-flex items-center justify-center px-8 py-4 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-all text-sm">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Jetzt anrufen
            </a>
            <a href="https://wa.me/491705004022" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 border-2 border-navy-900 text-navy-900 font-semibold rounded-lg hover:bg-navy-900 hover:text-white transition-all text-sm">
              Termin per WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
