---
title: Personal Verträge
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- HowTo
prev: ./personal
---
# Personal Verträge
![icons_odoo_hr](attachments/icons_odoo_hr.png)

Personalverträge zentral verwalten.

## Vertragsmanagement

### Zugriff auf Verträge erlauben

Navigieren Sie nach *Einstellungen > Benutzer* und wählen Sie den Bentzer aus, welcher Zugriff auf die Arbeitsverträge haben soll. Vergeben Sie im Feld *Verträge* die Berechtigung *Administrator*.

### Arbeitsvertrag hinzufügen

Die Entlohnung und Arbeitszeiten sind im Arbeitsvertrag festgehalten. Fügen Sie den Mitarbeiter über *Personal > Mitarbeiter auswählen > Link Verträge* mit *Anlegen* einen Vertrag hinzu. Damit der Vertrag aktiv ist, müssen Sie ihn in den Status *Laufend* verschieben.

## Arbeitszeit

### Arbeitszeiten in Kalender anzeigen

Odoo generiert anhand der Arbeitszeiten Termin-Einträge für die Kalender-Ansicht. Navigieren Sie nach *Personal* und wählen Sie einen Mitarbeitenden aus. Klicken Sie auf den Smart-Link *Arbeitseinträge*.

::: tip
Damit die Arbeitseinträge generiert werden, muss auf dem Mitarbeiter-Eintrag ein aktiver Arbeitsvertrag sein.
:::