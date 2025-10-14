---
title: Demand Planner
description: Bestellvorschläge für Kompontenten aus Stücklisten anhand Lageroperationen und Prognosen generieren lassen.
kind: howto
partner: Mint-System
prev: ./stock
---

# Demand Planner

![](attachments/odoo_icon_demand_planner.png)

{{ $frontmatter.description }}

Technischer Name: `demand_planner`\
Repository: <https://github.com/Mint-System/Demand-Planner>

## Verwendung

### Nachfragekalkulation für Vorgangstyp aktivieren

Damit Bestellvorschläge generiert werden, muss dies explizit auf dem Vorgangstyp festgelegt werden. Navigieren Sie nach _Lager > Konfiguration > Vorgangstyp_ und wählen Sie den entsprechenden Typen aus. Aktivieren Sie die Option _Calculate demand for orders of this type_.

### Bestellvorschläge anzeigen

Öffnen Sie _Lager > Berichtswesen > Demand Planner_ und klicken Sie auf _Refresh_. Für Aufträge von aktivierten Vorgangstypen werden nun Bestellvorschläge generiert und angezeigt.
