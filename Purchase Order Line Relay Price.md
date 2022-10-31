---
tags:
- HowTo
- Drittanbieter
prev: ./einkauf
---
# Purchase Order Line Relay Price
![icon_oms_box](assets/icon_oms_box.png)

Kalkuliert den besten Preis für alle Bestellpositionen und benachrichtigt den Verkäufter.

Technischer Name: `purchase_order_line_relay_price`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Sale-Workflow/tree/14.0/purchase_order_line_relay_price>

## Verwendung

### Bester Einkaufspreis berechnen

Diese Erweiterung rechnet für ein Produkt die möglichen Staffelpreise durch und benachrichtigt den Einkäufer mit Verbesserungsvorschlägen. Voraussetzung dafür ist, dass auf den Produkten mehrere Verkäufer hinterlegt sind:

![](assets/Purchase%20Order%20Line%20Relay%20Price%20Verkäufer.png)

Öffnen Sie eine Bestellung und wählen Sie *Aktion > Prüfe Preise* oder bestätigen Sie die Angebotsanfrage.

![Purchase Order Line Relay Price Prüfe Preise](assets/Purchase%20Order%20Line%20Relay%20Price%20Prüfe%20Preise.gif)

Wurde ein besserer Preis gefunden (in diesem Fall 500 CHF), erstellt Odoo eine Aktivität:

![](assets/Purchase%20Order%20Line%20Relay%20Price%20Activity.png)