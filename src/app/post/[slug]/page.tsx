import Link from 'next/link'
import { notFound } from 'next/navigation'

const articles: Record<string, { title: string; author: string; date: string; content: string }> = {
  'achsvermessung-nach-unfall-warum-die-eingangsvermessung-entscheidend-ist': {
    title: 'Achsvermessung nach Unfall: Warum die Eingangsvermessung entscheidend ist',
    author: 'Andreas Koop',
    date: '27. April 2025',
    content: `Nach einem Verkehrsunfall denken die meisten Betroffenen zuerst an sichtbare Schäden: Dellen, Kratzer, gebrochene Scheinwerfer. Doch einige der folgenschwersten Schäden bleiben dem bloßen Auge verborgen \u2013 und genau hier kommt die Achsvermessung ins Spiel.

Warum eine Achsvermessung nach dem Unfall unverzichtbar ist

Bei einem Aufprall im Bereich der Räder, des Radträgers oder der Lenkung wirken enorme Kräfte auf die Fahrwerksgeometrie. Schon ein vermeintlich harmloser Bordsteinrempler oder ein Felgenkratzer kann ausreichen, um die Spur, den Sturz oder den Nachlauf zu verstellen. Die Folgen sind gravierend: Das Fahrzeug zieht zur Seite, der Bremsweg verlängert sich und die Reifen verschleißen einseitig \u2013 ein erhebliches Sicherheitsrisiko.

Als Kfz-Sachverständiger mit über 20.000 erstellten Gutachten erlebe ich regelmäßig, dass Versicherungen versuchen, Fahrwerksschäden als \u201Evorbestehend\u201C abzutun. Eine professionelle Achsvermessung direkt nach dem Unfall liefert den unwiderlegbaren Beweis, dass die Abweichungen unfallbedingt sind.

Eingangsvermessung: Messen, nicht einstellen

Bei Gutachter Koop wird ausschließlich eine sogenannte Eingangsvermessung durchgeführt. Die Messung übernimmt unser Partner, die LCS GmbH, die Auswertung der Messwerte mache ich als Sachverständiger selbst. Das bedeutet: Wir messen den exakten Ist-Zustand des Fahrwerks nach dem Unfall, ohne etwas einzustellen oder zu korrigieren. Warum? Weil eine sofortige Einstellung den Beweis für den Schaden vernichten würde.

Die Eingangsvermessung dokumentiert die Abweichungen von den Herstellervorgaben und wird Bestandteil des Unfallgutachtens. Erst wenn das Gutachten erstellt und die Beweissicherung abgeschlossen ist, erfolgt die eigentliche Einstellung in der Reparaturwerkstatt.

Das Koch HD-10 EasyTouch: Motorsport-Technologie für Ihr Gutachten

Wir setzen auf das Koch HD-10 EasyTouch Achsmesssystem \u2013 ein System, das ich aus meiner eigenen Motorsporterfahrung kenne und schätze. Die Koch-Achsmessanlagen gehören zu den präzisesten Messsystemen auf dem Markt und werden auch im professionellen Rennsport eingesetzt.

Das Besondere: Die Messung erfolgt im Fahrzustand, also ohne das Fahrzeug anzuheben. Das ist entscheidend, denn beim Anheben verändert sich die Fahrwerksgeometrie durch die Entlastung der Federn. Unsere Messung im belasteten Zustand liefert daher die realistischsten und gerichtsfest verwertbaren Ergebnisse.

Die grüne Lasertechnologie des Koch-Systems erfasst Spur, Sturz, Spurdifferenzwinkel und Achsschrägstand mit höchster Genauigkeit. Die Messprotokolle sind detailliert, nachvollziehbar und halten vor jedem Gericht stand.

Wer trägt die Kosten?

Wenn Sie unverschuldet in einen Verkehrsunfall verwickelt wurden, übernimmt die gegnerische Haftpflichtversicherung sämtliche Kosten der Schadensfeststellung \u2013 einschließlich der Achsvermessung. Für Sie als Geschädigten entstehen keinerlei Kosten.

Die Achsvermessung ist ein anerkannter und notwendiger Bestandteil der Unfallschadensbegutachtung. Versicherungen, die versuchen, diese Kosten abzulehnen, handeln rechtswidrig. Wir setzen Ihre Ansprüche konsequent durch.

Fazit: Gehen Sie kein Risiko ein

Ein Unfall ist stressig genug. Lassen Sie nicht zu, dass verborgene Fahrwerksschäden Ihre Sicherheit gefährden oder Ihre Ansprüche geschmälert werden. Eine professionelle Achsvermessung mit dem Koch HD-10 System in unserer Prüfhalle in Lüdenscheid gibt Ihnen die Gewissheit, die Sie brauchen \u2013 und die Beweise, die Ihr Gutachten wasserdicht machen.

Rufen Sie uns an unter 0170 - 500 40 22 oder besuchen Sie unsere Achsvermessungs-Seite für weitere Informationen.`,
  },
}

const allSlugs = [
  'achsvermessung-nach-unfall-warum-die-eingangsvermessung-entscheidend-ist',
  'ersthelfer-von-morgen-gutachter-koop-unterstutzt-kindergarten-in-ludenscheid',
  'gut-zu-wissen-verkehrsrechtsschutz',
  'aufgepasst-das-sind-die-tricks-der-versicherungen',
  'tuv-gebuhren-2023-welche-kosten-fallen-fur-pkw-motorrad-und-hu-au-an',
  '7-tipps-tricks-wie-erkenne-ich-einen-unfallwagen-beim-gebrauchtwagenkauf',
  '7-tipps-unfall-im-ausland-was-ist-zu-tun',
  'wann-ist-ein-schaden-ein-bagatellschaden',
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
  'achsvermessung-nach-unfall-warum-die-eingangsvermessung-entscheidend-ist': 'Achsvermessung nach Unfall: Warum die Eingangsvermessung entscheidend ist',
  'ersthelfer-von-morgen-gutachter-koop-unterstutzt-kindergarten-in-ludenscheid': 'Ersthelfer von morgen: Gutachter Koop unterstützt Kindergärten in Lüdenscheid',
  'gut-zu-wissen-verkehrsrechtsschutz': 'Gut zu wissen: Verkehrsrechtsschutz',
  'aufgepasst-das-sind-die-tricks-der-versicherungen': 'Aufgepasst: Das sind die Tricks der Versicherungen!',
  'tuv-gebuhren-2023-welche-kosten-fallen-fur-pkw-motorrad-und-hu-au-an': 'TÜV Gebühren 2023: Welche Kosten fallen für PKW, Motorrad und HU/AU an?',
  '7-tipps-tricks-wie-erkenne-ich-einen-unfallwagen-beim-gebrauchtwagenkauf': '7 Tipps & Tricks: Wie erkenne ich einen Unfallwagen beim Gebrauchtwagenkauf',
  '7-tipps-unfall-im-ausland-was-ist-zu-tun': '7 Tipps: Unfall im Ausland – was ist zu tun?',
  'wann-ist-ein-schaden-ein-bagatellschaden': 'Wann ist ein Schaden ein Bagatellschaden?',
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
