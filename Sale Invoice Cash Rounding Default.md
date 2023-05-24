---
title: Sale Invoice Cash Rounding Default
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- HowTo
- Drittanbieter
prev: ./invoicing
---
# Sale Invoice Cash Rounding Default
![icon_oms_box](assets/icon_oms_box.png)

Standardwert für Runden beim Erzeugen von Rechnungen aus Verkaufsaufträgen verwenden.            

Technischer Name: `sale_invoice_cash_rounding_default`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Account-Invoicing/tree/15.0/sale_invoice_cash_rounding_default>

## Konfiguration

Ab #Odoo15 .

### Standard-Rundungsmethode festlegen

Navigieren Sie nach *Einstellungen > Abrechnung > Kundenrechnungen* aktivieren Sie die Option *Bargeld-Runden*. Nun können Sie eine [Rundungsmethode erstellen](Invoicing.md#Rundungsmethode%20erstellen) und diese im Feld *Default Cash Rounding Method* als Standard für neue Rechnungen hinterlegen.

## Verwendung

### Standardwert Rundungsmethode verwenden

Bis #Odoo14 .

Mit diesem Modul wird beim Erstellen von Rechnungen aus Verkaufsaufträgen der Standardwert für die Rundungsmethode verwendet. Dazu ein Beispiel wie der Standardwert erstellt werden muss:

![](assets/Sale%20Invoice%20Cash%20Rounding%20Default.png)