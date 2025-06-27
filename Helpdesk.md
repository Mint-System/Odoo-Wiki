---
title: Kundendienst
description: Für einen fantastischen Kundenservice.
kind: howto
prev: ./
---
# Kundendienst
![icons_odoo_helpdesk](attachments/icons_odoo_helpdesk.png)

{{ $frontmatter.description }}

Website: <https://www.odoo.com/de_DE/app/helpdesk>

## Bereiche

| Bereich                                                         | Beschreibung                                       |
| --------------------------------------------------------------- | -------------------------------------------------- |
| [Kundendienst Aktionen](Helpdesk%20Actions.md)                       | Arbeitsflüsse im Kundendienst automatisieren.      |
| [Kundendienst Datenmanagement](Helpdesk%20Data%20Management.md) | Daten zu Kundendienst exportieren und importieren. |

## Erweiterungen


| Erweiterung                                     | Beschreibung                |
| ----------------------------------------------- | --------------------------- |
| [Helpdesk Management](Helpdesk%20Management.md) | Helpdesk Community Edition. |

## Organisation

### Team anlegen

Zeigen Sie *Kundendienst > Konfiguration > Kundendienst Teams* an. Erstellen Sie einen neuen Eintrag. Geben Sie einen *Namen*, *Beschreibung* und einen gültigen E-Mail-Alias ein.

![](attachments/Kundendiesnt%20Programmierung.png)

Kehren Sie zur *Übersicht* zurück um das Team-Dashboard zu sehen.

### Ticket-Stufen festlegen

Navigieren Sie nach *Kundendienst > Konfiguration > Stufen* und legen Sie fest welche Stufen für welche Teams zur Verfügung stehen. Ebenfalls können Sie im Feld *E-Mail Vorlage* festlegen, ob ein Mail beim Erreichen der Stufe versendet wird.

## Ticketverwaltung

### Ticket erstellen

Kunden können ein E-Mail an die E-Mail-Adresse des Teams schicken.

![](attachments/Kundendienst%20Mail%20Out.png)

Und erhalten eine Bestätigung bei der Verarbeitung der E-Mail.

![](attachments/Kundendienst%20Eingang.png)

### Tickets zuweisen

Auf dem Dashboard von *Kundendienst* sehen Sie, die nicht zugewiesenen Tickets.

![](attachments/Kundendiest%20Tickets%20ohne%20Bearbeiter.png)

Bearbeiten Sie diese Tickets und wählen Sie entweder *Mir Zuweisen* oder geben Sie im Feld *Zugewiesen an* einen Mitarbeitenden an.

![](attachments/Kundendiesnt%20Zugewiesen.png)

## Bereinigung

### Helpdesk-Tickets zusammenführen

Ist die App [Datenbereinigung](Data%20Cleaning.md) installiert, können Sie Tickets zusammenfünren. Navigieren Sie nach *Kundendienst > Tickets > Alle Tickets* und suchen Sie die Tickets, die Sie zusammenführen möchten. Markieren Sie die Einträge und wählen Sie *Aktionen > Zusammenführen*.  Im neuen Dialog erhaltne Sie eine Übersicht beiden Einträge. Klicken Sie auf *Zusammenführen* und bestätien Sie Warnung mit *Ok*. Im Chatter hält Odoo die ursprünglichen Informationen des Tickets fest.

![](attachments/Helpdesk%20Merged.png)

## Website

### Support-Formular auf Website erstellen

Führen Sie [App installieren](Apps.md#App%20installieren) für *Online Ticket Submission* `website_helpdesk_form` aus.

Navigieren Sie nach *Kundendienst > Konfiguration > Kundendienstteams* und zeigen Sie ein Team an. Aktivieren Sie die Option *Website-Formular*. Klicken Sie auf den Smart-Button *Gehe zu Website*.

Bearbeiten Sie das Formular und aktivieren Sie die Option *Beschreibung* auf dem gleichnamigen Feld. Fügen Sie diesen Text ein:

```
Please answer these questions in the description:

> What are the steps to reproduce the issue?
> What is the current behavior you observe?
> What would you like the behavior/result to be?
```

Übersetzen Sie die Seite und verwenden Sie diesen Text für die Beschreibung:

```
Bitte beantworte in der Beschreibung diese Fragen:

> Wie kann das Problem reproduziert werden?
> Welches Verhalten kannst du derzeit beobachten?
> Welches Verhalten/Ergebnis würdest du ohne das Problem erwarten?
```