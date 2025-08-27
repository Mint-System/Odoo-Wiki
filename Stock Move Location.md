---
title: Stock Move Location
description: Warenbestände zwischen Lagerorte verschieben.
kind: howto
partner: OCA
prev: ./warehouse
---
# Stock Move Location
![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `stock_move_location`\
Repository: <https://github.com/OCA/stock-logistics-warehouse/tree/16.0/stock_move_location>

## Verwendung

### Bestand von Produkt bewegen

Navigieren Sie nach *Lager > Produkte > Produkte* und öffnen Sie das Produkt, dessen Bestand Sie verschieben möchten. Klicken Sie auf *X kg Verfügbar* um den Bestand anzuzeigen. Markieren Sie die Bestände, die Sie verschieben möchten und wählen Sie *Aktionen > Zu Lagerort bewegen...*.

Im neuen Dialog wählen Sie unter *Ziellagerort* den neuen Lagerort. Validieren Sie die Produktzeilen und bestätigen Sie den Vorgang entweder mit *Sofortige Lieferung* oder *Geplante Bewegung*. Mit der Aktion *Sofortige Lieferung* wird der Transfer angelegt und sofort erledigt. Mit der Aktion *Geplante Bewegung* kann die Aktion später ausgeführt werden.

![](attachments/Stock%20Move%20Location.png)

### Bestand von Lagerort bewegen

Navigieren Sie nach *Lager > Konfiguration > Lagerorte* und öffnen Sie den Lagerort, dessen Bestand Sie verschieben möchten. Klicken Sie auf *Bestand* und markieren Sie die Bestände, die Sie verschieben möchten. Wählen Sie *Aktionen > Zu Lagerort bewegen...* um den Vorgang zu starten. Geben Sie den *Ziellagerort* ein, validieren Sie die Produktzeilen und schliessen Sie den Vorgang mit der entsprechenden Aktion.
