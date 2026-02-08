---
title: Zeiterfassung Ansichten
description: Ansichten der Zeiterfassung anpassen.
kind: howto
section: true
prev: ./hr-timesheet
---

# Zeiterfassung Ansichten

![icons_odoo_hr_timesheet](attachments/icons_odoo_hr_timesheet.png)

{{ $frontmatter.description }}

## Ansichten

### Validierung nach Projekt konfigurieren

Sie möchten die Standardansicht für die Validierung der Zeiterfassungeinträge gemäss folgenden Punkten anpassen:

- Listenansicht als Standardansicht
- Filter _Mein Team_ ausschalten

Rufen Sie die Ansicht _Zeiterfassung > Zu validieren > Letzte Woche_ auf und führen Sie [Aktuelle Aktion bearbeiten](Development%20Actions.md#Aktuelle%20Aktion%20bearbeiten) aus. Erstellen Sie im Abschnitt _Ansichten_ einen Eintrag vom Typ _Baum_.

Als nächstes entfernen Sie den Filter _Mein Team_ und fügen den Filter _Gruppieren nach > Projekt_ hinzu, speichern Sie die Filter als neuen Favoriten _Gruppiert nach Projekt_ mit der Option Standardfilter. Anschliessend führen Sie [Benutzerdefinierter Filter für alle Benutzer freigeben](Development%20Views.md#Benutzerdefinierter%20Filter%20für%20alle%20Benutzer%20freigeben) aus.
