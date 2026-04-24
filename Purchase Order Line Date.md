---
description: Lieferdatum im Wareneingang automatisch nachtragen.
forge: github.com
kind: howto
name: purchase_order_line_date
partner: Mint System
prev: ./purchase
repo: Mint-System/Odoo-Apps-Purchase-Workflow
title: Purchase Order Line Date
versions:
- '17.0'
---


# Purchase Order Line Date

![](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Lieferdatum aus Bestellung aktualisieren

Wenn Sie in der Positionszeile einer Bestellung das Lieferdatum aktualisieren, wird dieses im Wareneingang nachgetragen. Die Sicherheitsvorlaufzeit für den Einkauf wird wie folgt eingerechnet:

Geplantes Datum (Lagerbuchung) = Liefertermin (Bestellposition) + Sicherheitsvorlaufzeit Einkauf\
Frist (Lagerbuchung) = Liefertermin (Bestellposition)

Dazu ein Beispiel mit Sicherheitsvorlaufzeit von -3 Tagen.

![Purchase Order Line Date](attachments/Purchase%20Order%20Line%20Date.gif)
