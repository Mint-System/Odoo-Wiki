---
description: Systemkonfigurationen aus Umgebungsvariablen laden.
forge: github.com
kind: howto
name: server_environment
partner: OCA
prev: ./development
repo: OCA/server-env
title: Server Environment
versions:
- '19.0'
---


# Server Environment

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Server-Konfiguration anzeigen

Navigieren Sie nach _Einstellungen > Technisch > Parameter > Server-Umgebung_. Hier finden Sie die Konfigurationen, die Odoo aus der Server-Umgebung lädt.
