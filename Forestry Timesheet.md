---
description: Erweiterung Zeiterfassung für die Holzwirtschaft.
forge: github.com
kind: howto
name: forestry_timesheet
partner: Mint System
prev: ./forestry-base
repo: Mint-System/Odoo-Apps-Vertical-Forestry
title: Holzwirtschaft Zeiterfassung
versions:
- '15.0'
---


# Holzwirtschaft Zeiterfassung

![icons_odoo_forestry_base](attachments/icons_odoo_forestry_base.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Felder Holzwirtschaft auf Zeiterfassung anzeigen

Mit dieser Erweiterungen erhalten Sie zusätzliche Felder auf der Zeiterfassung.

Beispielsweise beim Erfassen der Zeit:

- **Produkt**: Polter oder Holz
- **Sortiment**: Holzart
- **Menge**: Menge von Produkt
- **Mengeneinheit**: Mengeneinheit von Produkt
- **Abgangsort**: Abgangsort aus Aufgabe
- **Zielort**: Zielort aus Aufgabe
- **Transport**: Transporteuer
- **Km**: Zurückgelegte Distanz

## Berichte

### Lieferschein zu Auftrag drucken

Zeigen Sie einen Auftrag via _Projekte > Alle Aufgaben_ an und wählen Sie _Drucken > Lieferschein_.
