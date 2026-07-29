---
title: Sale Renting Lot Available
description: Lose von vermietbaren Produkte in Gantt-Ansicht planen.
kind: howto
tags:
  - Mint-System
prev: ./sale-renting
forge: github.com
repo: Mint-System/Odoo-Apps-Sale-Workflow
versions:
- '19.0'
name: sale_renting_lot_available
---

# Sale Renting Lot Available

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Dies Modul erweitert die Funktionlität von [Sale Renting Line Period](Sale%20Renting%20Line%20Period.md). Jedes Los von vermietbaren Produkte kann im der Gantt-Ansicht angezeigt und geplant werden.

Bei Installation des Moduls wird für jedes Los mit einem vermietbaren Produkt und jede Auftragszeile eines ein Slot angelegt.

## Verwendung

### Mietplan anzeigen

Klicken Sie auf _Vermietung > Zeitplan > Mietplan_. Sie sehen alle Slots aus Auftragszeilen und Produktlosen. Mit dem Filter _Hat Auftragszeile_ werden alle Slots angezeigt, die mit einem Auftrag verknüpft sind.

### Mietauftrag aus Slot erstellen

Wenn Sie einen Slot in der Listenansicht markieren oder in der Formularansicht anzeigen, können Sie die Aktion _Mietauftrag Erstellen_ anwählen.

### Slot aus Mietauftrag erstellen

Zeigen Sie einen Mieauftrag unter _Vermietung_ im Status _Angebot_ an. Bestätigen Sie den Auftrag. Odoo erstellt die dazugehörigen Slots und auf dem Auftrag erscheint ein Smart-Button.

