import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Kfz Gutachter Andreas Koop | Größtes Kfz Sachverständigenbüro im Märkischen Kreis',
    template: '%s | Kfz Gutachter Koop',
  },
  description: 'Unsere Kfz Experten erstellen detaillierte Kfz Gutachten, die bei der Schadenregulierung für eine schnelle Abwicklung sorgen. 20.000+ Gutachten erstellt.',
  keywords: ['Kfz Gutachter', 'Lüdenscheid', 'Sachverständiger', 'Kfz Gutachten', 'Andreas Koop', 'Märkischer Kreis', 'Unfallgutachten'],
  authors: [{ name: 'Andreas Koop' }],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://gutachter-koop.de',
    siteName: 'Kfz Gutachter Koop',
    title: 'Kfz Gutachter Andreas Koop | Größtes Kfz Sachverständigenbüro im Märkischen Kreis',
    description: 'Unsere Kfz Experten erstellen detaillierte Kfz Gutachten, die bei der Schadenregulierung für eine schnelle Abwicklung sorgen.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
