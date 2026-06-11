---
description: Nur die Einkaufsbeschreibung in die Einkaufsposition übernehmen.
forge: github.com
kind: howto
name: purchase_order_line_description
partner: Mint System
prev: ./purchase
repo: Mint-System/Odoo-Apps-Purchase-Workflow
title: Purchase Order Line Description
versions:
- '17.0'
- '16.0'
- '14.0'
---


# Purchase Order Line Description

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Konfiguration

### Produktreferenz ausblenden

Mit dem Systemparameter `purchase.order.line.hide_ref` können Sie festlegen, ob die Produktreferenz eingeblendet werden soll. Setzen Sie den Wert auf `True` um die Referenz einzublenden.

## Verwendung

### Nur Einkaufsbeschreibung übertragen

Mit dieser Erweiterung wird beim Hinzufügen eines Produkts in einer Bestellung statt _Referenz + Name + Einkaufsbeschreibung_ die folgende Formel angewendet:

_Lieferant Produktcode + Einkaufsbeschreibung + Lieferant Produktname_

Falls _Produktcode_ oder _Produktname_ nicht vorhanden sind wird die Einkaufsbeschreibung übernommen.

![](attachments/Purchase%20Order%20Line%20Description%20Product%20Code.png)
