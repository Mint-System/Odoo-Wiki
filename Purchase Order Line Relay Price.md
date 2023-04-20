---
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- HowTo
- Drittanbieter
prev: ./einkauf
---
# Purchase Order Line Relay Price
![icon_oms_box](assets/icon_oms_box.png)

Kalkuliert den besten Preis für alle Bestellpositionen und benachrichtigt den Verkäufer.

Technischer Name: `purchase_order_line_relay_price`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Purchase-Workflow/tree/14.0/purchase_order_line_relay_price>

## Verwendung

### Produkt mit mehreren Lieferanten

Diese Erweiterung rechnet für ein Produkt die möglichen Staffelpreise durch und benachrichtigt den Einkäufer mit Verbesserungsvorschlägen. Voraussetzung dafür ist, dass Sie auf dem Produkt mehre  [Lieferanten auf Produkt hinzufügen](Einkauf.md#Lieferant%20auf%20Produkt%20hinzufügen):

**Produkt**: `[FURN_6666] Akustische Blockbildschirme`\
**Tab Einkauf**:

| Lieferant      | Startdatum | Enddatum   | Menge | Preis  | Tage bis Lieferung |
| -------------- | ---------- | ---------- | ----- | ------ | ------------------ |
| Wood Corner    |            |            | 2.00  | 100.00 | 1                  |
| Azure Interior |            | 25.01.2023 | 10.0  | 50.0   | 5                   |

### Bester Einkaufspreis berechnen

Öffnen Sie eine Bestellung und wählen Sie *Aktion > Prüfe Preise* oder bestätigen Sie die Angebotsanfrage.

![Purchase Order Line Relay Price Prüfe Preise](assets/Purchase%20Order%20Line%20Relay%20Price%20Prüfe%20Preise.gif)

Wurde ein besserer Preis gefunden (in diesem Fall 500 CHF), dann erstellt Odoo eine Aktivität:

> Für das Produkt "[FURN_6666] Akustische Blockbildschirme" wurde ein besserer Staffelpreis gefunden:
> * 10.0 Einheiten für 50.0 mit Lieferfrist von 5 Tagen.