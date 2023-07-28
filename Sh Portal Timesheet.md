---
title: Portal Timesheet
description: Zeiterfassung im Portal.
tags:
- HowTo
- Drittanbieter
prev: ./hr-timesheet
---
# Portal Timesheet
![odoo_icon_sh_task_time_adv](attachments/odoo_icon_sh_task_time_adv.png)

{{ $frontmatter.description }}

Technischer Name: `sh_portal_timesheet`\
Repository: <https://gitlab.com/mint-system/odoo-apps-partner/-/tree/15.0/sh_portal_timesheet>\

## Konfiguration

### Berechtigungsgruppe für Zeiterfassung in Portal erstellen

Navigieren Sie nach *Einstellungen > Benutzer und Unternehmen > Gruppen*. Kopieren Sie Gruppe *Zeiterfassung / Eigene Zeiterfassung* als *Zeiterfassung / Eigene Zeiterfassung (Portal)*. Entfernen Sie die Benutzer und vererbten Gruppen. Im Tab *Access Rights* erstellen Sie diesen Eintrag:

![](attachments/Sh%20Portal%20Timesheet%20Access%20Rights.png)

### Portal-Benutzer mit Mitarbeiter erstellen

Sie können für den ausgewählten Kontakt den [Portal-Zugriff gewähren](Partner.md#Portal-Zugriff%20gewähren). 
Dann [erfassen Sie einen Mitarbeiter](HR.md#Mitarbeiter%20erfassen) und anschliessend können
Sie den [Portal-Benutzer mit dem Mitarbeiter verknüpfen](HR.md#Benutzer%20mit%20Mitarbeiter%20verknüpfen). Erteilen Sie die Berechtigung *Zeiterfassung / Eigene Zeiterfassung (Portal)* dem Portal-Benutzer.

::: tip
Damit Sie Portal-Benutzer mit Mitarbeitenden verknüpfen können, müssen Sie das Snippet <https://odoo.build/snippets/hr.html#user-id-domain> installieren.
:::
