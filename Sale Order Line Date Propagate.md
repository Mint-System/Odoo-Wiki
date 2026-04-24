---
description: Lieferfristen auf dem Verkaufsautrag und dessen Zeilen werden auf den
  Lieferauftrag übertragen.
forge: github.com
kind: howto
name: sale_order_line_date_propagate
partner: Mint System
prev: ./sale
repo: Mint-System/Odoo-Apps-Sale-Workflow
title: Sale Order Line Date Propagate
versions:
- '17.0'
- '16.0'
- '14.0'
---


# Sale Order Line Date Propagate

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Lieferdatum Verkauf auf Lieferung übertragen

Ist diese Erweiterung installiert wird das Lieferdatum vom Verkaufsauftrag auf den Lieferauftrag übertragen. Dies gilt auch für die Verkaufspositionen.

![Sale Order Line Date Propagate](attachments/Sale%20Order%20Line%20Date%20Propagate.gif)

::: tip
Beim Übertrag des Lieferdatum wird die Sicherheitsvorlaufzeit für den Verkauf eingerechnet.
:::
