---
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- HowTo
- Drittanbieter
prev: ./lager
---
# AMQP Base
![](assets/odoo_icon_amqp.png)

AMQP Zielhosts verwalten.

Technischer Name: `amqp_base`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Stock-Logistics-Workflow/tree/15.0/amqp_base>

## Erweiterungen

| Erweiterung                   | Beschreibung                                                |
| ----------------------------- | ----------------------------------------------------------- |
| [AMQP Stock](AMQP%20Stock.md) | Lagervorgänge als AMQP-Nachrichten empfangen und versenden. |

## Verwendung

### AMQP Host anlegen

Navigieren Sie nach *Einstellungen > Technisch > AMQP > Hosts* und erstellen Sie einen neuen Eintrag. Dazu ein Beispiel:

* **Name**: RabbitMQ
* **URL**: `amqp://admin:admin@127.0.0.1:5672`
