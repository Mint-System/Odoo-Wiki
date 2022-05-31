---
tags:
- HowTo
- Drittanbieter
prev: ./lager
---
## Stock Vendor Evaluation
![icon_oms_box](assets/icon_oms_box.png)

Lieferungen bewerten und Lieferanten auswerten.

Technischer Name: `stock_vendor_evaluation`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Stock-Logistics-Workflow/tree/15.0/stock_vendor_evaluation>

## Erweiterung konfigurieren

Legen Sie unter *Lager > Konfiguration > Lieferantenbewertung Kritieren* die Bewertungskriterien fest. Diese Kriterien stehen anschliessend in Wareneingängen zur Auswahl.

![](assets/Stock%20Vendor%20Evaluation%20Bewertungskriterien.png)

## Lieferungen bewerten

Zeigen Sie die Lagerbewegungen via *Lager > Vorgänge > Bewegungen* an und wählen Sie einen Wareneingang. Wurde der Eingang verarbeitet können Sie im Feld *Bewertung* eine Auswahl treffen.

![](assets/Stock%20Vendor%20Evaluation%20Bewertung.png)

Nun wird für den Kontakt im Feld *Erhalte von* die Lieferantenbewertung berechnet.

## Lieferantenbewertungen anzeigen

Die Lieferantenbewertung können Sie aus zwei Perspektiven betrachten, einmal aus Sicht der Kontakte und einmal aus Sicht des Lagers.

Wenn Sie die Bewertungen zeitlich filtern wollen öffnen Sie *Lager > Berichtswesen > Lieferantebewertung*.

![](assets/Stock%20Vendor%20Evaluation%20Lager%20Bericht.png)

Wenn Sie die Bewertung für das letzte Jahr sehen wollen gehen Sie nach *Einkauf > Berichtswesen > Lieferantebewertung*.

![](assets/Stock%20Vendor%20Evaluation%20Einkauf%20Bericht.png)