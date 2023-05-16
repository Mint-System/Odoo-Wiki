---
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- Best-Practice
prev: ./best-practice
---
# Fertigung mit Subunternehmer

## Szenario

Sie möchten das Produkt *Knusperli* fertigen und müssen dazu einem Subunternehmen den Rohstoff *Zander* schicken.

## Konfiguration 

Zur Vorbereiten müssen Sie die [Vergabe an Subunternehmer aktivieren](Manufacture.md#Vergabe%20an%20Subunternehmer%20aktivieren).
Erstellen Sie Produkte und die Stückliste für die *Knusperli*. Legen Sie auf dieser Stückliste fest, dass Sie die [Fertigung an Subunternehmer vergeben](Manufacture%20Data%20Management.md#Fertigung%20an%20Subunternehmer%20vergeben).
Auf dem Rohstoff *Zander* müssen Sie die [Route zur Versorgung des Subunternehmers festlegen](Manufacture%20Operations.md#Route%20zur%20Versorgung%20des%20Subunternehmers%20festlegen).

## Ausführung manuell

Im Einkauf [erstellen Sie eine Angebotsanfrage](Purchase.md#Angebotsanfrage%20erstellen) für das *Knusperli* beim Subunternehmer. Wenn Sie die Bestellung bestätigen, werden zwei Aufträge angelegt:
* Anlieferung des Produkts vom Subunternehmer
* Lieferung der Rohstoffe an den Subunternehmer

Erledigen die Lieferung an den Subunternehmer mit [Lieferung ausführen](Stock.md#Lieferung%20ausführen).
Hat der Subunternehmer den Auftrag erledigt, können Sie die [Kompontenten für den Subunternehmen-Auftrag aufzeichnen](Manufacture%20Operations.md#Kompontenten%20für%20Subunternehmen-Auftrag%20aufzeichnen).
Zuletzt können Sie die [Anlieferung bestätigen](Stock.md#Anlieferung%20bestätigen).

Der Traceability-Bericht sieht dann wie folgt aus:

![](assets/Best%20Practice%20Fertigung%20mit%20Subunternehmer.png)
