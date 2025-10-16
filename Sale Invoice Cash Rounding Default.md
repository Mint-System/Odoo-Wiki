---
title: Sale Invoice Cash Rounding Default
description: Standardwert für Runden beim Erzeugen von Rechnungen aus Verkaufsaufträgen verwenden.
kind: howto
partner: Mint-System
prev: ./invoicing
---

# Sale Invoice Cash Rounding Default

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `sale_invoice_cash_rounding_default`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Account-Invoicing/tree/17.0/sale_invoice_cash_rounding_default>

## Konfiguration

Ab #Odoo15 .

### Standard-Rundungsmethode festlegen

Navigieren Sie nach _Einstellungen > Abrechnung > Kundenrechnungen_ aktivieren Sie die Option _Bargeld-Runden_. Nun können Sie eine [Rundungsmethode erstellen](Invoicing.md#Rundungsmethode%20erstellen) und diese im Feld _Default Cash Rounding Method_ als Standard für neue Rechnungen hinterlegen.

## Verwendung

### Standardwert Rundungsmethode verwenden

Bis #Odoo14 .

Mit diesem Modul wird beim Erstellen von Rechnungen aus Verkaufsaufträgen der Standardwert für die Rundungsmethode verwendet. Dazu ein Beispiel wie der Standardwert erstellt werden muss:

![](attachments/Sale%20Invoice%20Cash%20Rounding%20Default.png)
