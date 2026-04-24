---
description: Legt den Kommunikations-Standard auf der Währung fest.
forge: github.com
kind: howto
name: account_currency_communication
partner: Mint System
prev: /.invoicing
repo: Mint-System/Odoo-Apps-Account-Invoicing
title: Account Currency Communication
versions:
- '17.0'
---


# Account Currency Communication

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Mit dieser Erweiterung können Sie den Kommunikations-Standard, welcher die Rechnungsreferenz generiert, auf der Währung (anstelle des Journals) festlegen. Beim Buchen wird dann die Zahlungsreferenz einer Kundenrechnung anhand dem festgelegten Kommunikations-Standard auf der Währung der Rechnung generiert.

## Konfiguration

### Kommunikations-Standard auf Währung festlegen

Der Administrator wählt unter _Rechnungsstellung > Konfiguration > Buchhaltung > Währungen_ eine Wahrung aus und legt für diese Währung den Kommunikations-Standard fest. Wird eine Kundenrechnung in dieser Währung erstellt, wird die Zahlungsreferenz aus diesem Standard generiert.
