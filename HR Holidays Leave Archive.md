---
description: Archivierungsfunktion für Abwesenheitseinträge aktivieren.
forge: github.com
kind: howto
name: hr_holidays_leave_archive
partner: Mint System
prev: ./hr-holidays
repo: Mint-System/Odoo-Apps-HR
title: HR Holidays Leave Archive
versions:
- '14.0'
---


# HR Holidays Leave Archive

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Abwesenheiten archivieren

Ist diese Erweiterung installiert können Abwesenheiten archiviert werden. Navigieren Sie nach _Abwesenheiten > Genehmigungen > Abwesenheiten_. Filtern Sie die Listen nach Einträgen und markieren Sie jene, die archivieren möchten. Wählen Sie _Aktionen > Archiv_.

::: warning

<!--Im Archivierungsvorgang wird der Status von Abwesenheiten auf *Abgebrochen* gesetzt.-->

Archivierte Abwesenheiten werden weiterhin in den Urlaubsanspruch eingerechnet.
:::

### Archivierte Abwesenheiten anzeigen

Zeigen Sie die Listenansicht _Abwesenheiten > Genehmigungen > Abwesenheiten_ an und wählen Sie _Filter_. Aktivieren Sie den Filter _Archived_. Mit _Aktionen > Archivierung aufheben_ können Sie ausgewählte Einträge wieder aktivieren.

### Urlaubsansprüche archivieren

Ist diese Erweiterung installiert können Urlaubsansprüche archiviert werden. Navigieren Sie nach _Abwesenheiten > Genehmigungen > Urlaubsansprüche_. Filtern Sie die Listen nach Einträgen und markieren Sie jene, die archivieren möchten. Wählen Sie _Aktionen > Archiv_.

::: warning
Im Archivierungsvorgang werden alle verknüpften Abwesenheiten ebenfalls archiviert.
:::

### Archivierte Urlaubsansprüche anzeigen

Zeigen Sie die Listenansicht _Abwesenheiten > Genehmigungen > Urlaubsansprüche_ an und wählen Sie _Filter_. Aktivieren Sie den Filter _Archived_. Mit _Aktionen > Archivierung aufheben_ können Sie ausgewählte Einträge wieder aktivieren.
