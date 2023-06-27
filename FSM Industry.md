---
title: Aussendienst
description: Bieten Sie Ihren Kunden überall ausgezeichnete Dienstleistungen an.
tags:
- HowTo
prev: ./
---
# Aussendienst
![](assets/icons_odoo_industry_fsm.png)

{{ $frontmatter.description }}

Website: <https://www.odoo.com/de_DE/app/field-service>

## Erweiterungen

| Erweiterung                                                                 | Beschreibung                                                                                   |
| --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| [Industry FSM Sale Default Task](Industry%20FSM%20Sale%20Default%20Task.md) | Verknüpfte Aufgabe der Auftragszeile als Standardwert verwenden |

## Verwendung

### Projekt für Produkte auf Aufgaben konfigurieren

Navigieren Sie nach *Projekt > Konfiguration > Projekte* und wählen Sie ein Projekt aus. Zeigen Sie den Tab *Einstellungen* an und aktivieren Sie die Option *Abrechenbar* und *Produkte auf Aufgaben*.

### Produkt auf Aufgabe erfassen

Zeigen Sie eine Projektaufgabe an, die zu einem Projekt gehört, welches die Erfassung von Produkten auf Aufgaben erlaubt. Klicken Sie auf den Smart-Button *X Produkte* und fügen Sie die entsprechenden Produkte hinzu.

::: tip
Die Produkte werden dem Verkaufsauftrag hinzugefügt und abhängig von der Fakturierungsregel wird eine Lieferung erstellt.
:::