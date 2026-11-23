---
title: Base Partition
description: Basismodul, das die Partitionsmethode auf allen Modellen bereitstellt
kind: howto
partner: OCA
prev: ./base
forge: github.com
repo: OCA/server-tools
versions:
  - '19.0'
  - '18.0'
  - '17.0'
  - '16.0'
name: base_partition
---

# Base Partition

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a><!--\
Runboat: <a v-bind:href="`https://runboat.odoo-community.org/builds?repo=${$frontmatter.repo}`">https://runboat.odoo-community.org/builds?repo={{ $frontmatter.repo }}</a>-->

## Beschreibung

Diese Erweiterung fügt jedem Modell die Methode `partition(accessor)` hinzu. Als `accessor` funktioniert alles, was auch `mapped()` akzeptiert, also ein Feldpfad wie `"field.subfield"` oder eine Funktion wie `lambda x: not x.b`. Die Methode gibt ein Dictionary zurück: Die Schlüssel sind die vorkommenden Werte, die Werte sind die passenden Recordsets. Zusammen ergeben diese Recordsets wieder genau das ursprüngliche Recordset ohne Überschneidungen. Beispiel: `(x | y | z).partition("f")` liefert `{True: x, False: y | z}`, wenn nur `x.f` wahr ist.
