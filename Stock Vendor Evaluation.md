---
title: Stock Vendor Evaluation
description: Lieferungen bewerten und Lieferanten auswerten.
kind: howto
partner: Mint-System
prev: ./stock
---

# Stock Vendor Evaluation

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `stock_vendor_evaluation`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Stock-Logistics-Workflow/tree/18.0/stock_vendor_evaluation>

## Verwendung

### Erweiterung konfigurieren

Legen Sie unter _Lager > Konfiguration > Lieferantenbewertung Kritieren_ die Bewertungskriterien fest. Diese Kriterien stehen anschliessend in Wareneingängen zur Auswahl.

![](attachments/Stock%20Vendor%20Evaluation%20Bewertungskriterien.png)

### Lieferungen bewerten

Zeigen Sie die Lagerbewegungen via _Lager > Vorgänge > Bewegungen_ an und wählen Sie einen Wareneingang. Wurde der Eingang verarbeitet können Sie im Feld _Bewertung_ eine Auswahl treffen.

![](attachments/Stock%20Vendor%20Evaluation%20Bewertung.png)

Nun wird für den Kontakt im Feld _Erhalte von_ die Lieferantenbewertung berechnet.

### Lieferantenbewertungen anzeigen

Die Lieferantenbewertung können Sie aus zwei Perspektiven betrachten, einmal aus Sicht der Kontakte und einmal aus Sicht des Lagers.

Wenn Sie die Bewertungen zeitlich filtern wollen öffnen Sie _Lager > Berichtswesen > Lieferantebewertung_.

![](attachments/Stock%20Vendor%20Evaluation%20Lager%20Bericht.png)

Wenn Sie die Bewertung für das letzte Jahr sehen wollen gehen Sie nach _Einkauf > Berichtswesen > Lieferantebewertung_.

![](attachments/Stock%20Vendor%20Evaluation%20Einkauf%20Bericht.png)
