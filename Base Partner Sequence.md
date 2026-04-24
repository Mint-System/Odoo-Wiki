---
description: Sequenz auf Kundenreferenz.
forge: github.com
kind: howto
name: base_partner_sequence
partner: OCA
prev: ./contacts
repo: OCA/partner-contact
title: Base Partner Sequence
versions:
- '19.0'
- '18.0'
- '17.0'
- '16.0'
- '15.0'
- '14.0'
---


# Base Partner Sequence

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Kontakt-Referenz automatisch vergeben

Mit dieser Erweiterung werden beim Erstellen eines Kontakt automatisch eine Referenz vergeben. Öffnen Sie _Kontakte_ und erstellen Sie einen Eintrag.

Im Tab _Verkauf & Einkauf_ ist nun die generierte Referenz sichtbar.
