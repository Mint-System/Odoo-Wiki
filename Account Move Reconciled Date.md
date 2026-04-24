---
description: Das letzte Zahlungs- und Abstimmungsdatum von Rechnungen anzeigen.
forge: github.com
kind: howto
name: account_move_reconciled_date
partner: Mint System
prev: ./accounting
repo: Mint-System/Odoo-Apps-Account-Reconcile
title: Account Move Reconciled Date
versions:
- '17.0'
---


# Account Move Reconciled Date

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Letztes Zahlungs- und Abstimmungsdatum anzeigen

Mit dieser Erweiterung wird in der Liste der Rechnung zusätzlich zum Zahlungsstatus das letzte Zahlungs- und Absteimmungsdatum angezeigt. Navigieren Sie nach _Buchhaltung > Lieferanten > Rechnungen_ und blenden Sie das Feld _Payment Date_ und/oder _Reconcile Date_ ein.

::: tip
Wenn es mehrere Abstimmungen für eine Rechnungen gibt, wird das jüngste Datum ausgewählt.
:::

::: warning
Es werden nur Buchungszeilen berücksichtigt, die mit einem Journal vom Typ _Bank_ verknüpft sind.
:::
