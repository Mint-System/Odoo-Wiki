---
description: Beschreibungsfeld von Rahmenauftragszeile auf die Verkaufsauftragszeile
  kopieren.
forge: github.com
kind: howto
name: sale_blanket_order_line_description
partner: Mint System
prev: ./sale-blanket-order
repo: Mint-System/Odoo-Apps-Sale-Workflow
title: Sale Blanket Order Line Description
versions:
- '17.0'
---


# Sale Blanket Order Line Description

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Beschreibung Rahmenauftrag ohne interne Referenz generieren

Damit beim Hinzufügen der Beschreibung nur der Produktname angezeigt wird, legen Sie einen [Systemparameter](Development.md#Systemparameter%20anlegen) mit Wert `sale.blanket.order.line.hide_default_code` und Wert `True` an.

![](attachments/Sale%20Blanket%20Order%20Line%20Description%20Systemparameter.png)

### Beschreibung Rahmenauftrag ohne Produktname generieren

Wenn Sie beim Hinzufügen eines Produkt nur die Verkaufsbeschreibung anzeigen möchten, legen Sie einen [Systemparameter](Development.md#Systemparameter%20anlegen) mit Wert `sale.blanket.order.line.sale_description_only` und Wert `True` an.

![](attachments/Sale%20Blanket%20Order%20Line%20Description%20Systemparameter.png)

### Beschreibung Rahmenauftragszeile kopieren

Mit dieser Erweiterung wird die in der Rahmenauftragszeile das Feld _Beschreibung_ eingeblendet. Sie können dieses überschreiben. Beim Erstellen eines Verkaufsauftrags wird es kopiert.

![](attachments/Sale%20Blanket%20Order%20Line%20Description.png)

Gemäss den Optionen oben kann der Übertrag konfiguriert werden:

![](attachments/Sale%20Blanket%20Order%20Line%20Description%20Params.png)
