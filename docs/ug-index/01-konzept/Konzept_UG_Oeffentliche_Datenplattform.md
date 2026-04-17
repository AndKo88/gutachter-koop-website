# Konzept: Die öffentliche Unfallgiganten-Datenplattform (UG-Index)

## 1. Die Vision: Transparenz als Marktmacht

Die größte Schwäche aller bisherigen Wertminderungsmodelle (inklusive HTS) ist die **mangelnde Transparenz**. Niemand weiß genau, wie viele Händler wann befragt wurden und wie die konkreten Rohdaten aussehen.

**Die Lösung:** Eine öffentliche "Live-Datenplattform" unter `daten.unfallgiganten.de` (oder integriert auf der Hauptseite). Hier wird der gesamte Datenbestand anonymisiert offengelegt. Jeder Gutachter, Anwalt, Richter und Versicherer kann jederzeit einsehen, auf welcher empirischen Basis das UG-Modell rechnet.

## 2. Struktur der öffentlichen Datenseite

Die Seite ist nach dem Prinzip "Micro-Minimalist" aufgebaut: Clean, aufgeräumt und stark datengetrieben.

### Sektion A: Das Live-Dashboard (Der Vertrauensbeweis)
- **Gesamtzahl der Datensätze:** "Aktuell 14.532 bewertete Schadensfälle im Pool"
- **Aktive Händler:** "1.204 registrierte Kfz-Händler nehmen an der Befragung teil"
- **Letztes Update:** "Datenbestand aktualisiert vor: 2 Stunden"
- **Wachstumskurve:** Ein dynamischer Chart, der zeigt, wie der Datenbestand jeden Monat wächst.

### Sektion B: Der Datenpool (Filterbar & Transparent)
Eine offene Tabelle, in der man nach Fahrzeugklassen filtern kann. Es werden *keine* Kennzeichen oder Fahrgestellnummern gezeigt, aber die harten Fakten:

| Datum | Fahrzeugklasse | Alter (Monate) | Laufleistung | Rep-Kosten (Netto) | Antrieb | Region | Händler-Schätzung (Minderwert) |
|---|---|---|---|---|---|---|---|
| 17.04.26 | Mittelklasse (SUV) | 34 | 45.000 km | 8.500 € | Elektro | Bayern | 1.200 € |
| 16.04.26 | Oberklasse | 12 | 15.000 km | 12.000 € | Verbrenner | NRW | 2.500 € |
| ... | ... | ... | ... | ... | ... | ... | ... |

*Richter können hier nachprüfen: "Ah, in Bayern wurden für einen 3 Jahre alten E-SUV mit 8.500€ Schaden tatsächlich 1.200€ Minderwert am Markt veranschlagt."*

### Sektion C: Die UG-Methodik (Whitepaper)
Hier wird die Formel offengelegt. Wir erklären, *wie* der Algorithmus aus den Live-Daten den Korridor berechnet.
- Warum E-Autos anders bewertet werden.
- Warum regionale Unterschiede wichtig sind.
- Wie Ausreißer (unrealistische Händlerangaben) statistisch geglättet werden.

---

## 3. Der Datenfluss: Die permanente Befragung

HTS hat *einmalig* (2011-2013) befragt. Das UG-Modell befragt **permanent**.

**Der Workflow für Autohändler (im Anbieter-Dashboard):**
1. Ein Händler loggt sich ein.
2. Das System zeigt ihm 3 echte, anonymisierte Gutachten (Bilder + Rep-Kosten + Fahrzeugdaten).
3. Frage: *"Was würden Sie im Ankauf für dieses Fahrzeug aufgrund des reparierten Vorschadens abziehen?"*
4. Der Händler gibt seinen Wert ein.
5. **Incentive:** Für jede Bewertung erhält der Händler "UG-Punkte" (z.B. für besseres Ranking, Leads oder einen Badge "Geprüfter Markt-Experte").

**Der Workflow für Gutachter:**
1. Gutachter laden ihre fertigen Gutachten (anonymisiert) in das System hoch.
2. Diese Gutachten bilden die Basis für die Händlerbefragung.
3. So entsteht ein geschlossener Kreislauf aus echten Unfällen und echten Händlerbewertungen.

---

## 4. Die neuen UG-Parameter (Besser als HTS)

Wir übernehmen die guten Ansätze von HTS (Korridor, Marktbefragung), machen sie aber viel genauer:

### Parameter, die wir übernehmen & verfeinern:
1. **Wertverlustkurve:** Bei uns dynamisch, nicht starr. Ein Porsche 911 hat eine andere Kurve als ein VW Polo.
2. **Schadenintensität:** Wir differenzieren genauer (z.B. Strukturschaden vs. nur geschraubte Teile).
3. **Kilometerkorrektur:** Bei uns nicht linear, sondern fahrzeugspezifisch.
4. **Marktlagefaktor:** Bei uns regional (PLZ-basiert), da der Markt in München anders ist als in Brandenburg.

### NEUE Parameter (Der "Gamechanger"):
5. **Antriebsart (E-Auto / Hybrid / Verbrenner):** E-Autos haben nach Unfällen (besonders am Unterboden/Akku) einen massiv höheren merkantilen Minderwert am Markt. Kein altes Modell berücksichtigt das!
6. **Reparaturweg:** Hersteller-Vertragswerkstatt vs. freie Werkstatt.
7. **Ausstattungsniveau:** Ein Basis-Modell verliert prozentual anders an Wert als ein voll ausgestattetes Modell.
8. **Live-Markt-Index:** Das Modell gleicht die berechneten Werte mit den aktuellen Live-Preisen auf dem Gebrauchtwagenmarkt ab.

## 5. Fazit

Durch diese öffentliche Plattform wird das UG-Modell unangreifbar. Wenn eine Versicherung behauptet: "Wir berechnen nach Ruhkopf/Sahm 400 Euro", kann der Anwalt sagen: "Hier ist der Link zur UG-Datenbank. 14.500 echte Händler sagen, es sind 1.200 Euro. Wollen Sie gegen den echten Markt argumentieren?"
