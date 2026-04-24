---
description: In MTO-Workflows Verkaufsauftrag auf Child-Fertigungsaufträge übertragen.
forge: github.com
kind: howto
name: mrp_suborder_sale_info
partner: Mint System
prev: ./manufacture
repo: Mint-System/Odoo-Apps-Manufacture
title: MRP Suborder Sale Info
versions:
- '17.0'
---


# MRP Suborder Sale Info

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Erweiterung der Übertragung von Verkaufsinfos

Das Modul *MRP Sale Info* überträgt beim Anlegen von Produktionsaufträgen in MTO-Workflows die Referenz zum Verkaufsauftrag auf den Fertigungsauftrag. Löst ein MTO-Produkt der Stückliste selbst  wieder einen Fertigungsauftrag aus, wird die Referenz zum Verkaufsauftrag auch auf diesen Fertigungsauftrag übertragen.  


