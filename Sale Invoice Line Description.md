---
description: Buchungszeilen generiert aus Verkaufsaufträgen enthalten nur den Anzeigenamen
  des Produkts.
forge: github.com
kind: howto
name: sale_invoice_line_description
partner: Mint System
prev: ./invoicing
repo: Mint-System/Odoo-Apps-Account-Invoicing
title: Sale Invoice Line Description
versions:
- '17.0'
---


# Sale Invoice Line Description

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Buchungszeile mit Produktanzeigenamen erstellen

Ist diese Erweiterung installiert enthalten Buchungstexte, die aus einem Verkaufsauftrag generiert wurden, keine Verkaufsbeschreibung.

![Sale Invoice Line Description](attachments/Sale%20Invoice%20Line%20Description.gif)
