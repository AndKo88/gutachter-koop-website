'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

const methoden = [
  {
    name: 'HTS-Methode',
    vollname: 'Hiltscher / Tippelt / Schmidt',
    jahr: '1997 (Erstfassung), 2015 (Aktualisierung)',
    herkunft: 'Unabhängiges Sachverständigen-Fachgremium',
    basis: 'Empirische Marktbefragung von 1.231 Personen',
    ansatz: 'Schätzung auf Basis von Marktforschung',
    parameter: ['6 Wertverlustkurven', '3 Schadenintensitätsgruppen', 'Kilometerkorrektur', '55 Marktlagefaktoren'],
    staerken: [
      'Basiert auf realen Marktdaten (Käufer, Händler, SV)',
      'Keine starre Alters- oder Laufleistungsgrenze',
      'Berücksichtigt 55 individuelle Marktfaktoren',
      'Differenzierte Schadenintensitätsklassen',
      'Geeignet für alle Fahrzeugtypen inkl. Luxus/Liebhaber',
    ],
    schwaechen: [
      'Erfordert Fachkenntnis bei der Parameterwahl',
      'Tabellenwerke nicht frei verfügbar',
    ],
    highlight: true,
  },
  {
    name: 'BVSK-Methode',
    vollname: 'Bundesverband der freiberuflichen und unabhängigen Sachverständigen',
    jahr: '1990er Jahre',
    herkunft: 'Berufsverband der Sachverständigen',
    basis: 'Tabellenwerk mit Begrenzungsfaktoren',
    ansatz: 'Formelbasierte Berechnung',
    parameter: ['Reparaturkosten', 'Wiederbeschaffungswert', 'Begrenzungsfaktoren'],
    staerken: [
      'Einfache Anwendung',
      'Weit verbreitet in der Praxis',
      'Schnelle Ergebnisermittlung',
    ],
    schwaechen: [
      'Ignoriert Baujahr in den ersten 3 Jahren',
      'Starre Begrenzungsfaktoren ohne Marktbezug',
      'Keine Berücksichtigung der Marktlage',
      'Systematisch niedrige Ergebnisse bei Premiumfahrzeugen',
      'LG Heidelberg: Bei Liebhaberfahrzeugen ungeeignet',
    ],
    highlight: false,
  },
  {
    name: 'MFM',
    vollname: 'Marktrelevanz- und Faktorenmethode',
    jahr: '2012',
    herkunft: 'DEKRA-Umfeld (überarbeitete Halbgewachs-Methode)',
    basis: 'Formelbasierte Berechnung mit Faktoren',
    ansatz: 'Formelbasierte Berechnung',
    parameter: ['Reparaturkosten', 'Fahrzeugalter', 'Laufleistung', 'Marktrelevanzfaktoren'],
    staerken: [
      'Berücksichtigt einige Marktfaktoren',
      'Strukturierter Ansatz',
    ],
    schwaechen: [
      '120-Monate-Grenze: Ab 10 Jahren = 0 EUR Wertminderung',
      'Herkunft aus dem DEKRA/Versicherungsumfeld',
      'Von Versicherern als „allgemeingültig" propagiert (IWW: nicht zutreffend)',
      'Systematisch niedrige Ergebnisse',
      'Keine Eignung für Liebhaber- und Sonderfahrzeuge',
    ],
    highlight: false,
  },
  {
    name: 'Ruhkopf/Sahm',
    vollname: 'Ruhkopf und Sahm',
    jahr: '1962',
    herkunft: 'Mathematische Formel',
    basis: 'Rein rechnerische Ableitung',
    ansatz: 'Rein rechnerische Berechnung',
    parameter: ['Reparaturkosten', 'Wiederbeschaffungswert', 'Neupreis'],
    staerken: [
      'Historisch etabliert',
      'Sehr einfache Anwendung',
    ],
    schwaechen: [
      'Über 60 Jahre alt, nie aktualisiert',
      'Keine Marktberücksichtigung',
      'Karl Hans Sahm selbst: „Nur zur Vereinfachung gedacht"',
      'Keine Differenzierung nach Fahrzeugtyp',
      'Völlig ungeeignet für moderne Fahrzeuge',
    ],
    highlight: false,
  },
]

const vergleichsBeispiele = [
  { fahrzeug: 'Mini Cooper D', bandbreite: '399 %', bild: '/images/hts/Grafik19_Vergleich_MiniCooper.png' },
  { fahrzeug: 'BMW 525 D', bandbreite: '338 %', bild: '/images/hts/Grafik20_Vergleich_BMW525.png' },
  { fahrzeug: 'Audi A5 Quattro', bandbreite: '353 %', bild: '/images/hts/Grafik21_Vergleich_AudiA5.png' },
]

export default function MethodenPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-20">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.6 }}>
            <Link href="/wertminderung" className="text-accent text-sm hover:underline mb-4 inline-block">&larr; Zurück zur Übersicht</Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Methoden im <span className="text-accent">Vergleich</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl">
              Ein detaillierter Vergleich der gängigen Wertminderungsmethoden – und warum die Wahl der richtigen Methode über tausende Euro entscheiden kann.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ermittlung vs. Berechnung */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold text-navy-900 mb-6">Ermittlung vs. Berechnung</h2>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Die IfS-Richtlinien (Institut für Sachverständigenwesen) haben in ihrer 4. Auflage eine entscheidende Änderung vorgenommen: Statt von <strong>&bdquo;Berechnungsmethoden&ldquo;</strong> wird nun von <strong>&bdquo;Ermittlungsmethoden&ldquo;</strong> gesprochen. Diese Änderung trägt der Tatsache Rechnung, dass der merkantile Minderwert <strong>keine rechnerische Größe</strong> ist, sondern eine Schätzung auf Basis von Marktkenntnis.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-red-800 mb-4">Berechnung (veraltet)</h3>
                <ul className="space-y-2 text-red-700 text-sm">
                  <li>Starre mathematische Formeln</li>
                  <li>Keine Marktberücksichtigung</li>
                  <li>Pauschale Begrenzungsfaktoren</li>
                  <li>Ergebnisse oft weit unter Marktwert</li>
                  <li>Beispiele: BVSK, MFM, Ruhkopf/Sahm</li>
                </ul>
              </div>
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-green-800 mb-4">Ermittlung (zeitgemäß)</h3>
                <ul className="space-y-2 text-green-700 text-sm">
                  <li>Basiert auf empirischen Marktdaten</li>
                  <li>Berücksichtigt reales Käuferverhalten</li>
                  <li>Individuelle Parameterwahl</li>
                  <li>Marktgerechte Ergebnisse</li>
                  <li>Beispiel: HTS-Methode, Händlerbefragung</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detaillierter Vergleich */}
      <section className="section-padding bg-navy-50">
        <div className="container-narrow">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold text-navy-900 mb-8">Detaillierter Methodenvergleich</h2>
            <div className="space-y-8">
              {methoden.map((m, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`bg-white rounded-xl overflow-hidden shadow-sm border-2 ${m.highlight ? 'border-accent' : 'border-navy-100'}`}
                >
                  <div className={`p-6 ${m.highlight ? 'bg-accent/10' : 'bg-navy-50'}`}>
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-bold text-navy-900">{m.name}</h3>
                      {m.highlight && <span className="text-xs bg-accent text-navy-900 px-3 py-1 rounded-full font-bold">Empfohlen</span>}
                    </div>
                    <p className="text-gray-600 text-sm mt-1">{m.vollname} | Seit {m.jahr}</p>
                  </div>
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-navy-900 mb-2">Herkunft</h4>
                        <p className="text-gray-700 text-sm mb-4">{m.herkunft}</p>
                        <h4 className="font-semibold text-navy-900 mb-2">Basis</h4>
                        <p className="text-gray-700 text-sm mb-4">{m.basis}</p>
                        <h4 className="font-semibold text-navy-900 mb-2">Parameter</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          {m.parameter.map((p, j) => <li key={j} className="flex gap-2"><span className="text-accent">&#9679;</span>{p}</li>)}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2">Stärken</h4>
                        <ul className="text-sm text-gray-700 space-y-1 mb-4">
                          {m.staerken.map((s, j) => <li key={j} className="flex gap-2"><span className="text-green-500">&#10003;</span>{s}</li>)}
                        </ul>
                        <h4 className="font-semibold text-red-700 mb-2">Schwächen</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          {m.schwaechen.map((s, j) => <li key={j} className="flex gap-2"><span className="text-red-500">&#10007;</span>{s}</li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vergleichsgrafiken */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="container-narrow">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold mb-3">Empirischer Beweis: Bandbreiten bis 399 %</h2>
            <p className="text-white/60 mb-10 text-lg">
              Die HTS-Studie hat die Ergebnisse aller gängigen Methoden am selben Fahrzeug verglichen. Das Ergebnis ist erschreckend.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {vergleichsBeispiele.map((v, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white/5 rounded-xl overflow-hidden border border-white/10"
                >
                  <Image src={v.bild} alt={`Vergleich ${v.fahrzeug}`} width={600} height={400} className="w-full" />
                  <div className="p-6">
                    <h4 className="font-bold text-lg mb-1">{v.fahrzeug}</h4>
                    <p className="text-accent text-3xl font-bold">{v.bandbreite}</p>
                    <p className="text-white/50 text-sm">Bandbreite zwischen den Methoden</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <p className="text-white/80 leading-relaxed">
                Bei demselben Fahrzeug und demselben Schaden liefern die verschiedenen Berechnungsmethoden Ergebnisse, die um bis zu <strong className="text-accent">399 %</strong> voneinander abweichen. BVSK und MFM liefern dabei systematisch die niedrigsten Werte. Die HTS-Methode liegt konsistent im marktgerechten Bereich – bestätigt durch die empirische Marktbefragung.
              </p>
              <p className="text-white/50 mt-4 italic text-sm">
                &bdquo;Es kann und darf nicht sein, dass diese Bandbreiten bei einer dem Markt angepassten Schätzung so exorbitant abweichen.&ldquo; — HTS-Studie, Fischer/Hiltscher
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mindmap */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold text-navy-900 mb-6">Einflussfaktoren bei Berechnungsmethoden</h2>
            <p className="text-gray-700 mb-6">Die folgende Grafik aus der HTS-Studie zeigt systematisch, welche Faktoren bei den verschiedenen Berechnungsmethoden eine Rolle spielen – und wo die Begrenzungen liegen.</p>
            <div className="rounded-xl overflow-hidden border border-navy-100">
              <Image src="/images/hts/Grafik06_Manipulation_Mindmap.png" alt="Einflussfaktoren bei Berechnungsmethoden" width={1200} height={800} className="w-full" />
              <p className="text-xs text-gray-500 p-3 bg-navy-50">Systematische Darstellung der Einflussfaktoren. Copyright F. Hiltscher.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent/10">
        <div className="container-narrow text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">Die richtige Methode wählen</h2>
          <p className="text-navy-600 text-lg mb-8 max-w-2xl mx-auto">
            Nutzen Sie unseren HTS-Rechner für eine erste Einschätzung oder lassen Sie sich von uns professionell beraten.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/wertminderung/rechner" className="btn-primary text-lg px-8 py-4">HTS-Rechner starten</Link>
            <Link href="/wertminderung/rechtsprechung" className="btn-secondary text-lg px-8 py-4">Rechtsprechung ansehen</Link>
          </div>
        </div>
      </section>
    </>
  )
}
