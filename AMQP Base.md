---
title: AMQP Base
description: AMQP Zielhosts verwalten.
kind: howto
partner: Mint-System
prev: ./stock
---

# AMQP Base

![](attachments/odoo_icon_amqp.png)

{{ $frontmatter.description }}

Technischer Name: `amqp_base`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Stock-Logistics-Workflow/tree/15.0/amqp_base>

## Erweiterungen

| Erweiterung                   | Beschreibung                                                |
| ----------------------------- | ----------------------------------------------------------- |
| [AMQP Stock](AMQP%20Stock.md) | Lagervorgänge als AMQP-Nachrichten empfangen und versenden. |

## Verwendung

### AMQP Host anlegen

Navigieren Sie nach _Einstellungen > Technisch > AMQP > Hosts_ und erstellen Sie einen neuen Eintrag. Dazu ein Beispiel:

- **Name**: RabbitMQ
- **URL**: `amqp://admin:admin@127.0.0.1:5672`
