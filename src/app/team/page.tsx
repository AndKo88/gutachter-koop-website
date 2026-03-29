import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = { title: 'Team' }

const team = [
  { name: 'Andreas Koop', role: 'Geschäftsführer', image: '/images/andreas-koop-portrait.webp' },
  { name: 'Irina Hahn', role: 'Bürokauffrau und Assistentin', image: null },
  { name: 'Ivan Dalmann', role: 'Regionalleiter', image: null },
  { name: 'Linda Koop', role: 'Verwaltung', image: null },
  { name: 'Marcel Weber', role: 'Service', image: null },
  { name: 'Viktor Malinin', role: 'Werkstattleiter', image: null },
]

export default function TeamPage() {
  return (
    <>
      <section className="bg-navy-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Das Gutachter Koop Team</h1>
          <p className="text-white/70 text-lg">Unser engagiertes Team steht Ihnen zur Seite.</p>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={i} className="text-center group">
                <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden bg-navy-100">
                  {member.image ? (
                    <Image src={member.image} alt={member.name} width={160} height={160} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-navy-900 text-white text-3xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
                <h3 className="font-bold text-navy-900 text-lg">{member.name}</h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">Komm ins Team</h2>
          <p className="text-navy-800 mb-8">Wir suchen engagierte Mitarbeiter.</p>
          <a href="mailto:info@gutachter-koop.de" className="inline-flex items-center justify-center px-8 py-4 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-all text-sm">Jetzt Bewerben</a>
        </div>
      </section>
    </>
  )
}
