---
description: Auslieferungsmethode aus Transfers beim Erstellen von Rechnungen aus
  Verkaufsaufträgen übertragen.
forge: github.com
kind: howto
name: sale_invoice_carrier
partner: Mint System
prev: ./invoicing
repo: Mint-System/Odoo-Apps-Account-Invoicing
title: Sale Invoice Carrier
versions:
- '17.0'
---


# Sale Invoice Carrier

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Auslieferungsmethode aus Transfer übertragen

Mit dieser Erweiterung wird beim Erstellen der Rechnung aus einem Verkaufsauftrag die Auslieferungsmethode aus dem letzten Transfer übertragen.
