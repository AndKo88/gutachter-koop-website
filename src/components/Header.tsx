'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Vorteile', href: '/vorteile' },
  { label: 'Blog', href: '/blog' },
  { label: 'Team', href: '/team' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Standort', href: '/standort' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Top Bar */}
      <div className="bg-navy-950 text-white text-sm py-2">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <a href="tel:01705004022" className="flex items-center gap-2 hover:text-accent transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            Direkte Hilfe: 0170 5004022
          </a>
          <a href="https://wa.me/491705004022" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.37 0-4.567-.696-6.42-1.888l-.447-.29-2.642.886.886-2.642-.29-.447A9.953 9.953 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
            Schreiben Sie uns an!
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-navy-900/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo-weiss.png"
              alt="Kfz Sachverständigenbüro Andreas Koop"
              width={260}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <a href="tel:01705004022" className="btn-primary text-xs">
              Jetzt Anrufen
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
            aria-label="Menü öffnen"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden bg-navy-900 border-t border-white/10 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-6 py-3 text-white/80 hover:text-white hover:bg-white/5 text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
            <div className="px-6 pt-3">
              <a href="tel:01705004022" className="btn-primary w-full text-center text-xs">
                Jetzt Anrufen
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
