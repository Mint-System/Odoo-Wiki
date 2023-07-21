---
title: Sale Order Default Commitment Date
description: Standardlieferdatum festlegen. 
tags:
- HowTo
- Drittanbieter
prev: ./sale
---
# Sale Order Default Commitment Date
![icon_oms_box](attachments/icon_oms_box.png)

{{ $frontmatter.description }}

Technischer Name: `sale_order_default_commitment_date`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Sale-Workflow/tree/14.0/sale_order_default_commitment_date>

## Verwendung

### Standardlieferdatum generieren

Beim erstellen eines neuen Verkaufsangebot wird der *Liefertermin* nach der folgenden Regel überschrieben:
* Vor 12 Uhr wird der Liefertermin auf den aktuellen Tag + 1 Tag gesetzt.
* Nach 12 Uhr wird der Liefertermin auf den aktuellen Tag + 2 Tage gesetzt.
* Die Stunde und Minute werden auf einen bestimmten Wert gesetzt.

![](attachments/Sale%20Order%20Default%20Commitment%20Date%20Beispiel.png)