---
title: Mail Template Subscribe
description: Beim Versenden einer Nachricht Kontakte gemäss Domain-Filter abonnieren.
tags:
  - HowTo
  - Drittanbieter
prev: ./dialog
---

# Mail Template Subscribe
![icon_oms_box](attachments/icons_odoo_mint_system.png)

\{\{ $frontmatter.description \}\}

Technischer Name: `mail_template_subscribe`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Social/tree/16.0/mail_template_subscribe>

## Verwendung

### Ausgewählte Kontakte als Follower hinzufügen

Ist diese Erweiterung installiert, können Sie auf der Mail-Vorlage einen Domain-Filter definieren. Alle Kontakte, die dem Domain-Filter entsprechen, werden beim Versand einer E-Mail mit dieser Mail-Vorlage als Follower hinzugefügt.

Führen Sie [E-Mail-Vorlagen anzeigen](Dialog%20E-Mail.md#E-Mail-Vorlagen%20anzeigen) aus und öffnen Sie eine Vorlage. Im Tab *E-Mail-Konfiguration* geben Sie unter *Subscriber Domain* ihren Domain-Filter ein.
