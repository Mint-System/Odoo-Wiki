---
description: Speicherung von Anhängen auf externen Dateisystemen.
forge: github.com
kind: howto
name: fs_attachment
prev: ./base
repo: OCA/storage
tags:
- OCA
title: Base Attachment Object Store
versions:
- '18.0'
---


# Base Attachment Object Store

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Konfiguration

### Dateisystem als Standard für Dateianhänge festlegen

Navigieren Sie nach _Einstellungen > Technisch > FS Storage_ und Öffnen Sie den gewünschten Eintrag. Im Abschnitt _Attachment_ aktivieren Sie die Option _Use As Default For Attachments_.

::: tip
Um den Upload zu testen, öffnen Sie ein beliebiges Dokument mit Chatter. Laden Sie eine Datei hoch.
:::
