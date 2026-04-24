---
description: Management Information System reports and dashboards.
forge: github.com
kind: howto
name: mis_builder
partner: OCA
prev: ./dashboards
repo: OCA/mis-builder
title: MIS Builder
versions:
- '19.0'
---


# MIS Builder

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### MIS-Bericht erstellen

Navigieren Sie nach*Rechnungsstellung > Berichtswesen > MIS Reports* und klicken Sie auf _Neu_. Geben Sie die folgenden Informationen ein:

- **Name**: Anzeigename des Berichts.
- **Template**: Bericht anhand einer Vorlage erstellen.
- **Daterange**: Standard-Datumsbereich für den Bericht.
  - **From**: Bei Verwendung eines Datumsbereichs wird dieses Feld abgefüllt.
  - **To**: Bei Verwendung eines Datumsbereichs wird dieses Feld abgefüllt.

### MIS-Vorlagen verwalten

Navigieren Sie nach*Rechnungsstellung > Konfiguration > MIS Report Templates*. Hier finden Sie alle MIS-Vorlagen.
