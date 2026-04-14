'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

const urteile = [
  {
    gericht: 'Bundesgerichtshof',
    aktenzeichen: 'VI ZR 188/22',
    datum: '16. Juli 2024',
    thema: 'Bemessung des merkantilen Minderwerts',
    leitsatz: 'Zur Bemessung des Minderwerts wird geschätzt, um wieviel geringer der erzielbare Verkaufspreis bei einem gedachten Verkauf des beschädigten Fahrzeugs nach der Reparatur im Vergleich zum erzielbaren Verkaufspreis ohne den Unfall wäre.',
    relevanz: 'Bestätigt das Schätzungsprinzip nach § 287 ZPO. Keine bestimmte Methode vorgeschrieben.',
    kategorie: 'bgh',
  },
  {
    gericht: 'LG Heidelberg',
    aktenzeichen: '1 S 9/19',
    datum: '2020',
    thema: 'Wertminderung bei Liebhaberfahrzeug (La Ferrari)',
    leitsatz: 'Bei einem Liebhaberfahrzeug (Ferrari La Ferrari, Neupreis ca. 1,4 Mio. EUR) sind pauschale Berechnungsmethoden wie BVSK oder MFM ungeeignet. Die Wertminderung ist durch Händlerbefragung zu ermitteln.',
    relevanz: 'Verwirft BVSK und MFM ausdrücklich bei Liebhaber- und Premiumfahrzeugen. Bestätigt die Händlerbefragung als sachgerechte Methode.',
    kategorie: 'lg',
  },
  {
    gericht: 'LG Mainz',
    aktenzeichen: '3 O 12/23',
    datum: '2024',
    thema: 'Wertminderung Ferrari 488 Pista',
    leitsatz: 'Bei einem Ferrari 488 Pista (Fahrzeugwert ca. 400.000 EUR) wurde trotz nur 6.000 EUR Reparaturkosten eine merkantile Wertminderung von 24.000 EUR zugesprochen – das Vierfache der Reparaturkosten.',
    relevanz: 'Bestätigt: Wertminderung kann ein Vielfaches der Reparaturkosten betragen. Händlerbefragung als Methode anerkannt.',
    kategorie: 'lg',
  },
  {
    gericht: 'LG Bonn',
    aktenzeichen: '8 S 236/10',
    datum: '2011',
    thema: 'Keine allgemein anerkannte Schätzungsmethode',
    leitsatz: 'Eine allgemein anerkannte Schätzungsmethode hat sich für den Minderwert von Kraftfahrzeugen nicht durchgesetzt. Gerichte sind an keine bestimmte Methode gebunden.',
    relevanz: 'Grundsatzentscheidung: Jede sachgerechte Methode ist zulässig, auch die HTS-Methode.',
    kategorie: 'lg',
  },
  {
    gericht: 'OLG Frankfurt',
    aktenzeichen: 'IWW 30.05.2016',
    datum: '2016',
    thema: 'Freie Schätzung durch den Tatrichter',
    leitsatz: 'Die Höhe der merkantilen Wertminderung ist nach § 287 ZPO vom Tatrichter frei zu schätzen. Es gibt keine allgemein anerkannte Schätzungsmethode.',
    relevanz: 'Bestätigt die freie Methodenwahl und die Schätzungsbefugnis des Sachverständigen.',
    kategorie: 'olg',
  },
  {
    gericht: 'AG Hamburg',
    aktenzeichen: '52 C 63/13',
    datum: '24. Oktober 2013',
    thema: 'Wertminderung bei 7 Jahre altem Fahrzeug',
    leitsatz: 'Auch bei einem 7 Jahre alten Fahrzeug kann eine merkantile Wertminderung bestehen, wenn der Markt dies widerspiegelt.',
    relevanz: 'Widerlegt die pauschale Altersgrenze vieler Berechnungsmethoden.',
    kategorie: 'ag',
  },
  {
    gericht: 'AG Schwandorf',
    aktenzeichen: '2 C 185/10',
    datum: '22. August 2011',
    thema: 'Wertminderung nach HTS-Methode',
    leitsatz: 'Die HTS-Methode wurde als sachgerechte Grundlage für die Ermittlung der merkantilen Wertminderung anerkannt.',
    relevanz: 'Direkte gerichtliche Anerkennung der HTS-Methode.',
    kategorie: 'ag',
  },
  {
    gericht: 'AG Frankfurt am Main',
    aktenzeichen: '31 C 2574/14 (10)',
    datum: '30. Oktober 2014',
    thema: 'Wertminderung und Sachverständigenschätzung',
    leitsatz: 'Die Schätzung des Sachverständigen auf Basis seiner Marktkenntnis ist maßgeblich für die Bemessung der merkantilen Wertminderung.',
    relevanz: 'Bestätigt den Vorrang der sachverständigen Schätzung vor starren Formeln.',
    kategorie: 'ag',
  },
]

const paragraphen = [
  {
    norm: '§ 287 ZPO',
    titel: 'Schadensschätzung',
    inhalt: 'Ist unter den Parteien streitig, ob ein Schaden entstanden sei und wie hoch sich der Schaden belaufe, so entscheidet hierüber das Gericht unter Würdigung aller Umstände nach freier Überzeugung.',
    bedeutung: 'Zentrale Norm für die Wertminderung: Der Richter schätzt frei, keine Methode ist vorgeschrieben. Dies eröffnet den Raum für marktbasierte Ermittlungsmethoden wie HTS.',
  },
  {
    norm: '§ 249 BGB',
    titel: 'Art und Umfang des Schadensersatzes',
    inhalt: 'Wer zum Schadensersatz verpflichtet ist, hat den Zustand herzustellen, der bestehen würde, wenn der zum Ersatz verpflichtende Umstand nicht eingetreten wäre.',
    bedeutung: 'Die merkantile Wertminderung ist Teil des Schadensersatzanspruchs, da der Zustand vor dem Unfall einen höheren Marktwert hatte.',
  },
  {
    norm: '§ 17 SVO',
    titel: 'Fortbildungspflicht (Sachverständigenordnung)',
    inhalt: 'Der Sachverständige hat sich auf dem Sachgebiet, für das er öffentlich bestellt und vereidigt ist, im erforderlichen Umfang fortzubilden und den notwendigen Erfahrungsaustausch zu pflegen.',
    bedeutung: 'Öffentlich bestellte und vereidigte Sachverständige sind verpflichtet, sich über aktuelle Methoden und Entwicklungen auf ihrem Fachgebiet zu informieren.',
  },
]

const kategorieLabels: Record<string, string> = {
  bgh: 'Bundesgerichtshof',
  olg: 'Oberlandesgericht',
  lg: 'Landgericht',
  ag: 'Amtsgericht',
}

const kategorieColors: Record<string, string> = {
  bgh: 'bg-red-100 text-red-800 border-red-200',
  olg: 'bg-purple-100 text-purple-800 border-purple-200',
  lg: 'bg-blue-100 text-blue-800 border-blue-200',
  ag: 'bg-green-100 text-green-800 border-green-200',
}

export default function RechtsprechungPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-20">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.6 }}>
            <Link href="/wertminderung" className="text-accent text-sm hover:underline mb-4 inline-block">&larr; Zurück zur Übersicht</Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Rechtsprechung zur <span className="text-accent">Wertminderung</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl">
              Relevante Urteile und Normen zur merkantilen Wertminderung – vom Bundesgerichtshof bis zu den Amtsgerichten.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grundsatz */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold text-navy-900 mb-6">Der rechtliche Rahmen</h2>
            <div className="bg-navy-50 border-l-4 border-accent p-8 rounded-r-lg mb-10">
              <p className="text-navy-900 text-lg leading-relaxed">
                Die merkantile Wertminderung ist ein <strong>eigenständiger Schadensposten</strong> im Rahmen des § 249 BGB. Ihre Höhe wird nach <strong>§ 287 ZPO</strong> vom Tatrichter frei geschätzt. Es gibt <strong>keine allgemein anerkannte oder vorgeschriebene Berechnungsmethode</strong>. Jede sachgerechte Methode ist zulässig – entscheidend ist die Qualität der Begründung.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-navy-900 mb-6">Relevante Normen</h3>
            <div className="space-y-4 mb-12">
              {paragraphen.map((p, i) => (
                <div key={i} className="bg-navy-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-navy-900 text-white text-sm font-bold px-3 py-1 rounded-lg">{p.norm}</span>
                    <h4 className="font-bold text-navy-900">{p.titel}</h4>
                  </div>
                  <p className="text-gray-700 italic mb-3">&bdquo;{p.inhalt}&ldquo;</p>
                  <p className="text-sm text-navy-700"><strong>Bedeutung:</strong> {p.bedeutung}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Urteile */}
      <section className="section-padding bg-navy-50">
        <div className="container-narrow">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold text-navy-900 mb-3">Relevante Urteile</h2>
            <p className="text-navy-600 mb-8 text-lg">{urteile.length} Entscheidungen zur merkantilen Wertminderung</p>

            <div className="space-y-6">
              {urteile.map((u, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white rounded-xl p-8 shadow-sm border border-navy-100"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${kategorieColors[u.kategorie]}`}>
                      {kategorieLabels[u.kategorie]}
                    </span>
                    <span className="text-sm text-gray-500">{u.datum}</span>
                    <span className="text-sm font-mono text-navy-600 bg-navy-50 px-2 py-0.5 rounded">{u.aktenzeichen}</span>
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-3">{u.thema}</h3>
                  <div className="bg-navy-50 border-l-4 border-navy-300 p-4 rounded-r-lg mb-4">
                    <p className="text-gray-700 italic text-sm">&bdquo;{u.leitsatz}&ldquo;</p>
                  </div>
                  <p className="text-sm text-navy-700"><strong>Relevanz für die Praxis:</strong> {u.relevanz}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Zusammenfassung */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="container-narrow">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold mb-6">Was bedeutet das für Sie?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-accent font-bold text-lg mb-3">Keine Methode vorgeschrieben</h3>
                <p className="text-white/70 text-sm">Weder BVSK, MFM noch Ruhkopf/Sahm sind gesetzlich vorgeschrieben. Jede sachgerechte Methode ist zulässig – auch die HTS-Methode.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-accent font-bold text-lg mb-3">Marktkenntnis zählt</h3>
                <p className="text-white/70 text-sm">Gerichte bevorzugen zunehmend Sachverständige, die ihre Wertminderung auf Basis von Marktkenntnis und Händlerbefragung ermitteln – nicht auf Basis starrer Formeln.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-accent font-bold text-lg mb-3">Premiumfahrzeuge: Sonderfall</h3>
                <p className="text-white/70 text-sm">Bei Liebhaber- und Premiumfahrzeugen haben LG Heidelberg und LG Mainz pauschale Berechnungsmethoden ausdrücklich verworfen.</p>
              </div>
            </div>
            <div className="text-center mt-10">
              <Link href="/wertminderung/rechner" className="btn-primary text-lg px-8 py-4">HTS-Rechner starten</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
