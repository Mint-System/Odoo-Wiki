---
description: Asynchrone Ausführung von Jobs.
forge: github.com
kind: howto
name: queue_job
partner: OCA
prev: ./development
repo: OCA/queue
title: Queue Job
versions:
- '19.0'
- '18.0'
- '17.0'
- '16.0'
- '15.0'
- '14.0'
---


# Queue Job

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Warteschlange anzeigen

Klicken Sie auf _Job-Warteschlange_. Hier sehen alle erfassten Jobs.

### Kanäle anzeigen

Klicken Sie auf _Job-Warteschlange > Warteschlange > Kanäle_. Das sind die verfügbaren Kanäle zur Verteilung der Jobs.

### Job-Funktionen anzeigen

Klicken Sie auf _Job-Warteschlange > Warteschlange > Job-Funktionen_.

### Job-Status anzeigen

Wenn Sie die [Warteschlange anzeigen](#Warteschlange%20anzeigen) sehen Sie in der Spalte _Status_ ob der Job erledigt wurde oder in einem fehlerhaften Zustand ist.
