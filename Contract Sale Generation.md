---
description: Aus wiederholenden Verträge Verkaufsangebote generieren.
forge: github.com
kind: howto
name: contract_sale_generation
partner: OCA
prev: ./contract
repo: OCA/contract
title: Contracts Management Recurring Sales
versions:
- '16.0'
---


# Contracts Management Recurring Sales

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Verkaufsauftrag aus Kundenvertrag erstellen

Öffnen Sie einen bestehenden Kundenvertrag via _Buchhaltung > Kunden > Kundenverträge_ und wählen Sie einen Vertrag aus. Im Feld _Generation Type_ wählen Sie _Sale_. Optional können Sie die generierten Angebote mit _automatisches Bestätigen der Verkaufsaufträge_ bestätigen lassen.

::: tip
Mit der Aktion _Create Sales_ können Sie das Verkaufsangebot manuell erstellen.
:::
