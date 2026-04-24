---
description: Mehrere Preislisten mit Start- und Enddatum auf Kunden festlegen.
forge: github.com
kind: howto
name: partner_multi_pricelist
partner: Mint System
prev: ./contacts
repo: Mint-System/Odoo-Apps-Partner-Contact
title: Partner Multi Pricelist
versions:
- '14.0'
---


# Partner Multi Pricelist

![](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Mehrere Preislisten auf Partner festlegen

Navigieren Sie nach _Kontakte_ und wählen Sie ein Unternehmen aus. Im Tab _Verkauf & Einkauf_ finden Sie den Abschnitt _Partner-Preislisten_. Erstellen Sie hier neue Einträge. Aktive Einträge überschreiben das Feld _Preisliste_.

::: tip
Partner-Preislisten mit aktiven Perioden haben erste Priorität. Als zweites Kriterium wird die Sequenz verwendet.
:::

### Partner-Preislisten verwalten

Navigieren Sie nach _Verkauf > Produkte > Partner-Preislisten_. Hier können Sie Partner-Preislisten-Einträge erstellen, bearbeiten und löschen.
