---
title: Resource Calendar Get Days
description: Die Anzahl Tage in Abwesenheiten relativ zu den Arbeitszeiten des Unternehmens berechnen.
tags:
- HowTo
- Drittanbieter
prev: ./hr
---
# Resource Calendar Get Days
![icon_oms_box](attachments/icon_oms_box.png)

{{ $frontmatter.description }}

Technischer Name: `resource_calendar_get_days`\
Repository: <https://github.com/Mint-System/Odoo-Apps-HR/tree/15.0/resource_calendar_get_days>

## Verwendung

### Tage in Abwesenheit relativ zu Arbeitsstunden berechnen

Es wird angenommen, dass Sie Mitarbeitende mit einen Arbeitspensum <100% haben. Navigieren Sie nach *Abwesenheit* und erfassen Sie für einen Mitarbeitenden eine Abwesenheit. Mit dieser Erweiterung berechnet Odoo die Anzahl Tage des Mitarbeitenden relativ zu den Arbeitsstunden des Unternehmens. Dazu ein Beispiel eines Mitarbeitenden mit einem 40%-Pensum:

Der/die Mitarbeitende arbeitet am Dienstag 4 Stunden am Vormittag und gibt für diesen Tag eine bezahlte Abwesenheit ein:

![](attachments/Resource%20Calendar%20Get%20Days%201%20Tag.png)

Das System berechnet für die Abwesenheit 0.5 Tage und zieht diese von den verfügbaren Tagen ab:

![](attachments/Resource%20Calendar%20Get%20Days%20Guthaben.png)
