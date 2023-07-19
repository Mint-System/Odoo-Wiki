---
title: Stock Production Lot Active
description: "Erlaubt die Archivierung von Los/Chargen."
tags:
- HowTo
- OCA
prev: ./stock
---
# Stock Production Lot Active
![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `stock_production_lot_active`\
Repository: <https://github.com/OCA/stock-logistics-workflow/tree/14.0/stock_production_lot_active>

## Verwendung

### Los/Charge archivieren

Öffnen Sie *Lager > Stammdaten > Chargen-/ Seriennummern* und wählen Sie die zu archivierenden Chargen-/Seriennummern aus.
Wählen Sie *Aktion > Archiv*.

![](attachments/Stock%20Production%20Lot%20Active%20Aktion.png)

## Geplante Aktionen

### Los automatisch archivieren

Mit dieser Aktionen werden Los/Chargen archiviert, wenn Sie eine Menge von 0 haben und werden dearchiviert wenn die Menge grösser 0 ist. Diese Aktion bötigt die Erweiterung [Stock Production Lot Active](Stock%20Production%20Lot%20Active.md).

Navigeren nach *Einstellungen > Technisch > Geplante Aktionen* und einen neuen Eintrag erstellen:

* Name der Aktion: `Los automatisch archivieren`
* Modell: `Serveraktion`
* Ausführen alle: `1 Tage`
* Anzahl aufrufe: `-1`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
# Search for all lots
all_lots = env['stock.production.lot'].search([])

# Search for lots with product qty less than zero
archive_lots = all_lots.filtered(lambda lot : lot.active is True and lot.product_qty < 0.0)

# Archive the filtered lots
if archive_lots:
    filtered_lots.write({'active': False})
    log('Archived lots: %s' % archive_lots._name)

# Search for archived lots with product qty 1 or greater
unarchive_lots = all_lots.filtered(lambda lot : lot.active is False and lot.product_qty > 0.0)

# Unarchive lots
if unarchive_lots:
    filtered_lots.write({'active': True})
    log('Unarchived lots: %s' % archive_lots._name)

# Commit changs
env.cr.commit()
```