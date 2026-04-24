---
description: Los auf verknüpfte Lieferung übertragen.
forge: github.com
kind: howto
name: mrp_production_downstream_lot
partner: Mint System
prev: ./manufacture
repo: Mint-System/Odoo-Apps-Manufacture
title: MRP Production Downstream Lot
versions:
- '14.0'
---


# MRP Production Downstream Lot

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Los auf verknüpfte Lieferung übertragen

Mit dieser Erweiterung wird beim Bestätigen eines Fertigungsauftrag das dazugehörige Los auf die Lieferung übertragen.

::: warning
Die Verknüpfung von Produktlieferung und Lieferung funktioniert nicht, wenn [Automatische Reservierung deaktivieren](Stock%20Operations.md#Automatische%20Reservierung%20deaktivieren) vorgenommen wurde.
:::
