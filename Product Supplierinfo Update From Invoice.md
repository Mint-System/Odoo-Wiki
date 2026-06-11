---
description: Aktualisiert den Lieferantenpreis des Produkts mit dem in einer Lieferantenrechnung
  aktualisierten Preis
forge: github.com
kind: howto
name: product_supplierinfo_update_from_invoice
partner: Mint System
prev: ./purchase
repo: Mint-System/Odoo-Apps-Purchase-Workflow
title: Product Supplierinfo Update From Invoice
versions:
- '18.0'
---


# Product Supplierinfo Update From Invoice

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

### Verwendung

Mit dieser Erweiterung wird die Preisänderung auf einer Lieferantenrechnung auf den zugehörigen Lieferantenpreis des Produkts übertragen.
Sollte noch kein Lieferant zu einem Produkt auf einer Lieferantenrechnung exisiteren, wird dieser angelegt.
