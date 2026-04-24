---
description: Für jedem Partner die Incoterms festlegen.
forge: github.com
kind: howto
name: purchase_order_partner_incoterm
partner: Mint System
prev: ./purchase
repo: Mint-System/Odoo-Apps-Purchase-Workflow
title: Purchase Order Partner Incoterm
versions:
- '17.0'
---


# Purchase Order Partner Incoterm

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

::: warning
Die Installation von [Purchase Partner Incoterm](Purchase%20Partner%20Incoterm.md) übersteuert das Standardverhalten dieses Moduls. Sie sollten entweder dieses oder das andere Modul installiert haben.
:::

## Verwendung

### Standard-Incoterm für Einkauf festlegen

Damit automatisch die korrekten Incoterms für eine Einkaufsbestellung ausgewählt werden, können Sie auf jedem Kontakt die Standard-Incoterm festlegen. Gehen Sie nach _Kontakte > Kontakt auswählen > Tab Verkauf & Einkauf_ und legen Sie im Feld _Default Purchase Incoterm_ den passenden Wert fest.
