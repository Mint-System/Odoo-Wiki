---
title: Account OSS Report
description: Bericht zur Deklarierung der OSS Umsatzsteuer.
tags:
- HowTo
- Drittanbieter
prev: ./accounting
---
# Account OSS Report

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `account_oss_report`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Account-Financial-Reporting/tree/16.0/account_oss_report>

## Beschreibung

Diese Erweiterung stellt eine neue Ansicht "Account OSS Report" für Buchungszeilen bereit. Sie zeigt die für One-Stop-Shop (OSS) Abrechnung relevanten Zeilen an. Über eine Aktion können die Zeilen gruppiert nach Land als CSV-Datei heruntergeladen werden. Das Format der CSV-Datei ist:

```csv
#v1.0
#ve1.1.0
Land des Verbrauchs,Umsatzsteuertyp,Umsatzsteuersatz,Nettobetrag,Umsatzsteuerbetrag
EE,STANDARD,22.00,255.08,56.12
SE,STANDARD,25.00,311.21,77.80
```

## Verwendung

### OSS-Bericht anzeigen

Navigieren Sie nach *Buchhaltung > Berichtswesen > Account OSS Report*. Filtern Sie die Einträge nach Datum.

### OSS-Bericht herunterladen

Wenn Sie den [OSS-Bericht anzeigen](#OSS-Bericht%20anzeigen), markieren Sie alle Einträge und wählen *Aktion > Download OSS Report*.
