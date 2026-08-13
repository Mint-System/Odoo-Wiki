---
description: Standardwert für Runden beim Erzeugen von Rechnungen aus Verkaufsaufträgen
  verwenden.
forge: github.com
kind: howto
name: sale_invoice_cash_rounding_default
partner: Mint System
prev: ./invoicing
repo: Mint-System/Odoo-Apps-Account-Invoicing
title: Sale Invoice Cash Rounding Default
versions:
- '18.0'
- '17.0'
- '16.0'
- '15.0'
- '14.0'
---


# Sale Invoice Cash Rounding Default

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Konfiguration

Ab <Badge type="info" text="Odoo15" vertical="middle" /> .

### Standard-Rundungsmethode festlegen

Navigieren Sie nach _Einstellungen > Abrechnung > Kundenrechnungen_ aktivieren Sie die Option _Bargeld-Runden_. Nun können Sie eine [Rundungsmethode erstellen](Invoicing.md#Rundungsmethode%20erstellen) und diese im Feld _Default Cash Rounding Method_ als Standard für neue Rechnungen hinterlegen.

## Verwendung

### Standardwert Rundungsmethode verwenden

Bis <Badge type="info" text="Odoo14" vertical="middle" /> .

Mit diesem Modul wird beim Erstellen von Rechnungen aus Verkaufsaufträgen der Standardwert für die Rundungsmethode verwendet. Dazu ein Beispiel wie der Standardwert erstellt werden muss:

![](attachments/Sale%20Invoice%20Cash%20Rounding%20Default.png)
