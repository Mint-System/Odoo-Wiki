---
description: Preislisten-Zugriff mit Verkaufsaufträgen erteilen.
forge: github.com
kind: howto
name: sale_order_partner_pricelist
partner: Mint System
prev: ./subscription
repo: Mint-System/Odoo-Apps-Sale-Workflow
title: Sale Order Partner Pricelist
versions:
- '16.0'
---


# Sale Order Partner Pricelist

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Mit dieser Erweiterung erfolgt die Zuweisung der Preisliste auf einem Kontakt aufgrund der aktiven Verkaufsaufträge mit einem Preislisten-Produkt.

## Verwendung

### Partner-Preisliste auf Produkt festlegen

Zeigen Sie ein wiederkehrendes Produkt unter _Verkauf > Produkte > Produkte_ an. Öffnen Sie den Tab _Verkauf_ und legen Sie im Bereich _Partner-Preisliste_ die entsprechende Preisliste fest. Wenn Sie dieses Produkt als Abonnement verkaufen, wird die Preisliste in neuen Verkaufsaufträgen verwendet.
