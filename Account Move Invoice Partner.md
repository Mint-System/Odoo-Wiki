---
description: Separate Rechnungsadresse auf Rechnung festlegen.
forge: github.com
kind: howto
name: account_move_invoice_partner
partner: Mint System
prev: ./invoicing
repo: Mint-System/Odoo-Apps-Account-Invoicing
title: Account Move Invoice Partner
versions:
- '17.0'
---


# Account Move Invoice Partner

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Erweiterung konfigurieren

Damit die Rechnungsadresse als Empfängeradresse für die E-Mail übernommen wird, muss auf der E-Mail-Vorlage der Eintrag im Feld _An (Partner)_ angepasst werden. Zur Bearbeitung rufen Sie die entsprechenden E-Mail-Vorlagen unter _Einstellungen > Technisch > E-Mail > E-Mail-Vorlagen_ auf. Setzen Sie im Tab _E-Mail Konfiguration_ im Feld _An (Partner)_ den Wert `${object.partner_invoice_id.id}` ein.

### Rechnungsadresse festlegen

Mit dieser Erweiterung erhalten Sie ein zusätzliches Feld _Rechnungsadresse_ auf der Formularansicht einer Rechnung.

![](attachments/Account%20Move%20Invoice%20Partner.png)

### Rechnung an Rechnungsadresse schicken

Mit dieser Erweiterung wird die Rechnungsadresse aus dem Kontakt auf die Rechnung übertragen. Wenn Sie eine E-Mail mit der Aktion*Senden und Drucken* vorbereiten, wird die E-Mail der Rechnungsadresse übernommen.
