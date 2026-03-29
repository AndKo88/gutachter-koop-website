import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section-padding bg-white min-h-[60vh] flex items-center">
      <div className="container-custom text-center">
        <div className="text-accent/20 font-heading font-bold text-[120px] leading-none mb-4">404</div>
        <h1 className="font-heading text-3xl font-bold text-primary mb-4">Seite nicht gefunden</h1>
        <p className="text-primary/60 mb-8 max-w-md mx-auto">Die angeforderte Seite existiert leider nicht. Möglicherweise wurde sie verschoben oder gelöscht.</p>
        <Link href="/" className="btn-primary">Zur Startseite</Link>
      </div>
    </section>
  );
}
