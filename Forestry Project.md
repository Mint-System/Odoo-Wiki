---
description: Erweiterung Projektmanagement für die Holzwirtschaft.
forge: github.com
kind: howto
name: forestry_project
partner: Mint System
prev: ./forestry-base
repo: Mint-System/Odoo-Apps-Vertical-Forestry
title: Holzwirtschaft Projekt
versions:
- '15.0'
---


# Holzwirtschaft Projekt

![icons_odoo_forestry_base](attachments/icons_odoo_forestry_base.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Felder Holzwirtschaft auf Projektaufgabe anzeigen

Mit dieser Erweiterungen erhalten Sie zusätzliche Felder auf dem Projekt und den Projektaufgaben.

Auf dem Projektformular:

- **Projektnummer**: Fortlaufende Nummerierung
- **Auftragstyp**: Bestimmt die Bezeichnung der Aufgaben

Auf der Projektaufgabe:

- **Produkt**: Polter oder Holz
- **Abgangsort**: Standard-Abgangsort
- **Abgangsort-Link**: Karten-Link des Abgangsort
- **Zielort**: Standard-Zielort
- **Zielort-Link**: Karten-Link des Zielort
- **Fahrzeug**: Zugewiesenes Fahrzeug
- **Anhänger**: Mit Anhänger oder ohne
