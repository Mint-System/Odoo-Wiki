---
description: Projekt aus Projektvorlage erstellen.
forge: github.com
kind: howto
name: project_template
partner: OCA
prev: ./project
repo: OCA/project
title: Project Template
versions:
- '17.0'
---


# Project Templates

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Projekt als Projektvorlage festlegen

Rufen Sie die Formularansicht eines Projekts via _Projekt > Konfiguration > Projekte_ auf. Mit der Option _Projekt-Vorlage_ wird das Projekt als Vorlage markiert.

### Projekt aus Projektvorlage erstellen

Rufen Sie _Projekt_ auf und wählen Sie das Kontext-Menü der Projektvorlage an. Klicken Sie auf _Projekterstellung aus dieser Vorlage_.

![](attachments/Project%20Templates.png)

Nun wird eine Kopie des Projekts erstellt.
