---
description: Alle Abonnenten nach Bestätigung der Bestellung entfernen.
forge: github.com
kind: howto
name: purchase_order_unsubscribe
partner: Mint System
prev: ./discuss
repo: Mint-System/Odoo-Apps-Social
title: Purchase Order Unsubscribe
versions:
- '17.0'
- '16.0'
- '14.0'
---


# Purchase Order Unsubscribe

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Abonnenten entfernen

Mit dieser Erweiterung werden beim Bestätigen einer Bestellung alle Abonnenten bis auf den Einkaufsbeauftragten entfernt.

![](attachments/Purchase%20Order%20Unsubscribe.png)

### Alle Abonnenten entfernen

Wenn Sie den [Systemparameter](Development.md#Systemparameter%20anlegen) mit Schlüssel `mail.unsubscribe_all` und Wert `True` anlegen, werden alle Abonnenten entfernt.
