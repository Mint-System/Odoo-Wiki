---
tags:
- HowTo
- OCA
prev: ./lager
---
# Stock Production Lot Active
![icon_oca_app](assets/icon_oca_app.png)

Erlaubt die Archivierung von Los/Chargen.

Technischer Name: `stock_production_lot_active`\
Repository: <https://github.com/OCA/stock-logistics-workflow/tree/14.0/stock_production_lot_active>

## Los/Charge archivieren

Öffnen Sie *Lager > Stammdaten > Chargen-/ Seriennummern* und wählen Sie die zu archivierenden Chargen-/Seriennummern aus.
Wählen Sie *Aktion > Archiv*.

![](assets/Stock%20Production%20Lot%20Active%20Aktion.png)

## Automatische Archivierung der Los/Chargen

Mit dieser Aktionen werden Los/Chargen archiviert, wenn Sie eine Menge von 0 haben und werden dearchiviert wenn die Menge grösser 0 ist. Diese Aktion bötigt die Erweiterung [Stock Production Lot Active](Stock%20Production%20Lot%20Active.md).

Navigeren nach *Einstellungen > Technisch > Geplante Aktionen* und einen neuen Eintrag erstellen:

* Name der Aktion: `Mint System: Archive Stock Production Lot`
* Modell: `Serveraktion`
* Anzahl aufrufe: `-1`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
# search for all lots
all_lots = env['stock.production.lot'].with_context(active_test=False).search([])
#len(all_lots)

# search for lots with product qty 0 or less
filtered_lots = all_lots.filtered(lambda lot : lot.active is True and lot.product_qty < 1)
#len(filtered_lots)

# archive the filtered lots
if len(filtered_lots) > 0:
    log('About to archive %s: %s' % (filtered_lots._name, filtered_lots.ids))
    filtered_lots.write({'active': False})

# search for archived lots with product qty 1 or greater
filtered_lots = all_lots.filtered(lambda lot : lot.active is False and lot.product_qty > 0)
#len(filtered_lots)

# unarchive the filtered lots
if len(filtered_lots) > 0:
    log('About to unarchive %s: %s' % (filtered_lots._name, filtered_lots.ids))
    filtered_lots.write({'active': True})
env.cr.commit()

log('The "Archive Stock Production Lot" job was executed successfully.', level='info')
```