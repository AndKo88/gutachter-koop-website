import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Blog | Wissenswertes von Kfz Gutachter Koop' }

const articles = [
  { slug: 'anhanger-vermietung-ludenscheid-partnerschaft-zwischen-gutachter-koop-und-aral-brugge', title: 'Anhänger Vermietung Lüdenscheid: Partnerschaft zwischen Gutachter Koop und Aral Brügge', year: '2025' },
  { slug: 'ihr-unfallgegner-hat-eine-versicherung-sie-haben-jetzt-den-r5', title: 'Ihr Unfallgegner hat eine Versicherung. Sie haben jetzt den R5.', year: '2025' },
  { slug: 'ersthelfer-von-morgen-gutachter-koop-unterstutzt-kindergarten-in-ludenscheid', title: 'Ersthelfer von morgen: Gutachter Koop unterstützt Kindergärten in Lüdenscheid', year: '2025' },
  { slug: 'gut-zu-wissen-verkehrsrechtsschutz', title: 'Gut zu wissen: Verkehrsrechtsschutz', year: '2019' },
  { slug: 'aufgepasst-das-sind-die-tricks-der-versicherungen', title: 'Aufgepasst: Das sind die Tricks der Versicherungen!', year: '2019' },
  { slug: 'tuv-gebuhren-2023-welche-kosten-fallen-fur-pkw-motorrad-und-hu-au-an', title: 'TÜV Gebühren 2023: Welche Kosten fallen für PKW, Motorrad und HU/AU an?', year: '2023' },
  { slug: '7-tipps-tricks-wie-erkenne-ich-einen-unfallwagen-beim-gebrauchtwagenkauf', title: '7 Tipps & Tricks: Wie erkenne ich einen Unfallwagen beim Gebrauchtwagenkauf', year: '2019' },
  { slug: '7-tipps-unfall-im-ausland-was-ist-zu-tun', title: '7 Tipps: Unfall im Ausland – was ist zu tun?', year: '2019' },
  { slug: 'wann-ist-ein-schaden-ein-bagatellschaden', title: 'Wann ist ein Schaden ein Bagatellschaden?', year: '2019' },
  { slug: 'steinschlag-reparieren-oder-scheibe-austauschen', title: 'Steinschlag – reparieren oder Scheibe austauschen?', year: '2019' },
  { slug: 'old-but-gold-ein-oldtimer-gutachten', title: 'Old but Gold – ein Oldtimer-Gutachten', year: '2019' },
  { slug: 'sturm-orkan-was-tun', title: 'Sturm/Orkan – was tun?', year: '2019' },
  { slug: 'winterreifen-richtig-lagern', title: 'Winterreifen richtig lagern', year: '2019' },
  { slug: 'o-bis-o-oder-7-grad-regel-wann-konnen-die-winterreifen-runter', title: 'O bis O oder 7-Grad-Regel – wann können die Winterreifen runter?', year: '2019' },
  { slug: 'neue-trikots-und-trainingsanzuge-fur-den-sc-ludenscheid', title: 'Neue Trikots und Trainingsanzüge für den SC Lüdenscheid', year: '2019' },
  { slug: 'ist-die-klimaanlage-im-auto-eine-bakterienschleuder', title: 'Ist die Klimaanlage im Auto eine Bakterienschleuder?', year: '2019' },
  { slug: 'restalkohol-wann-kann-es-gefahrlich-werden', title: 'Restalkohol – wann kann es gefährlich werden?', year: '2019' },
  { slug: 'schadet-der-blutenstaub-eigentlich-dem-autolack', title: 'Schadet der Blütenstaub eigentlich dem Autolack?', year: '2019' },
  { slug: 'sicher-in-den-urlaub', title: 'Sicher in den Urlaub', year: '2019' },
  { slug: 'dachboxen-fur-s-auto-was-gibt-es-zu-beachten', title: 'Dachboxen fürs Auto – was gibt es zu beachten?', year: '2019' },
  { slug: 'der-ecall-kommt-was-autofahrer-wissen-mussen', title: 'Der eCall kommt – was Autofahrer wissen müssen', year: '2019' },
  { slug: 'autobahngebuhren-maut-und-vignetten-was-muss-ich-wissen', title: 'Autobahngebühren, Maut und Vignetten – was muss ich wissen?', year: '2019' },
  { slug: 'tipps-gegen-feuchtigkeit-im-auto', title: 'Tipps gegen Feuchtigkeit im Auto', year: '2019' },
]

export default function BlogPage() {
  return (
    <>
      <section className="bg-navy-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Wissenswertes von Kfz Gutachter Koop</h1>
          <p className="text-white/70 text-lg">Ratgeber, Tipps und Neuigkeiten rund um Kfz und Unfallschäden.</p>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-4">
            {articles.map((article, i) => (
              <Link key={i} href={`/post/${article.slug}`} className="block p-6 rounded-xl border border-gray-100 hover:border-accent/30 hover:shadow-md transition-all group">
                <div className="flex justify-between items-start gap-4">
                  <h2 className="font-semibold text-navy-900 group-hover:text-accent transition-colors">{article.title}</h2>
                  <span className="text-xs text-gray-400 flex-shrink-0">{article.year}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
