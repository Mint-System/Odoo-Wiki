---
description: Bestelladresse auf Kaufverträge.
forge: github.com
kind: howto
name: purchase_requisition_order_address
partner: Mint System
prev: ./purchase-requisition
repo: Mint-System/Odoo-Apps-Purchase-Workflow
title: Purchase Requisition Order Address
versions:
- '17.0'
- '16.0'
- '14.0'
---


# Purchase Requisition Order Address

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Bestelladresse auf Kaufvertrag erfassen

Mit dieser Erweiterung wird bei der Auswahl des Kontakts der Unterkontakt vom Typ _Bestelladresse_ auf das gleichnamige Feld im Kaufvertrag übertragen. Beim Erstellen einer Bestellung wird die _Bestelladresse_ übertragen.

![](attachments/Purchase%20Requisition%20Order%20Address.png)

::: warning
Die Bestelladresse auf Kaufvertrag übersteuert die Bestelladresse des Lieferant auf der Bestellung.
:::
