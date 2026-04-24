---
description: Standardwert für Runden beim Erzeugen von Rechnungen aus Kundenverträgen
  verwenden.
forge: github.com
kind: howto
name: contract_invoice_cash_rounding_default
partner: Mint System
prev: ./contract
repo: Mint-System/Odoo-Apps-Contract
title: Contract Invoice Cash Rounding Default
versions:
- '17.0'
---


# Contract Invoice Cash Rounding Default

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Konfiguration

Das Modul setzt auf [Sale Invoice Cash Rounding Default](Sale%20Invoice%20Cash%20Rounding%20Default.md) auf. 

### Standard-Rundungsmethode festlegen

Navigieren Sie nach _Einstellungen > Abrechnung > Kundenrechnungen_ aktivieren Sie die Option _Bargeld-Runden_. Nun können Sie eine [Rundungsmethode erstellen](Invoicing.md#Rundungsmethode%20erstellen) und diese im Feld _Default Cash Rounding Method_ als Standard für neue Rechnungen hinterlegen.

## Verwendung

### Standardwert Rundungsmethode verwenden

Mit diesem Modul wird beim Erstellen von Rechnungen aus Kindenverträgen der Standardwert für die Rundungsmethode verwendet.