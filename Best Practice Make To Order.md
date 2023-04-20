---
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- Best-Practice
prev: ./best-practice
---
# Make to Order

Damit beim Verkauf von zu fertigenden Produkten direkt ein Fertigungsauftrag erstellt wird, müssen für die Produkte zwei Lagerrouten aktiviert werden. Diese Routen sind im System bereits hinterlegt, müssen aber sichtbar gemacht werden.

1. Als erstes müssen Sie die [mehrstufige Routen aktivieren](Lager.md#Mehrstufige%20Routen%20aktivieren).
2. Anschliessend können Sie die [Route Auffüllung nach Auftrag MTO wiederherstellen](Lager%20Vorgänge.md#Route%20Auffüllung%20nach%20Auftrag%20MTO%20wiederherstellen).
3. 3. Nun können Sie ein [Produkt für "Make to Order" konfigurieren](Lager.md#Produkt%20für%20"Make%20to%20Order"%20konfigurieren).

Wenn Sie dieses Produkt verkaufen, legt Odoo eine Lieferung und ein Fertigungsauftrag an. Die Aufträge werden mit den Smart-Buttons verlinkt.

![](assets/Best%20Practice%20Make%20To%20Order%20Smart-Links.png)

Wenn Sie mehrere Verkäufe für das Produkt anlegen, werden bestehende Bestellungen aktualisiert. Falls Sie für jeden Verkauf einen neuen Fertigungsauftrag möchten müssen Sie die [Beschaffungsgruppe weitergeben](Lager%20Vorgänge.md#Beschaffungsgruppe%20weitergeben).

Damit beim Verkauf der Lagerbestand nicht berücksichtigt wird, müssen Sie den [Bestand bei Fertigung ignorieren](Lager%20Vorgänge.md#Bestand%20bei%20Fertigung%20ignorieren).