---
title: Purchase to Order
description: Eine einfache und umfassende Odoo-Dokumentation.
kind: explain
prev: ./best-practice
---
# Purchase to Order

Damit Sie Produkte nach dem Verkauf direkt bei einem Lieferanten einkaufen können, müssen für Produkte zwei Lagerrouten aktiviert werden. Diese Routen sind im System bereits hinterlegt, müssen aber sichtbar gemacht werden.

1. Als erstes müssen Sie die [mehrstufige Routen aktivieren](Stock.md#Mehrstufige%20Routen%20aktivieren).
2. Anschliessend können Sie die [Route Auffüllung nach Auftrag MTO wiederherstellen](Stock%20Operations.md#Route%20Auffüllung%20nach%20Auftrag%20MTO%20wiederherstellen).
3. Nun können Sie ein [Produkt für Purchase to Order konfigurieren](Stock.md#Produkt%20für%20Purchase%20to%20Order%20konfigurieren)

Wenn Sie dieses Produkt verkaufen, legt Odoo eine Lieferung und eine Bestellung an. Die Aufträge werden mit den Smart-Buttons verlinkt.

![](attachments/Best%20Practice%20Purchase%20To%20Order%20Smart%20Buttons.png)

Wenn Sie mehrere Verkäufe für das Produkt anlegen, werden bestehende Bestellungen aktualisiert. Falls Sie für jeden Verkauf eine neue Bestellung möchten müssen Sie die [Beschaffungsgruppe weitergeben](Stock%20Operations.md#Beschaffungsgruppe%20weitergeben).

Damit beim Verkauf der Lagerbestand nicht berücksichtigt wird, müssen Sie den [Bestand beim Einkauf ignorieren](Stock%20Operations.md#Bestand%20beim%20Einkauf%20ignorieren)
