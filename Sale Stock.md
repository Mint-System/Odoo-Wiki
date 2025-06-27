---
title: Verkauf Lager
description: Lieferungen aus Verkaufsaufträge erstellen.
kind: howto
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

### Lagerroute für Verkaufsauftrag erlauben

Die Lagerroute kann bereits auf dem Verkaufsangebot festgelegt werden. Damit die Route auswählbar wird, müssen Sie diese konfigurieren. Navigieren Sie nach *Lager > Konfiguration > Routen* und öffnen Sie die ausgewählte Route. Aktivieren Sie die Option *Verkaufsauftragpositionen*.

## Verwendung

### Lagerroute auf Auftragszeile auswählen

Wenn Sie Produkte haben, die eine Lieferung, PTO oder MTO generieren, können Sie auf der Auftragszeile die entsprechende Route bestimmen. Öffnen Sie ein Angebot unter *Verkauf* und blenden Sie das Feld *Route* in der Tabelle der Auftragszeilen ein. Wählen Sie die entsprechende Route aus.