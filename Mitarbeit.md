# Mitarbeit

## Sprache

Die Artikel sind in der Sprache Deutsch und in der [Höflichkeitsform](https://de.wikipedia.org/wiki/H%C3%B6flichkeitsform). Das Subjektiv bleibt jedoch klein geschrieben.

Die Beschreibungen und Anleitungen sind ausführlich und kommen ohne Abkürzungen aus.

🚫"Fertigung/Stammdaten/Stückliste"  
✅ "Navigieren sie nach *Fertigung > Stammdaten > Stückliste* und klicken sie auf *+ Anliegen*."

Pfade und Bezeichnungen werden kursiv geschrieben.

🚫 Drücken sie auf "+ Anlegen"  
✅ Drücken sie auf *+ Anlegen*

## Konventionen

**Keine Leerschläge**

Die Dateinamen der Artikel dürfen keine Leerschläge enthalten. Dies führt dazu das die generierte URL korrekt kopiert und eingefügt werden kann.

"Persönliche Einstellungen" -> "Persönliche-Einstellungen"

**Dateinamen Prefix**

Der Name eines Bildes beginnt mit dem Namen der Odoo App.

"Produkt anlegen" -> "Verkäufe Produkt anlegen"

## Bilder

Bilder sind im optimal im PNG-Format und mit Auflösung 800x500 gespeichert.  
Für Animationen kann das GIF-Format verwendet werden.

## Struktur

Für jede Odoo-App existiert eine Seite. Beispielsweise für die Notiz-App gibt es die Seite [Notizen](Notizen.md). Auf dieser Seite werden Abläufe aus Kundensicht beschrieben. Dazu die folgende Vorlage:

**Appname.md**

```
# Appname
![](/assets/icon.png)

Information about the App

## Action

Describe an interaction with the App.

```

### Unterseiten

Unterseiten sind nur unter speziellen Bedienungen erlaubt. Beispielsweise ist die App Fertigung umfassen. Deshalb können die Bereiche in Unterseiten platziert werden.

* [Fertigung](Fertigung.md)
* [Fertigung Stammdaten](Fertigung-Stammdaten.md)

Die Bereiche bzw. Unterseite werden in der Hauptseite aufgelistet.