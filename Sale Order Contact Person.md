---
description: Kontaktperson auf Verkaufsauftrag festlegen.
forge: github.com
kind: howto
name: sale_order_contact_person
partner: Mint System
prev: ./sale
repo: Mint-System/Odoo-Apps-Sale-Workflow
title: Sale Order Contact Person
versions:
- '15.0'
---


# Sale Order Contact Person

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

::: warning
Diese App ist veraltet. Wir empfehlen die App [Sale Order Sale Partner](Sale%20Order%20Sale%20Partner.md) zu verwenden.
#DEPRECATED
:::

## Konfiguration

### Empfängeradresse auf E-Mail-Vorlage festlegen

Damit die Kontaktperson als Empfängeradresse für die E-Mail übernommen wird, darf auf der E-Mail-Vorlage kein Eintrag im Feld _An (Partner)_ sein. Zur Bearbeitung rufen Sie die entsprechenden E-Mail-Vorlagen unter _Einstellungen > Technisch > E-Mail > E-Mail-Vorlagen_ auf. Ersetzen Sie den Eintrag in _An (Partner)_ `{{ object.partner_id.id }}` mit `{{ object.partner_contact_id.id or object.partner_id.id }}`.

## Verwendung

### Kontaktperson hinzufügen

Öffnen Sie _Verkauf_ und wählen Sie einen Verkaufsauftrag aus. Im Feld _Kontaktperson_ können Sie einen bliegen Kontakt als Kontaktperson festlegen.

![](attachments/Sale%20Order%20Contact%20Person%20Beispiel.png)
