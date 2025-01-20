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

Mit dieser Erweiterung kann eine CSV-Datei in folgenden Format erstellt werden:

```csv
#v1.0
#ve1.1.0
Land des Verbrauchs,Umsatzsteuertyp,Umsatzsteuersatz,Nettobetrag,Umsatzsteuerbetrag
EE,STANDARD,22.00,255.08,56.12
SE,STANDARD,25.00,311.21,77.80
```

## Verwendung

### OSS-Bericht erstellen

Navigieren Sie nach *Buchhaltung > Berichtswesen > Account OSS Report*. Filtern Sie die Einträge nach Datum.

### OSS-Bericht herunterladen

Wenn Sie den [OSS-Bericht erstellen](#OSS-Bericht%20erstellen) markieren Sie alle Einträge und wählen *Aktion > Download OSS Report*.
