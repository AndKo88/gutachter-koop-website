import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="bg-navy-900 text-white min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-accent mb-4">404</h1>
        <p className="text-xl mb-8">Seite nicht gefunden</p>
        <Link href="/" className="btn-primary">Zur Startseite</Link>
      </div>
    </section>
  )
}
