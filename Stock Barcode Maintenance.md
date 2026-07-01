---
description: Barcode scannen und Inventar anzeigen.
forge: github.com
kind: howto
name: stock_barcode_maintenance
partner: Mint System
prev: ./barcode
repo: Mint-System/Odoo-Apps-Stock-Logistics-Workflow
title: Stock Barcode Maintenance
versions:
- '14.0'
---


# Stock Barcode Maintenance

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Strichcode auf Inventar festlegen

Navigieren Sie nach _Wartung > Inventar > Inventar_ und zeigen Sie einen Eintrag an. Im Feld _Barcode_ können Sie den Strichcode zur Identifizierung des Inventar speichern.

### Strichcode von Inventar scannen

Öffnen Sie die App _Strichcode_ und scannen Sie den Strichcode des Inventar. Die App zeigt die Formularansicht des Inventar an.

Dazu ein Beispiel mit einer Handscanner-Simulation. Der Befehl auf der Kommandozeile simuliert den Scan eines Barcodes.

![](attachments/Stock%20Barcode%20Maintenance.gif)
