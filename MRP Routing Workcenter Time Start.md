---
title: MRP Routing Workcenter Time Start
description: Definiert eine stücklistenspezifische Rüstzeit für einen Vorgang
kind: howto
tags:
  - Mint-System
prev: ./manufacture
forge: github.com
repo: Mint-System/Odoo-Apps-Manufacture
versions:
- '18.0'
name:  mrp_routing_workcenter_time_start
---

#  MRP Routing Workcenter Time Start

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>\
Runboat: <a v-bind:href="`https://runboat.odoo-community.org/builds?repo=${$frontmatter.repo}`">https://runboat.odoo-community.org/builds?repo={{ $frontmatter.repo }}</a>

## Verwendung

Mit dieser Erweiterung kann auf den Vorgängen einer Stückliste eine _Vorbereitungszeit_ definiert werden. Sie ist somit spezifisch für die Verwendung des Vorgangs bezüglich einer spezifischen Stückliste. In der Kalkulation der erwarteten Dauer für den Vorgang wird sie zur Rüstzeit des Arbeitsplatzes addiert. 
