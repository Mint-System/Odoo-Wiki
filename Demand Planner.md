---
tags:
- HowTo
- Drittanbieter
prev: ./lager
---
# Demand Planner
![](assets/odoo_icon_demand_planner.png)

Bestellvorschläge für Kompontenten aus Stücklisten anhand Lageroperationen und Prognosen generieren lassen.

Technischer Name: `demand_planner`\
Repository: <https://github.com/Mint-System/Demand-Planner>

## Nachfragekalkulation für Vorgangstyp aktivieren

Damit Bestellvorschläge generiert werden, muss dies explizit auf dem Vorgangstyp festgelegt werden. Navigieren Sie nach *Lager > Konfiguration > Vorgangstyp* und wählen Sie den entsprechenden Typen aus. Aktivieren Sie die Option *Calculate demand for orders of this type*.

## Bestellvorschläge anzeigen

Öffnen Sie *Lager > Berichtswesen > Demand Planner* und klicken Sie auf *Refresh*. Für Aufträge von aktivierten Vorgangstypen werden nun Bestellvorschläge generiert und angezeigt.