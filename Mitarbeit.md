---
tags:
- Readme
prev: ./
---
# Mitarbeit

In diesem Dokument werden die Vorgaben zur Mitarbeit am Odoo Handbuch erläutert.

## Verwendung

Technische Konfigurationen damit sie an der Wissensdatenbank mitarbeiten können.

### Initialisierung

1. Erstellen sie einen Account auf <https://github.com/>
2. Werden sie Mitgleid bei <https://github.com/Mint-System/> (optional)
3. Installieren sie <https://obsidian.md/>
4. Installieren sie <https://git-scm.com/>
5. Erstellen sie ein SSH-Schlüsselpaar <https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent>
6. Forken sie das *Odoo Handbuch* Repository (optional)
7. Klonen sie das *Odoo Handbuch* Repository

```bash
git@github.com:Mint-System/Odoo-Handbuch.git
```

8. Öffnen sie den Ordner mit Obsidian

### Synchronisierung

Der Obsidian Vault und das Git Repository werden mit dem Obisidian Git Plugin synchronisiert.

**Pull** - Das lokale Git Repository aktualisieren:
* <kbd>ctrl + p</kbd> drücken
* Befehl `Obisdian Git: Pull from remote repository` ausführen

**Push** - Änderungen speichern und auf <https://github.com/Mint-System/Odoo-Handbuch> hochladen:
* <kbd>ctrl + p</kbd> drücken
* Befehl `Obisdian Git: Create backup` ausführen

## Philosophie

Mit dem Odoo-Handbuch streben wir an eine einfache und kompakte Hilfestellung den Kunden anzubieten. Die Anleitungen sind als kurze und prägnante Rezepte formuliert. Umfassende und komplexe Themen werden als [Best Practice](Best%20Practice.md). Geschäftsprozesse werden im [Referenzsystem](Referenzsystem.md) beschrieben. 

## Beispielunternehmen

Zur Erläuterung der Instruktionen darf man ein fiktives Unternehmen mit folgenden Informationen verwenden:

![logo-velo-manufaktur-ag](assets/logo-velo-manufaktur-ag.svg)

Name: Velo Manufaktur AG  
Website: <https://www.velo-manufaktur.ch>  
Mail: <mailto:info@velo-manufaktur.ch>  
Odoo: <https://erp.velo-manufaktur.ch>  
Standort: Fahrradstrasse 46, 6460 Altdorf, Schweiz  
Mitarbeiter: Kurt Gisler, Janik von Rotz, Marco Roeleven  
MWST: CHE-103.800.167  
IBAN: CH5604835012345678009  
Bank: Credit Suisse  
BIC: CRESCHZZ  

### Lieferanten

Name: Velo Zürich GmbH  
Website: <https://www.velo-zuerich.ch>  
Standort: Rautistrasse 33, 8047 Zürich, Schweiz  
IBAN: CH35 0900 0000 8510 5462 4  
BIC/SWIFT: POFICHBEXXX  
MWST: CHE-113.887.810  
Handelsregister: CH-020.4.036.470-7  

## Sprache

Die Artikel sind in der Sprache Deutsch und in der [Höflichkeitsform](https://de.wikipedia.org/wiki/H%C3%B6flichkeitsform). Das Subjektiv bleibt jedoch klein geschrieben.

Die Beschreibungen und Anleitungen sind ausführlich und kommen ohne Abkürzungen aus.

## Formvorschriften

Die Navigations-Anweisungen müssen genauso erstellt werden:

🚫"Fertigung/Stammdaten/Stückliste"  
✅ "Navigieren sie nach *Fertigung > Stammdaten > Stückliste* und klicken sie auf *+ Anliegen*."

Pfade und Bezeichnungen werden kursiv geschrieben.

🚫 Drücken sie auf "+ Anlegen"  
✅ Drücken sie auf *+ Anlegen*

Bezeichnungen die gross geschrieben sind, werden nur mit Anfangsbuchstanden gross geschrieben.

🚫 Drücken sie auf *ALS ERLEDIGT MARKIEREN*
✅ Drücken sie auf *Als Erledigt Markieren*

## Markierungen

Um Inhalte speziell zu markieren gibt es diese Optionen.

Markup:
```
::: tip
Info
:::

::: warning
Warnung
::: tip
```

Output:

::: tip
Info
:::

::: warning
Warnung
:::

## Konventionen

**Keine Leerschläge**

Die Dateinamen der Artikel dürfen keine Leerschläge enthalten. Dies führt dazu das die generierte URL korrekt kopiert und eingefügt werden kann.

"Persönliche Einstellungen" -> "Persönliche-Einstellungen"

**Dateinamen Prefix**

Der Name eines Bildes beginnt mit dem Namen der Odoo App.

"Produkt anlegen" -> "Verkauf Produkt anlegen"

## Bilder

Bilder sind im optimal im PNG-Format und mit Auflösung 800x500 gespeichert.  
Für Animationen kann das GIF-Format verwendet werden.

Bilder sollen Ausschnitte und Fragmente aus der Odoo Oberfläche zeigen. Nicht erlaubt sind Screenshots des gesamten Bildschirms.

Informationen eines Kunden dürfen auf den Bilder nicht sichtbar sein.

## Struktur

Für jede Odoo-App existiert eine Seite. Beispielsweise für die Notiz-App gibt es die Seite [Notizen](Notizen.md). Auf dieser Seite werden Abläufe aus Kundensicht beschrieben. Dazu die folgende Vorlage:

**Appname.md**

```
# Appname
![](/assets/icon.png)

Informationen zur App

## Aufgabenbeschreibung
Aufgabenträger: ![](Rollen#Rollenname)

Beschreibung zur Interaktion mit der App

### Abschnitt

Weitere Erläuterungen.

```

### Unterseiten

Unterseiten sind nur unter speziellen Bedienungen erlaubt. Beispielsweise ist die App Fertigung sehr umfangreich. Deshalb können die Bereiche in Unterseiten aufgeteilt werden.

* [Fertigung](Fertigung.md)

| Bereich                                         | Beschreibung                                   |
| ----------------------------------------------- | ---------------------------------------------- |
| [Fertigung Stammdaten](Fertigung%20Stammdaten.md) | Produkte und Dienstleistungen zentral pflegen. |

Die Bereiche bzw. Unterseite werden in der Hauptseite aufgelistet.

Genauso werden Erweiterungen und Videos verlinkt.

### OCA-Apps

Dokumentation zu den OCA-Apps müssen diese Vorgaben erfüllen:
* Standard OCA-icon
* Titel ist gleich dem Titel im Repository
* Repository-Link zeigt auf aktuelle Odoo-Version

### Namensbereiche

Die foglenden Namensbereiche sind reserviert:

* Prozess
* Best-Practice
* Odoo-App
* OCA-App

## Tags

Mit Obsidian können Artikel getagged `#tagname` werden. Tags werden jedoch von Vuepress nicht unterstützt. Daher werden die Tags nur zur Verwaltung der Artikel verwendet. Folgende Tags stehen zur verfügung:

* #FIXME: An dieser Stelle ist eine Änderungen offen.
* #REPLACEME: An der Stelle des Tags mit gemäss Kommentar Inhalt ergänzt werden.
* #DELETEME: Dieser Artikel und Assets kann gelöscht werden.
* #PATCH: Applied patch to fix bug.
* #Odoo13: Dieses Feature ist nur für Odoo 13 verfügbar.
* #Odoo14: Dieses Feature ist nur für Odoo 13 verfügbar.
* #Odoo13-14: Dieses Feature ist für Odoo 13 bis 14 verfügbar.
