---
title: EBICS Files batch export
description: EBICS-Dateien automatisch hochladen.
kind: howto
partner: Thirdparty
prev: ./accounting
---

# EBICS Files batch export

![](attachments/icons_odoo_ebics.png)

{{ $frontmatter.description }}

Technischer Name: `account_ebics_batch_payment`\
Website: <https://apps.odoo.com/apps/modules/18.0/account_ebics_batch_payment>\
Repository: <https://github.com/Noviat/account_ebics/tree/18.0/account_ebics_batch_payment>

## Verwendung

### EBICS-Batch-Import-Logs anzeigen

Navigieren Sie nach _Rechnungsstelung > EBICS Processing > EBICS Batch Import Logs_. Hier finden Sie die letzten Ausführungen des EBICS-Batch-Import.

## Geplante Aktionen

### EBICS Batch Import

Diese Aktion ist standardmässig deaktiviert. Sie wird täglich ausgeführt und führt den Prozess [EBICS-Download ausführen](EBICS%20banking%20protocol.md#EBICS-Download%20ausführen) durch.
