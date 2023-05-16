---
description: Für einen fantastischen Kundenservice.
tags:
- HowTo
prev: ./
---
# Kundendienst
![icons_odoo_helpdesk](assets/icons_odoo_helpdesk.png)

{{ $frontmatter.description }}

Website: <https://www.odoo.com/de_DE/app/helpdesk>

## Bereiche

| Bereich                                                           | Beschreibung                                       |
| ----------------------------------------------------------------- | -------------------------------------------------- |
| [Kundendienst Datenmanagement](Helpdesk%20Data%20Management.md) | Daten zu Kundendienst exportieren und importieren. |

## Organisation

### Team anlegen

Zeigen Sie *Kundendienst > Konfiguration > Kundendienst Teams* an. Erstellen Sie einen neuen Eintrag. Geben Sie einen *Namen*, *Beschreibung* und einen gültigen E-Mail-Alias ein.

![](assets/Kundendiesnt%20Programmierung.png)

Kehren Sie zur *Übersicht* zurück um das Team-Dashboard zu sehen.

### Ticket-Stufen festlegen

Navigieren Sie nach *Kundendienst > Konfiguration > Stufen* und legen Sie fest welche Stufen für welche Teams zur Verfügung stehen. Ebenfalls können Sie im Feld *E-Mail Vorlage* festlegen, ob ein Mail beim Erreichen der Stufe versendet wird.

## Ticketverwaltung

### Ticket erstellen

Kunden können ein E-Mail an die E-Mail-Adresse des Teams schicken.

![](assets/Kundendienst%20Mail%20Out.png)

Und erhalten eine Bestätigung bei der Verarbeitung der E-Mail.

![](assets/Kundendienst%20Eingang.png)

### Tickets zuweisen

Auf dem Dashboard von *Kundendienst* sehen Sie, die nicht zugewiesenen Tickets.

![](assets/Kundendiest%20Tickets%20ohne%20Bearbeiter.png)

Bearbeiten Sie diese Tickets und wählen Sie entweder *Mir Zuweisen* oder geben Sie im Feld *Zugewiesen an* einen Mitarbeitenden an.

![](assets/Kundendiesnt%20Zugewiesen.png)

## Bereinigung

### Helpdesk-Tickets zusammenführen

Ist die App [Datenbereinigung](Data%20Cleaning.md) installiert, können Sie Tickets zusammenfünren. Navigieren Sie nach *Kundendienst > Tickets > Alle Tickets* und suchen Sie die Tickets, die Sie zusammenführen möchten. Markieren Sie die Einträge und wählen Sie *Aktion > Zusammenführen*.  Im neuen Dialog erhaltne Sie eine Übersicht beiden Einträge. Klicken Sie auf *Zusammenführen* und bestätien Sie Warnung mit *Ok*. Im Chatter hält Odoo die ursprünglichen Informationen des Tickets fest.

![](assets/Helpdesk%20Merged.png)