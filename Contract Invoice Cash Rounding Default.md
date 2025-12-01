---
title: Contract Invoice Cash Rounding Default
description: Standardwert für Runden beim Erzeugen von Rechnungen aus Kundenverträgen verwenden.
kind: howto
partner: Mint-System
prev: ./contract
---

# Contract Invoice Cash Rounding Default

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `contract_invoice_cash_rounding_default`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Contract/tree/17.0/contract_invoice_cash_rounding_default>

## Konfiguration

Das Modul setzt auf [Sale Invoice Cash Rounding Default](Sale%20Invoice%20Cash%20Rounding%20Default.md) auf. 

### Standard-Rundungsmethode festlegen

Navigieren Sie nach _Einstellungen > Abrechnung > Kundenrechnungen_ aktivieren Sie die Option _Bargeld-Runden_. Nun können Sie eine [Rundungsmethode erstellen](Invoicing.md#Rundungsmethode%20erstellen) und diese im Feld _Default Cash Rounding Method_ als Standard für neue Rechnungen hinterlegen.

## Verwendung

### Standardwert Rundungsmethode verwenden

Mit diesem Modul wird beim Erstellen von Rechnungen aus Kindenverträgen der Standardwert für die Rundungsmethode verwendet.