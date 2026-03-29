import Link from 'next/link';
import Image from 'next/image';
import { CONTACT, NAV_ITEMS, SERVICES } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-primary text-white/80">
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image src="/images/logo-weiss.png" alt="Gutachter Koop Logo" width={160} height={55} className="h-12 w-auto" />
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              {CONTACT.company}<br />
              Kfz-Techniker-Meister<br />
              BVSK-Akademie ausgebildet<br />
              Über 20 Jahre Erfahrung
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading font-bold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/60 hover:text-accent transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="font-heading font-bold text-white mb-4">Leistungen</h3>
            <ul className="space-y-2">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link href="/leistungen" className="text-white/60 hover:text-accent transition-colors text-sm">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-heading font-bold text-white mb-4">Kontakt</h3>
            <div className="space-y-3 text-sm">
              <p className="text-white/60">
                {CONTACT.street}<br />
                {CONTACT.zip} {CONTACT.city}
              </p>
              <a href={CONTACT.phoneLink} className="block text-accent hover:text-accent-light transition-colors font-semibold">
                {CONTACT.phone}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="block text-white/60 hover:text-accent transition-colors">
                {CONTACT.email}
              </a>
              <p className="text-white/60">{CONTACT.hours}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} {CONTACT.company}. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <Link href="/impressum" className="text-white/40 hover:text-accent transition-colors text-sm">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-white/40 hover:text-accent transition-colors text-sm">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
