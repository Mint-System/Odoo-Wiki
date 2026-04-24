---
description: Datenbank mit Proxy-Header auswählen.
forge: github.com
kind: howto
name: dbfilter_from_header
partner: OCA
prev: ./database
repo: OCA/server-tools
title: DBFilter From Header
versions:
- '17.0'
---


# DBFilter From Header

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Konfiguration

### Datenbank-Filter in Proxy Header definieren

In der `odoo.conf` Datei, müssen Sie die Zeile `server_wide_modules = "web, dbfilter_from_header"` und `proxy_mode = True` hinzufügen. In der Proxy-Konfiguration können Sie mit dem Header `X-Odoo-dbfilter` die Datenbank definieren, welche geladen werden soll. Für Nginx legen beispielsweise `proxy_set_header X-Odoo-dbfilter database_name;` fest.
