---
description: Odoo mit anderen Systemen verbinden.
extensions: true
forge: github.com
kind: howto
name: ''
partner: OCA
prev: ./
repo: Mint-System/Odoo-Apps-Connector
title: Connector
versions:
- '16.0'
---


# Connector

![](attachments/icons_odoo_utm.png)

{{ $frontmatter.description }}

Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Erweiterungen

| Erweiterung                                       | Beschreibung                                           |
| ------------------------------------------------- | ------------------------------------------------------ |
| [Base External Mssql](Base%20External%20Mssql.md) | Verbindung zu externer MSSQL-Datenbank.                |
| [Base Kardex](Base%20Kardex.md)                   | Basis-Funktionalität für Kardex-Verbindungen.          |
| [Git](Git%20Base.md)                              | Git Repositories mit Odoo verwalten.                   |
| [Meilisearch Base](Meilisearch%20Base.md)         | Meilisearch Index mit Odoo Dokumenten synchronisieren. |
| [SSH](SSH.md)                                     | SSH-Schlüssel verwalten.                               |
