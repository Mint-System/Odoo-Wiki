---
title: HR Holidays Leave Archive
description: Archivierungsfunktion für Abwesenheitseinträge aktivieren.
kind: howto
tags:
- Mint-System
prev: ./hr-holidays
---
# HR Holidays Leave Archive
![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `hr_holidays_leave_archive`\
Repository: <https://github.com/Mint-System/Odoo-Apps-HR/tree/14.0/hr_holidays_leave_archive>

## Verwendung

### Abwesenheiten archivieren

Ist diese Erweiterung installiert können Abwesenheiten archiviert werden. Navigieren Sie nach *Abwesenheiten > Genehmigungen > Abwesenheiten*. Filtern Sie die Listen nach Einträgen und markieren Sie jene, die archivieren möchten. Wählen Sie *Aktionen > Archiv*.

::: warning
<!--Im Archivierungsvorgang wird der Status von Abwesenheiten auf *Abgebrochen* gesetzt.-->
Archivierte Abwesenheiten werden weiterhin in den Urlaubsanspruch eingerechnet.
:::

### Archivierte Abwesenheiten anzeigen

Zeigen Sie die Listenansicht *Abwesenheiten > Genehmigungen > Abwesenheiten* an und wählen Sie *Filter*. Aktivieren Sie den Filter *Archived*. Mit *Aktionen > Archivierung aufheben* können Sie ausgewählte Einträge wieder aktivieren.

### Urlaubsansprüche archivieren

Ist diese Erweiterung installiert können Urlaubsansprüche archiviert werden. Navigieren Sie nach *Abwesenheiten > Genehmigungen > Urlaubsansprüche*. Filtern Sie die Listen nach Einträgen und markieren Sie jene, die archivieren möchten. Wählen Sie *Aktionen > Archiv*.

::: warning
Im Archivierungsvorgang werden alle verknüpften Abwesenheiten ebenfalls archiviert.
:::

### Archivierte Urlaubsansprüche anzeigen

Zeigen Sie die Listenansicht *Abwesenheiten > Genehmigungen > Urlaubsansprüche* an und wählen Sie *Filter*. Aktivieren Sie den Filter *Archived*. Mit *Aktionen > Archivierung aufheben* können Sie ausgewählte Einträge wieder aktivieren.
