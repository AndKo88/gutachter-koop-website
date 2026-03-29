import Link from 'next/link'
import { notFound } from 'next/navigation'

const articles: Record<string, { title: string; author: string; date: string; content: string }> = {
  'ihr-unfallgegner-hat-eine-versicherung-sie-haben-jetzt-den-r5': {
    title: 'Ihr Unfallgegner hat eine Versicherung. Sie haben jetzt den R5.',
    author: 'Ivan Dalmann',
    date: '13. Juli 2025',
    content: `Ein Knall. Stille. Dann der Ärger. Ein unverschuldeter Unfall ist mehr als nur Blechschaden – er ist ein Eingriff in Ihren Alltag. Ihr Auto steht still, vielleicht sogar nicht mehr verkehrssicher. Es muss zur genauen Untersuchung, zur Demontage, zur präzisen Fahrzeugvermessung. In dieser Zeit sind Sie lahmgelegt. Und genau das ist der Moment, in dem die Gegenseite auf Zeit spielt.

Wir bei Gutachter Koop spielen nicht. Wir handeln. Und unser neuestes Werkzeug dafür ist keine Software und kein Messgerät. Es ist ein Statement auf vier Rädern: der brandneue Renault R5 E-Tech.

Mehr als ein Auto. Eine Garantie.

Vergessen Sie alles, was Sie über "Ersatzwagen" zu wissen glauben. Unser R5 ist kein Trostpreis. Er ist ein Upgrade. Wir haben uns bewusst für die Top-Version entschieden: der größte Akku mit 410 km Reichweite, der stärkste 150-PS-Motor und eine Ausstattung, die begeistert. Warum? Weil Sie nach einem Unfall nicht weniger, sondern mehr verdient haben.

Dieses Auto, in leuchtendem Gelb und veredelt von den Profis bei Folienkonzepte Weber in Lüdenscheid, ist Ihr direkter Vorteil. Und das Beste daran?

Wenn Sie am Unfall keine Schuld tragen, ist dieser Wagen für Sie komplett kostenlos.

Richtig gelesen. Null Kosten. Null Haken. Wir kümmern uns um alles. Die Bereitstellung läuft über unseren bewährten Partner, die LCS GmbH. Die Abrechnung der Mietwagenkosten übernehmen wir direkt mit der gegnerischen Versicherung. Sie unterschreiben, steigen ein und fahren los. Das ist unser Service.

Die Technik, die Ihnen den Rücken freihält

Während Sie im flüsterleisen R5 E-Tech unterwegs sind, kämpfen wir für Ihr Recht. Wir erstellen mit akribischer Präzision Ihr Schadengutachten und sichern jeden einzelnen Euro Ihres Anspruchs.

Ihre nächste Fahrt beginnt hier

Sehen Sie diesen gelben Flitzer auf der Straße, ist das kein Zufall. Es ist ein Zeichen. Ein Zeichen dafür, dass einer unserer Kunden gerade erlebt, wie ein Kfz-Gutachter den Unterschied macht. Den Unterschied zwischen "abgefunden werden" und "sein volles Recht bekommen".

Ein Unfall ist eine Ausnahmesituation. Ihre Reaktion darauf sollte es auch sein. Greifen Sie zum Telefon. Wählen Sie Gutachter Koop. Und während wir Ihren Fall übernehmen, wartet Ihr kostenloser Ersatzwagen schon auf Sie.

Steigen Sie ein. Fahren Sie los. Wir kümmern uns um den Rest. Auch um die Rechnung.`,
  },
}

const allSlugs = [
  'anhanger-vermietung-ludenscheid-partnerschaft-zwischen-gutachter-koop-und-aral-brugge',
  'ihr-unfallgegner-hat-eine-versicherung-sie-haben-jetzt-den-r5',
  'ersthelfer-von-morgen-gutachter-koop-unterstutzt-kindergarten-in-ludenscheid',
  'gut-zu-wissen-verkehrsrechtsschutz',
  'aufgepasst-das-sind-die-tricks-der-versicherungen',
  'tuv-gebuhren-2023-welche-kosten-fallen-fur-pkw-motorrad-und-hu-au-an',
  '7-tipps-tricks-wie-erkenne-ich-einen-unfallwagen-beim-gebrauchtwagenkauf',
  '7-tipps-unfall-im-ausland-was-ist-zu-tun',
  'wann-ist-ein-schaden-ein-bagatellschaden',
  'steinschlag-reparieren-oder-scheibe-austauschen',
  'old-but-gold-ein-oldtimer-gutachten',
  'sturm-orkan-was-tun',
  'winterreifen-richtig-lagern',
  'o-bis-o-oder-7-grad-regel-wann-konnen-die-winterreifen-runter',
  'neue-trikots-und-trainingsanzuge-fur-den-sc-ludenscheid',
  'ist-die-klimaanlage-im-auto-eine-bakterienschleuder',
  'restalkohol-wann-kann-es-gefahrlich-werden',
  'schadet-der-blutenstaub-eigentlich-dem-autolack',
  'sicher-in-den-urlaub',
  'dachboxen-fur-s-auto-was-gibt-es-zu-beachten',
  'der-ecall-kommt-was-autofahrer-wissen-mussen',
  'autobahngebuhren-maut-und-vignetten-was-muss-ich-wissen',
  'tipps-gegen-feuchtigkeit-im-auto',
]

const slugTitles: Record<string, string> = {
  'anhanger-vermietung-ludenscheid-partnerschaft-zwischen-gutachter-koop-und-aral-brugge': 'Anhänger Vermietung Lüdenscheid: Partnerschaft zwischen Gutachter Koop und Aral Brügge',
  'ersthelfer-von-morgen-gutachter-koop-unterstutzt-kindergarten-in-ludenscheid': 'Ersthelfer von morgen: Gutachter Koop unterstützt Kindergärten in Lüdenscheid',
  'gut-zu-wissen-verkehrsrechtsschutz': 'Gut zu wissen: Verkehrsrechtsschutz',
  'aufgepasst-das-sind-die-tricks-der-versicherungen': 'Aufgepasst: Das sind die Tricks der Versicherungen!',
  'tuv-gebuhren-2023-welche-kosten-fallen-fur-pkw-motorrad-und-hu-au-an': 'TÜV Gebühren 2023: Welche Kosten fallen für PKW, Motorrad und HU/AU an?',
  '7-tipps-tricks-wie-erkenne-ich-einen-unfallwagen-beim-gebrauchtwagenkauf': '7 Tipps & Tricks: Wie erkenne ich einen Unfallwagen beim Gebrauchtwagenkauf',
  '7-tipps-unfall-im-ausland-was-ist-zu-tun': '7 Tipps: Unfall im Ausland – was ist zu tun?',
  'wann-ist-ein-schaden-ein-bagatellschaden': 'Wann ist ein Schaden ein Bagatellschaden?',
  'steinschlag-reparieren-oder-scheibe-austauschen': 'Steinschlag – reparieren oder Scheibe austauschen?',
  'old-but-gold-ein-oldtimer-gutachten': 'Old but Gold – ein Oldtimer-Gutachten',
  'sturm-orkan-was-tun': 'Sturm/Orkan – was tun?',
  'winterreifen-richtig-lagern': 'Winterreifen richtig lagern',
  'o-bis-o-oder-7-grad-regel-wann-konnen-die-winterreifen-runter': 'O bis O oder 7-Grad-Regel – wann können die Winterreifen runter?',
  'neue-trikots-und-trainingsanzuge-fur-den-sc-ludenscheid': 'Neue Trikots und Trainingsanzüge für den SC Lüdenscheid',
  'ist-die-klimaanlage-im-auto-eine-bakterienschleuder': 'Ist die Klimaanlage im Auto eine Bakterienschleuder?',
  'restalkohol-wann-kann-es-gefahrlich-werden': 'Restalkohol – wann kann es gefährlich werden?',
  'schadet-der-blutenstaub-eigentlich-dem-autolack': 'Schadet der Blütenstaub eigentlich dem Autolack?',
  'sicher-in-den-urlaub': 'Sicher in den Urlaub',
  'dachboxen-fur-s-auto-was-gibt-es-zu-beachten': 'Dachboxen fürs Auto – was gibt es zu beachten?',
  'der-ecall-kommt-was-autofahrer-wissen-mussen': 'Der eCall kommt – was Autofahrer wissen müssen',
  'autobahngebuhren-maut-und-vignetten-was-muss-ich-wissen': 'Autobahngebühren, Maut und Vignetten – was muss ich wissen?',
  'tipps-gegen-feuchtigkeit-im-auto': 'Tipps gegen Feuchtigkeit im Auto',
}

export function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug }))
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug]
  const title = article?.title || slugTitles[params.slug]

  if (!title && !article) {
    notFound()
  }

  return (
    <>
      <section className="bg-navy-900 text-white py-20">
        <div className="max-w-3xl mx-auto px-4">
          <Link href="/blog" className="text-accent text-sm hover:underline mb-4 inline-block">&larr; Zurück zum Blog</Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{article?.title || title}</h1>
          {article && <p className="text-white/50 text-sm">{article.author} | {article.date}</p>}
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="max-w-3xl mx-auto px-4">
          {article ? (
            <div className="prose prose-lg max-w-none">
              {article.content.split('\n\n').map((p, i) => (
                <p key={i} className="text-gray-700 leading-relaxed mb-4">{p}</p>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-6">Dieser Artikel wird in Kürze aktualisiert.</p>
              <Link href="/blog" className="btn-primary">Zurück zum Blog</Link>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
