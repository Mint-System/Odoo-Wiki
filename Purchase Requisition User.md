---
description: Einkaufsbeauftragte von Kaufvertrag auf Bestellung übertragen.
forge: github.com
kind: howto
name: purchase_requisition_user
partner: Mint System
prev: ./purchase-requisition
repo: Mint-System/Odoo-Apps-Purchase-Workflow
title: Purchase Requisition User
versions:
- '17.0'
- '14.0'
---


# Purchase Requisition User

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Einkaufsbeauftragte von Kaufvertrag übertragen

Mit dieser Erweiterung wird beim Erstellen einer Bestellung aus einem Angebot oder beim Auswählen eines Kaufvertrags auf einer Bestellung, der Wert des Feldes _Einkaufsbeauftrager_ vom Kaufvertrag übernommen.
