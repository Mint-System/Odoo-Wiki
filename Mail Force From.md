---
title: Mail Force From
description: Absender-Adressen für ausgewählte Modelle forcieren.
kind: howto
partner: Mint System
prev: ./discuss-e-mail
forge: github.com
repo: Mint-System/Odoo-Apps-Server-Tools
versions:
  - "19.0"
name: mail_force_from
---

# Mail Force From

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Auf der Alias-Domain kann nur eine Standardabsender-Adresse definiert werden. Diese wird verwendet, wenn auf dem Postausgangsserver keine VON-Filterung definiert ist.
Mit dieser Erweiterung können Sie mehrere Absendernamen erfassend und an Datenmodellen zuordnen. Wenn Nachrichten im Kontext eines Datenmodells versendet wird, dann wird die zugeordnete Absender-Adresse forciert.

## Verwendung

### Absender-Adresse für Datenmodell forcieren

Navigieren Sie nach _Einstellungen > Technisch > E-Mails > Alias-Domains_ und rufen Sie einen Eintrag auf. Im Bereich _Force From Address_ können Sie einen Namen angeben, beispielsweise `support` und ein Datenmodell auswählen, beispielsweise `helpdesk.ticket`.

![](attachments/Mail%20Force%20From.png)

::: warning
Diese Einstellungen überschreibt auch die Einstellungen auf E-Mail-Vorlagen.
:::
