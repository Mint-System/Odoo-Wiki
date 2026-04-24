---
description: Bericht zur Deklarierung der OSS Umsatzsteuer.
forge: github.com
kind: howto
name: account_oss_report
partner: Mint System
prev: ./accounting
repo: Mint-System/Odoo-Apps-Account-Financial-Reporting
title: Account OSS Report
versions:
- '16.0'
---


# Account OSS Report

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Diese Erweiterung stellt eine neue Ansicht "Account OSS Report" für Buchungszeilen bereit. Sie zeigt die für One-Stop-Shop (OSS) Abrechnung relevanten Zeilen an. Über eine Aktion können die Zeilen gruppiert nach Land als CSV-Datei heruntergeladen werden. Das Format der CSV-Datei ist:

```csv
#v3.0
#ve3.3.0
1,EE
1,SE
2,EE,STANDARD,22.00,614.75,135.25
2,SE,STANDARD,25.00,1500.00,375.00
```

Link zum Standard: <https://www.elster.de/bportal/helpGlobal?themaGlobal=iossst_import>

## Verwendung

### OSS-Bericht anzeigen

Navigieren Sie nach _Buchhaltung > Berichtswesen > Account OSS Report_. Filtern Sie die Einträge nach Datum.

### OSS-Bericht herunterladen

Wenn Sie den [OSS-Bericht anzeigen](#OSS-Bericht%20anzeigen), markieren Sie alle Einträge und wählen _Aktion > Download OSS Report_.
