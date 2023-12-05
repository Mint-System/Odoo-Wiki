---
title: Einstellungen
description: Odoo-Einstellungen aktivieren und konfigurieren.
tags:
- HowTo
prev: ./
---
# Einstellungen
![icons_odoo_web_studio](attachments/icons_odoo_web_studio.png)

{{ $frontmatter.description }}

## Bereiche

| Bereich                                                          | Beschreibung                                          |
| ---------------------------------------------------------------- | ----------------------------------------------------- |
| [Einstellungen Aktionen](Settings%20Actions.md)                  | Odoo-Einstellungen automatisieren.                    |
| [Einstellungen Berechtigungen](Settings%20Permissions.md)        | Einstellungen zur Zugriffsrechte und Gruppen.         |
| [Einstellungen Datenmanagement](Settings%20Data%20Management.md) | Daten zu Einstellungen exportieren und importieren.   |
| [Einstellungen E-Mail](Settings%20E-Mail.md)                     | Odoo mit Plattformen von Dritten integrieren.         |
| [Einstellungen Login](Settings%20Login.md)                       | Odoo-Einstellungen zum Benutzer und Anmeldeverfahren. |
| [Einstellungen OAuth](Settings%20OAuth.md)                       | OAuth-Integration mit Odoo.                           |
| [Einstellungen Technisch](Settings%20Technical.md)               | Technische Einstellungen zur Odoo-Datenbank.          |
| [Einstellungen Übersetzungen](Settings%20Translations.md)        | Einstellungen zu Sprachpakete und Übersetzungen.      |
| [Einstellungen Unternehmen](Settings%20Company.md)               | Mehrere Unternehmen mit Odoo verwalten.               |

## Erweiterungen

| Erweiterung                                                       | Beschreibung                                                         |
| ----------------------------------------------------------------- | -------------------------------------------------------------------- |
| [Audit Log](Audit%20Log.md)                                       | Operationen auf Daten loggen.                                        |
| [Auth Impersonate User](Auth%20Impersonate%20User.md)             | Mit einem anderen Benutzer einloggen.                                |
| [Auth OAuth Keycloak](Auth%20OAuth%20Keycloak)                    | Ermöglich Keycloak Integration mit Odoo OAuth.                       |
| [Auth OIDC](Auth%20OIDC.md)                                       | Login mit OpenID Connect Provider.                                   |
| [Auth TOTP IP Check](Auth%20TOTP%20IP%20Check.md)                 | Zwei-Faktor-Authentisierung für bestimmte IP-Netzwerke ignorieren.   |
| [Base Optional Quick Create](Base%20Optional%20Quick%20Create.md) | Quick Create Option für Datenmodelle deaktivieren.                   |
| [Base Recursion Limit](Base%20Recursion%20Limit.md)               | Limit für Python-Rekursionen erhöhen.                                |
| [Base User Role](Base%20User%20Role.md)                           | Gruppenberechtigungen mit Benutzer-Rollen verwalten.                 |
| [Date Range](Date%20Range.md)                                     | Verwaltung von Datums-Bereichen zur Filterung von Daten.             |
| [Fetchmail Incoming Log](Fetchmail%20Incoming%20Log.md)           | Loggt Informationen zu eingehenden E-Mails.                          |
| [Home Background Image](Home%20Background%20Image.md)             | Den Odoo-Startbildschirm gestalten.                                  |
| [Impersonate](Impersonate.md)                                     | Schnelles Wechseln zwischen Benutzer-Accounts.                       |
| [Mail Manual Routing](Mail%20Manual%20Routing.md)                 | Erlaubt Zuordnung von empfangenen E-Mails.                           |
| [Mail Server Filter](Mail%20Server%20Filter.md)                   | Eingehende und ausgehende Mail-Server anhand Datenbanknamen filtern. |
| [Mail Service Users](Mail%20Service%20Users.md)                   | Service-Benutzer von Lizenzvertrag ausschliessen.                    |
| [Odoo Microsoft Account](Odoo%20Microsoft%20Account.md)           | Login mit Microsoft-Account.                                         |
| [Report QWeb PDF Watermark](Report%20QWeb%20PDF%20Watermark.md)   | Wasserzeichen auf PDF-Berichte hinzufügen.                           |
| [Show DB Name](Show%20DB%20Name.md)                               | Zeigt den Datenbanknamen oben rechts an.                             |
| [Web Company Color](Web%20Company%20Color.md)                     | Farben des Odoo Backend Theme anpassen.                              |
| [Web Dark Mode](Web%20Dark%20Mode.md)                             | Dark mode für Weboberfläche.                                         |
| [Web Editor Show Code](Web%20Editor%20Show%20Code.md)             | Aktion "Code anzeigen" im HTML-Editor ohne Entwicklermodus anzeigen. |
| [Web Responsive](Web%20Responsive.md)                             | Responsive Anzeige der Odoo-Oberfläche.                              |
| [Web Theme Classic](Web%20Theme%20Classic.md)                     | Kontrast auf Benutzeroberfläche verbessern.                          |

## Entwicklung

### Entwicklermodus aktivieren

Navigieren nach *Einstellungen > Allgemeine Einstellungen > Entwicklertools*.

Auf *Entwicklermodus aktivieren* klicken. Nun erscheinen neue Optionen in verschiedenen Odoo Apps. In der URL erscheint zusätzlich der Parameter `?debug=1`. Der Entwicklermodus kann auch über die manuelle Eingabe dieses Parameters aktiviert werden.

Eine weitere Möglickeit ist die Installation der Browser-Addon [Odoo Debug](https://www.droggol.com/odoo-tools). Installieren Sie deses Addon in ihrem Browser. Anschliessend erscheint das folgende Icon in der Toolbar:

![Einstellungen Odoo Debug](attachments/Einstellungen%20Odoo%20Debug.png)

Mit einem Mausklick können Sie damit den Entwicklermodus ein- und ausschalten.

### Superuser werden

Aktivieren Sie den [Entwicklermodus](Settings.md#Entwicklermodus%20aktivieren).

Klicken Sie *Entwicklertools > Superuser werden*. Das Layout von Odoo ändert sich, Sie sind nun Superuser. Um zum normalen Benutzer zu wechseln, müssen Sie sich abmelden.

::: warning
Im Superuser-Modus werden alle Berechtigungen ignoriert. Das System kann unabsichtlich in einen inkonsistenten Zustand gebracht werden.
:::

### Tour deaktivieren

Aktivieren Sie den [Entwicklermodus](Settings.md#Entwicklermodus%20aktivieren).

Klicken Sie auf das Käfer-Symbol in der Menu-Leiste oben rechts. Wählen Sie *Tour deaktivieren*.

## Berichte

### Neues Papierformat einrichten

Navigieren Sie nach *Einstellungen > Technisch > Berichtswesen > Papieformat*. Wir nehmen an, es braucht ein neues Papieformat für einen Etikettendrucker. Erstellen Sie einen neuen Eintrag:

![](attachments/Neues%20Papierformat.png)

::: tip
Für einen exakten Druck, müssen Sie die Seitengrösse in Inch und Milimeter kennen
:::

### Dokumentlayout konfigurieren

Die Darstellung der generierten Dokumente kann einfach angepasst werden. Navigieren Sie nach *Einstellungen > Allgemeine Einstellungen > Geschäftsunterlagen* und wählen Sie *Dokumentlayout konfigurieren* aus. Die hier ausgewählte Dokumentvorlage wird für alle Berichte übernommen.

![](attachments/Einstellungen%20Dokumentlayout.png)

### Papierformat für Bericht anpassen

Angenommen Sie möchten das Papieformat für den ISR-Einzahlungsschein ändern, öffnen Sie im Entwicklermodus *Einstellungen > Technisch > Berichtswesen > Papierformat.*

Duplizieren Sie das Papierformat *European A4 without borders* als *European A4 for ISR Report*.

Passen Sie das Papierformat an, beispielsweise mit *Linker Rand (mm)* `5.00`.

Im Entwicklermodus öffnen Sie *Einstellungen > Technisch > Berichtswesen > Berichte*, wählen den Bericht *ISR* und legen Sie das neue Papieformat fest.

## Standardwerte

### Standardwerte setzen

Für jedes Geschäftsobjekt können Sie Standardwerte mit Bedingungen festlegen. Öffnen Sie im Entwicklermodus ein Objekt, beispielsweise ein Angbot und legen Sie für ein Feld einen neuen Wert fest. Bevor Sie das Angebot speichern, navigieren Sie zum Entwicklermenu und wählen *Standardwert setzen*. Im Dialog wählen Sie das Feld und den Wert sowie die passende Bedingung. Wenn Sie den Standardwert gespeichert haben, wir dieser bei der Erstellung eines neuen Geschäftsobjekts angwendet.

![Einstellungen Standardwerte festlegen](attachments/Einstellungen%20Standardwerte%20festlegen.gif)

### Datumsformat ändern

Für jede installierte Sprache kann das angezeigte Datumsformat überschrieben werden. Öffnen Sie das Sprachpaket via *Einstellungen > Allgemeine Einstellungen > Sprachen > Sprachen verwalten*. Bearbeiten Sie das Feld *Datumsformat* und geben Sie dort `%d.%m.%Y` ein.

![](attachments/Einstellung%20Datumsformat.png)

### Sequenz anpassen

Um die Nummerierung einer Sequenz anzupassen, öffnen Sie *Einstellungen > Technisch > Sequenzen- und Identifizierungsmerkmale > Sequenzen*. Wählen Sie die Sequenz aus und setzen die beispielsweise das Feld *Nächste Nummer zuweisen*.

### Sequenz-Nummerierung per Datum zurücksetzen

Damit die Sequenz-Nummer auf ein bestimmtes Datum, beipsielweise Ende Jahr, zurückgesetzt wird, navigieren Sie nach *Einstellungen > Technisch > Sequenzen- und Identifizierungsmerkmale > Sequenzen* und öffnen eine Sequenz. Aktivieren Sie die Option *Teilmenge aus date_range verwenden* und tragen Sie hier die Datums-Abschnitte und *Nächste Nummer zuweisen* ein.
