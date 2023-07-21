---
title: Sale Invoice Prepare Bank
description: Bankkonto anhand Währung auswählen.
tags:
- HowTo
- Drittanbieter
prev: ./invoicing
---
# Sale Invoice Prepare Bank

![icon_oms_box](attachments/icon_oms_box.png)

{{ $frontmatter.description }}

Technischer Name: `sale_invoice_prepare_bank`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Account-Invoicing/tree/14.0/sale_invoice_prepare_bank>

## Verwendung

### Bankkonto anhand Währung auswählen

Beim Erzeugen einer Rechnung aus einem Verkaufsauftrag wird mit dieser Erweiterung automatisch das Feld *Empfängerbank* in der Rechnung ausgefüllt. Anhand der Währung des Verkaufsauftrags wird das passende Konto des Unternehmens ausgewählt. 