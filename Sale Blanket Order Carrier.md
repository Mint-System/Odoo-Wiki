---
description: Legen Sie die Auslieferungsmethode auf dem Rahmenvertrag fest.
forge: github.com
kind: howto
name: sale_blanket_order_carrier
partner: Mint System
prev: ./sale-blanket-order
repo: Mint-System/Odoo-Apps-Sale-Workflow
title: Sale Blanket Order Carrier
versions:
- '17.0'
- '16.0'
- '14.0'
---


# Sale Blanket Order Carrier

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Auslieferungsmethode festlegen

Öffnen Sie einen Rahmenvertrag via _Verkauf > Aufträge > Rahmenaufträge_. Unterhalb der _Zahlungsbedingungen_ können Sie die Auslieferungsmethode festlegen.

![](attachments/Sale%20Blanket%20Order%20Carrier.png)

::: tip
Wurde die Auslieferungsmethode auf dem Kontakt hinterlegt, wird diese beim Erstellen des Rahmenauftrags übernommen.
:::
