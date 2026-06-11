---
description: Aktivitäten als erledigt markieren.
forge: github.com
kind: howto
name: mail_activity_done
partner: OCA
prev: ./dashboards
repo: OCA/social
title: Mail Activity Done
versions:
- '17.0'
- '16.0'
- '15.0'
- '14.0'
---


# Mail Activity Done

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Erledigte Aktivitäten anzeigen

Ist diese Erweiterung installiert, können erledigte Aktivitäten auf dem Dashboard angezeigt werden. Im Chatter loggt Odoo, wenn eine Aktivität abgeschlossen wurde:

![](attachments/Mail%20Activity%20Done.png)

In der Ansichten von Aktivitäten, steht der Filter _Completed Activities_ zur Verfügung:

![](attachments/Mail%20Activity%20Done%20Filter.png)
