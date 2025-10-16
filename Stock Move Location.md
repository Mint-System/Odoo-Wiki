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
Repository: <https://github.com/OCA/stock-logistics-warehouse/tree/18.0/stock_move_location>

## Verwendung

### Bestand von Produkt bewegen

Navigieren Sie nach _Lager > Produkte > Produkte_ und öffnen Sie das Produkt, dessen Bestand Sie verschieben möchten. Klicken Sie auf _X kg Verfügbar_ um den Bestand anzuzeigen. Markieren Sie die Bestände, die Sie verschieben möchten und wählen Sie _Aktionen > Zu Lagerort bewegen..._.

Im neuen Dialog wählen Sie unter _Ziellagerort_ den neuen Lagerort. Validieren Sie die Produktzeilen und bestätigen Sie den Vorgang entweder mit _Sofortige Lieferung_ oder _Geplante Bewegung_. Mit der Aktion _Sofortige Lieferung_ wird der Transfer angelegt und sofort erledigt. Mit der Aktion _Geplante Bewegung_ kann die Aktion später ausgeführt werden.

![](attachments/Stock%20Move%20Location.png)

### Bestand von Lagerort bewegen

Navigieren Sie nach _Lager > Konfiguration > Lagerorte_ und öffnen Sie den Lagerort, dessen Bestand Sie verschieben möchten. Klicken Sie auf _Bestand_ und markieren Sie die Bestände, die Sie verschieben möchten. Wählen Sie _Aktionen > Zu Lagerort bewegen..._ um den Vorgang zu starten. Geben Sie den _Ziellagerort_ ein, validieren Sie die Produktzeilen und schliessen Sie den Vorgang mit der entsprechenden Aktion.
