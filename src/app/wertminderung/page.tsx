'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

const surveyResults = [
  { result: '100 %', description: 'aller Käufer wählen das unfallfreie Fahrzeug' },
  { result: '85,2 %', description: 'würden kein unfallinstandgesetztes Fahrzeug erwerben' },
  { result: '1 %', description: 'würde einen Wagen mit behobenem Unfallschaden in Erwägung ziehen' },
  { result: '8 %', description: 'Kaufbereitschaft ab 8.000 EUR Schadenhöhe' },
  { result: '0 %', description: 'Kaufbereitschaft ab 12.600 EUR Schadenhöhe' },
  { result: '99,4 %', description: 'wollen Unfallschäden in Fahrzeugpapiere eingetragen' },
  { result: '100 %', description: 'der Sachverständigen bestätigen: zu wenig Wertminderung wird bezahlt' },
  { result: '62,5 %', description: 'der Sachverständigen: Markt ist nicht rechnerisch darstellbar' },
]

const methods = [
  {
    name: 'HTS-Methode',
    year: '1997 / 2015',
    basis: 'Empirische Marktbefragung (1.231 Personen)',
    approach: 'Schätzung auf Basis von Marktforschung',
    strengths: 'Bildet reales Käuferverhalten ab, keine starre Begrenzung, berücksichtigt Marktlage',
    weaknesses: 'Erfordert Fachkenntnis bei der Parameterwahl',
    suitable: 'Alle Fahrzeuge, insbesondere Liebhaber- und Premiumfahrzeuge',
    highlight: true,
  },
  {
    name: 'BVSK-Methode',
    year: '1990er',
    basis: 'Tabellenwerk des Bundesverbands der Sachverständigen',
    approach: 'Formelbasierte Berechnung',
    strengths: 'Einfache Anwendung, weit verbreitet',
    weaknesses: 'Ignoriert Baujahr in ersten 3 Jahren, starre Begrenzungsfaktoren, keine Marktlageberücksichtigung',
    suitable: 'Standard-Fahrzeuge im mittleren Preissegment',
    highlight: false,
  },
  {
    name: 'MFM (Marktrelevanz- und Faktorenmethode)',
    year: '2012',
    basis: 'DEKRA-Umfeld (überarbeitete Halbgewachs-Methode)',
    approach: 'Formelbasierte Berechnung',
    strengths: 'Berücksichtigt einige Marktfaktoren',
    weaknesses: '120-Monate-Grenze (danach: 0 EUR), DEKRA/Versicherungsnähe, systematisch niedrige Ergebnisse',
    suitable: 'Neuere Fahrzeuge bis 10 Jahre',
    highlight: false,
  },
  {
    name: 'Ruhkopf/Sahm',
    year: '1962',
    basis: 'Mathematische Formel',
    approach: 'Rein rechnerische Berechnung',
    strengths: 'Historisch etabliert, einfach',
    weaknesses: 'Veraltet, keine Marktberücksichtigung, Karl Hans Sahm selbst sagte: nur zur Vereinfachung',
    suitable: 'Kaum noch zeitgemäß',
    highlight: false,
  },
]

const wertverlustkurven = [
  { kurve: '1', marktgaengigkeit: 'Sehr gute Marktgängigkeit', wmBemessung: '75 %', beispiel: 'Massenmodelle mit hoher Nachfrage' },
  { kurve: '2', marktgaengigkeit: 'Gute Marktgängigkeit', wmBemessung: '80 %', beispiel: 'Beliebte Mittelklassefahrzeuge' },
  { kurve: '3', marktgaengigkeit: 'Mittlere Marktgängigkeit', wmBemessung: '85 %', beispiel: 'Durchschnittliche Marktpräsenz' },
  { kurve: '4', marktgaengigkeit: 'Ausreichende Marktgängigkeit', wmBemessung: '90 %', beispiel: 'Weniger gefragte Modelle' },
  { kurve: '5', marktgaengigkeit: 'Schlechte Marktgängigkeit', wmBemessung: '95 %', beispiel: 'Seltene oder unbeliebte Modelle' },
  { kurve: '6', marktgaengigkeit: 'Sehr schlechte Marktgängigkeit', wmBemessung: '100 %', beispiel: 'Limitierte Sondermodelle, Liebhaberfahrzeuge' },
]

const schadenintensitaet = [
  { gruppe: 'SI 1', bereich: 'bis 4.500 EUR', wmBereich: '2–10 % des NP', normalbereich: '2–5 %', beschreibung: 'Leichte Schäden an Anbauteilen' },
  { gruppe: 'SI 2', bereich: '4.501–8.000 EUR', wmBereich: '5–20 % des NP', normalbereich: '6–12 %', beschreibung: 'Mittlere Schäden mit Strukturbeteiligung' },
  { gruppe: 'SI 3', bereich: '8.001–500.000 EUR', wmBereich: '3–35 % des NP', normalbereich: '12–18 %', beschreibung: 'Schwere Schäden, Luxusfahrzeuge bis 30 % WM' },
]

const marktlagefaktoren = [
  { faktor: '0,7', stufe: 'Stufe 1', bezeichnung: 'Beste Marktlage', beschreibung: 'Sehr hohe Nachfrage, knappes Angebot' },
  { faktor: '0,8', stufe: 'Stufe 2', bezeichnung: 'Gute Marktlage', beschreibung: 'Hohe Nachfrage, begrenztes Angebot' },
  { faktor: '0,9', stufe: 'Stufe 3', bezeichnung: 'Mittlere Marktlage', beschreibung: 'Ausgeglichenes Verhältnis von Angebot und Nachfrage' },
  { faktor: '1,0', stufe: 'Stufe 4', bezeichnung: 'Ausreichende Marktlage', beschreibung: 'Normales Marktumfeld' },
  { faktor: '1,1', stufe: 'Stufe 5', bezeichnung: 'Schlechte Marktlage', beschreibung: 'Überangebot, geringe Nachfrage' },
  { faktor: '1,2', stufe: 'Stufe 6', bezeichnung: 'Sehr schlechte Marktlage', beschreibung: 'Deutliches Überangebot, kaum Nachfrage' },
]

const kilometerkorrektur = [
  { abweichung: '10 % über Durchschnitt', abzug: '0,05 %' },
  { abweichung: '20 % über Durchschnitt', abzug: '0,10 %' },
  { abweichung: '50 % über Durchschnitt', abzug: '0,25 %' },
  { abweichung: '100 % über Durchschnitt', abzug: '0,50 %' },
  { abweichung: '200 % über Durchschnitt', abzug: '1,0 %' },
  { abweichung: '500 % über Durchschnitt', abzug: '3,0 %' },
  { abweichung: '700 % über Durchschnitt', abzug: '4,0 %' },
]

export default function WertminderungPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.6 }}>
            <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4">Merkantile Wertminderung</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Die Wertminderung nach einem Unfall <span className="text-accent">richtig ermitteln.</span>
            </h1>
            <p className="text-white/70 text-lg mb-8 leading-relaxed max-w-3xl">
              Erfahren Sie alles über die merkantile Wertminderung, die verschiedenen Ermittlungsmethoden und warum die marktbasierte HTS-Methode bei Premium- und Liebhaberfahrzeugen die einzig sachgerechte Lösung ist.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/wertminderung/rechner" className="btn-primary">HTS-Rechner starten</Link>
              <Link href="/wertminderung/rechtsprechung" className="btn-secondary">Rechtsprechung</Link>
              <Link href="/wertminderung/methoden" className="btn-outline">Methoden im Vergleich</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Was ist merkantile Wertminderung? */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">Was ist merkantile Wertminderung?</h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Die <strong>merkantile Wertminderung</strong> (auch: minderer Wert) bezeichnet den Wertverlust, der einem Fahrzeug auch nach einer fachgerechten Reparatur verbleibt. Selbst wenn ein Unfallschaden technisch einwandfrei behoben wurde, erzielt ein Unfallfahrzeug auf dem Markt einen geringeren Verkaufspreis als ein vergleichbares, unfallfreies Fahrzeug.
              </p>
              <p>
                Dieser Wertverlust ist <strong>ein eigenständiger Schadensposten</strong>, den der Unfallverursacher bzw. dessen Haftpflichtversicherung ersetzen muss. Der Bundesgerichtshof hat dies in ständiger Rechtsprechung bestätigt.
              </p>
              <div className="bg-navy-50 border-l-4 border-accent p-6 rounded-r-lg my-8">
                <p className="text-navy-900 font-medium italic">
                  &bdquo;Zur Bemessung des Minderwerts wird geschätzt, um wieviel geringer der erzielbare Verkaufspreis bei einem gedachten Verkauf des beschädigten Fahrzeugs nach der Reparatur im Vergleich zum erzielbaren Verkaufspreis ohne den Unfall wäre.&ldquo;
                </p>
                <p className="text-navy-600 text-sm mt-2">— Bundesgerichtshof, VI ZR 188/22 (2024)</p>
              </div>
              <p>
                Entscheidend ist: Die Wertminderung ist <strong>keine rechnerische Größe</strong>, sondern eine <strong>Schätzung</strong> auf Basis von Marktkenntnis und Erfahrung des Sachverständigen (§ 287 ZPO). Genau hier setzen die verschiedenen Ermittlungsmethoden an – mit sehr unterschiedlichen Ergebnissen.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Die HTS-Marktstudie */}
      <section className="section-padding bg-navy-50">
        <div className="container-narrow">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-3">Die HTS-Marktstudie</h2>
            <p className="text-navy-600 mb-8 text-lg">Empirische Grundlage für eine marktgerechte Wertminderung</p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-navy-900 mb-4">Entstehungsgeschichte</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3"><span className="text-accent font-bold">1997</span><span>Erste Marktstudie durch Hiltscher, Tippelt, Schmidt (HTS)</span></li>
                  <li className="flex gap-3"><span className="text-accent font-bold">2012–2014</span><span>Groß angelegte Weiterführung durch Fischer/Hiltscher mit 1.231 Befragten</span></li>
                  <li className="flex gap-3"><span className="text-accent font-bold">2015</span><span>Letzte Aktualisierung und Veröffentlichung</span></li>
                </ul>
                <div className="mt-6 p-4 bg-navy-50 rounded-lg">
                  <p className="text-sm text-navy-700"><strong>Fachgremium:</strong> Karl H. Schuwerk (ö.b.u.v. SV), Dipl.-Ing. Bernhard Fischer, Kfz.-Meister Franz Hiltscher</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-navy-900 mb-4">Methodik</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3"><span className="text-accent font-bold">1.231</span><span>Befragte Personen (843 Männer, 388 Frauen)</span></li>
                  <li className="flex gap-3"><span className="text-accent font-bold">3</span><span>Befragungsgruppen: Geschädigte, Sachverständige, Autohändler</span></li>
                  <li className="flex gap-3"><span className="text-accent font-bold">ca. 250</span><span>Fragen an die Teilnehmer</span></li>
                </ul>
                <div className="mt-6 p-4 bg-navy-50 rounded-lg">
                  <p className="text-sm text-navy-700"><strong>Besonderheit:</strong> Alle Befragten waren unmittelbar mit dem Unfallgeschehen konfrontiert – keine theoretischen Annahmen.</p>
                </div>
              </div>
            </div>

            {/* Befragungsergebnisse */}
            <h3 className="text-2xl font-bold text-navy-900 mb-6">Kernergebnisse der Marktbefragung</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {surveyResults.map((item, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-navy-100 hover:border-accent/30 transition-colors"
                >
                  <p className="text-3xl font-bold text-accent mb-2">{item.result}</p>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Die 4 Tabellenwerke */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-3">Die vier Tabellenwerke der HTS-Methode</h2>
            <p className="text-navy-600 mb-10 text-lg">Die HTS-Methode basiert auf vier empirisch ermittelten Komponenten</p>

            {/* 1. Wertverlustkurven */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-navy-900 mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-navy-900 font-bold text-lg">1</span>
                Wertverlustkurven (6 Kategorien)
              </h3>
              <p className="text-gray-700 mb-6">Die Wertverlustkurven berücksichtigen die Marktgängigkeit des Fahrzeugs. Je schlechter die Marktgängigkeit (z. B. bei limitierten Sondermodellen), desto höher fällt die Wertminderung aus.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-navy-900 text-white">
                      <th className="px-4 py-3 text-left rounded-tl-lg">Kurve</th>
                      <th className="px-4 py-3 text-left">Marktgängigkeit</th>
                      <th className="px-4 py-3 text-left">WM-Bemessung</th>
                      <th className="px-4 py-3 text-left rounded-tr-lg">Beispiel</th>
                    </tr>
                  </thead>
                  <tbody>
                    {wertverlustkurven.map((row, i) => (
                      <tr key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-navy-50'} ${row.kurve === '6' ? 'font-semibold text-accent-700' : ''}`}>
                        <td className="px-4 py-3 font-bold">{row.kurve}</td>
                        <td className="px-4 py-3">{row.marktgaengigkeit}</td>
                        <td className="px-4 py-3">{row.wmBemessung}</td>
                        <td className="px-4 py-3 text-gray-600">{row.beispiel}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 rounded-xl overflow-hidden border border-navy-100">
                <Image src="/images/hts/Anlage_4_Wertverlustkurven.png" alt="HTS Wertverlustkurven 1-6" width={1200} height={600} className="w-full" />
                <p className="text-xs text-gray-500 p-3 bg-navy-50">Wertverlustkurven der HTS-Studie – Verlauf über 84 Zulassungsmonate für alle 6 Kategorien. Copyright F. Hiltscher.</p>
              </div>
            </div>

            {/* 2. Schadenintensitätsklassen */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-navy-900 mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-navy-900 font-bold text-lg">2</span>
                Schadenintensitätsklassen (SI-Klassen)
              </h3>
              <p className="text-gray-700 mb-6">Die Schadenintensität wird feiner differenziert als bei anderen Methoden. Drei Hauptgruppen decken das gesamte Schadenspektrum ab.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-navy-900 text-white">
                      <th className="px-4 py-3 text-left rounded-tl-lg">Gruppe</th>
                      <th className="px-4 py-3 text-left">Schadenbereich</th>
                      <th className="px-4 py-3 text-left">WM-Bereich</th>
                      <th className="px-4 py-3 text-left">Normalbereich</th>
                      <th className="px-4 py-3 text-left rounded-tr-lg">Beschreibung</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schadenintensitaet.map((row, i) => (
                      <tr key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-navy-50'} ${row.gruppe === 'SI 3' ? 'font-semibold' : ''}`}>
                        <td className="px-4 py-3 font-bold">{row.gruppe}</td>
                        <td className="px-4 py-3">{row.bereich}</td>
                        <td className="px-4 py-3">{row.wmBereich}</td>
                        <td className="px-4 py-3 text-accent-700 font-medium">{row.normalbereich}</td>
                        <td className="px-4 py-3 text-gray-600">{row.beschreibung}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mt-6">
                <p className="text-navy-900 font-medium">
                  Hinweis der Studienautoren zu SI 3: &bdquo;Bei Luxusfahrzeugen mit Neupreisen zwischen 100.000 und 1.500.000 EUR liegt die merkantile Wertminderung im Bereich von 30 % des Neupreises. Keine Rechenformel kann diese Marktbesonderheiten ansatzweise beinhalten.&ldquo;
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="rounded-xl overflow-hidden border border-navy-100">
                  <Image src="/images/hts/Anlage_5_Hilfsmatrix_SI1.png" alt="Hilfsmatrix SI 1" width={600} height={400} className="w-full" />
                  <p className="text-xs text-gray-500 p-2 bg-navy-50">SI 1: bis 4.500 EUR</p>
                </div>
                <div className="rounded-xl overflow-hidden border border-navy-100">
                  <Image src="/images/hts/Grafik10_SI2_Hilfsmatrix.png" alt="Hilfsmatrix SI 2" width={600} height={400} className="w-full" />
                  <p className="text-xs text-gray-500 p-2 bg-navy-50">SI 2: 4.501–8.000 EUR</p>
                </div>
                <div className="rounded-xl overflow-hidden border border-navy-100">
                  <Image src="/images/hts/Anlage_6_Hilfsmatrix_SI3.png" alt="Hilfsmatrix SI 3" width={600} height={400} className="w-full" />
                  <p className="text-xs text-gray-500 p-2 bg-navy-50">SI 3: 8.001–500.000 EUR</p>
                </div>
              </div>
            </div>

            {/* 3. Kilometerkorrektur */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-navy-900 mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-navy-900 font-bold text-lg">3</span>
                Kilometerkorrektur
              </h3>
              <p className="text-gray-700 mb-6">Die Kilometerkorrektur berücksichtigt die Laufleistung im Verhältnis zum Durchschnitt. Bei überdurchschnittlicher Laufleistung wird ein progressiver Abzug vorgenommen.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm max-w-lg">
                  <thead>
                    <tr className="bg-navy-900 text-white">
                      <th className="px-4 py-3 text-left rounded-tl-lg">Abweichung vom Durchschnitt</th>
                      <th className="px-4 py-3 text-left rounded-tr-lg">Abzug</th>
                    </tr>
                  </thead>
                  <tbody>
                    {kilometerkorrektur.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-navy-50'}>
                        <td className="px-4 py-3">{row.abweichung}</td>
                        <td className="px-4 py-3 font-medium">{row.abzug}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 4. Marktlagefaktoren */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-navy-900 mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-navy-900 font-bold text-lg">4</span>
                Marktlagefaktoren (55 Einzelfaktoren)
              </h3>
              <p className="text-gray-700 mb-6">Der Marktlagefaktor wird anhand von 55 Einzelfaktoren ermittelt, die in einem Punktesystem (0–55 Punkte) bewertet werden. Je niedriger der Faktor, desto besser die Marktlage – und desto höher die Wertminderung.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-navy-900 text-white">
                      <th className="px-4 py-3 text-left rounded-tl-lg">Faktor</th>
                      <th className="px-4 py-3 text-left">Stufe</th>
                      <th className="px-4 py-3 text-left">Bezeichnung</th>
                      <th className="px-4 py-3 text-left rounded-tr-lg">Beschreibung</th>
                    </tr>
                  </thead>
                  <tbody>
                    {marktlagefaktoren.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-navy-50'}>
                        <td className="px-4 py-3 font-bold text-accent-700">{row.faktor}</td>
                        <td className="px-4 py-3">{row.stufe}</td>
                        <td className="px-4 py-3 font-medium">{row.bezeichnung}</td>
                        <td className="px-4 py-3 text-gray-600">{row.beschreibung}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 rounded-xl overflow-hidden border border-navy-100">
                <Image src="/images/hts/Anlage_7_Marktfaktoren.png" alt="55 Marktbeeinflussende Faktoren" width={1200} height={800} className="w-full" />
                <p className="text-xs text-gray-500 p-3 bg-navy-50">Die 55 marktbeeinflussenden Faktoren der HTS-Studie. Copyright F. Hiltscher.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vergleich der Methoden */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="container-narrow">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Warum Berechnungsmethoden versagen</h2>
            <p className="text-white/60 mb-10 text-lg">Bandbreiten von bis zu 399 % beim selben Fahrzeug</p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { car: 'Mini Cooper D', spread: '399 %', img: '/images/hts/Grafik19_Vergleich_MiniCooper.png' },
                { car: 'BMW 525 D', spread: '338 %', img: '/images/hts/Grafik20_Vergleich_BMW525.png' },
                { car: 'Audi A5 Quattro', spread: '353 %', img: '/images/hts/Grafik21_Vergleich_AudiA5.png' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white/5 rounded-xl overflow-hidden border border-white/10"
                >
                  <Image src={item.img} alt={`Vergleich ${item.car}`} width={600} height={400} className="w-full" />
                  <div className="p-6">
                    <h4 className="font-bold text-lg mb-1">{item.car}</h4>
                    <p className="text-accent text-3xl font-bold">{item.spread}</p>
                    <p className="text-white/50 text-sm">Bandbreite zwischen den Methoden</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <p className="text-white/80 text-lg leading-relaxed">
                Die Vergleichsgrafiken der HTS-Studie belegen empirisch: Bei demselben Fahrzeug und demselben Schaden liefern die verschiedenen Berechnungsmethoden Ergebnisse, die um <strong className="text-accent">bis zu 399 %</strong> voneinander abweichen. BVSK und MFM liefern dabei systematisch die niedrigsten Werte. Die HTS-Methode liegt konsistent im marktgerechten Bereich.
              </p>
              <p className="text-white/60 mt-4 italic">
                &bdquo;Es kann und darf nicht sein, dass diese Bandbreiten bei einer dem Markt angepassten Schätzung so exorbitant abweichen.&ldquo; — HTS-Studie, Fischer/Hiltscher
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Methoden-Übersicht */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-3">Methoden im Überblick</h2>
            <p className="text-navy-600 mb-10 text-lg">Ermittlung vs. Berechnung – ein entscheidender Unterschied</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {methods.map((m, i) => (
                <div key={i} className={`rounded-xl p-8 border-2 ${m.highlight ? 'border-accent bg-accent/5' : 'border-navy-100 bg-white'}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-bold text-navy-900">{m.name}</h3>
                    {m.highlight && <span className="text-xs bg-accent text-navy-900 px-2 py-1 rounded-full font-semibold">Empfohlen</span>}
                  </div>
                  <p className="text-sm text-gray-500 mb-4">Seit {m.year} | {m.basis}</p>
                  <div className="space-y-3 text-sm">
                    <div><span className="font-semibold text-navy-900">Ansatz:</span> <span className="text-gray-700">{m.approach}</span></div>
                    <div><span className="font-semibold text-green-700">Stärken:</span> <span className="text-gray-700">{m.strengths}</span></div>
                    <div><span className="font-semibold text-red-700">Schwächen:</span> <span className="text-gray-700">{m.weaknesses}</span></div>
                    <div><span className="font-semibold text-navy-900">Geeignet für:</span> <span className="text-gray-700">{m.suitable}</span></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/wertminderung/methoden" className="btn-primary">Ausführlicher Methodenvergleich</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Originaldokumente */}
      <section className="section-padding bg-navy-50">
        <div className="container-narrow">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-3">Originaldokumente der HTS-Studie</h2>
            <p className="text-navy-600 mb-8 text-lg">Auszüge aus der empirischen Marktstudie</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Systemblatt HTS', desc: 'Gesamtübersicht mit allen vier Komponenten', img: '/images/hts/Anlage_1_Systemblatt.png' },
                { title: 'Kaufbereitschaft nach Schadenhöhe', desc: 'Empirische Befragung: Ab 12.600 EUR kauft niemand mehr', img: '/images/hts/Anlage_2_Kaufbereitschaft.png' },
                { title: 'Häufigkeitsverteilung', desc: 'Verteilung der Wertminderungswerte nach SI-Gruppe', img: '/images/hts/Anlage_3_Haeufigkeitsverteilung.png' },
                { title: 'Einflussfaktoren bei Berechnungsmethoden', desc: 'Systematische Darstellung: Begrenzung vs. Marktkonformität', img: '/images/hts/Grafik06_Manipulation_Mindmap.png' },
              ].map((doc, i) => (
                <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-navy-100">
                  <Image src={doc.img} alt={doc.title} width={800} height={500} className="w-full" />
                  <div className="p-6">
                    <h4 className="font-bold text-navy-900 mb-1">{doc.title}</h4>
                    <p className="text-sm text-gray-600">{doc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-white border border-navy-200 rounded-xl p-6">
              <p className="text-sm text-gray-600">
                <strong>Urheberrechtshinweis:</strong> Die hier gezeigten Grafiken stammen aus der HTS-Marktstudie und sind urheberrechtlich geschützt (Copyright F. Hiltscher). Sie werden hier ausschließlich zu Informationszwecken und mit Genehmigung verwendet. Die vollständige HTS-Marktstudie umfasst insgesamt 111 Einzeldokumente mit einem Gesamtumfang von ca. 2,7 GB.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="container-narrow text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Wertminderung berechnen lassen?</h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              Nutzen Sie unseren HTS-Rechner für eine erste Einschätzung oder kontaktieren Sie uns direkt für eine professionelle Ermittlung Ihrer merkantilen Wertminderung.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/wertminderung/rechner" className="btn-primary text-lg px-8 py-4">HTS-Rechner starten</Link>
              <a href="tel:01705004022" className="btn-secondary text-lg px-8 py-4">0170 - 500 40 22</a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
