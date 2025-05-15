---
title: Stock Critical Forecast
description: Kritisches Datum für gelieferte Produkte und Komponenten in der Fertigung anzeigen.
kind: howto
tags:
- Drittanbieter
prev: ./stock
---
# Stock Critical Forecast
![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `stock_critical_forecast`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Stock-Logistics-Workflow/tree/17.0/stock_critical_forecast>

## Beschreibung

Mit dieser Erweiterung haben Sie Zugriff auf einen neuen Bericht, der das kritische Datum aus dem *Forecasted Report* für alle Produkte in Lieferungen und Fertigung anzeigt.

## Verwendung

### Kritische Vorhersage anzeigen

Öffnen Sie *Lager > Berichtswesen > Kritische Vorhersage*. Klicken Sie auf *Aktualisieren* um die Daten anzuzeigen. Nun haben Sie verschiedene Möglichkeit um die kritischen Produkte genauer anzuschauen, Aktivitäten zu planen oder weitere Aktionen auszuführen.

![Stock Critical Forecast](attachments/Stock%20Critical%20Forecast.gif)

### Kritische Vorhersage manuell berechnen

Klicken Sie auf *Lager > Vorgänge > Kritische Vorhersage berechen* und bestätigen Sie den Vorgang mit *Berechnen*.

## Geplante Aktionen

### Kritische Vorhersage automatisch berechnen

Diese Erweiterung stellt eine geplante Aktion *Kritische Vorhersage berechnen* bereit, die täglich ausgeführt wird. Diese Aktion können Sie beliebig anpassen, beispielsweise mit Protokollierung:

```python
date = datetime.datetime.now().isoformat()
log('Action lauchend by %s at %s' % (env.user.name, date))
model.get_data()
log('Scheduled action with timestamp %s has finished' % date)
```

Damit werden unter *Einstellungen > Technisch > Protokollierung* die Ausführungen der Aktion festgehalten.

![](attachments/Stock%20Critical%20Forecast%20Protokollierung.png)