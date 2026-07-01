---
description: Produkt als nicht verrechbar festlegen und bei Abrechnunung filtern.
forge: github.com
kind: howto
name: sale_order_line_not_billable
partner: Mint System
prev: ./sale
repo: Mint-System/Odoo-Apps-Sale-Workflow
title: Sale Order Line Not Billable
versions:
- '14.0'
---


# Sale Order Line Not Billable

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Lieferbares Produkt in Abrechnung ausschliessen

Mit dieser Erweiterung können Sie unter _Verkauf > Produkte > Produkte > Produkt auswählen > Tab Verkauf_ mit dem Feld _Verrechenbar_ festlegen, ob das Produkt beim Abrechnen eines Verkaufsauftrags enthalten sein soll.

![](attachments/Sale%20Order%20Line%20Not%20Billable.png)

Bei der Eingabe der Menge wird diesselbe Menge für nicht verrechenbare Produkte als abgerechnete Menge übernommen.

![Sale Order Line Not Billable](attachments/Sale%20Order%20Line%20Not%20Billable.gif)
