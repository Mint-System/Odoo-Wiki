---
description: Eigentümer auf Wareneingang aus Verkaufsauftrag zuordnen.
forge: github.com
kind: howto
name: purchase_stock_sale_owner
partner: Mint System
prev: ./purchase
repo: Mint-System/Odoo-Apps-Purchase-Workflow
title: Purchase Stock Sale Owner
versions:
- '17.0'
---


# Purchase Stock Sale Owner

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Eigentümer beim Wareneingang zuordnen

Mit dieser Erweiterung wird bei der Generierung des Wareneingangs aus einer Bestellung geprüft, ob es sich um eine Purchase To Order Bestellung handelt. Wenn die Bestellung mit einem Verkaufsauftrag verknüpft ist, wird der Kontakt aus Lieferadresse als Eigentümer auf dem Wareneingang eingetragen.
