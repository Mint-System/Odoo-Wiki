---
title: Sale Blanket Order Comment
description: Verknüpfte Aufgabe der Auftragszeile als Standardwert verwenden
kind: howto
tags:
- Drittanbieter
prev: ./fsm-industry
---
# Industry FSM Sale Default Task
![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `industry_fsm_sale_default_task`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Sale-Workflow/tree/16.0/industry_fsm_sale_default_task>

## Verwendung

### Verknüpfte Aufgabe der Auftragszeile als Standardwert verwenden

Mit dieser Erweiterung wird beim Erstellen, Bestätigen und Aktualisieren von Auftragszeilen in Verkaufsaufsträgen geprüft, ob es Auftragszeilen ohne Aufgaben gibt. Die Aufgabe der ersten Auftragszeile mit einer Aufgabe, wird als Standardwert für die Auftragszeilen ohne Aufgaben übernommen.

::: tip
Wenn eine Auftragszeile mit einer Aussendienst-Aufgabe verknüpft ist, erscheint das Produkt in der Warenkorb-Funktion der Aussendienst-Aufgabe.
:::

::: warning
Es werden nur Auftragszeilen mit lagerfähigen Produkten oder Verbrauchsartikel verknüpft.
:::