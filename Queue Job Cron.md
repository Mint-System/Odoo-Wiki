---
description: Cron Jobs asynchron ausführen.
forge: github.com
kind: howto
name: queue_job_cron
partner: OCA
prev: ./development
repo: OCA/queue
title: Queue Job Cron
versions:
- '19.0'
- '18.0'
- '17.0'
- '16.0'
- '15.0'
- '14.0'
---


# Queue Job Cron

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Geplante Aktion als Job ausführen

Rufen Sie die geplante Aktion unter _Einstellungen > Technisch > Geplante Aktionen_ auf. Aktivieren Sie die Option _als Warteschlangen-Job ausführen_. Wählen Sie Optional den Kanal aus.

### Ausführung als Job testen

Wenn Sie eine [Geplante Aktion als Job ausführen](#Geplante%20Aktion%20als%20Job%20ausführen) können Sie die Ausführung mit _Manuell Ausführen_ auslösen. Zeige Sie die [Warteschlange](Queue%20Job.md#Warteschlange%20anzeigen) an. Sie sehen die Ausführung als Job.
