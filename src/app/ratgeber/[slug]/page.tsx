import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { RATGEBER, CONTACT } from '@/lib/data';

export async function generateStaticParams() {
  return RATGEBER.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = RATGEBER.find((a) => a.slug === params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default function RatgeberDetailPage({ params }: { params: { slug: string } }) {
  const article = RATGEBER.find((a) => a.slug === params.slug);
  if (!article) notFound();

  return (
    <>
      <section className="bg-primary section-padding">
        <div className="container-custom">
          <Link href="/ratgeber" className="text-white/40 hover:text-accent transition-colors text-sm flex items-center gap-2 mb-4">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Zurück zum Ratgeber
          </Link>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">{article.title}</h1>
          <time className="text-white/40 text-sm">{new Date(article.date).toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div
              className="prose prose-lg prose-gray max-w-none [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-primary [&_h2]:mt-8 [&_h2]:mb-4 [&_p]:text-primary/70 [&_p]:leading-relaxed [&_li]:text-primary/70 [&_strong]:text-primary"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            <div className="mt-12 p-8 bg-accent/5 border border-accent/20 rounded-2xl">
              <h3 className="font-heading text-xl font-bold text-primary mb-3">Fragen zu diesem Thema?</h3>
              <p className="text-primary/70 mb-4">Wir beraten Sie gerne – kostenlos und unverbindlich.</p>
              <a href={CONTACT.phoneLink} className="btn-primary">{CONTACT.phone}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
