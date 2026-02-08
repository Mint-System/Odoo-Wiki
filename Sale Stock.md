---
title: Verkauf Lager
description: Lieferungen aus Verkaufsaufträge erstellen.
kind: howto
section: true
prev: ./sale
---

# Verkauf Lager

![icons_odoo_sale](attachments/icons_odoo_sale.png)

{{ $frontmatter.description }}

## Erweiterungen

| Erweiterung                                 | Beschreibung                                              |
| ------------------------------------------- | --------------------------------------------------------- |
| [Sale Stock Owner](Sale%20Stock%20Owner.md) | Kunde als Besitzer an Lieferungen und Beständen zuordnen. |

## Konfiguration

### Produktverpackungen aktivieren

Navigieren Sie nach *Einstellungen > Verkauf > Produktkatalog* und aktivieren Sie die Option *Produktverpackungen*.

### Lagerroute für Verkaufsauftrag erlauben

Die Lagerroute kann bereits auf dem Verkaufsangebot festgelegt werden. Damit die Route auswählbar wird, müssen Sie diese konfigurieren. Navigieren Sie nach _Lager > Konfiguration > Routen_ und öffnen Sie die ausgewählte Route. Aktivieren Sie die Option _Verkaufsauftragpositionen_.

## Verwendung

### Lagerroute auf Auftragszeile auswählen

Wenn Sie Produkte haben, die eine Lieferung, PTO oder MTO generieren, können Sie auf der Auftragszeile die entsprechende Route bestimmen. Öffnen Sie ein Angebot unter _Verkauf_ und blenden Sie das Feld _Route_ in der Tabelle der Auftragszeilen ein. Wählen Sie die entsprechende Route aus.
