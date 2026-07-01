---
description: Stücklisten-Struktur als Liste anzeigen
forge: github.com
kind: howto
name: mrp_bom_list
partner: Mint System
prev: ./manufacture
repo: Mint-System/Odoo-Apps-Manufacture
title: MRP BoM List
versions:
- '14.0'
---


# MRP BoM List

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Stücklisten-Struktur als Liste anzeigen

Mit dieser Erweiterung können Sie gesamte Stückliste eines Produkts als Liste anzeigen. Navigieren Sie nach _Fertigung > Produkte > Stückliste_ und wählen Sie eine Stückliste aus. Klicken Sie auf den Smart-Link _Komponenten-Liste_ und Sie erhalten eine Listenansicht aller Komponenten.

Mit der Aktion _Komponenten-Liste zu Zeitpunk_ können Sie den Bestand der Komponenenten-Liste zu einem bestimmten Zeitpunkt anzeigen.

![MRP BoM List](attachments/MRP%20BoM%20List.gif)

::: tip
Als Standard-Stückliste wird immer die erste Stückliste des jeweiligen Produkts ausgewählt.
:::
