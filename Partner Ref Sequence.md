---
description: Automatische Vergabe der Kontakt-Referenz.
forge: github.com
kind: howto
name: partner_ref_sequence
partner: Mint System
prev: ./contacts
repo: Mint-System/Odoo-Apps-Partner-Contact
title: Partner Ref Sequence
versions:
- '18.0'
- '17.0'
- '16.0'
- '14.0'
---


# Partner Ref Sequence

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Kontakt-Referenz automatisch vergeben

Mit dieser Erweiterung werden beim Erstellen eines Kontakt automatisch eine Referenz vergeben. Öffnen Sie _Kontakte_ und erstellen Sie einen Eintrag.

Im Tab _Verkauf & Einkauf_ ist nun die generierte Referenz sichtbar.

![](attachments/Partner%20Ref%20Sequence.png)

Möchten Sie die Nummerierung ändern, öffnen Sie [Sequenz anpassen](Settings.md#Sequenz%20anpassen).
