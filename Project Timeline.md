---
description: Timeline-Ansicht für Projektaufgaben.
forge: github.com
kind: howto
name: project_timeline
partner: OCA
prev: ./project
repo: OCA/project
title: Project Timeline
versions:
- '18.0'
- '17.0'
- '16.0'
- '15.0'
- '14.0'
---


# Project Timeline

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Start- und Endatum festlegen

Öffnen Sie das Projekt via _Projekt > Projekte > Kontext-Menu > Bearbeiten_ und zeigen Sie den Tab _Einstellungen_ an. Tragen in den Felder _Startdatum_ und _Ablaufdatum_ die entsprechenden Daten ein.

### Projekt Timeline-Ansicht anzeigen

Navigieren Sie nach _Projekt > Projekte_ und klicken Sie auf die _Timeline_-Ansicht.

![](attachments/Project%20Timeline%20View%20timeline.png)

Projekte werden entsprechend dem Start und Enddatum angezeigt.

![](attachments/Project%20Timeline%20View.png)

### Projektaufgaben Timeline-Ansicht anzeigen

Navigieren Sie nach _Projekt > Alle Aufgaben_ und klicken Sie auf die _Timeline_-Ansicht.

![](attachments/Project%20Timeline%20View%20task%20timeline.png)
