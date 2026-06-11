---
description: AMQP Zielhosts verwalten.
extensions: true
forge: github.com
kind: howto
name: amqp_base
partner: Mint System
prev: ./stock
repo: Mint-System/Odoo-Apps-Stock-Logistics-Workflow
title: AMQP Base
versions:
- '15.0'
---


# AMQP Base

![](attachments/odoo_icon_amqp.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Erweiterungen

| Erweiterung                   | Beschreibung                                                |
| ----------------------------- | ----------------------------------------------------------- |
| [AMQP Stock](AMQP%20Stock.md) | Lagervorgänge als AMQP-Nachrichten empfangen und versenden. |

## Verwendung

### AMQP Host anlegen

Navigieren Sie nach _Einstellungen > Technisch > AMQP > Hosts_ und erstellen Sie einen neuen Eintrag. Dazu ein Beispiel:

- **Name**: RabbitMQ
- **URL**: `amqp://admin:admin@127.0.0.1:5672`
