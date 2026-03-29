// ============================================================
// GUTACHTER KOOP - Zentrale Daten-Datei
// Alle Texte 1:1 aus den Originalen übernommen
// ============================================================

export const CONTACT = {
  name: 'Andreas Koop',
  company: 'Kfz Sachverständigenbüro Andreas Koop',
  street: 'Lennestraße 3',
  zip: '58511',
  city: 'Lüdenscheid',
  phone: '0170 500 4022',
  phoneLink: 'tel:+491705004022',
  email: 'info@gutachter-koop.de',
  hours: 'Mo–Fr: 08:00–20:00 Uhr, Sa: nach Vereinbarung',
};

export const QUALIFICATIONS = [
  'Kfz-Techniker-Meister',
  'BVSK-Akademie ausgebildet',
  '20+ Jahre Erfahrung',
  '20.000+ erstellte Gutachten',
  '98% Erfolgsquote im SVV-Verfahren',
];

export const SERVICES = [
  {
    title: 'Unfallgutachten',
    slug: 'unfallgutachten',
    description: 'Nach einem Unfall erstellen wir ein detailliertes Schadensgutachten, das alle Schäden an Ihrem Fahrzeug dokumentiert. Dieses Gutachten dient als Grundlage für die Schadensregulierung mit der gegnerischen Versicherung. Als Geschädigter bei einem Haftpflichtschaden entstehen Ihnen keine Kosten – die gegnerische Versicherung übernimmt die Gutachterkosten.',
    icon: 'clipboard',
  },
  {
    title: 'Wertminderung',
    slug: 'wertminderung',
    description: 'Ein Unfallfahrzeug verliert an Wert – auch nach fachgerechter Reparatur. Wir ermitteln die merkantile Wertminderung Ihres Fahrzeugs und stellen sicher, dass Sie den Ihnen zustehenden Ausgleich von der Versicherung erhalten.',
    icon: 'trending-down',
  },
  {
    title: 'Fahrzeugbewertung',
    slug: 'fahrzeugbewertung',
    description: 'Ob Kauf, Verkauf oder Versicherungswechsel – wir ermitteln den aktuellen Marktwert Ihres Fahrzeugs. Unsere Bewertungen basieren auf aktuellen Marktdaten und berücksichtigen Zustand, Ausstattung und Laufleistung.',
    icon: 'search',
  },
  {
    title: 'Sachverständigenverfahren (SVV)',
    slug: 'sachverstaendigenverfahren',
    description: 'Wenn die Kaskoversicherung Ihre Reparaturkosten kürzt, ist das Sachverständigenverfahren Ihr stärkstes Werkzeug. Mit einer Erfolgsquote von 98% setzen wir Ihre berechtigten Ansprüche durch – schnell und außergerichtlich.',
    icon: 'shield',
  },
  {
    title: 'Beweissicherung',
    slug: 'beweissicherung',
    description: 'Wir sichern den Zustand Ihres Fahrzeugs vor oder nach einer Reparatur. Die Beweissicherung schützt Sie vor unberechtigten Forderungen und dokumentiert den tatsächlichen Fahrzeugzustand.',
    icon: 'camera',
  },
  {
    title: 'Oldtimer-Bewertung',
    slug: 'oldtimer-bewertung',
    description: 'Klassische Fahrzeuge verdienen besondere Aufmerksamkeit. Wir bewerten Oldtimer und Youngtimer unter Berücksichtigung von Originalität, Zustand und aktuellem Marktgeschehen.',
    icon: 'star',
  },
];

export const TEAM = [
  {
    name: 'Andreas Koop',
    role: 'Inhaber & Kfz-Techniker-Meister',
    description: 'Kfz-Techniker-Meister, ausgebildet an der BVSK-Akademie. Über 20 Jahre Erfahrung in der Kfz-Schadensbegutachtung und mehr als 20.000 erstellte Gutachten.',
  },
  {
    name: 'Ivan Dalmann',
    role: 'Kfz-Sachverständiger',
    description: 'Erfahrener Kfz-Sachverständiger mit fundiertem technischem Wissen und langjähriger Praxis in der Schadensbegutachtung.',
  },
  {
    name: 'Viktor Malinin',
    role: 'Kfz-Sachverständiger',
    description: 'Spezialist für Unfallgutachten und Fahrzeugbewertungen mit umfassender Expertise im Bereich Kfz-Technik.',
  },
];

export const RATGEBER = [
  {
    slug: 'sachverstaendigenverfahren-ablauf',
    title: 'Das Sachverständigenverfahren – Ihr Recht bei gekürzten Kaskoschäden',
    excerpt: 'Das Sachverständigenverfahren (SVV) ist in den Allgemeinen Bedingungen für die Kfz-Versicherung (AKB) geregelt und dient zur außergerichtlichen Klärung von Meinungsverschiedenheiten zwischen Versicherungsnehmer und Versicherer über die Schadenhöhe.',
    content: `<h2>Was ist das Sachverständigenverfahren?</h2>
<p>Das Sachverständigenverfahren (SVV) ist in den Allgemeinen Bedingungen für die Kfz-Versicherung (AKB) geregelt und dient zur außergerichtlichen Klärung von Meinungsverschiedenheiten zwischen Versicherungsnehmer und Versicherer über die Schadenhöhe.</p>
<p>Wenn Ihre Kaskoversicherung die Reparaturkosten kürzt, haben Sie das Recht, ein Sachverständigenverfahren einzuleiten. Dabei benennt jede Partei einen eigenen Sachverständigen. Können sich diese nicht einigen, wird ein Obmann bestellt, dessen Entscheidung bindend ist.</p>
<h2>Ablauf des Verfahrens</h2>
<p><strong>Schritt 1:</strong> Sie erhalten einen gekürzten Abrechnungsbescheid von Ihrer Versicherung.</p>
<p><strong>Schritt 2:</strong> Sie widersprechen der Kürzung und beantragen das Sachverständigenverfahren.</p>
<p><strong>Schritt 3:</strong> Jede Partei benennt einen Sachverständigen.</p>
<p><strong>Schritt 4:</strong> Die Sachverständigen versuchen, sich auf eine Schadenhöhe zu einigen.</p>
<p><strong>Schritt 5:</strong> Bei Uneinigkeit wird ein Obmann bestellt.</p>
<p><strong>Schritt 6:</strong> Der Obmann trifft eine bindende Entscheidung.</p>
<h2>Warum Gutachter Koop?</h2>
<p>Mit einer Erfolgsquote von 98% im Sachverständigenverfahren sind wir Ihr idealer Partner. Unsere Erfahrung aus über 20.000 Gutachten gibt Ihnen die Sicherheit, dass Ihre Ansprüche professionell durchgesetzt werden.</p>`,
    date: '2026-01-15',
  },
  {
    slug: 'kaskoversicherung-kuerzt-reparaturkosten',
    title: 'Kaskoversicherung kürzt Reparaturkosten – Was tun?',
    excerpt: 'Typische Kürzungen der Versicherung: Stundenverrechnungssätze werden auf niedrigere Werte gekürzt, Ersatzteilpreise werden durch günstigere Alternativen ersetzt.',
    content: `<h2>Typische Kürzungen der Versicherung</h2>
<p>Viele Kaskoversicherer kürzen die Reparaturkosten systematisch. Die häufigsten Kürzungen betreffen:</p>
<ul>
<li>Stundenverrechnungssätze werden auf niedrigere Werte gekürzt</li>
<li>Ersatzteilpreise werden durch günstigere Alternativen ersetzt</li>
<li>Verbringungskosten werden gestrichen</li>
<li>UPE-Aufschläge werden nicht anerkannt</li>
<li>Positionen werden als „nicht unfallbedingt" abgelehnt</li>
</ul>
<h2>Ihre Rechte als Versicherungsnehmer</h2>
<p>Als Versicherungsnehmer haben Sie das Recht auf eine vollständige Erstattung der Reparaturkosten gemäß Ihrem Versicherungsvertrag. Wenn die Versicherung kürzt, müssen Sie das nicht akzeptieren.</p>
<h2>Das Sachverständigenverfahren als Lösung</h2>
<p>Das Sachverständigenverfahren nach §14 AKB ist das effektivste Mittel gegen ungerechtfertigte Kürzungen. Mit unserer Erfolgsquote von 98% setzen wir Ihre Ansprüche zuverlässig durch.</p>`,
    date: '2026-02-01',
  },
  {
    slug: 'nutzungsausfall-oder-mietwagen',
    title: 'Nutzungsausfall oder Mietwagen – Was ist besser?',
    excerpt: 'Nach einem Unfall stehen Geschädigte vor der Wahl: Nutzungsausfallentschädigung oder Mietwagen? Wir erklären den Unterschied und wann welche Option sinnvoll ist.',
    content: `<h2>Nutzungsausfallentschädigung</h2>
<p>Die Nutzungsausfallentschädigung ist eine tägliche Pauschale, die Sie erhalten, wenn Sie während der Reparaturzeit auf einen Mietwagen verzichten. Die Höhe richtet sich nach der Fahrzeugklasse und liegt typischerweise zwischen 23€ und 175€ pro Tag.</p>
<h2>Mietwagen</h2>
<p>Alternativ haben Sie Anspruch auf einen Mietwagen in vergleichbarer Klasse. Die Kosten trägt die gegnerische Versicherung. Achten Sie darauf, einen Mietwagen zu wählen, der Ihrem Fahrzeug entspricht – nicht darüber und nicht darunter.</p>
<h2>Was ist besser?</h2>
<p>Die Entscheidung hängt von Ihrer persönlichen Situation ab. Wenn Sie auf ein Fahrzeug angewiesen sind, ist der Mietwagen die bessere Wahl. Wenn Sie ein Zweitfahrzeug haben oder auf öffentliche Verkehrsmittel ausweichen können, kann die Nutzungsausfallentschädigung finanziell attraktiver sein.</p>`,
    date: '2026-02-15',
  },
  {
    slug: 'restwert-totalschaden-ermitteln',
    title: 'Restwert nach Totalschaden – Was Ihr Fahrzeug noch wert ist',
    excerpt: 'Wie wird der Restwert ermittelt? Der Kfz-Gutachter ermittelt den Restwert durch eine Marktanalyse und prüft, was vergleichbare Unfallfahrzeuge aktuell erzielen.',
    content: `<h2>Was ist ein wirtschaftlicher Totalschaden?</h2>
<p>Ein wirtschaftlicher Totalschaden liegt vor, wenn die Reparaturkosten den Wiederbeschaffungswert des Fahrzeugs übersteigen. In diesem Fall erhalten Sie von der Versicherung den Wiederbeschaffungswert abzüglich des Restwerts.</p>
<h2>Wie wird der Restwert ermittelt?</h2>
<p>Der Kfz-Gutachter ermittelt den Restwert durch eine Marktanalyse. Er prüft, was vergleichbare Unfallfahrzeuge aktuell erzielen. Dabei werden mindestens drei Angebote von regionalen Aufkäufern eingeholt.</p>
<h2>Vorsicht bei Restwertangeboten der Versicherung</h2>
<p>Versicherungen nutzen häufig Online-Restwertbörsen, die überregionale Angebote einholen. Diese Angebote liegen oft deutlich über dem regionalen Marktwert. Als Geschädigter sind Sie nicht verpflichtet, das höchste Angebot anzunehmen – der im Gutachten ermittelte Restwert ist maßgeblich.</p>`,
    date: '2026-03-01',
  },
];

export const CITIES = [
  { slug: 'kfz-gutachter-luedenscheid', name: 'Lüdenscheid', region: 'Märkischer Kreis', distance: '0 km', description: 'Als größtes Kfz-Sachverständigenbüro in Lüdenscheid sind wir Ihr erster Ansprechpartner für Unfallgutachten, Fahrzeugbewertungen und das Sachverständigenverfahren. Unser Büro mit eigener 300m² Prüfhalle befindet sich in der Lennestraße 3 – zentral gelegen und gut erreichbar.' },
  { slug: 'kfz-gutachter-iserlohn', name: 'Iserlohn', region: 'Märkischer Kreis', distance: '15 km', description: 'Kfz-Gutachter für Iserlohn und Umgebung. Wir kommen direkt zu Ihnen oder Sie besuchen unsere Prüfhalle in Lüdenscheid – nur 15 Minuten über die A46.' },
  { slug: 'kfz-gutachter-hemer', name: 'Hemer', region: 'Märkischer Kreis', distance: '12 km', description: 'Ihr Kfz-Gutachter für Hemer. Schnell vor Ort für Unfallgutachten und Fahrzeugbewertungen. Nur 12 km von unserer Prüfhalle entfernt.' },
  { slug: 'kfz-gutachter-altena', name: 'Altena', region: 'Märkischer Kreis', distance: '10 km', description: 'Kfz-Sachverständiger für Altena und das Lennetal. Professionelle Gutachten mit über 20 Jahren Erfahrung.' },
  { slug: 'kfz-gutachter-werdohl', name: 'Werdohl', region: 'Märkischer Kreis', distance: '12 km', description: 'Ihr Gutachter für Werdohl. Wir erstellen Unfallgutachten, Fahrzeugbewertungen und führen Beweissicherungen durch.' },
  { slug: 'kfz-gutachter-plettenberg', name: 'Plettenberg', region: 'Märkischer Kreis', distance: '18 km', description: 'Kfz-Gutachter für Plettenberg und das obere Lennetal. Schnelle Terminvergabe und professionelle Schadensdokumentation.' },
  { slug: 'kfz-gutachter-meinerzhagen', name: 'Meinerzhagen', region: 'Märkischer Kreis', distance: '20 km', description: 'Ihr Kfz-Sachverständiger für Meinerzhagen. Wir sind schnell bei Ihnen – auch am Wochenende nach Vereinbarung.' },
  { slug: 'kfz-gutachter-halver', name: 'Halver', region: 'Märkischer Kreis', distance: '15 km', description: 'Kfz-Gutachter für Halver. Professionelle Unfallgutachten und Wertminderungsberechnungen.' },
  { slug: 'kfz-gutachter-schalkmuehle', name: 'Schalksmühle', region: 'Märkischer Kreis', distance: '8 km', description: 'Ihr Gutachter direkt vor der Haustür. Schalksmühle liegt nur 8 km von unserer Prüfhalle entfernt.' },
  { slug: 'kfz-gutachter-nachrodt-wiblingwerde', name: 'Nachrodt-Wiblingwerde', region: 'Märkischer Kreis', distance: '10 km', description: 'Kfz-Sachverständiger für Nachrodt-Wiblingwerde und Umgebung.' },
  { slug: 'kfz-gutachter-kierspe', name: 'Kierspe', region: 'Märkischer Kreis', distance: '15 km', description: 'Ihr Kfz-Gutachter für Kierspe. Schnelle Terminvergabe und professionelle Gutachten.' },
  { slug: 'kfz-gutachter-hagen', name: 'Hagen', region: 'Kreisfreie Stadt', distance: '20 km', description: 'Kfz-Gutachter für Hagen und Umgebung. Über die A45 sind wir in nur 20 Minuten bei Ihnen. Unfallgutachten, Wertminderung und Fahrzeugbewertung aus einer Hand.' },
  { slug: 'kfz-gutachter-arnsberg', name: 'Arnsberg', region: 'Hochsauerlandkreis', distance: '35 km', description: 'Kfz-Gutachter für Arnsberg und Neheim-Hüsten. Schnell vor Ort über die A46. Über 20.000 Gutachten erstellt.' },
  { slug: 'kfz-gutachter-menden', name: 'Menden', region: 'Märkischer Kreis', distance: '20 km', description: 'Ihr Kfz-Sachverständiger für Menden (Sauerland). Professionelle Gutachten mit kurzen Wartezeiten.' },
  { slug: 'kfz-gutachter-balve', name: 'Balve', region: 'Märkischer Kreis', distance: '18 km', description: 'Kfz-Gutachter für Balve und das Hönnetal. Wir kommen zu Ihnen oder Sie besuchen unsere Prüfhalle.' },
  { slug: 'kfz-gutachter-neuenrade', name: 'Neuenrade', region: 'Märkischer Kreis', distance: '15 km', description: 'Ihr Gutachter für Neuenrade. Schnell und unkompliziert zu Ihrem Gutachten.' },
  { slug: 'kfz-gutachter-sundern', name: 'Sundern', region: 'Hochsauerlandkreis', distance: '30 km', description: 'Kfz-Sachverständiger für Sundern und das Sauerland. Professionelle Schadensdokumentation.' },
  { slug: 'kfz-gutachter-olpe', name: 'Olpe', region: 'Kreis Olpe', distance: '35 km', description: 'Kfz-Gutachter für Olpe und den Kreis Olpe. Über die A45 schnell erreichbar.' },
  { slug: 'kfz-gutachter-attendorn', name: 'Attendorn', region: 'Kreis Olpe', distance: '30 km', description: 'Ihr Kfz-Sachverständiger für Attendorn und Umgebung am Biggesee.' },
  { slug: 'kfz-gutachter-finnentrop', name: 'Finnentrop', region: 'Kreis Olpe', distance: '25 km', description: 'Kfz-Gutachter für Finnentrop. Professionelle Gutachten für das Lennetal.' },
  { slug: 'kfz-gutachter-duesseldorf', name: 'Düsseldorf', region: 'Kreisfreie Stadt', distance: '80 km', description: 'Kfz-Gutachter auch für Düsseldorf. Wir erstellen professionelle Unfallgutachten in der Landeshauptstadt.' },
];

export const NAV_ITEMS = [
  { label: 'Startseite', href: '/' },
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Standorte', href: '/standorte' },
  { label: 'Ratgeber', href: '/ratgeber' },
  { label: 'Kontakt', href: '/kontakt' },
];
