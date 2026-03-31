---
title: Mitarbeit
description: Das Odoo Wiki erweitern.
tags:
  - Readme
prev: ./
partner: Mint System
---

# Mitarbeit

Das Odoo Wiki hat zum Ziel den Anwender eine einfache und kompakte Hilfestellung anzubieten. Die Anleitungen sind als kurze und prägnante Rezepte formuliert. Umfassende und komplexe Themen werden als [Best Practice](Best%20Practice.md) abgebildet. Konkrete Arbeitsschritte zur Konfiguration und Verwendung von Odoo werden als [HowTos](README.md#HowTos) dokumentiert.

In diesem Dokument werden die Vorgaben zur Mitarbeit am Odoo Wiki erläutert.

## Markdown

Alle Dokumente des Odoo Wiki sind Markdown-Dokumente. Markdown ist eine [Auszeichnungssprache](https://de.wikipedia.org/wiki/Auszeichnungssprache) mit der Dokument-Formatierungen mit Anweisungen im Text angibt. Mehr zu Markdown gibt es hier <https://www.markdownguide.org/>.

## Verwendung

Hier finden Sie technische Konfigurationen damit Sie an der Wissensdatenbank mitarbeiten können.

### Initialisieren

1. Erstellen Sie einen Account auf <https://github.com/>
2. Werden Sie Mitglied bei <https://github.com/Mint-System/> (optional)
3. Installieren Sie <https://obsidian.md/>
4. Installieren Sie <https://git-scm.com/>
5. Verwenden Sie ihren bestehenden SSH-Schlüssel oder erstellen Sie ein neues SSH-Schlüsselpaar <https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent>
6. Forken Sie das _Odoo Wiki_ Repository (optional)
7. Klonen Sie das Odoo Wiki Repository

```bash
git clone git@github.com:Mint-System/Odoo-Wiki.git
```

8. Öffnen Sie den Ordner mit Obsidian

### Synchronisieren

Der Obsidian Vault und das Git Repository werden mit dem Obisidian Git Plugin synchronisiert.

![](attachments/Obsidian%20Git%20Plugin.png)

### Eintrag erstellen

Mit Obsidian wir das _QuickAdd_ Plugin aktiv. Dieses Plugin führt Sie durch die Erfassung eines neuen Wiki-Eintrags. Machen Sie sich mit bestehnden Einträgen vertraut.

Zur Erstellung eines Eintrags rufen Sie die Befehls-Pallete mit <kbd>ctrl</kbd> + <kbd>p</kbd> auf und suchen nach `QuickAdd: Run QuickAdd`. Drücken Sie <kbd>Enter</kbd> und wählen Sie anschliessend `Entry`. Sie werden nun durch die Eingabe geführst.

## Konventionen

Für die Inhalte des Odoo-Wiki gibt es verschiedene Vorschriften. Die folgenden Abschnitte erläutern diese mit Beispielen.

### Dateinamen

**Keine Leerschläge**

Die Dateinamen der Artikel dürfen keine Leerschläge enthalten. Dies führt dazu das die generierte URL korrekt kopiert und eingefügt werden kann.

`Persönliche Einstellungen` -> `persönliche-einstellungen`

**Dateinamen Prefix**

Der Name eines Bildes beginnt mit dem Namen der Odoo App.

`Produkt anlegen.png` -> `Verkauf Produkt anlegen.png`

### Sprache

Die Artikel sind in der Sprache Deutsch und in der [Höflichkeitsform](https://de.wikipedia.org/wiki/H%C3%B6flichkeitsform/) verfasst.

Die Beschreibungen und Anleitungen sind ausführlich und kommen ohne Abkürzungen aus.

### Navigations-Anweisungen

Die Navigations-Anweisungen müssen ausgeschrieben und diesem Format erstellt werden:

🟥 "Fertigung/Stammdaten/Stückliste"  
✅ "Navigieren Sie nach _Fertigung > Stammdaten > Stückliste_ und klicken Sie auf _+ Anliegen_."

Pfade und Bezeichnungen werden kursiv geschrieben:

🟥 Drücken Sie auf "+ Anlegen"  
✅ Drücken Sie auf _+ Anlegen_

Bezeichnungen die gross geschrieben sind, werden nur mit Anfangsbuchstanden gross geschrieben.

🟥 Drücken Sie auf _ALS ERLEDIGT MARKIEREN_  
✅ Drücken Sie auf _Als Erledigt Markieren_

### Info-Boxen

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

### Inhaltsverzeichnis

Wenn der Seiteninhalt nicht mehr überschaubar ist, kann ein Inhaltsverzeichnis eingefügt werden. Dazu gibt man vor der ersten Überschrift (nach Titel) den Inhalt `[[TOC]]` ein. Vuepress generiert an dieser Stelle das Inhaltsverzeichnis. Dazu das Inhaltsverzeichnis dieser Seite:

[[TOC]]

### Veraltete Inhalte

Wenn Apps veraltet sind, können Sie diese wie folgt markieren:

```
::: warning
Diese App ist veraltet. Wir empfehlen die App [Mail Unsubscribe](Mail%20Unsubscribe) zu verwenden.
#DEPRECATED
:::
```

Wenn die Funktion der App Teil von Odoo geworden ist, können Sie diese wie folgt markieren:

```
::: warning
Seit #Odoo18 wird diese App nicht mehr benötigt. 
#DEPRECATED
:::
```


Wenn die Funktion der App Teil von einer anderen App geworden ist, können Sie diese wie folgt markieren:

```
::: warning
Seit #Odoo18 ist diese App Teil von [Mail Unsubscribe].
#DEPRECATED
:::

::: warning
Diese Funktion wurde Teil von [Project Menu].
#DEPRECATED
:::
```

### Bilder

Verwenden Sie so wenig Bilder wie möglich. Die Odoo Benutzer-Oberfläche ändert sich mit jeder Version. Text sind schneller angepasst als Bilder. 

Bilder sind im optimal im PNG-Format und mit Auflösung 800x500 gespeichert.  
Für Animationen kann das GIF-Format verwendet werden.

Bilder sollen Ausschnitte und Fragmente aus der Odoo Oberfläche zeigen. Nicht erlaubt sind Screenshots des gesamten Bildschirms.

Informationen eines Kunden dürfen auf den Bildern nicht sichtbar sein.

### Unterseiten

Unterseiten sind nur unter speziellen Bedienungen erlaubt. Beispielsweise ist die App [Fertigung](Manufacture.md) sehr umfangreich. Deshalb wurde die App in Unterseiten (Bereiche) aufgeteilt.

| Bereich                                                         | Beschreibung                                   |
| --------------------------------------------------------------- | ---------------------------------------------- |
| [Fertigung Datenmanagement](Manufacture%20Data%20Management.md) | Produkte und Dienstleistungen zentral pflegen. |

Die Bereiche bzw. Unterseite werden in der Hauptseite aufgelistet.

Genau gleich werden _Erweiterungen_ verlinkt.

### Tags

Mit Obsidian können Artikel getagged `#tagname` werden. Tags werden von Vuepress nicht verarbeitet, daher werden diese nur zur Verwaltung der Artikel verwendet. Folgende Tags stehen zur Verfügung:

Tags aus der Softwareentwicklung:

- #TODO: Zur Bearbeitung.
- #FIXME: Workarund definiert.
- #BUG: Fehler zum lösen.
- #NOTE: Information zum Text.
- #DEPRECATED: Ist veraltet.

Odoo Version:

- #Odoo13: Tag für Odoo Version 13.
- #Odoo14: Tag für Odoo Version 14.
- #Odoo15: Tag für Odoo Version 15.
- #Odoo16: Tag für Odoo Version 16.
- #Odoo17: Tag für Odoo Version 17.
- #Odoo18: Tag für Odoo Version 18.

### Hostname und Mail-Adressen

Anleitungen werden mit fiktiven Hostnamen, Domains und Mail-Adressen beschrieben. Die Verwendung dieser Namen sollte konsistent sein.

Hostnames:

- Haupt-Domain: example.com
- Produktive Odoo-Instanz: odoo.example.com
- Odoo Entwicklungsumgebung: odoo-dev.example.com
- Mailgun: mg.example.com
- Externe API: api.example.com

Mail-Adressen:

- Support: support@example.com
- Catchall: reply@example.com
- Odoo Bot: odoobot@example.com
- Administrator: admin@example.com
- Odoo Postfach: erp@example.com
- Bounce-Adresse: bounce@example.com
- Kontakt-Adresse: contact@example.com
- Empfang Rechnungen: invoice@example.co

### Externe Links

#### Affiliate Links

Zu bestimmten Themen und Stichwörter werden Affiliate-Links platziert.

**Office 365**

Verwandt: Exchange

```
::: tip
Wir empfehlen [Infomaniak kSuite](https://www.infomaniak.com/de/ksuite?utm_term=67ff9acbaabca) anstatt Office 365 zu verwenden.
:::
```

**Microsoft**

Verwandt: Azure, Entra

```
::: tip
Wir empfehlen Produkte von [Infomaniak](https://www.infomaniak.com/goto/de/home?utm_term=67ff9acbaabca) anstatt Microsoft zu verwenden.
:::
```

**Outlook**

```
::: tip
Wir empfehlen [Infomaniak E-Mail-Hosting](https://www.infomaniak.com/goto/de/hosting.mail?utm_term=67ff9acbaabca) anstatt Outlook zu verwenden.
:::
```

### Demo-Daten

Zur Erläuterung der Instruktionen wird ein fiktives Unternehmen verwendet.

#### Unternehmen

Name: Restic GmbH\
Website: <https://www.restic.ch>\
Mail: <mailto:info@restic.ch>\
Odoo: <https://odoo.restic.ch>\
Standort: Milchstrase 2, 6460 Altdorf, Schweiz\
Mitarbeiter: Kurt Gisler, Janik von Rotz, Marco Roeleven\
MWST: CHE-103.800.167\
IBAN: CH4080808008919700926\
QR-IBAN: CH6830808008919700926\
Bank: Raiffeisen\
BIC: RAIFCH22XXX

#### Lieferant

Name: Totonic GmbH\
Website: <https://www.pi-shop.ch/>\
Standort: Bernerstrasse Nord 150, 8064 Zürich, Schweiz\
MWST: CHE-113.887.810\
Handelsregister: CH-020.4.036.470-7\
IBAN: CH3509000000851054624\
Bank: Postfinance AG\
BIC: POFICHBEXXX

#### Dateien

Camt.053 für Import Kontoauszug: [camt053_example](https://raw.githubusercontent.com/Mint-System/Odoo-Wiki/master/assets/camt053_example.xml)[](attachments/camt053_example.xml)

Beispiele von Rechnungen zum Importieren gibt es hier: <https://github.com/swico/qr-bill>.
