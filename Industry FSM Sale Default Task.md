---
title: Sale Blanket Order Comment
description: Bestehende verknüpfte Aufgabe von Verkaufsauftrag als Standardwert für Aussendienst verwenden. 
tags:
- HowTo
- Drittanbieter
prev: ./fsm-industry
---
# Industry FSM Sale Default Task
![icon_oms_box](assets/icon_oms_box.png)

{{ $frontmatter.description }}

Technischer Name: `industry_fsm_sale_default_task`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Sale-Workflow/tree/16.0/industry_fsm_sale_default_task>

## Verwendung

### Aufgabe aus bestehenden Auftragszeilen auf Neue übertragen

Mit dieser Erweiterung wird beim Erstellen und aktualisieren von Auftragszeilen in Verkaufsaufsträgen, ob es bestehende Auftragszeilen mit Aufgaben gibt, welche mit einem Aussendienst-Projekt verknüpft sind. Gibt es entsprechende Auftragszeilen und ist die neue Auftragszeile nicht mit einer Aufgabe verknüpft, wird die Aufgabe als Standardwert übernommen.
