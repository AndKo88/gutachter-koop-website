'use client'
import { useState, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

const wertverlustkurvenData: Record<string, { label: string; factor: number }> = {
  '1': { label: '1 – Sehr gute Marktgängigkeit', factor: 0.75 },
  '2': { label: '2 – Gute Marktgängigkeit', factor: 0.80 },
  '3': { label: '3 – Mittlere Marktgängigkeit', factor: 0.85 },
  '4': { label: '4 – Ausreichende Marktgängigkeit', factor: 0.90 },
  '5': { label: '5 – Schlechte Marktgängigkeit', factor: 0.95 },
  '6': { label: '6 – Sehr schlechte Marktgängigkeit (Liebhaber/Sondermodelle)', factor: 1.00 },
}

const siKlassenData = [
  { id: 'si1', label: 'SI 1 – bis 4.500 EUR (leichte Schäden)', minPct: 2, maxPct: 10, normalMin: 2, normalMax: 5 },
  { id: 'si2', label: 'SI 2 – 4.501 bis 8.000 EUR (mittlere Schäden)', minPct: 5, maxPct: 20, normalMin: 6, normalMax: 12 },
  { id: 'si3', label: 'SI 3 – ab 8.001 EUR (schwere Schäden / Luxus)', minPct: 3, maxPct: 35, normalMin: 12, normalMax: 18 },
]

const kmKorrekturData: Record<string, { label: string; abzug: number }> = {
  '0': { label: 'Durchschnittliche Laufleistung', abzug: 0 },
  '10': { label: '10 % über Durchschnitt', abzug: 0.05 },
  '20': { label: '20 % über Durchschnitt', abzug: 0.10 },
  '50': { label: '50 % über Durchschnitt', abzug: 0.25 },
  '100': { label: '100 % über Durchschnitt', abzug: 0.50 },
  '200': { label: '200 % über Durchschnitt', abzug: 1.0 },
  '500': { label: '500 % über Durchschnitt', abzug: 3.0 },
  '700': { label: '700 % über Durchschnitt', abzug: 4.0 },
}

const marktlageData: Record<string, { label: string; factor: number }> = {
  '0.7': { label: '0,7 – Beste Marktlage (Stufe 1)', factor: 0.7 },
  '0.8': { label: '0,8 – Gute Marktlage (Stufe 2)', factor: 0.8 },
  '0.9': { label: '0,9 – Mittlere Marktlage (Stufe 3)', factor: 0.9 },
  '1.0': { label: '1,0 – Ausreichende Marktlage (Stufe 4)', factor: 1.0 },
  '1.1': { label: '1,1 – Schlechte Marktlage (Stufe 5)', factor: 1.1 },
  '1.2': { label: '1,2 – Sehr schlechte Marktlage (Stufe 6)', factor: 1.2 },
}

function formatEuro(val: number): string {
  return val.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' EUR'
}

export default function HtsRechnerPage() {
  const [fahrzeug, setFahrzeug] = useState('')
  const [neupreis, setNeupreis] = useState('')
  const [reparaturkosten, setReparaturkosten] = useState('')
  const [zulassungsmonate, setZulassungsmonate] = useState('')
  const [kurve, setKurve] = useState('6')
  const [siKlasse, setSiKlasse] = useState('si3')
  const [siMin, setSiMin] = useState('12')
  const [siMax, setSiMax] = useState('18')
  const [kmKorrektur, setKmKorrektur] = useState('10')
  const [marktlage, setMarktlage] = useState('0.9')
  const [result, setResult] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const resultRef = useRef<HTMLDivElement>(null)

  const calculate = () => {
    const np = parseFloat(neupreis) || 0
    const siMinVal = parseFloat(siMin) / 100
    const siMaxVal = parseFloat(siMax) / 100
    const siAvg = (siMinVal + siMaxVal) / 2
    const monate = parseInt(zulassungsmonate) || 0
    const alterskorrektur = Math.max(0, 1 - (monate / 120))
    const kmAbzug = kmKorrekturData[kmKorrektur]?.abzug || 0
    const marktFaktor = marktlageData[marktlage]?.factor || 1.0
    const wm = np * siAvg * alterskorrektur * marktFaktor * (1 - kmAbzug / 100)
    const rounded = Math.round(wm / 10) * 10
    setResult(rounded)
    setShowResult(true)
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth' }), 100)
  }

  const handlePrint = () => {
    const printWindow = window.open('', '_blank')
    if (!printWindow) return
    const now = new Date().toLocaleDateString('de-DE')
    const np = parseFloat(neupreis) || 0
    const siMinVal = parseFloat(siMin)
    const siMaxVal = parseFloat(siMax)
    const monate = parseInt(zulassungsmonate) || 0
    const alterskorrektur = Math.max(0, 1 - (monate / 120))
    const kmLabel = kmKorrekturData[kmKorrektur]?.label || ''
    const kmAbzug = kmKorrekturData[kmKorrektur]?.abzug || 0
    const marktLabel = marktlageData[marktlage]?.label || ''
    const kurveLabel = wertverlustkurvenData[kurve]?.label || ''
    const siLabel = siKlassenData.find(s => s.id === siKlasse)?.label || ''

    printWindow.document.write(`<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"><title>HTS-Wertminderung – ${fahrzeug || 'Fahrzeug'}</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #1a2f4a; padding: 40px; max-width: 800px; margin: 0 auto; }
  .header { border-bottom: 3px solid #e8b630; padding-bottom: 20px; margin-bottom: 30px; }
  .header h1 { font-size: 22px; color: #0a1628; }
  .header p { color: #627d98; font-size: 13px; margin-top: 5px; }
  .logo-line { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
  .logo-line span { font-size: 11px; color: #829ab1; }
  h2 { font-size: 16px; color: #0a1628; margin: 20px 0 10px; border-left: 4px solid #e8b630; padding-left: 12px; }
  table { width: 100%; border-collapse: collapse; margin: 10px 0 20px; }
  th, td { padding: 8px 12px; text-align: left; border-bottom: 1px solid #d9e2ec; font-size: 13px; }
  th { background: #f0f4f8; font-weight: 600; color: #334e68; }
  .result-box { background: #0a1628; color: white; padding: 20px; border-radius: 8px; margin: 30px 0; text-align: center; }
  .result-box .amount { font-size: 36px; font-weight: 800; color: #e8b630; }
  .result-box .label { font-size: 14px; color: rgba(255,255,255,0.7); }
  .footer { border-top: 1px solid #d9e2ec; padding-top: 15px; margin-top: 30px; font-size: 11px; color: #829ab1; }
  .note { background: #fef9e7; border-left: 4px solid #e8b630; padding: 12px 16px; margin: 20px 0; font-size: 12px; color: #7a521a; }
  @media print { body { padding: 20px; } .no-print { display: none; } }
</style></head><body>
<div class="header">
  <div class="logo-line">
    <strong style="font-size:16px;">Kfz Sachverst&auml;ndigenb&uuml;ro Andreas Koop</strong>
    <span>Erstellt am ${now}</span>
  </div>
  <h1>Ermittlung der merkantilen Wertminderung nach HTS</h1>
  <p>Auf Basis der HTS-Marktstudie (Hiltscher/Tippelt/Schmidt, 1997 / Fischer/Hiltscher, 2015)</p>
</div>

<h2>Fahrzeugdaten</h2>
<table>
  <tr><th>Fahrzeug</th><td>${fahrzeug || '–'}</td></tr>
  <tr><th>Listen-Neupreis (brutto)</th><td>${formatEuro(np)}</td></tr>
  <tr><th>Reparaturkosten (netto)</th><td>${formatEuro(parseFloat(reparaturkosten) || 0)}</td></tr>
  <tr><th>Zulassungsdauer</th><td>${monate} Monate</td></tr>
</table>

<h2>Gew&auml;hlte HTS-Parameter</h2>
<table>
  <tr><th>Wertverlustkurve</th><td>${kurveLabel}</td></tr>
  <tr><th>Schadenintensit&auml;tsklasse</th><td>${siLabel}</td></tr>
  <tr><th>SI-Bereich</th><td>${siMinVal} % – ${siMaxVal} % (Mittelwert: ${((siMinVal + siMaxVal) / 2).toFixed(1)} %)</td></tr>
  <tr><th>Kilometerkorrektur</th><td>${kmLabel} (Abzug: ${kmAbzug} %)</td></tr>
  <tr><th>Marktlagefaktor</th><td>${marktLabel}</td></tr>
</table>

<h2>Berechnung</h2>
<table>
  <tr><th>Basis (Neupreis)</th><td>${formatEuro(np)}</td></tr>
  <tr><th>&times; SI-Mittelwert</th><td>${((siMinVal + siMaxVal) / 2).toFixed(3)}</td></tr>
  <tr><th>&times; Alterskorrektur (${monate} Mon.)</th><td>${alterskorrektur.toFixed(4)}</td></tr>
  <tr><th>&times; Marktlagefaktor</th><td>${marktlageData[marktlage]?.factor}</td></tr>
  <tr><th>&times; Kilometerkorrektur</th><td>${(1 - kmAbzug / 100).toFixed(4)}</td></tr>
</table>

<div class="result-box">
  <div class="label">Merkantile Wertminderung nach HTS</div>
  <div class="amount">${formatEuro(result || 0)}</div>
</div>

<div class="note">
  <strong>Hinweis:</strong> Diese Berechnung dient der Orientierung und ersetzt nicht die professionelle Ermittlung durch einen qualifizierten Kfz-Sachverst&auml;ndigen. Die endg&uuml;ltige Wertminderung ist stets eine Sch&auml;tzung auf Basis von Marktkenntnis und Erfahrung (&sect; 287 ZPO).
</div>

<div class="footer">
  <p><strong>Kfz Sachverst&auml;ndigenb&uuml;ro Andreas Koop</strong> | Lennestraße 3, 58511 L&uuml;denscheid | Tel: 0170 / 500 40 22 | info@gutachter-koop.de</p>
  <p style="margin-top:5px;">HTS-Methode basierend auf der Marktstudie von Fischer/Hiltscher (2015). Copyright F. Hiltscher. Alle Rechte vorbehalten.</p>
</div>

<div class="no-print" style="text-align:center;margin-top:30px;">
  <button onclick="window.print()" style="background:#e8b630;color:#0a1628;border:none;padding:12px 30px;font-size:14px;font-weight:600;border-radius:8px;cursor:pointer;">Drucken / Als PDF speichern</button>
</div>
</body></html>`)
    printWindow.document.close()
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-20">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.6 }}>
            <Link href="/wertminderung" className="text-accent text-sm hover:underline mb-4 inline-block">&larr; Zurück zur Übersicht</Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              HTS-Rechner <span className="text-accent">Wertminderung</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl">
              Ermitteln Sie die merkantile Wertminderung nach der HTS-Methode. Geben Sie die Fahrzeugdaten ein, wählen Sie die Parameter und erhalten Sie ein druckbares Ergebnis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rechner */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.5 }}>
            
            {/* Fahrzeugdaten */}
            <div className="bg-navy-50 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-navy-900 font-bold text-sm">1</span>
                Fahrzeugdaten
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-2">Fahrzeugbezeichnung</label>
                  <input type="text" value={fahrzeug} onChange={e => setFahrzeug(e.target.value)} placeholder="z. B. Mercedes G 500 4x4²" className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-2">Listen-Neupreis (brutto, EUR)</label>
                  <input type="number" value={neupreis} onChange={e => setNeupreis(e.target.value)} placeholder="z. B. 230170" className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-2">Reparaturkosten (netto, EUR)</label>
                  <input type="number" value={reparaturkosten} onChange={e => setReparaturkosten(e.target.value)} placeholder="z. B. 13500" className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-2">Zulassungsdauer (Monate)</label>
                  <input type="number" value={zulassungsmonate} onChange={e => setZulassungsmonate(e.target.value)} placeholder="z. B. 36" className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none" />
                </div>
              </div>
            </div>

            {/* HTS-Parameter */}
            <div className="bg-navy-50 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-navy-900 font-bold text-sm">2</span>
                HTS-Parameter
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-2">Wertverlustkurve</label>
                  <select value={kurve} onChange={e => setKurve(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none bg-white">
                    {Object.entries(wertverlustkurvenData).map(([k, v]) => (
                      <option key={k} value={k}>{v.label}</option>
                    ))}
                  </select>
                  <p className="text-xs text-gray-500 mt-1">Limitierte Sondermodelle und Liebhaberfahrzeuge: Kurve 5 oder 6</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-2">Schadenintensitätsklasse</label>
                  <select value={siKlasse} onChange={e => {
                    setSiKlasse(e.target.value)
                    const si = siKlassenData.find(s => s.id === e.target.value)
                    if (si) { setSiMin(String(si.normalMin)); setSiMax(String(si.normalMax)) }
                  }} className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none bg-white">
                    {siKlassenData.map(si => (
                      <option key={si.id} value={si.id}>{si.label}</option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-navy-900 mb-2">SI-Bereich von (%)</label>
                    <input type="number" value={siMin} onChange={e => setSiMin(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy-900 mb-2">SI-Bereich bis (%)</label>
                    <input type="number" value={siMax} onChange={e => setSiMax(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-2">Kilometerkorrektur</label>
                  <select value={kmKorrektur} onChange={e => setKmKorrektur(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none bg-white">
                    {Object.entries(kmKorrekturData).map(([k, v]) => (
                      <option key={k} value={k}>{v.label} (Abzug: {v.abzug} %)</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy-900 mb-2">Marktlagefaktor</label>
                  <select value={marktlage} onChange={e => setMarktlage(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-navy-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none bg-white">
                    {Object.entries(marktlageData).map(([k, v]) => (
                      <option key={k} value={k}>{v.label}</option>
                    ))}
                  </select>
                  <p className="text-xs text-gray-500 mt-1">Basierend auf 55 Einzelfaktoren (Punktesystem 0–55)</p>
                </div>
              </div>
            </div>

            {/* Berechnen Button */}
            <div className="text-center mb-8">
              <button onClick={calculate} className="btn-primary text-lg px-12 py-4 shadow-lg hover:shadow-xl transition-shadow">
                Wertminderung berechnen
              </button>
            </div>

            {/* Ergebnis */}
            {showResult && result !== null && (
              <motion.div ref={resultRef} initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.5 }} className="mb-8">
                <div className="bg-navy-900 rounded-xl p-10 text-center text-white">
                  <p className="text-white/60 text-sm uppercase tracking-widest mb-2">Merkantile Wertminderung nach HTS</p>
                  <p className="text-5xl md:text-6xl font-bold text-accent mb-4">{formatEuro(result)}</p>
                  <p className="text-white/50 text-sm mb-8">
                    Fahrzeug: {fahrzeug || '–'} | Neupreis: {formatEuro(parseFloat(neupreis) || 0)} | {zulassungsmonate} Monate
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <button onClick={handlePrint} className="btn-primary">
                      Ergebnis drucken / PDF
                    </button>
                  </div>
                </div>
                <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mt-6">
                  <p className="text-sm text-navy-900">
                    <strong>Hinweis:</strong> Diese Berechnung dient der Orientierung und ersetzt nicht die professionelle Ermittlung durch einen qualifizierten Kfz-Sachverständigen. Die endgültige Wertminderung ist stets eine Schätzung auf Basis von Marktkenntnis und Erfahrung (§ 287 ZPO). Kontaktieren Sie uns für eine verbindliche Ermittlung: <a href="tel:01705004022" className="text-accent-700 font-semibold hover:underline">0170 / 500 40 22</a>
                  </p>
                </div>
              </motion.div>
            )}

          </motion.div>
        </div>
      </section>
    </>
  )
}
