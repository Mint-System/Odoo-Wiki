---
description: Beim Versenden einer Nachricht Kontakte gemäss Domain-Filter abonnieren.
forge: github.com
kind: howto
name: mail_template_subscribe
partner: Mint System
prev: ./discuss-e-mail
repo: Mint-System/Odoo-Apps-Social
title: Mail Template Subscribe
versions:
- '18.0'
- '16.0'
---


# Mail Template Subscribe

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Konfiguration

### Ausgewählte Kontakte als Follower hinzufügen

Ist diese Erweiterung installiert, können Sie auf der Mail-Vorlage einen Domain-Filter definieren. Alle Kontakte, die dem Domain-Filter entsprechen, werden beim Versand einer E-Mail mit dieser Mail-Vorlage als Follower hinzugefügt.

Führen Sie [E-Mail-Vorlagen anzeigen](Discuss%20E-Mail.md#E-Mail-Vorlagen%20anzeigen) aus und öffnen Sie eine Vorlage. Im Tab _E-Mail-Konfiguration_ geben Sie unter _Subscriber Domain_ ihren Domain-Filter ein.
