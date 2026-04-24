---
description: Erstelle Nachlieferungen für Pickings von Fertigungsaufträgen.
forge: github.com
kind: howto
name: mrp_production_create_upstream_backorder
partner: Mint System
prev: ./manufacture
repo: Mint-System/Odoo-Apps-Manufacture
title: MRP Production Create Upstream Backorder
versions:
- '17.0'
---


# MRP Production Create Upstream Backorder

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>


## Verwendung

### Nachlieferungen erstellen

Mit dieser Erweiterungen wird bei positiver Änderung der zu produzierende Menge auf einem Fertigungsauftrag, eine neue Nachlieferung angelegt, sofern die bestehende Lieferung erledigt ist.

![](attachments/MRP%20Production%20Create%20Upstream%20Backorder%20Erstellen.gif)

Wird die zu produzierende Menge reduziert und ist der Materialbedarf gedeckt, werden offene Nachlieferungen gelöscht.

![](attachments/MRP%20Production%20Create%20Upstream%20Backorder%20Entfernen.gif)
