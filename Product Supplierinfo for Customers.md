---
description: Produktspezifische Informationen für ausgewählte Kunden erfassen.
forge: github.com
kind: howto
name: product_supplierinfo_for_customer
partner: OCA
prev: ./product
repo: OCA/product-attribute
title: Product Supplierinfo for Customers
versions:
- '17.0'
---


# Product Supplierinfo for Customers

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Produkinformationen für Kunde erfassen

Navigieren Sie nach _Verkauf > Produkte > Produkte_. Zeigen Sie den Tab _Verkauf_ an und fügen Sie bei _Kunden_ einen neuen Eintrag hinzu:

- **Kunde**: Wählen Sie einen Kunden aus.
- **Produktbezeichnung des Partners**: Produktname für Kunde.
- **Artikelnummer des Partners**: Produktnummer für Kunde.
- **Quantity**: pezifischer Menge für Kunde.
- **Preisliste**: Spezifischer Preis für Kunde.
- **Validity**: Von-Bis-Datum zur Filterung der Einträge.
