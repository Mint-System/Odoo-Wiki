---
tags:
- HowTo
- OCA
prev: ./lager
---
# Stock Move Line Auto Fill
![icon_oca_app](assets/icon_oca_app.png)

Die erledigte Menge auf einem Transfer automatisch ausfüllen.

Technischer Name: `stock_move_line_auto_fill`\
Repository: <https://github.com/OCA/stock-logistics-workflow/tree/14.0/stock_move_line_auto_fill>

## Verwendung

### Erledigte Menge automatisch ausfüllen

Mit dieser Odoo Erweiterung wird die erledigte Menge gemäss Konfiguration auf dem Vorgangstyp automatisch ausgefüllt. Öffnen Sie *Lager > Konfiguration > Vorgangstypen* und wählen Sie einen Vorgangstyp aus. Setzen Sie die Optionen unter *Automation*.

![](assets/Stock%20Move%20Line%20Auto%20Fill.png)

### Mengen mit Aktion ausfüllen

Mit dieser Erweiterung steht auf Transfers eine Aktion *Autofill* zur Verfügung. Wenn Sie auf diesen Knopf drücken wird die erledigte Menge entsprechend der reservierten Menge ausgefüllt.

![](assets/Stock%20Move%20Line%20Auto%20Fill%20Button.png)