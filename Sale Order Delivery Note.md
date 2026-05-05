---
description: Notiz auf Verkaufsauftrag für Lieferung hinzufügen.
forge: github.com
kind: howto
name: sale_order_delivery_note
partner: Mint System
prev: ./sale
repo: Mint-System/Odoo-Apps-Sale-Workflow
title: Sale Order Delivery Note
versions:
- '14.0'
---


# Sale Order Delivery Note

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Liefernotiz auf Verkaufsauftrag hinzufügen

Wenn Sie einen Verkaufsauftrag unter _Verkauf_ erstellen oder einen bestehenden bearbeiten, wird unter der Positionstabelle ein Feld _Delivery Note_ angezeigt.

![](attachments/Sale%20Order%20Delivery%20Note%20note.png)

Dieses Feld wird beim Erstellen und Aktualisieren an die zugehörigen Lieferungen übertragen.

![](attachments/Sale%20Order%20Delivery%20Note%20stock.png)

Und auf dem Lieferschein abgedruckt.

![](attachments/Sale%20Order%20Delivery%20Note%20slip.png)
