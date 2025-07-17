---
title: HR Attendance IP Check
description: IP-Prüfung bei Anmeldung der Anwesenheit.
kind: howto
tags:
- Mint-System
prev: ./hr-holidays
---
# HR Attendance IP Check
![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `hr_attendance_ip_check`\
Repository: <https://github.com/Mint-System/Odoo-Apps-HR/tree/15.0/hr_attendance_ip_check>

## Konfiguration

### Anmelden Anwesenheit für alle Mitarbeitenden nur aus bestimmten IP-Netzwerken erlauben

Navigieren Sie nach *Einstellungen > Technsich > Anwesenheit IP Check* und erstellen Sie einen neuen Eintrag.  Lassen Sie das Feld *Mitarbeitende* leer und tragen Sie die Netzwerk-Adresse im Feld *CIDR* ein.

### Anmelden Anwesenheit für ausgewählte Mitarbeitende nur aus bestimmten IP-Netzwerken erlauben

Navigieren Sie nach *Einstellungen > Technsich > Anwesenheit IP Check* und erstellen Sie einen neuen Eintrag. Wählen Sie im Feld *Mitarbeitende* die ausgewählten Mitarbeitenden und tragen Sie die Netzwerk-Adresse im Feld *CIDR* ein.

Wählen Sie die Option *Einzelprüfung*, wenn Sie möchten dass nur dieser Eintrag für die ausgewählten Mitarbeitenden erlaubt werden.

::: tip
Wenn die Option *Einzelprüfung* nicht aktiviert ist, werden die CIDR ohne ausgewählte Mitarbeitenden mit diesen Einträgen kombiniert.
:::
