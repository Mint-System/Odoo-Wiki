---
description: Alle Abonnenten nach Buchung eines Buchungssatzes entfernen.
forge: github.com
kind: howto
name: account_move_unsubscribe
partner: Mint System
prev: ./discuss
repo: Mint-System/Odoo-Apps-Social
title: Account Move Unsubscribe
versions:
- '17.0'
---


# Account Move Unsubscribe

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Abonnenten entfernen

Mit dieser Erweiterung werden beim Buchen eines Buchungssatzes alle Abonnenten bis auf den aktuellen Benutzer entfernt.

![](attachments/Account%20Move%20Unsubscribe.png)

### Alle Abonnenten entfernen

Wenn Sie den [Systemparameter](Development.md#Systemparameter%20anlegen) mit Schlüssel `mail.unsubscribe_all` und Wert `True` anlegen, werden alle Abonnenten entfernt.
