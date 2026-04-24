---
description: Verkaufsadresse auf Rechnung festlegen.
forge: github.com
kind: howto
name: account_invoice_sale_partner
partner: Mint System
prev: ./invoicing
repo: Mint-System/Odoo-Apps-Account-Invoicing
title: Account Invoice Sale Partner
versions:
- '17.0'
---


# Account Invoice Sale Partner

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Verkaufsadresse auf Rechnung festlegen

Rufen Sie eine Kundenrechnung via _Rechnungsstellung > Kunden > Rechnungen_ auf. Sie finden ein neues Feld _Verkaufsadresse_ unterhalb von _Kunde_. Legen Sie einen Kontakt des Kunden-Kontakt als Verkaufsadresse fest, so wird dieser Kontakt bei der Auswahl des Kunden übernommen.

![](attachments/Account%20Invoice%20Sale%20Partner.png)
