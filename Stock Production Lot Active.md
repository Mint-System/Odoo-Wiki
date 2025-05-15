---
title: Stock Production Lot Active
description: "Erlaubt die Archivierung von Los/Chargen."
kind: howto
tags:
- OCA
prev: ./stock
---
# Stock Production Lot Active
![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `stock_production_lot_active`\
Repository: <https://github.com/OCA/stock-logistics-workflow/tree/17.0/stock_production_lot_active>

## Verwendung

### Los-/Seriennummern archivieren

Öffnen Sie *Lager > Stammdaten > Los-/Seriennummern* und wählen Sie die zu archivierenden Los-/Seriennummern aus. Wählen Sie *Aktionen > Archiv*.

![](attachments/Stock%20Production%20Lot%20Active%20Aktion.png)

## Geplante Aktionen

### Los-/Seriennummern archivieren

Mit dieser Aktionen werden Los/Chargen archiviert, wenn Sie eine Menge von 0 haben und werden de-archiviert wenn die Menge grösser 0 ist.

Navigieren Sie nach *Einstellungen > Technisch > Geplante Aktionen* und erstellen Sie einen neuen Eintrag:

* Name der Aktion: `Los-/Seriennummern archivieren`
* Modell: `Serveraktion`
* Ausführen alle: `1 Tage`
* Anzahl aufrufe: `-1`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
# Get all lots including archived
lot_ids = env['stock.lot'].with_context(active_test=False).search([])

# Get active lots with zero or less quantity
archive_lots = lot_ids.filtered(lambda l: l.active is True and l.product_qty <= 0.0)

# Archive the filtered lots
if archive_lots:
    archive_lots.write({'active': False})
    log('Archived lots: %s' % archive_lots.mapped('name'))

# Search for archived lots with product qty 1 or greater
unarchive_lots = lot_ids.filtered(lambda l: l.active is False and l.product_qty > 0.0)

# raise Warning(unarchive_lots.mapped('name'))

# Unarchive filtered lots
if unarchive_lots:
    unarchive_lots.write({'active': True})
    log('Unarchived lots: %s' % unarchive_lots.mapped('name'))
```