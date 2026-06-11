---
description: Aktualisiere offene Pickings von Fertigungsaufträgen bei Änderungen.
forge: github.com
kind: howto
name: mrp_production_update_upstream_move
partner: Mint System
prev: ./manufacture
repo: Mint-System/Odoo-Apps-Manufacture
title: MRP Production Update Upstream Move
versions:
- '17.0'
- '14.0'
---


# MRP Production Update Upstream Move

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Nachlieferung aktualisieren

Hat ein Fertigungsauftrag eine offene Pickings und wird die zu produzierende Menge aktualisiert, dann werden mit dieser Erweiterung auch die Bedarfsmenge der Pickings angepasst.

![MRP Production Update Upstream Move](attachments/MRP%20Production%20Update%20Upstream%20Move.gif)
