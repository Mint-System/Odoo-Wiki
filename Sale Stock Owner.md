---
description: Kunde als Besitzer an Lieferungen und Beständen zuordnen.
forge: github.com
kind: howto
name: sale_stock_owner
partner: Mint System
prev: ./sale-stock
repo: Mint-System/Odoo-Apps-Sale-Workflow
title: Sale Stock Owner
versions:
- '17.0'
- '15.0'
---


# Sale Stock Owner

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Wenn diese Erweiterung installiert ist, wird der Kunde eines Verkaufsauftrags auf der Lieferung als Eigentümer eingetragen.

![](attachments/Sale%20Stock%20Owner%20Eigentümer.png)

Wenn die Lieferung bestätigt wird, wird bei der Anpassung des Bestandes im Abgangslager der Eigentümer entfernt.

Der Eigentümer des Bestands im Kundenlager bleibt erhalten.

![](attachments/Sale%20Stock%20Owner%20Customer%20Location.png)
