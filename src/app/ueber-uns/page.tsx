import type { Metadata } from 'next';
import { CONTACT, QUALIFICATIONS, TEAM } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Über uns',
  description: 'Kfz-Sachverständigenbüro Andreas Koop in Lüdenscheid. Kfz-Techniker-Meister, BVSK-Akademie ausgebildet, über 20 Jahre Erfahrung und 20.000+ Gutachten.',
};

export default function UeberUnsPage() {
  return (
    <>
      <section className="bg-primary section-padding">
        <div className="container-custom">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Über uns</h1>
          <p className="text-white/60 text-lg max-w-2xl">Das größte Kfz-Sachverständigenbüro in Lüdenscheid – mit eigener 300m² Prüfhalle.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl font-bold text-primary mb-6">Andreas Koop – Kfz-Techniker-Meister</h2>
              <p className="text-primary/70 leading-relaxed mb-6">
                Andreas Koop ist Kfz-Techniker-Meister und wurde an der renommierten BVSK-Akademie ausgebildet. Mit über 20 Jahren Erfahrung in der Kfz-Schadensbegutachtung und mehr als 20.000 erstellten Gutachten gehört das Sachverständigenbüro Koop zu den erfahrensten und größten Büros in der Region.
              </p>
              <p className="text-primary/70 leading-relaxed mb-6">
                Unser Büro befindet sich in der Lennestraße 3 in Lüdenscheid. Die eigene 300m² große Prüfhalle bietet optimale Bedingungen für eine professionelle Schadenanalyse – mit modernster Vermessungstechnik und Beleuchtung.
              </p>
              <p className="text-primary/70 leading-relaxed mb-8">
                Wir sind im gesamten Märkischen Kreis und darüber hinaus tätig. Auf Wunsch kommen wir auch direkt zu Ihnen – ob zur Werkstatt, nach Hause oder an den Unfallort.
              </p>
              <div className="space-y-3">
                {QUALIFICATIONS.map((q) => (
                  <div key={q} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-primary/80 font-medium">{q}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-gray-light rounded-2xl p-8">
                <h3 className="font-heading text-xl font-bold text-primary mb-4">Unsere Prüfhalle</h3>
                <p className="text-primary/70 leading-relaxed">
                  300m² Prüfhalle mit modernster Ausstattung: Hebebühnen, professionelle Beleuchtung und Vermessungstechnik für eine präzise Schadensdokumentation.
                </p>
              </div>
              <div className="bg-gray-light rounded-2xl p-8">
                <h3 className="font-heading text-xl font-bold text-primary mb-4">Kontakt</h3>
                <div className="space-y-2 text-primary/70">
                  <p>{CONTACT.company}</p>
                  <p>{CONTACT.street}, {CONTACT.zip} {CONTACT.city}</p>
                  <a href={CONTACT.phoneLink} className="block text-accent font-semibold">{CONTACT.phone}</a>
                  <a href={`mailto:${CONTACT.email}`} className="block hover:text-accent transition-colors">{CONTACT.email}</a>
                  <p>{CONTACT.hours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-light">
        <div className="container-custom">
          <h2 className="font-heading text-3xl font-bold text-primary mb-8 text-center">Unser Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member) => (
              <div key={member.name} className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100">
                <div className="w-20 h-20 rounded-full bg-primary/5 mx-auto mb-4 flex items-center justify-center">
                  <span className="font-heading font-bold text-2xl text-accent">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-accent text-sm font-medium mb-3">{member.role}</p>
                <p className="text-primary/60 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
