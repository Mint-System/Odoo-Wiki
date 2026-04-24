---
description: Die erledigte Menge auf einem Transfer automatisch ausfüllen.
forge: github.com
kind: howto
name: stock_move_line_auto_fill
partner: OCA
prev: ./stock
repo: OCA/stock-logistics-workflow
title: Stock Move Line Auto Fill
versions:
- '16.0'
---


# Stock Move Line Auto Fill

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Erledigte Menge automatisch ausfüllen

Mit dieser Odoo Erweiterung wird die erledigte Menge gemäss Konfiguration auf dem Vorgangstyp automatisch ausgefüllt. Öffnen Sie _Lager > Konfiguration > Vorgangstypen_ und wählen Sie einen Vorgangstyp aus. Setzen Sie die Optionen unter _Automation_.

![](attachments/Stock%20Move%20Line%20Auto%20Fill.png)

### Mengen mit Aktion ausfüllen

Mit dieser Erweiterung steht auf Transfers eine Aktion _Autofill_ zur Verfügung. Wenn Sie auf diesen Knopf drücken wird die erledigte Menge entsprechend der reservierten Menge ausgefüllt.

![](attachments/Stock%20Move%20Line%20Auto%20Fill%20Button.png)
