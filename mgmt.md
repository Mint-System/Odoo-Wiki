---
title: Mgmt
description: Risk Management by Mint System.
kind: howto
tags:
- Mint-System
prev: ./management-system
---

# Mgmt
![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `mgmt`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Management/tree/16.0/mgmt>

::: warning
Diese App ist veraltet. Wir empfehlen die App [Mgmt Base](Mgmt%20Base.md) zu verwenden.
#DEPRECATED
:::

## Stammdaten

### Paragraphs erfassen

Regulatorien werden in der Struktur ihrer Kapitel und Paragraphen in der Datenbank erfasst. (Bestimmte Dokumente wie zum Beispiel EASA Part 21 und 145 für die Luftfahrt oder EN 9001 für das Qualitätsmanagement können als Tabellen für den Import von der Mint System GmbH zur Verfügung gestellt werden.)
Dadurch hat jeder Abschnitt eine eindeutige Identifizierung.

![](attachments/management_paragraphs.png)

### Requirements erfassen

Alle Paragraphen werden in Requirements abgebildet. Mit der Funktion *Approve* wird mit einem Statement die Vollständigkeit bestätigt.

![](attachments/management_paragraph_requirement_approve.gif)

Alle Requirements erscheinen in einer übersichtlichen Liste.

![](attachments/management_requirements.png)

## Audit

### Audit erfassen

Mittels Audits werden Compliancestatement zu den Requirements erstellt.
Zunächst wird ein Audit geplant indem Stammdaten erfasst werden.

![](attachments/management_audits_masterdata.png)

### Audit vorbereiten

![](attachments/management_audits_preparation.png)

## Compliance Statements

### Statement erfassen

![](attachments/management_compliancestatements.png)
