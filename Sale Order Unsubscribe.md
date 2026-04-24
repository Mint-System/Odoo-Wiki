---
description: Alle Abonnenten nach Bestätigung des Angebots entfernen.
forge: github.com
kind: howto
name: sale_order_unsubscribe
partner: Mint System
prev: ./discuss
repo: Mint-System/Odoo-Apps-Social
title: Sale Order Unsubscribe
versions:
- '17.0'
---


# Sale Order Unsubscribe

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Abonnenten entfernen

Mit dieser Erweiterung werden beim Bestätigen eines Angebots alle Abonnenten bis auf die Verkaufsperson entfernt.

![](attachments/Sale%20Order%20Unsubscribe.png)

### Alle Abonnenten entfernen

Wenn Sie den [Systemparameter](Development.md#Systemparameter%20anlegen) mit Schlüssel `mail.unsubscribe_all` und Wert `True` anlegen, werden alle Abonnenten entfernt.
