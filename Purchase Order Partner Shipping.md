---
description: Alternative Lieferadresse für Bestellungen.
forge: github.com
kind: howto
name: purchase_order_partner_shipping
partner: Mint System
prev: ./purchase
repo: Mint-System/Odoo-Apps-Purchase-Workflow
title: Purchase Order Partner Shipping
versions:
- '17.0'
---


# Purchase Order Partner Shipping

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Alternative Lieferadresse festlegen

Mit dieser Erweiterung können Sie auf Bestellung eine alternative Lieferadresse definieren. Zeigen Sie eine Bestellung unter _Einkauf_ an und legen Sie im Feld _Lieferadresse_ die alternative Lieferadresse fest.

![Purchase Order Partner Shipping](attachments/Purchase%20Order%20Partner%20Shipping.gif)

::: warning
Wird aus einer Bestellung eine Lieferung generiert, so wird die alternative Lieferadesse der Warenhausadresse aus der Lieferung auf den Einkaufs-Berichten vorgezogen.

![](attachments/Purchase%20Order%20Partner%20Shipping%20Priority.png)
:::
