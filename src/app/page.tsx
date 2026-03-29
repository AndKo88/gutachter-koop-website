import Image from 'next/image'
import Link from 'next/link'

const reviews = [
  { name: 'Elektro Wandelt', text: 'Perfekter Service! Sehr schnelle Reaktion. Stets sehr gut erreichbar. Professionelle und umfangreiche Gutachtenerstellung.' },
  { name: 'Elisa Kramer', text: 'So eine Form der Kundenorientierung habe ich selten in diesem Bereich erlebt und habe es sehr positiv wahrgenommen.' },
  { name: 'Slawa Seiz', text: 'Das Gutachten ist der Hammer, nicht nur ein Brief mit zwei Seiten, sondern eine ganze Mappe wo alles erklärt und erläutert wird.' },
  { name: 'Wowa ba', text: 'Wir sind immer mehr als zufrieden gewesen. Top Service. Wir empfehlen das Büro gerne weiter!' },
  { name: 'Taras Bauer', text: 'Auch der Anwalt erledigt seine Aufgaben auf dem höchsten Level. Kann ich nur weiterempfehlen!' },
  { name: 'Vladimir Pfafenrot', text: 'Bin sehr zufrieden mit dem Ergebniss gewesen. Sehr gute Arbeit! Danke für das schnelle und detaillierte Gutachten.' },
]

const compareData = [
  { feature: 'Zerlegung von Bauteilen', koop: 'Standard bei uns', frei: 'Möglich', versicherung: 'Selten' },
  { feature: 'Achsvermessung', koop: 'Vor Ort verfügbar', frei: 'Nicht immer vor Ort', versicherung: 'Nicht vor Ort' },
  { feature: 'Karosserievermessung', koop: 'Vor Ort verfügbar', frei: 'Nicht immer vor Ort', versicherung: 'Nicht vor Ort' },
  { feature: 'Mietwagenservice', koop: 'Immer verfügbar und kundenorientiert', frei: 'Nach Verfügbarkeit', versicherung: 'Nach Verfügbarkeit' },
  { feature: 'Anwaltservice', koop: 'Vollumfänglicher Service', frei: 'Selten', versicherung: 'Nein' },
  { feature: 'Prüfhalle mit guter Belichtung', koop: 'Spezialisierte Prüfhalle mit optimaler Beleuchtung', frei: 'Variiert', versicherung: 'Nein' },
  { feature: 'Kundenbetreuung', koop: 'Persönlich, individuell und engagiert', frei: 'Variiert', versicherung: 'Standardisiert' },
]

const steps = [
  { nr: '01', title: 'Der Erstkontakt', time: 'ca. 30 Min', text: 'Beim gemeinsamen Erstgespräch klären wir alle wichtigen Details rund um den Schaden an Ihrem Fahrzeug. Erzählen Sie unserem Expertenteam von den Umständen, zeigen Sie uns die betroffenen Bereiche und informieren Sie uns über Ihre Erwartungen und Wünsche.' },
  { nr: '02', title: 'Die Schadenaufnahme', time: 'ca. 20 Min', text: 'Ob bei Ihnen Zuhause, auf der Arbeit oder in Ihrer ausgesuchten Werkstatt. Sobald alle Details besprochen sind, nimmt unser Team den Schaden präzise auf. Dabei nutzen wir modernste Technologie und bewährte Methoden, um sicherzustellen, dass nichts übersehen wird.' },
  { nr: '03', title: 'Die Auswertung', time: 'ca. 10 Min', text: 'Nach der Schadenaufnahme analysieren unsere Experten die Daten und erstellen das Gutachten. Dabei achten wir darauf, dass alles verständlich und nachvollziehbar ist. Sie erhalten einen Überblick über den Zustand Ihres Fahrzeugs und die zu erwartenden Kosten.' },
  { nr: '04', title: 'Das fertige Gutachten', time: '', text: 'Wir erstellen nicht nur Ihr detailliertes Gutachten, sondern versenden es auch direkt an einen Rechtsanwalt oder die Versicherung. Unser Ziel ist es, den Prozess für Sie so einfach wie möglich zu gestalten und sicherzustellen, dass Sie schnell Ihr Geld erhalten.' },
]

const stats = [
  { value: '8', label: 'Mitarbeiter' },
  { value: '12+', label: 'Jahre Erfahrung' },
  { value: '20.000+', label: 'Gutachten erstellt' },
  { value: '100%', label: 'An Ihrer Seite' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4">KFZ GUTACHTER LÜDENSCHEID</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">Nicht nur ein Kfz Gutachter, <span className="text-accent">sondern Ihr vertrauenswürdiger Partner.</span></h1>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">Unsere Kfz Experten erstellen detaillierte Kfz Gutachten, die bei der Schadenregulierung für eine schnelle Abwicklung sorgen.</p>
              <div className="flex flex-wrap gap-4 mb-10">
                <a href="tel:01705004022" className="btn-primary">0170 - 500 40 22</a>
                <a href="https://wa.me/491705004022" target="_blank" rel="noopener noreferrer" className="btn-secondary">WhatsApp</a>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center"><div className="text-2xl font-bold text-accent">20.000+</div><div className="text-xs text-white/50">erstellte Kfz Gutachten</div></div>
                <div className="w-px h-10 bg-white/20" />
                <div className="flex items-center gap-2">
                  <div className="flex text-accent">{[...Array(5)].map((_, i) => (<svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}</div>
                  <span className="text-sm text-white/50">5.0 | über 180 Bewertungen</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block"><Image src="/images/andreas-koop-portrait.webp" alt="Andreas Koop - Kfz Gutachter" width={500} height={600} className="rounded-2xl shadow-2xl" priority /></div>
          </div>
        </div>
      </section>

      {/* 3 Features */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[
            { title: 'Telefonisch anfragen', text: 'Ein Autounfall kann stressig sein, und ohne das richtige Kfz Gutachten können Sie wertvolle Ansprüche verlieren.' },
            { title: 'Detaillierte Schadenaufnahme', text: 'Wir nutzen moderne Technik und Meisterwissen, um Ihnen ein Kfz Gutachten zu liefern, das den Unterschied macht.' },
            { title: 'Schadenregulierung', text: 'Unsere ausführlichen Gutachten minimieren Streitigkeiten und beschleunigen die Regulierung.' },
          ].map((item, i) => (
            <div key={i} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-accent/10 text-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={i === 0 ? "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" : i === 1 ? "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" : "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"} /></svg>
              </div>
              <h3 className="font-heading font-bold text-navy-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Über uns */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div><Image src="/images/hero-andreas-koop.webp" alt="Kfz Sachverständigenbüro Koop" width={600} height={400} className="rounded-xl shadow-lg" /></div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">Das Kfz Sachverständigenbüro in Lüdenscheid - Gutachter Koop</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>Seit <strong>über 10 Jahren</strong> unterstützen mein Team und ich Autofahrer nach Kfz Unfällen in Lüdenscheid und Umgebung. Egal, ob kleinste Bagatellschäden oder schwere Totalschäden - <strong>wir kümmern uns individuell um jeden Fall!</strong></p>
              <p>Neben flexiblen Besichtigungen bei Ihnen bieten wir eine <strong>hochmoderne, gut belichtete Prüfhalle und Ersatzfahrzeuge</strong> an, um Ihren Alltag während der Begutachtung ungestört zu halten.</p>
              <p>Wir konzentrieren uns darauf, durch <strong>detaillierte Untersuchungen und klare, verständliche Aufnahmen</strong>, Ihnen ein umfassendes Kfz Gutachten zu liefern.</p>
              <p>Ein Anruf bei uns ist Ihr nächster Schritt zur <strong>schnellen Schadensregulierung.</strong></p>
            </div>
          </div>
        </div>
      </section>

      {/* Bewertungen */}
      <section className="bg-white section-padding">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-3 mb-4">
              <Image src="/images/google-logo.png" alt="Google" width={80} height={28} className="h-7 w-auto" />
              <div className="flex text-accent">{[...Array(5)].map((_, i) => (<svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}</div>
              <span className="text-gray-500 text-sm">über 180 Bewertungen</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex text-accent mb-3">{[...Array(5)].map((_, j) => (<svg key={j} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}</div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">&ldquo;{r.text}&rdquo;</p>
                <p className="font-semibold text-navy-900 text-sm">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warum Gutachten */}
      <section className="bg-navy-900 text-white section-padding">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Warum ein Kostenvoranschlag nicht genügt</h2>
          <div className="space-y-4 text-white/80 leading-relaxed">
            <p>Viele Versicherungen fordern zunächst einen Kostenvoranschlag, jedoch erfordert eine genaue Bewertung des Schadens <strong className="text-white">ein professionelles Kfz Gutachten</strong>, da...</p>
            <ul className="space-y-3 pl-4">
              <li className="flex gap-3"><span className="text-accent mt-1">&#10003;</span> es verborgene und spätere Schäden aufdecken kann, die in einem Kostenvoranschlag oft übersehen werden.</li>
              <li className="flex gap-3"><span className="text-accent mt-1">&#10003;</span> es detaillierte Übersicht über alle anfallenden Kosten gibt, inklusive potenzieller Folgekosten.</li>
              <li className="flex gap-3"><span className="text-accent mt-1">&#10003;</span> es von einem unabhängigen Experten erstellt wird, der im Gegensatz zur Werkstatt keine Reparaturinteressen verfolgt.</li>
            </ul>
            <p>Viele Kostenvoranschläge mögen auf den ersten Blick detailliert erscheinen, sind jedoch oft standardisiert und lassen wichtige Fakten außen vor. Bei uns wird jedes Fahrzeug detailliert untersucht: Wir zerlegen Bauteile in unserer eigenen Prüfhalle, analysieren Schäden gründlich, führen Achs- und Karosserievermessungen durch und sorgen dank digitaler Prozesse für schnelle Ergebnisse.</p>
            <p className="italic text-accent/80">Viele Kunden kommen zu uns wegen gering ausfallenden Kostenvoranschlägen von anderen Anbietern!</p>
          </div>
        </div>
      </section>

      {/* Vergleichstabelle */}
      <section className="bg-white section-padding">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-10 text-center">Kfz Gutachter Andreas Koop</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="bg-navy-900 text-white"><th className="text-left p-4 font-semibold rounded-tl-lg">Leistung</th><th className="text-left p-4 font-semibold text-accent">Gutachter Koop</th><th className="text-left p-4 font-semibold">Freier Gutachter</th><th className="text-left p-4 font-semibold rounded-tr-lg">Versicherungsgutachter</th></tr></thead>
              <tbody>{compareData.map((row, i) => (<tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}><td className="p-4 font-medium text-navy-900">{row.feature}</td><td className="p-4 text-green-700 font-medium">&#10003; {row.koop}</td><td className="p-4 text-gray-600">{row.frei}</td><td className="p-4 text-gray-600">{row.versicherung}</td></tr>))}</tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Individuelle Betreuung */}
      <section className="bg-gray-50 section-padding">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8 text-center">Jeder Unfall muss individuell behandelt werden</h2>
          <p className="text-gray-600 text-center mb-10">Warum jeder Autofahrer nach einem Unfall <strong>mehr verdient</strong> als nur eine standardisierte Betreuung:</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Schnellere Abwicklung', text: 'Sie möchten keine Ewigkeit auf die Klärung Ihres Falls warten. Unsere effizienten und digitalen Prozesse beschleunigen den Weg zur Schadensregulierung.' },
              { title: 'Präzise Begutachtung', text: 'Ein Autounfall kann kompliziert sein. Unsere gründlichen Schadenaufnahmen und Gutachten sorgen für Klarheit und Fairness.' },
              { title: 'Mehr als nur Zahlen', text: 'Es geht nicht nur darum, den Schaden zu beziffern. Es geht um Ihr Fahrzeug, Ihre Mobilität und Ihren Frieden. Wir bieten umfassenden Service.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-navy-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 text-center mt-10 leading-relaxed">Mit Gutachter Koop in Lüdenscheid sind Sie nicht nur eine Aktennummer. Wir setzen uns für Ihre Interessen ein und <strong>stehen Ihnen von Anfang bis Ende zur Seite.</strong></p>
        </div>
      </section>

      {/* Kennzahlen */}
      <section className="bg-navy-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (<div key={i} className="text-center"><div className="text-3xl md:text-4xl font-bold text-accent mb-2">{s.value}</div><div className="text-white/60 text-sm">{s.label}</div></div>))}
        </div>
      </section>

      {/* 4 Schritte */}
      <section className="bg-white section-padding">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">In 4 Schritten zu Ihrem detaillierten Kfz Gutachten</h2><p className="text-gray-500">Ihr Zeitaufwand: Weniger als 1,5 Stunden</p></div>
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-xl bg-gray-50 border border-gray-100">
                <div className="flex-shrink-0 w-14 h-14 bg-navy-900 text-accent rounded-xl flex items-center justify-center font-bold text-lg">{step.nr}</div>
                <div><h3 className="font-bold text-navy-900 mb-1">{step.title}{step.time && <span className="text-gray-400 font-normal text-sm ml-2">({step.time})</span>}</h3><p className="text-gray-600 text-sm leading-relaxed">{step.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Schaden am Fahrzeug?</h2>
          <p className="text-navy-800 text-lg mb-8">Wir schauen genauer hin.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:01705004022" className="inline-flex items-center justify-center px-8 py-4 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-all text-sm">Jetzt Anrufen</a>
            <a href="https://wa.me/491705004022" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 border-2 border-navy-900 text-navy-900 font-semibold rounded-lg hover:bg-navy-900 hover:text-white transition-all text-sm">Direkt Nachricht</a>
          </div>
        </div>
      </section>
    </>
  )
}
