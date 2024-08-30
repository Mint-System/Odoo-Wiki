---
title: Account Move Reconciled Date
description: Das letzte Abstimmungsdatum von Rechnungen anzeigen.
tags:
- HowTo
- Drittanbieter
prev: ./accounting
---
# Account Move Reconciled Date
![icon_oms_box](attachments/icon_oms_box.png)

{{ $frontmatter.description }}

Technischer Name: `account_move_reconciled_date`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Account-Reconcile/tree/16.0/account_move_reconciled_date>

## Verwendung

### Letzte Abstimmungsdatum anzeigen

Mit dieser Erweiterung wird in der Liste der Rechnung zusätzlich zum Zahlungsstatus das letzte Abstimmungsdatum angezeigt. Navigieren Sie nach *Buchhaltung > Lieferanten > Rechnungen* und blenden Sie das Feld *Reconcile Date* ein.

![Sale Move Reconciled Date](attachments/Account%20Move%20Reconciled%20Date.png)

::: tip
Wenn es mehrere Abstimmungen für die Rechnungen gibt, wird das jüngste Datum ausgewählt. 
:::

::: warning
Es werden nur Buchungszeilen berücksichtigt, die mit einem Journal vom Typ *Bank* verknüpft sind.
:::