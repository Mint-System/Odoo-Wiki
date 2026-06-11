---
description: Alle versendeten und empfangen Nachrichten eines Kontakts anzeigen.
forge: github.com
kind: howto
name: partner_email_history
partner: Mint System
prev: ./contacts
repo: Mint-System/Odoo-Apps-Partner-Contact
title: Partner Email History
versions:
- '18.0'
- '16.0'
---


# Partner Email History

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Alle Nachrichten, die Odoo versendet, werden in einer Datenbank-Tabelle gespeichert. Jede Nachricht ist mit einem Dokument (Kontakt, Angebot, Opportunity, Rechnung, ...) verknüpft. In der Chatter-Ansicht eines Dokuments werden nur die verknüpften Nachrichten angezeigt. Diese Erweiterung bietet die Möglichkeit alle Nachrichten eines Kontakts über alle Dokumente hinweg anzuzeigen. 

## Verwendung

### Versendete Nachrichten anzeigen

Öffnen Sie einen Kontakt unter _Kontakte_. Klicken Sie auf den Smart-Button _Nachrichten_.

### Versendete E-Mails anzeigen

Öffnen Sie einen Kontakt unter _Kontakte_. Klicken Sie auf den Smart-Button _E-Mails_.

::: warning
Standardmässig löscht Odoo versendete E-Mails um Speicherplatz zu sparen. Diese Liste ist normalerweise leer.
:::