---
description: Projektkürzel für Aufgabenbezeichnung.
forge: github.com
kind: howto
name: project_key
partner: OCA
prev: ./project
repo: OCA/project
title: Project Key
versions:
- '19.0'
- '18.0'
- '17.0'
- '16.0'
- '14.0'
---


# Project Key

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Nummerierungsmuster festlegen

Mit dieser Erweiterung können Sie für Projekte ein Kürzel festlegen, welches vor den Aufgabentitel gesetzt wird. Öffnen Sie _Projekt > Projekt wählen_ und über das Kontext-Menu _Bearbeiten_ klicken.

![](attachments/Project%20key%20Projekt%20Bearbeiten.png)

Im Feld _Nummerierungsmuster_ könnnen Sie das Projektkürzelfesltegen.

![](attachments/Project%20key%20Kürzel.png)

Projektaufgaben werden mit dem Kürzel entsprechend nummeriert.

![](attachments/Project%20key%20Aufgabe.png)

Selbstverändlich kann mit dem Kürzel und der Nummer Aufgaben suchen.
