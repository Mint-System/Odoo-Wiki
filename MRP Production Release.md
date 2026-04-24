---
description: Fertigungsaufträge können zurückgesetzt und freigegebenen werden.
forge: github.com
kind: howto
name: mrp_production_release
partner: Mint System
prev: ./manufacture
repo: Mint-System/Odoo-Apps-Manufacture
title: MRP Production Release
versions:
- '16.0'
- '14.0'
---


# MRP Production Release

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Fertigungsauftrag zurücksetzen

Die Installation dieser Erweiterung führt dazu, dass auf bestätigten Fertigungsaufträgen der Knopf _Unrelease_ und _Release_ erscheint. Mit der _Unrelease_-Aktion wird der Fertigungsauftrag in den Entwurfsstatus gesetzt und alle verknüpften Lagerbuchungen entfernen. In diesem Zustand kann beispielsweise die Stückliste ausgewechselt werden. Mit der _Release_-Aktion wird der Fertigungsauftrag wieder bereit für die _Bestätigung_ gemacht.

![MRP Production Release](attachments/MRP%20Production%20Release.gif)
