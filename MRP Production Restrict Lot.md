---
description: Auswahl der Los-Nummer auf der Tablet-Ansicht einschränken.
forge: github.com
kind: howto
name: mrp_production_restrict_lot
partner: Mint System
prev: ./manufacture
repo: Mint-System/Odoo-Apps-Manufacture
title: MRP Production Restrict Lot
versions:
- '16.0'
---


# MRP Production Restrict Lot

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Auswahl der verfügbaren Los-Nummer festlegen

Mit dieser Erweiterung können Sie die Auswahl von Los-Nummer in der Tablet-Ansicht von Fertigungsaufträgen einschränken. Als Vorbereitung rufen Sie einen _Fertigungsauftrag_ unter _Fertigung > Vorgänge > Fertigungsaufträge_ auf. Bestätigen Sie den Auftrag, wenn dieser noch im Status _Entwurf ist_. Zeigen Sie für eine Komponente die Ansicht _Detailierte Vorgänge_ an. Fügen Sie für jede verüfgbare Los-Nummer eine Zeile hinzu und bestätigen Sie den Dialog.

![](attachments/MRP%20Production%20Restrict%20Lot%20Detail.png)

Zeigen Sie die Tablet-Ansicht des Arbeitsauftrages an. In der Auswahl der Los-Nummer, stehen nur die hinzugefügten Los-Nummern bereit.

![](attachments/MRP%20Production%20Restrict%20Lot%20Tablet.png)
