import Link from 'next/link';
import Image from 'next/image';
import { CONTACT, QUALIFICATIONS, SERVICES, TEAM, CITIES, RATGEBER } from '@/lib/data';

function HeroSection() {
  return (
    <section className="relative bg-primary overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 25% 50%, #B8860B 0%, transparent 50%), radial-gradient(circle at 75% 50%, #D4A017 0%, transparent 50%)' }} />
      </div>
      <div className="container-custom section-padding relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-accent rounded-full" />
            <span className="text-accent text-sm font-medium">Größtes Kfz-Sachverständigenbüro in Lüdenscheid</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Nicht nur ein Kfz Gutachter, sondern Ihr{' '}
            <span className="text-gold-gradient">vertrauenswürdiger Partner</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl">
            Kfz-Techniker-Meister Andreas Koop – ausgebildet an der BVSK-Akademie, über 20 Jahre Erfahrung und mehr als 20.000 erstellte Gutachten. Wir setzen Ihre Ansprüche durch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={CONTACT.phoneLink} className="btn-primary text-lg py-5 px-10">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              {CONTACT.phone}
            </a>
            <Link href="/leistungen" className="btn-secondary text-lg py-5 px-10 border-white/20 text-white hover:bg-white/10 hover:text-white">
              Unsere Leistungen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { number: '20.000+', label: 'Erstellte Gutachten' },
    { number: '20+', label: 'Jahre Erfahrung' },
    { number: '98%', label: 'Erfolgsquote SVV' },
    { number: '300m²', label: 'Eigene Prüfhalle' },
  ];

  return (
    <section className="bg-white section-padding -mt-8 relative z-20">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-xl bg-gray-light border border-gray-100">
              <div className="font-heading text-3xl md:text-4xl font-bold text-accent mb-2">{stat.number}</div>
              <div className="text-primary/60 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const icons: Record<string, JSX.Element> = {
    clipboard: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>,
    'trending-down': <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>,
    search: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
    shield: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    camera: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    star: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>,
  };

  return (
    <section className="section-padding bg-gray-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Unsere Leistungen</h2>
          <p className="text-primary/60 max-w-2xl mx-auto">Professionelle Kfz-Gutachten für jeden Bedarf – von der Unfallschadensbegutachtung bis zur Oldtimer-Bewertung.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.slug} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-14 h-14 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-5">
                {icons[service.icon]}
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-primary/60 text-[15px] leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/leistungen" className="btn-primary">Alle Leistungen ansehen</Link>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
              Über 20 Jahre Erfahrung in der Kfz-Schadensbegutachtung
            </h2>
            <p className="text-primary/70 mb-6 leading-relaxed">
              Andreas Koop ist Kfz-Techniker-Meister und wurde an der BVSK-Akademie ausgebildet. Mit über 20 Jahren Erfahrung und mehr als 20.000 erstellten Gutachten ist das Sachverständigenbüro Koop das größte Kfz-Sachverständigenbüro in Lüdenscheid.
            </p>
            <p className="text-primary/70 mb-8 leading-relaxed">
              Unsere eigene 300m² große Prüfhalle in der Lennestraße 3 bietet optimale Bedingungen für die Schadenanalyse. Auf Wunsch kommen wir auch direkt zu Ihnen – im gesamten Märkischen Kreis und darüber hinaus.
            </p>
            <div className="space-y-3 mb-8">
              {QUALIFICATIONS.map((q) => (
                <div key={q} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-primary/80 font-medium">{q}</span>
                </div>
              ))}
            </div>
            <Link href="/ueber-uns" className="btn-primary">Mehr über uns</Link>
          </div>
          <div className="bg-gray-light rounded-2xl p-4 lg:p-6">
            <div className="aspect-[4/3] rounded-xl overflow-hidden relative">
              <Image src="/images/andreas-koop-portrait-large.webp" alt="Andreas Koop - Kfz-Techniker-Meister" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="text-center mt-4">
              <h3 className="font-heading font-bold text-xl text-primary">Andreas Koop</h3>
              <p className="text-primary/60 text-sm">Kfz-Techniker-Meister | BVSK-Akademie</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    { step: '01', title: 'Unfall melden', description: 'Rufen Sie uns an oder nutzen Sie unser Kontaktformular. Wir sind täglich von 08:00 bis 20:00 Uhr erreichbar.' },
    { step: '02', title: 'Termin vereinbaren', description: 'Wir vereinbaren einen schnellen Besichtigungstermin – in unserer Prüfhalle oder direkt bei Ihnen vor Ort.' },
    { step: '03', title: 'Gutachten erstellen', description: 'Wir dokumentieren alle Schäden und erstellen ein detailliertes, gerichtsfestes Gutachten.' },
    { step: '04', title: 'Ansprüche durchsetzen', description: 'Mit unserem Gutachten setzen Sie Ihre Ansprüche gegenüber der Versicherung durch. Bei Haftpflichtschäden: 0€ Kosten für Sie.' },
  ];

  return (
    <section className="section-padding bg-primary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">So einfach geht&apos;s</h2>
          <p className="text-white/60 max-w-2xl mx-auto">In vier Schritten zu Ihrem professionellen Kfz-Gutachten.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.step} className="relative">
              <div className="text-accent/20 font-heading font-bold text-7xl mb-4">{s.step}</div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-white/60 text-[15px] leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="section-padding bg-gray-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Unser Team</h2>
          <p className="text-primary/60 max-w-2xl mx-auto">Erfahrene Kfz-Sachverständige für Ihre Ansprüche.</p>
        </div>
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
  );
}

function RatgeberPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Ratgeber</h2>
          <p className="text-primary/60 max-w-2xl mx-auto">Wissen rund um Kfz-Gutachten, Versicherungsrecht und Ihre Ansprüche.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {RATGEBER.slice(0, 4).map((article) => (
            <Link key={article.slug} href={`/ratgeber/${article.slug}`} className="group bg-gray-light rounded-xl p-8 hover:shadow-md transition-all border border-gray-100">
              <h3 className="font-heading text-lg font-bold text-primary mb-3 group-hover:text-accent transition-colors">{article.title}</h3>
              <p className="text-primary/60 text-sm leading-relaxed mb-4">{article.excerpt}</p>
              <span className="text-accent text-sm font-medium flex items-center gap-2">
                Weiterlesen
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/ratgeber" className="btn-secondary">Alle Ratgeber-Artikel</Link>
        </div>
      </div>
    </section>
  );
}

function CitiesPreview() {
  return (
    <section className="section-padding bg-gray-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Ihr Kfz-Gutachter in der Region</h2>
          <p className="text-primary/60 max-w-2xl mx-auto">Wir sind im gesamten Märkischen Kreis und darüber hinaus für Sie da.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {CITIES.map((city) => (
            <Link
              key={city.slug}
              href={`/${city.slug}`}
              className="px-4 py-2 bg-white rounded-lg text-sm text-primary/70 hover:text-accent hover:border-accent border border-gray-200 transition-all"
            >
              {city.name}
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/standorte" className="btn-primary">Alle Standorte</Link>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #B8860B 0%, transparent 60%)' }} />
      </div>
      <div className="container-custom text-center relative z-10">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
          Unfall gehabt? Wir sind für Sie da.
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto mb-8 text-lg">
          Bei Haftpflichtschäden entstehen Ihnen keine Kosten – die gegnerische Versicherung übernimmt die Gutachterkosten. Rufen Sie uns jetzt an.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={CONTACT.phoneLink} className="btn-primary text-lg py-5 px-10">
            {CONTACT.phone}
          </a>
          <Link href="/kontakt" className="btn-secondary text-lg py-5 px-10 border-white/20 text-white hover:bg-white/10 hover:text-white">
            Kontaktformular
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
      <ProcessSection />
      <TeamSection />
      <RatgeberPreview />
      <CitiesPreview />
      <CTASection />
    </>
  );
}
