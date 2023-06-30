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

**Pull** - Das lokale Git Repository aktualisieren:
* <kbd>ctrl + p</kbd> drücken
* Befehl `Obisdian Git: Pull from remote repository` ausführen

**Push** - Änderungen speichern und auf <https://github.com/Mint-System/Odoo-Wiki> hochladen:
* <kbd>ctrl + p</kbd> drücken
* Befehl `Obisdian Git: Create backup` ausführen

## Philosophie

Das Odoo Wiki hat zum Ziel den Anwender eine einfache und kompakte Hilfestellung anzubieten. Die Anleitungen sind als kurze und prägnante Rezepte formuliert. Umfassende und komplexe Themen werden als [Best Practice](Best%20Practice.md) abgebildet. Konkrete Arbeitsschritte zur Konfiguration und Verwendung von Odoo werden als [HowTos](README.md#HowTos) dokumentiert.

## Demo-Daten

Zur Erläuterung der Instruktionen wird ein fiktives Unternehmen mit diesen Informationen verwendet:

![logo-velo-manufaktur-ag](assets/logo-velo-manufaktur-ag.svg)

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

Camt.053 für Import Kontoauszug: [camt053_example](https://raw.githubusercontent.com/Mint-System/Odoo-Wiki/master/assets/camt053_example.xml)[](assets/camt053_example.xml)

Beispiele von Rechnungen zum Importieren gibt es hier: <https://github.com/swico/qr-bill>.

## Sprache

Die Artikel sind in der Sprache Deutsch und in der [Höflichkeitsform](https://de.wikipedia.org/wiki/H%C3%B6flichkeitsform) verfasst.

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

### Veraltet

Wenn Apps verwaltet sind können Sie diese Markierung verwenden:

```
::: warning
Diese App ist veraltet und wird aufgrund von Aktualisierungen in Odoo nicht mehr benötigt.
#deprecated
:::
```

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

Für jede Odoo-App existiert eine Seite. Beispielsweise gibt es die Seite [Notizen](Note.md) für die Notiz-App. Auf dieser Seite werden Abläufe aus Kundensicht beschrieben. Dazu existiert diese Vorlage:

**Appname.md**

```
## Appname
![](/assets/icon.png)

Informationen zur App

## Bereiche

| Bereich  | Beschreibung |
| --- | --- |
| [Appname Stammdaten](Appname%20Stammdaten.md) | Daten zentral pflegen. |

## Erweiterungen

| Bereich  | Beschreibung |
| --- | --- |
| [Appname Erweiterung](Appname%Erweiterung.md) | App erweitern. |

## Abschnitt

### Aufgabenbeschreibung
Aufgabenträger: ![](Rollen#Rollenname)

Beschreibung zur Interaktion mit der App

```

### Unterseiten

Unterseiten sind nur unter speziellen Bedienungen erlaubt. Beispielsweise ist die App Fertigung sehr umfangreich. Deshalb kann die App in Unterseiten (Bereiche) aufgeteilt werden.

* [Manufacture](Manufacture.md)

| Bereich                                         | Beschreibung                                   |
| ----------------------------------------------- | ---------------------------------------------- |
| [Manufacture Data Management](Manufacture%20Data%20Management.md) | Produkte und Dienstleistungen zentral pflegen. |

Die Bereiche bzw. Unterseite werden in der Hauptseite aufgelistet.

Genauso werden *Erweiterungen* und *Videos* verlinkt.

### OCA-Apps

Dokumentation zu den OCA-Apps müssen diese Vorgaben erfüllen:
* Standard OCA-Icon
* Titel ist gleich dem Titel im Repository
* Repository-Link zeigt auf die aktuellste Version

### Namensbereiche

Die foglenden Namensbereiche sind reserviert:

* Prozess
* Best-Practice
* Odoo-App
* OCA-App

## Tags

Mit Obsidian können Artikel getagged `#tagname` werden. Tags werden von Vuepress nicht verarbeitet, daher werden diese nur zur Verwaltung der Artikel verwendet. Folgende Tags stehen zur Verfügung:

* #FIXME: An dieser Stelle ist eine Änderungen offen.
* #Odoo13: Tag für Odoo Version 13.
* #Odoo14: Tag für Odoo Version 14.
* #Odoo15: Tag für Odoo Version 15.
* #Odoo16: Tag für Odoo Version 16.
* #deprecated: Tag für veraltete Artikel
