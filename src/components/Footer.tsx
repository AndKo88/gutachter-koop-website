import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Image src="/images/logo-weiss.png" alt="Kfz Sachverständigenbüro Andreas Koop" width={200} height={40} className="h-8 w-auto mb-4" />
            <p className="text-sm leading-relaxed">Ihr unabhängiges Kfz Sachverständigenbüro in Lüdenscheid und Umgebung.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">Menü</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/vorteile" className="hover:text-white transition-colors">Vorteile</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/team" className="hover:text-white transition-colors">Team</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/standort" className="hover:text-white transition-colors">Kontakt</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:info@gutachter-koop.de" className="hover:text-white transition-colors">info@gutachter-koop.de</a></li>
              <li><a href="tel:01705004022" className="hover:text-white transition-colors">0170 / 500 40 22</a></li>
              <li><a href="tel:+492351667876" className="hover:text-white transition-colors">02351 / 667876</a></li>
              <li>Lennestraße 3</li>
              <li>58511 Lüdenscheid</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">Standorte</h4>
            <ul className="space-y-2 text-sm mb-6">
              <li><Link href="/standort" className="hover:text-white transition-colors">Lüdenscheid</Link></li>
              <li><Link href="/iserlohn" className="hover:text-white transition-colors">Iserlohn</Link></li>
            </ul>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Unfallgutachter Koop. Alle Rechte vorbehalten.</p>
          <p>Designed by UnfallGiganten</p>
        </div>
      </div>
    </footer>
  )
}
