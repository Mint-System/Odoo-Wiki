---
title: Einstellungen
description: Odoo-Einstellungen aktivieren und konfigurieren.
kind: howto
prev: ./
partner: Odoo S.A.
---

# Einstellungen

![icons_odoo_settings](attachments/icons_odoo_settings.png)

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

| Erweiterung                                                                               | Beschreibung                                                       |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [Auth Impersonate User](Auth%20Impersonate%20User.md)                                     | Mit einem anderen Benutzer einloggen.                              |
| [Auth OAuth Keycloak](Auth%20OAuth%20Keycloak)                                            | Ermöglich Keycloak Integration mit Odoo OAuth.                     |
| [Auth OIDC](Auth%20OIDC.md)                                                               | Login mit OpenID Connect Provider.                                 |
| [Auth Session Timeout](Auth%20Session%20Timeout.md)                                       | Session-Timeout festlegen.                                         |
| [Auth TOTP IP Check](Auth%20TOTP%20IP%20Check.md)                                         | Zwei-Faktor-Authentisierung für bestimmte IP-Netzwerke ignorieren. |
| [Base User Role Company](Base%20User%20Role%20Company.md)                                 | Benutzer-Rollen in Abhängigkeit vom Unternehmen aktivieren.        |
| [Base User Role](Base%20User%20Role.md)                                                   | Gruppenberechtigungen mit Benutzer-Rollen verwalten.               |
| [Home Background Image](Home%20Background%20Image.md)                                     | Den Odoo-Startbildschirm gestalten.                                |
| [OAuth Multi Token](Auth%20OAuth%20Multi%20Token.md)                                      | Unterstützung für mehrere Geräteabhängigke OAuth-Tokens.           |
| [Odoo Microsoft Account](Odoo%20Microsoft%20Account.md)                                   | Login mit Microsoft-Account.                                       |
| [Show DB Name](Show%20DB%20Name.md)                                                       | Zeigt den Datenbanknamen oben rechts an.                           |
| [Web Company Color](Web%20Company%20Color.md)                                             | Farben des Odoo Backend Theme anpassen.                            |
| [Web Enterprise Admin Expiration Panel](Web%20Enterprise%20Admin%20Expiration%20Panel.md) | Meldung Ablauf der Datenbank nur für Admins anzeigen.              |
| [Web Theme Classic](Web%20Theme%20Classic.md)                                             | Kontrast auf Benutzeroberfläche verbessern.                        |

## Konfiguration

### Unternehmensdaten eintragen

Die Unternehmensdaten werden an vielen Stellen im System verwendet. Unter anderem für die Rechnung, für Angebote, für E-Mails und weiteres. Navigieren Sie nach _Einstellungen > Allgemeine Einstellungen > Unternehmen_ und wählen Sie _Update Info_. Füllen Sie bitte diese Daten aus und verwenden Sie ein Logo mit folgenden Details:

- **Datenformat**: JPG oder PNG
- **Grösse**: Empfehlung Breite 300 pixel

Und füllen Sie mindestens diese Felder aus:

- **Adresse**: Anschrift ihres Unternehmens
- **Tax ID**: Die Steuernummer
- **Unternehmens ID**: Das ist die Handelregister-Nummer ihres Unternehmen
- **E-Mail**: Allgemeine Kontaktadresse
- **Website**: Webauftritt des Unternehmen
- **Währung**: Basis-Währung des Unternehmens

## Berechtigung

### Benutzer-Registration verhindern

Navigieren Sie nach _Einstellungen > Allgemeine Einstellungen > Berechtigungen_ und wählen Sie bei _Kundenkonto_ die Option _Auf Einladung_ aus.

### Benutzer-Registration erlauben

Navigieren Sie nach _Einstellungen > Allgemeine Einstellungen > Berechtigungen_ und wählen Sie bei _Kundenkonto_ die Option _Kostenlose Anmeldung_ aus.

## Technisch

### Entwicklermodus aktivieren

Navigieren nach _Einstellungen > Allgemeine Einstellungen > Entwicklertools_. Klicken Sie auf _Entwicklermodus aktivieren_. Nun erscheinen neue Optionen in verschiedenen Odoo Apps.

In der URL erscheint zusätzlich der Parameter `?debug=1`. Der Entwicklermodus kann auch über die manuelle Eingabe dieses Parameters aktiviert werden.

Eine weitere Möglichkeiten zur Aktivierung des Entwicklermodus ist die Installation dieses Browser-Addon: [Odoo Debug](https://www.droggol.com/odoo-tools). Installieren Sie das Addon in ihrem Browser Sie erhalten dieses Icon in der Toolbar:

![Einstellungen Odoo Debug](attachments/Einstellungen%20Odoo%20Debug.png)

Mit einem Mausklick können Sie damit den Entwicklermodus ein- und ausschalten.

### Superuser werden

Aktivieren Sie den [Entwicklermodus](Settings.md#Entwicklermodus%20aktivieren).

Klicken Sie _Entwicklertools > Superuser werden_. Das Layout von Odoo ändert sich, Sie sind nun Superuser. Um zum normalen Benutzer zu wechseln, müssen Sie sich abmelden.

::: warning
Im Superuser-Modus werden alle Berechtigungen ignoriert. Das System kann unabsichtlich in einen inkonsistenten Zustand gebracht werden.
:::

### Tour deaktivieren

Aktivieren Sie den [Entwicklermodus](Settings.md#Entwicklermodus%20aktivieren).

Klicken Sie auf das Käfer-Symbol in der Menu-Leiste oben rechts. Wählen Sie _Tour deaktivieren_.

## Berichte

### Neues Papierformat einrichten

Navigieren Sie nach _Einstellungen > Technisch > Berichtswesen > Papieformat_. Wir nehmen an, es braucht ein neues Papieformat für einen Etikettendrucker. Erstellen Sie einen neuen Eintrag:

![](attachments/Neues%20Papierformat.png)

::: tip
Für einen exakten Druck, müssen Sie die Seitengrösse in Inch und Milimeter kennen
:::

### Dokumentlayout konfigurieren

Die Darstellung der generierten Dokumente kann einfach angepasst werden. Navigieren Sie nach _Einstellungen > Allgemeine Einstellungen > Geschäftsunterlagen_ und wählen Sie _Dokumentlayout konfigurieren_ aus. Die hier ausgewählte Dokumentvorlage wird für alle Berichte übernommen.

![](attachments/Einstellungen%20Dokumentlayout.png)

### Papierformat für Bericht anpassen

Angenommen Sie möchten das Papieformat für den ISR-Einzahlungsschein ändern, öffnen Sie im Entwicklermodus _Einstellungen > Technisch > Berichtswesen > Papierformat._

Duplizieren Sie das Papierformat _European A4 without borders_ als _European A4 for ISR Report_.

Passen Sie das Papierformat an, beispielsweise mit _Linker Rand (mm)_ `5.00`.

Im Entwicklermodus öffnen Sie _Einstellungen > Technisch > Berichtswesen > Berichte_, wählen den Bericht _ISR_ und legen Sie das neue Papieformat fest.

## Standardwerte

### Standardwerte setzen

Für jedes Dokument können Sie Standardwerte mit Bedingungen festlegen. Öffnen Sie im Entwicklermodus ein Objekt, beispielsweise ein _Angebot_ und legen Sie für ein Feld einen neuen Wert fest. Bevor Sie das Angebot speichern, navigieren Sie zum Entwicklertools und wählen _Standardwert setzen_. Im Dialog wählen Sie das Feld und den Wert sowie die passende Bedingung. Wenn Sie den Standardwert gespeichert haben, wir dieser bei der Erstellung eines neuen Dokuments angewendet.

![Einstellungen Standardwerte festlegen](attachments/Einstellungen%20Standardwerte%20festlegen.gif)

### Datumsformat ändern

Für jede installierte Sprache kann das angezeigte Datumsformat überschrieben werden. Öffnen Sie das Sprachpaket via _Einstellungen > Allgemeine Einstellungen > Sprachen > Sprachen verwalten_. Bearbeiten Sie das Feld _Datumsformat_ und geben Sie dort `%d.%m.%Y` ein.

![](attachments/Einstellung%20Datumsformat.png)

### Sequenz anpassen

Um die Nummerierung einer Sequenz anzupassen, öffnen Sie _Einstellungen > Technisch > Sequenzen- und Identifizierungsmerkmale > Sequenzen_. Wählen Sie die Sequenz aus und setzen die beispielsweise das Feld _Nächste Nummer zuweisen_.

### Sequenz-Nummerierung per Datum zurücksetzen

Damit die Sequenz-Nummer auf ein bestimmtes Datum, beipsielweise Ende Jahr, zurückgesetzt wird, navigieren Sie nach _Einstellungen > Technisch > Sequenzen- und Identifizierungsmerkmale > Sequenzen_ und öffnen eine Sequenz. Aktivieren Sie die Option _Teilmenge aus date_range verwenden_ und tragen Sie hier die Datums-Abschnitte und _Nächste Nummer zuweisen_ ein.
