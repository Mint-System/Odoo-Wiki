---
tags:
- HowTo
- Aktionen
prev: ./lager
---
# Lager Aktionen
![icons_odoo_stock](assets/icons_odoo_stock.png)

Arbeitsflüsse im Lager automatisieren.

## Aktion "Bestand zurücksetzen" erstellen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Bestand zurücksetzen`\
Modell: `stock.quant`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Pythoncode*:

```python
for record in records:
	record.sudo().write({
	  'quantity': 0,
	  # 'reserved_quantity': 0
	})
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Bestände erscheint nun in der Auswahl *Aktion* das Menu *Bestand zurücksetzen*.

## Aktion  "Lagerbuchung zurücksetzen" erstellen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Lagerbuchung zurücksetzen`\
Modell: `stock.move`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Pythoncode*:

```python
for record in records:  
  record.write({'state': 'draft'})
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Lagerbuchungen erscheint nun in der Auswahl *Aktion* das Menu *Lagerbuchung zurücksetzen*.

![](assets/Lager%20Aktion%20%20Lagerbuchung%20Zurücksetzen%20erstellen.png)

## Aktion  "Transfer abbrechen" erstellen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Transfer abbrechen`\
Modell: `stock.picking`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Pythoncode*:

```python
for record in records:  
  record.write({'state': 'cancel'})
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Transfers erscheint nun in der Auswahl *Aktion* das Menu *Transfer zurücksetzen*.

## Aktion  "Lagerbuchung abbrechen" erstellen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Lagerbuchung abbrechen`\
Modell: `stock.move`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Pythoncode*:

```python
for record in records:  
  record.write({'state': 'cancel'})
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Lagerbuchungen erscheint nun in der Auswahl *Aktion* das Menu *Lagerbuchung zurücksetzen*.

## Aktion  "Lagerbuchung erledigen" erstellen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Lagerbuchung erledigen`\
Modell: `stock.move`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Pythoncode*:

```python
for record in records:
  record._action_done()
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Lagerbuchungen erscheint nun in der Auswahl *Aktion* das Menu *Lagerbuchung erledigen*.

## Aktion  "Als verfügbar markieren" erstellen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Als verfügbar markieren`\
Modell: `Lagerbuchung`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld Pythoncode:
```python
for record in records:  
  record.write({
	  'state': 'assigned'
  })
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

Auf der Lagerbuchung erscheint nun in der Auswahl *Aktion* das Menu *Als verfügbar markieren*.

## Geplante Aktion "Los automatisch zuweisen" erstellen

Die Aktion lädt alle Produklieferungen, welche noch keine Losnummer haben und vergleicht diese mit Produktzugängen. Wenn es einen Produkteingang gibt, der bis einer Woche vor der Lieferung eingeht, wird die Losnummer des Zugang auf die Lieferung übertragen.

Navigieren Sie nach *Einstellungen > Technisch > Geplante Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Los automatisch zuweisen`\
Modell: `ir.actions.server`\
Ausführen alle: `15` Minuten\
Nächstes Ausführungsdatum: `DD.MM.YYYY 06:00:00`\
Anzahl der Anrufe: `-1`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
## Settings
scope_days = 7

## Get confirmed outgoing pickings
pickings_out = env['stock.picking'].search(["&", ["picking_type_code", "=", "outgoing"], ("state", "in", ["confirmed", "assigned", "partially_available"])])

## Get confirmed incoming pickings
pickings_in = env['stock.picking'].search(["&", ["picking_type_code", "=", "incoming"], ("state", "in", ["confirmed", "assigned", "partially_available"])])

## Get move lines with lot and tracking enabled
lot_move_lines = pickings_in.move_line_ids.filtered(lambda l: l.lot_id and l.tracking)

## raise UserError(lot_move_lines)

## Get lines where lot is not set and tracking enabled
fix_move_lines = pickings_out.move_line_ids.filtered(lambda l: not l.lot_id and l.tracking)

## raise UserError(fix_move_lines)

messages = []
for line in fix_move_lines:
  # Find matching lot line by product and scope
  match_lot_move_lines = lot_move_lines.filtered(lambda l: l.product_id == line.product_id and ((line.move_id.date - datetime.timedelta(days=scope_days)) < l.move_id.date and l.move_id.date < line.move_id.date))
  if match_lot_move_lines:
    match_line = match_lot_move_lines[0]
    # raise UserError([line.product_id.name,line.picking_id.name,match_line.product_id.name,match_line.picking_id.name])
    messages.append('Set matching lot from %s on %s.' % (match_line,line))
    try:
      line.write({'lot_id': match_line.lot_id})
    except:
      log('While writing %s with %s an error occured.' % (line, match_line.lot_id), level='error')

if messages:
  log(' '.join(messages))
```

## Geplante Aktion "Erledigte Menge korrigieren" erstellen

Diese Aktion prüft ausgehende Lieferungen und setzt die erledigte Menge gemäss Bedarf ohne Berücksichtigung von Materialreservationen.

Navigieren Sie nach *Einstellungen > Technisch > Geplante Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Erledigte Menge korrigieren`\
Modell: `ir.actions.server`\
Ausführen alle: `15` Minuten\
Nächstes Ausführungsdatum: `DD.MM.YYYY 06:00:00`\
Anzahl der Anrufe: `-1`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
## Set products to ignore
except_product_names = ["Gebinde"]

## Get pickings to be processed
pickings = env['stock.picking'].search(["&", ["picking_type_id", "=", 2], ("state", "in", ["confirmed", "assigned", "partially_available"])])

## Get moves where qty done it not equal to demand
fix_moves = pickings.move_lines.filtered(lambda m: (m.quantity_done != m.product_uom_qty) and (m.product_id.name not in except_product_names))

if fix_moves:
	log('Fix qty done for moves: %s' % (fix_moves))

for move in fix_moves:
    try:
        move.write({'quantity_done': move.product_uom_qty})
    except:
        log('While writing move %s with origin %s an error occured.' % (move, move.origin), level='error')
      
## Get lines where qty done is not equal to demand and no move line has been created
fix_move_lines = pickings.move_line_ids.filtered(lambda l: (l.qty_done != l.move_id.product_uom_qty) and (l.product_id.name not in except_product_names))

if fix_move_lines:
	log('Fix qty done for move lines: %s' % (fix_move_lines))

for line in fix_move_lines:
    line.write({'qty_done': line.move_id.product_uom_qty})

## Assign pickings
assign_pickings = pickings.filtered(lambda p: p.state in ["confirmed"])

if assign_pickings:
	log('Assign pickings: %s' % (assign_pickings))

for picking in assign_pickings:
    picking.write({'state': 'assigned'})
    
## Update transport moves

transport_product_name = "Gebinde"
transport_moves = []

for picking in pickings:
  # Check if picking has a transport move
  transport_move_ids = picking.move_lines.filtered(lambda m: m.product_id.name == transport_product_name)
  if transport_move_ids:
    # Count boxes and set as qty done if not null
    x_count_boxes_sum = sum(picking.move_lines.mapped("x_count_boxes"))
    for transport_move in transport_move_ids:
      if transport_move.quantity_done == 0 and x_count_boxes_sum > 0:
        transport_moves.append(transport_move)
        transport_move.write({'quantity_done': x_count_boxes_sum, 'product_uom_qty': x_count_boxes_sum})
if transport_moves:
  log('Fix qty done for transport moves: %s' % (transport_moves))
```

## Geplante Aktion "Lot automatisch zuweisen" erstellen

Navigieren Sie nach *Einstellungen > Technisch > Geplante Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Lot automatisch zuweisen`\
Modell: `ir.actions.server`\
Ausführen alle: `15` Minuten\
Nächstes Ausführungsdatum: `DD.MM.YYYY 06:00:00`\
Anzahl der Anrufe: `-1`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
## Get outgoing pickings
pickings = env['stock.picking'].search(["&", ["picking_type_id", "=", 2], ("state", "in", ["confirmed", "assigned", "partially_available"])])

## Get lines where lot is tracked and not set
fix_move_lines = pickings.move_line_ids.filtered(lambda l: not l.lot_id and l.lots_visible)

## Get all products
product_tmpl_ids = fix_move_lines.mapped('product_id.product_tmpl_id.id')

## Get forecasted data for products
replenish_data = env['report.stock.report_product_product_replenishment']._get_report_data(product_tmpl_ids)

## Get incoming move for each fix move line
for move_line in fix_move_lines:
  incoming_lines = list(filter(lambda l: 
    (l['product']['id'] == move_line.product_id.id) and
    (l['move_out'] == move_line.move_id) and
    (l['move_in'] != None),
  replenish_data['lines']))
  
  # Assign the lot of the first incoming line
  if incoming_lines:
    move_in = incoming_lines[0]['move_in']
    if move_in and move_in.move_line_ids and move_in.move_line_ids[0].lot_id:
      log('Assign lot to move line: %s' % move_line)
      move_line.write({'lot_id':  move_in.move_line_ids[0].lot_id.id})
```