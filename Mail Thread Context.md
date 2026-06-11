---
description: Automatisches Abonnieren deaktiveren.
forge: github.com
kind: howto
name: mail_thread_context
partner: Mint System
prev: ./discuss-e-mail
repo: Mint-System/Odoo-Apps-Social
title: Mail Thread Context
versions:
- '14.0'
---


# Mail Thread Context

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

::: warning
Diese App ist veraltet. Wir empfehlen die App [Mail No Autofollow](Mail%20No%20Autofollow.md) zu verwenden.
#DEPRECATED
:::

## Verwendung

### Automatisches Abonnieren deaktivieren

Mit dieser Erweiterung wird beim Erstellen und Aktualisieren von Odoo Einträgen sowie beim Hinterlassen von Notizen keine automatisches Abonnement erstellt.

Vorher:

![Mail Thread Context Notiz vorher](attachments/Mail%20Thread%20Context%20Notiz%20vorher.gif)

Nachher:

![Mail Thread Context Notiz nachher](attachments/Mail%20Thread%20Context%20Notiz%20nachher.gif)

Dasselbe funktioniert auch für _Sende Nachricht_. Der Empfänger wird nicht automatisch als Abonnent hinzugefügt.
