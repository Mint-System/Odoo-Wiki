---
description: Mapper aus Grabber importieren.
forge: github.com
kind: howto
name: zbsync_mapper_import
partner: Zebroo
prev: ./zebroo-sync
repo: Odoo-Ninjas/zync-stable
title: Sync Mapper Import
versions:
- '16.0'
---


# Sync Mapper Import

![icons_odoo_thirdparty](attachments/icons_odoo_thirdparty.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Mapping JSON auf Mapper kopieren

Wählen Sie _Zebroo Sync_ und öffnen Sie eine Pipeline mit einem Grabber und einem Mapper. Erstellen Sie eine Test-Instanz und zeigen Sie die Resultate des Grabber an. Im Tab _Output Data_ ist das Mapping JSON ersichtlich. Mit der Aktion _Copy to next Mapper_ wird das Mapping JSON zwischengespeichert.

Klicken Sie auf der Instanz auf den Mapper und zeigen Sie den Tab _Import Mappings_ an. Klicken Sie auf _Import Mappings_. Die Liste mit den Mappings wird aktualisiert.
