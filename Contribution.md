---
title: Mitarbeit
description: Das Odoo Wiki erweitern.
tags:
- Readme
prev: ./
---
# Mitarbeit

In diesem Dokument werden die Vorgaben zur Mitarbeit am Odoo Wiki erläutert.

## Verwendung

Technische Konfigurationen damit Sie an der Wissensdatenbank mitarbeiten können.

### Initialisierung

1. Erstellen Sie einen Account auf <https://github.com/>
2. Werden Sie Mitglied bei <https://github.com/Mint-System/> (optional)
3. Installieren Sie <https://obsidian.md/>
4. Installieren Sie <https://git-scm.com/>
5. Verwenden Sie ihren bestehenden SSH-Schlüssel oder erstellen Sie ein neues SSH-Schlüsselpaar <https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent> 
6. Forken Sie das *Odoo Wiki* Repository (optional)
7. Klonen Sie das *Odoo Wiki Repository

```bash
git clone git@github.com:Mint-System/Odoo-Wiki.git
```

8. Öffnen Sie den Ordner mit Obsidian

### Synchronisierung

Der Obsidian Vault und das Git Repository werden mit dem Obisidian Git Plugin synchronisiert.

![](attachments/Obsidian%20Git%20Plugin.png)

## Philosophie

Das Odoo Wiki hat zum Ziel den Anwender eine einfache und kompakte Hilfestellung anzubieten. Die Anleitungen sind als kurze und prägnante Rezepte formuliert. Umfassende und komplexe Themen werden als [Best Practice](Best%20Practice.md) abgebildet. Konkrete Arbeitsschritte zur Konfiguration und Verwendung von Odoo werden als [HowTos](README.md#HowTos) dokumentiert.

## Markdown

Alle Dokumente des Odoo Wiki sind Markdown-Dokumente. Markdown ist eine [Auszeichnungssprache](https://de.wikipedia.org/wiki/Auszeichnungssprache) mit der Dokument-Formatierungen mit Anweisungen im Text angibt. Mehr zu Markdown gibt es hier <https://www.markdownguide.org/>.

### Tabellen erstellen

Verwenden Sie <https://www.tablesgenerator.com/markdown_tables> um ganz Markdown-Tabellen zu generieren.

## Demo-Daten

Zur Erläuterung der Instruktionen wird ein fiktives Unternehmen mit diesen Informationen verwendet:

![logo-velo-manufaktur-ag](attachments/logo-velo-manufaktur-ag.svg)

Name: Velo Manufaktur AG\
Website: <https://www.velo-manufaktur.ch>\
Mail: <mailto:info@velo-manufaktur.ch>\
Odoo: <https://erp.velo-manufaktur.ch>\
Standort: Fahrradstrasse 46, 6460 Altdorf, Schweiz\
Mitarbeiter: Kurt Gisler, Janik von Rotz, Marco Roeleven\
MWST: CHE-103.800.167\
IBAN: CH40 8080 8008 9197 0092 6\
QR-IBAN: CH68 3080 8008 9197 0092 6\
Bank: Raiffeisen\
BIC: RAIFCH22XXX

### Lieferanten

Name: Velo Zürich GmbH\
Website: <https://www.velo-zuerich.ch>\
Standort: Rautistrasse 33, 8047 Zürich, Schweiz\
MWST: CHE-113.887.810\
Handelsregister: CH-020.4.036.470-7\
IBAN: CH35 0900 0000 85105462 4\
Bank: Postfinance AG\
BIC: POFICHBEXXX

### Dateien

Camt.053 für Import Kontoauszug: [camt053_example](https://raw.githubusercontent.com/Mint-System/Odoo-Wiki/master/assets/camt053_example.xml)[](attachments/camt053_example.xml)

Beispiele von Rechnungen zum Importieren gibt es hier: <https://github.com/swico/qr-bill>.

### Hostname und Mail-Adressen

Anleitungen werden mit fiktiven Hostnamen, Domains und Mail-Adressen beschrieben. Die Verwendung dieser Namen sollte konsistent sein.

Hostnames:

* Haupt-Domain: example.com
* Produktive Odoo-Instanz: odoo.example.com
* Odoo Entwicklungsumgebung: odoo-dev.example.com
* Mailgun: mg.example.com
* Externe API: api.example.com

Mail-Adressen:

* Support: support@example.com
* Catchall: catchall@example.com
* Odoo Bot: odoobot@example.com
* Administrator: admin@example.com
* Odoo Postfach: erp@example.com
* Bounce-Adresse: bounce@example.com
* Kontakt-Adresse: contact@example.com
* Empfang Rechnungen: invoice@example.com

## Sprache

Die Artikel sind in der Sprache Deutsch und in der [Höflichkeitsform](https://de.wikipedia.org/wiki/H%C3%B6flichkeitsform/) verfasst.

Die Beschreibungen und Anleitungen sind ausführlich und kommen ohne Abkürzungen aus.

## Formvorschriften

Die Navigations-Anweisungen müssen genauso erstellt werden:

🚫"Fertigung/Stammdaten/Stückliste"  
✅ "Navigieren Sie nach *Fertigung > Stammdaten > Stückliste* und klicken Sie auf *+ Anliegen*."

Pfade und Bezeichnungen werden kursiv geschrieben.

🚫 Drücken Sie auf "+ Anlegen"  
✅ Drücken Sie auf *+ Anlegen*

Bezeichnungen die gross geschrieben sind, werden nur mit Anfangsbuchstanden gross geschrieben.

🚫 Drücken Sie auf *ALS ERLEDIGT MARKIEREN*
✅ Drücken Sie auf *Als Erledigt Markieren*

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

## Inhaltsverzeichnis

Wenn der Seiteninhalt nicht mehr überschaubar ist, kann ein Inhaltsverzeichnis eingefügt werden. Dazu gibt man vor der ersten Überschrift (nach Titel) den Inhalt `[[TOC]]` ein. Vuepress generiert an dieser Stelle das Inhaltsverzeichnis. Dazu das Inhaltsverzeichnis dieser Seite:

[[TOC]]

## Veraltet

Wenn Apps verwaltet sind, können Sie diese wie folgt markieren:

```
::: warning
Diese App ist veraltet. Wir empfehlen die App [Mail Unsubscribe](Mail%20Unsubscribe) zu verwenden.
#deprecated
:::
```

Output:

::: warning
Diese App ist veraltet. Wir empfehlen die App [Mail Unsubscribe](Mail%20Unsubscribe) zu verwenden.
#deprecated
:::

## Konventionen

**Keine Leerschläge**

Die Dateinamen der Artikel dürfen keine Leerschläge enthalten. Dies führt dazu das die generierte URL korrekt kopiert und eingefügt werden kann.

`Persönliche Einstellungen` -> `persönliche-einstellungen`

**Dateinamen Prefix**

Der Name eines Bildes beginnt mit dem Namen der Odoo App.

`Produkt anlegen.png` -> `Verkauf Produkt anlegen.png`

## Bilder

Bilder sind im optimal im PNG-Format und mit Auflösung 800x500 gespeichert.  
Für Animationen kann das GIF-Format verwendet werden.

Bilder sollen Ausschnitte und Fragmente aus der Odoo Oberfläche zeigen. Nicht erlaubt sind Screenshots des gesamten Bildschirms.

Informationen eines Kunden dürfen auf den Bildern nicht sichtbar sein.

## Struktur

Für jede Odoo-App existiert eine Seite. Beispielsweise gibt es die Seite [Notizen](Note.md) für die Notiz-App. Der folgende Markdown-Code ist eine Zusammenfassung alle verwendbarer Elemente in einer Seite:

**App Name.md**

```markdown
---
title: App Name
description: Description about the App.
tags:
- HowTo
- OCA
- Best-Practice
- Drittanbieter
prev: ./accounting
---
# Appname
![](/assets/icon.png)

{{ $frontmatter.description }}

Website: <https://www.odoo.com/de_DE/app/accounting>\
Technischer Name: `account_financial_report_reverse_move_lines`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Account-Financial-Reporting/tree/15.0/account_financial_report_reverse_move_lines>

## Bereiche

| Bereich | Beschreibung |
| --- | --- |
| [App Name Stammdaten](Appname%20Stammdaten.md) | Daten zentral pflegen. |

## Erweiterungen

| Erweiterung | Beschreibung |
| --- | --- |
| [App Name Erweiterung](Appname%Erweiterung.md) | App erweitern. |

## Beschreibung

Summary of the App.

## Section

### Object action

The actual HowTo content.

```

### Unterseiten

Unterseiten sind nur unter speziellen Bedienungen erlaubt. Beispielsweise ist die App [Fertigung](Manufacture.md) sehr umfangreich. Deshalb kann die App in Unterseiten (Bereiche) aufgeteilt werden.

| Bereich                                         | Beschreibung                                   |
| ----------------------------------------------- | ---------------------------------------------- |
| [Fertigung Datenmanagement](Manufacture%20Data%20Management.md) | Produkte und Dienstleistungen zentral pflegen. |

Die Bereiche bzw. Unterseite werden in der Hauptseite aufgelistet.

Genauso werden *Erweiterungen* verlinkt.

### OCA-Apps

Dokumentation zu den OCA-Apps müssen diese Vorgaben erfüllen:
* Standard OCA-Icon
![icon_oca_app](attachments/icon_oca_app.png)

* Titel ist gleich dem Titel im Repository
* Repository-Link zeigt auf die aktuellste Version

Mit `task update-repo-url` können die Repository-Links aktualisiert werden.

## Tags

Mit Obsidian können Artikel getagged `#tagname` werden. Tags werden von Vuepress nicht verarbeitet, daher werden diese nur zur Verwaltung der Artikel verwendet. Folgende Tags stehen zur Verfügung:

* #FIXME: An dieser Stelle ist eine Änderungen offen.
* #Odoo13: Tag für Odoo Version 13.
* #Odoo14: Tag für Odoo Version 14.
* #Odoo15: Tag für Odoo Version 15.
* #Odoo16: Tag für Odoo Version 16.
* #Odoo17: Tag für Odoo Version 17.
* #deprecated: Tag für veraltete Artikel
