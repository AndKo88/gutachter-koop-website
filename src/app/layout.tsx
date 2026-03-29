import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://gutachter-koop.de'),
  title: {
    default: 'Kfz Gutachter Lüdenscheid | Sachverständigenbüro Andreas Koop',
    template: '%s | Gutachter Koop',
  },
  description: 'Kfz-Sachverständiger in Lüdenscheid ✓ 20.000+ Gutachten ✓ Eigene Prüfhalle ✓ 0€ für Geschädigte bei Haftpflichtfällen ☎ 0170 500 4022 – Ihr Gutachter im Märkischen Kreis',
  keywords: ['Kfz Gutachter', 'Sachverständiger', 'Lüdenscheid', 'Unfallgutachten', 'Wertminderung', 'Fahrzeugbewertung', 'Sachverständigenverfahren', 'Märkischer Kreis'],
  authors: [{ name: 'Andreas Koop' }],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://gutachter-koop.de',
    siteName: 'Gutachter Koop',
    title: 'Kfz Gutachter Lüdenscheid | Sachverständigenbüro Andreas Koop',
    description: 'Kfz-Sachverständiger in Lüdenscheid ✓ 20.000+ Gutachten ✓ Eigene Prüfhalle ✓ 0€ für Geschädigte',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
