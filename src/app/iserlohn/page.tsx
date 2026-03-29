import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Kfz Gutachter Iserlohn' }

export default function IserlohnPage() {
  return (
    <>
      <section className="bg-navy-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4">KFZ GUTACHTER ISERLOHN</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Kfz Gutachter in Iserlohn</h1>
          <p className="text-white/70 text-lg">Ihr Kfz Sachverständigenbüro auch in Iserlohn und Umgebung.</p>
        </div>
      </section>
      <section className="bg-white section-padding">
        <div className="max-w-3xl mx-auto px-4 text-gray-700 space-y-4 leading-relaxed">
          <p>Auch in Iserlohn und Umgebung sind wir für Sie da. Als Kfz Sachverständigenbüro mit Sitz in Lüdenscheid bieten wir unsere Dienstleistungen im gesamten Märkischen Kreis an.</p>
          <p>Wir kommen zu Ihnen – ob zu Hause, auf der Arbeit oder in der Werkstatt Ihrer Wahl. Flexible Terminvereinbarung und schnelle Bearbeitung sind für uns selbstverständlich.</p>
          <p>Unsere Leistungen in Iserlohn umfassen Unfallgutachten, Kostenvoranschläge, Wertgutachten, Fahrzeugbewertungen und die Vermittlung von Rechtsanwälten und Mietwagen.</p>
        </div>
      </section>
      <section className="bg-accent py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">Unfall in Iserlohn?</h2>
          <p className="text-navy-800 mb-8">Wir sind schnell vor Ort.</p>
          <a href="tel:01705004022" className="inline-flex items-center justify-center px-8 py-4 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-all text-sm">0170 - 500 40 22</a>
        </div>
      </section>
    </>
  )
}
