'use client'

import { useState } from 'react'
import type { Metadata } from 'next'

const faqs = [
  { q: 'Was macht ein Kfz Gutachter in Lüdenscheid?', a: 'Ein Kfz Gutachter in Lüdenscheid, wie Andreas Koop, beurteilt und dokumentiert Fahrzeugschäden nach einem Unfall oder bei anderen Schadensereignissen. Dies beinhaltet die genaue Bestimmung des Schadensumfangs, den Wertverlust und die voraussichtlichen Reparaturkosten.' },
  { q: 'Warum sollte ich mich für Kfz Gutachter Koop in Lüdenscheid entscheiden?', a: 'Gutachter Koop bietet über 10 Jahre Erfahrung, eine eigene Prüfhalle mit modernster Technik, Achsvermessung und Karosserievermessung vor Ort, einen Mietwagenservice und persönliche, individuelle Betreuung.' },
  { q: 'Wie lange dauert ein Gutachten von Kfz Gutachter Koop aus Lüdenscheid?', a: 'Die Dauer kann variieren, je nach Schadensumfang und Komplexität. In der Regel streben wir jedoch an, das Gutachten innerhalb weniger Tage nach der Schadenaufnahme fertigzustellen.' },
  { q: 'Wie teuer ist ein Kfz Gutachten?', a: 'Sind Sie unschuldig am Unfall, trägt die gegnerische Versicherung die Kosten. In anderen Fällen bieten wir eine kostenlose Beratung und Kosteneinschätzung im Erstgespräch.' },
  { q: 'Kann ich mit dem Gutachten von Gutachter Koop direkt zu meiner Werkstatt gehen?', a: 'Ja, mit unserem Gutachten können Sie die Werkstatt Ihrer Wahl aufsuchen. Das Gutachten dokumentiert den Schaden unabhängig und dient als Grundlage für die Reparatur.' },
  { q: 'Wie unterscheidet sich ein freier Kfz Gutachter von einem Versicherungsgutachter?', a: 'Ein freier Gutachter wie Andreas Koop in Lüdenscheid arbeitet unabhängig und hat Ihre Interessen im Blick. Ein Versicherungsgutachter hingegen wird oft von der Versicherung beauftragt und kann deren Interessen vertreten.' },
  { q: 'Was ist bei einem Gutachten in Bezug auf die Wertminderung zu beachten?', a: 'Die Wertminderung zeigt den Wertverlust Ihres Fahrzeugs nach einem Unfall. Ein genaues und professionelles Gutachten sorgt dafür, dass Sie diesen Wertverlust bei der Versicherung geltend machen können.' },
  { q: 'Was passiert, wenn meine Versicherung das Gutachten nicht akzeptiert?', a: 'Wir stehen immer an Ihrer Seite und suchen nach Lösungen, sollte es einmal Probleme mit der Versicherung geben. Jeder Fall ist individuell, und wir setzen alles daran, von Anfang an mögliche Konflikte zu vermeiden.' },
  { q: 'Brauche ich nach jedem Unfall ein Gutachten?', a: 'Bei kleineren Schäden erstellen wir Kostenvoranschläge ohne Kostenrisiko und beraten Sie ebenso ohne finanzielle Belastung. Ob ein Gutachten oder Kostenvoranschlag sinnvoll ist, besprechen wir individuell mit Ihnen.' },
  { q: 'Wie kann ich einen Termin mit Kfz Gutachter Lüdenscheid, Andreas Koop, vereinbaren?', a: 'Am besten nehmen Sie telefonisch Kontakt mit uns auf oder schreiben uns eine Nachricht über WhatsApp.' },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-200">
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center py-5 text-left">
        <span className="font-semibold text-navy-900 pr-4">{q}</span>
        <svg className={`w-5 h-5 text-accent flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </button>
      {open && <div className="pb-5 text-gray-600 leading-relaxed text-sm">{a}</div>}
    </div>
  )
}

export default function FAQPage() {
  return (
    <>
      <section className="bg-navy-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Häufig gestellte Fragen</h1>
          <p className="text-white/70 text-lg">Alles was Sie über Kfz Gutachten wissen müssen.</p>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="max-w-3xl mx-auto px-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">Noch Fragen?</h2>
          <p className="text-gray-600 mb-8">Rufen Sie uns an oder schreiben Sie uns.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:01705004022" className="btn-primary">0170 - 500 40 22</a>
            <a href="https://wa.me/491705004022" target="_blank" rel="noopener noreferrer" className="btn-outline">WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  )
}
