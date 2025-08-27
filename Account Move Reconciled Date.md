---
title: Account Move Reconciled Date
description: Das letzte Zahlungs- und Abstimmungsdatum von Rechnungen anzeigen.
kind: howto
partner: Mint-System
prev: ./accounting
---
# Account Move Reconciled Date
![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `account_move_reconciled_date`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Account-Reconcile/tree/16.0/account_move_reconciled_date>

## Verwendung

### Letztes Zahlungs- und Abstimmungsdatum anzeigen

Mit dieser Erweiterung wird in der Liste der Rechnung zusätzlich zum Zahlungsstatus das letzte Zahlungs- und Absteimmungsdatum angezeigt. Navigieren Sie nach *Buchhaltung > Lieferanten > Rechnungen* und blenden Sie das Feld *Payment Date* und/oder *Reconcile Date* ein.

::: tip
Wenn es mehrere Abstimmungen für eine Rechnungen gibt, wird das jüngste Datum ausgewählt.
:::

::: warning
Es werden nur Buchungszeilen berücksichtigt, die mit einem Journal vom Typ *Bank* verknüpft sind.
:::
