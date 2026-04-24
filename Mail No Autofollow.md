---
description: Beim Erstellen von Nachrichten erfolgt keine automatische Abonnierung.
forge: github.com
kind: howto
name: mail_no_autofollow
partner: Mint System
prev: ./discuss-e-mail
repo: Mint-System/Odoo-Apps-Social
title: Mail No Autofollow
versions:
- '18.0'
- '16.0'
- '15.0'
- '14.0'
---


# Mail No Autofollow

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

::: warning
Die Funktionen dieser App sind limitiert, verwenden Sie [Mail Unsubscribe](Mail%20Unsubscribe.md) für weitere Optionen.
:::

## Verwendung

### Automatische Abonnierung beim Versenden einer Nachricht verhindern

Mit dieser Erweiterungen werden die Empfänger beim Erstellen einer Nachricht nicht automatisch abonniert.

Vorher:

![](attachments/Mail%20No%20Autofollow%20Before.png)

Nachher:

![](attachments/Mail%20No%20Autofollow%20After.png)
