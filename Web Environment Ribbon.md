---
description: Odoo Umgebung mit Banner markieren.
forge: github.com
kind: howto
name: web_environment_ribbon
partner: OCA
prev: ./development
repo: OCA/web
title: Web Environment Ribbon
versions:
- '19.0'
---


# Web Environment Ribbon

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Odoo Umgebung mit Banner markieren

Ist diese Erweiterung installiert, erscheint am oberen linken Rand der Odoo-Oberfäche ein Banner. Damit kann die Umgebung beispielsweise als Test-Umgebung markiert werden.

![](attachments/Web%20Environment%20Ribbon.png)
