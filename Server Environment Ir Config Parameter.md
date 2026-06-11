---
description: Systemparameter aus Umgebungsvariablen laden.
forge: github.com
kind: howto
name: server_environment_ir_config_parameter
partner: OCA
prev: ./development
repo: OCA/server-env
title: Server Environment Ir Config Parameter
versions:
- '19.0'
- '18.0'
- '17.0'
- '16.0'
- '15.0'
- '14.0'
---


# Server Environment Ir Config Parameter

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Systemparamter aus Umgebung anzeigen

Navigieren Sie nach _Einstellungen > Technisch > Systemparameter_. Parameter, die _Defined by environment_ aktiv haben, wurden aus der Odoo Konfigurations-Datei geladen und können nicht verändert werden.
