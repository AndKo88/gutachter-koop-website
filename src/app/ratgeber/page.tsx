import type { Metadata } from 'next';
import Link from 'next/link';
import { RATGEBER } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Ratgeber',
  description: 'Ratgeber rund um Kfz-Gutachten, Versicherungsrecht, Sachverständigenverfahren und Ihre Ansprüche nach einem Unfall.',
};

export default function RatgeberPage() {
  return (
    <>
      <section className="bg-primary section-padding">
        <div className="container-custom">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Ratgeber</h1>
          <p className="text-white/60 text-lg max-w-2xl">Wissen rund um Kfz-Gutachten, Versicherungsrecht und Ihre Ansprüche nach einem Unfall.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RATGEBER.map((article) => (
              <Link key={article.slug} href={`/ratgeber/${article.slug}`} className="group bg-gray-light rounded-xl p-8 hover:shadow-md transition-all border border-gray-100">
                <time className="text-primary/40 text-sm">{new Date(article.date).toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                <h2 className="font-heading text-xl font-bold text-primary mb-3 mt-2 group-hover:text-accent transition-colors">{article.title}</h2>
                <p className="text-primary/60 leading-relaxed mb-4">{article.excerpt}</p>
                <span className="text-accent font-medium flex items-center gap-2">
                  Weiterlesen
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
