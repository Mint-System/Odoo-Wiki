---
tags:
- HowTo
- Aktionen
prev: ./lager
---
# Lager Aktionen
![icons_odoo_stock](assets/icons_odoo_stock.png)

Arbeitsflüsse im Lager automatisieren.

## Aktionen

### Aktion "Bestand zurücksetzen" erstellen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Bestand zurücksetzen`\
Modell: `stock.quant`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Pythoncode*:

```python
for record in records:
	record.sudo().write({
	  'quantity': 0
	})
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Bestände erscheint nun in der Auswahl *Aktion* das Menu *Bestand zurücksetzen*.

### Aktion  "Lagerbuchung zurücksetzen" erstellen

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

### Aktion  "Transfer abbrechen" erstellen

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

### Aktion  "Lagerbuchung abbrechen" erstellen

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

### Aktion  "Lagerbuchung erledigen" erstellen

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

### Aktion  "Als verfügbar markieren" erstellen

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

### Aktion "Reservierungen zurücksetzen" erstellen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Reservierungen zurücksetzen`\
Modell: `ir.actions.server`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Pythoncode*:

```python
# Get outgoing pickings with reservations
pickings = env['stock.picking'].search(["&", ["picking_type_id", "=", 2], ("state", "in", ["assigned", "partially_available"])])
# Unreserve pickings
pickings.do_unreserve()
# Log picking names
log('Unreserved these pickings: %s' % (pickings.mapped('name')))
```

Speichern Sie die Aktion und führen Sie diese mit *Starten* aus.

### Aktion "Reservierter Bestand zurücksetzen" erstellen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Reservierter Bestand zurücksetzen`
Modell: `stock.quant`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Pythoncode*:

```python
for record in records:
	record.sudo().write({
		'reserved_quantity': 0
	})
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Bestände erscheint nun in der Auswahl *Aktion* das Menu *Reservierter Bestand*.

### Aktion "Reservierungen aufheben" erstellen

Mit dieser Aktion können Sie alle Reservierungen für ein Produktaufheben.

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Reservierungen zurücksetzen`\
Modell: `product.product`\
Folgeaktion: `Python-Code ausführen`\
Sicherheit-Gruppennamen: `Lager \ Administrator`

Kopieren Sie die folgenden Zeilen in das Feld *Pythoncode*:

```python
for product_id in records:
	# Get assigned moves for product
	move_ids = env['stock.move'].search([ "&", ("product_id", "=", product_id.id), ("state", "in", ["assigned", "partially_available"]) ])
	if move_ids:
		move_ids._do_unreserve()
		log('Unreserved moves for product: %s' % product_id.display_name)
```

Kopieren Sie den Eintrag und passen Sie ihn wie folgt an:

Modell: `product.template`\
Pythoncode:

```python
for product_id in records.product_variant_id:
	# Get assigned moves for first variant
	move_ids = env['stock.move'].search([ "&", ("product_id", "=", product_id.id), ("state", "in", ["assigned", "partially_available"]) ])
	if move_ids:
		move_ids._do_unreserve()
		log('Unreserved moves for product: %s' % product_id.display_name)
```

Beide Aktionen mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und speichern.

In der Ansicht der Produkte haben Sie nun die Auswahl *Aktion > Reservierungen aufheben*.

## Geplante Aktionen

### Geplante Aktion "Los aus Anlieferung zuweisen" erstellen

Die Aktion lädt alle Produklieferungen, welche noch keine Losnummer haben und vergleicht diese mit Produktzugängen. Wenn es einen Produkteingang gibt, der bis einer Woche vor der Lieferung eingeht, wird die Losnummer des Zugang auf die Lieferung übertragen.

Navigieren Sie nach *Einstellungen > Technisch > Geplante Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Los aus Anlieferung zuweisen`\
Modell: `ir.actions.server`\
Ausführen alle: `5` Minuten\
Nächstes Ausführungsdatum: `DD.MM.YYYY 06:00:00`\
Anzahl der Anrufe: `-1`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
# Settings
scope_days = 7

# Get confirmed outgoing pickings
# pickings_out = env['stock.picking'].search(["&", ["picking_type_code", "=", "outgoing"], ("state", "in", ["confirmed", "assigned", "partially_available"])])

# Get confirmed incoming pickings
date_now = datetime.datetime.now()
scheduled_from = date_now - datetime.timedelta(days=scope_days)
pickings_in = env['stock.picking'].search(["&", 
  ("picking_type_code", "=", "incoming"),
  ("state", "in", ["confirmed", "assigned", "partially_available", "done"]),
  ("scheduled_date", ">=", scheduled_from)
], order="scheduled_date desc")

# Lookup unfinished manufacturing orders
production_ids = env['mrp.production'].search([('state', 'in', ['confirmed','progress','to_close'])])
        
# Get move lines with lot and tracking enabled
lot_move_lines = pickings_in.move_line_ids.filtered(lambda l: l.lot_id and l.tracking)

# raise UserError(pickings_in)

# Get lines where lot is not set and tracking enabled
# fix_move_lines = pickings_out.move_line_ids.filtered(lambda l: not l.lot_id and l.tracking)
fix_move_lines = production_ids.move_raw_ids.move_line_ids.filtered(lambda l: not l.lot_id and l.tracking)

# raise UserError([fix_move_lines[0].reference, fix_move_lines[0].product_id, fix_move_lines[0].move_id.date, lot_move_lines[0].reference, lot_move_lines[0].product_id, lot_move_lines[0].move_id.date])

messages = []
for line in fix_move_lines:
  # Find matching lot line by product and scope
  match_lot_move_lines = lot_move_lines.filtered(lambda l: l.product_id == line.product_id and ((line.move_id.date - datetime.timedelta(days=scope_days)) < l.move_id.date and l.move_id.date < line.move_id.date))
  if match_lot_move_lines:
    match_line = match_lot_move_lines[0]
    # raise UserError(match_line)
    messages.append('Set matching lot from %s on %s.' % (match_line.reference, line.reference))
    try:
      line.write({
        'lot_id': match_line.lot_id,
      })
    except:
      log('While writing %s with %s an error occured.' % (line.reference, match_line.lot_id.name), level='error')

if messages:
  log(' '.join(messages))
```

### Geplante Aktion "Reservierung für Lieferperiode aktualisieren" erstellen

Die Aktion lädt alle Produklieferungen, welche noch keine Losnummer haben und vergleicht diese mit Produktzugängen. Wenn es einen Produkteingang gibt, der bis einer Woche vor der Lieferung eingeht, wird die Losnummer des Zugang auf die Lieferung übertragen.

Navigieren Sie nach *Einstellungen > Technisch > Geplante Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Reservierung für Lieferperiode aktualisieren`\
Modell: `ir.actions.server`\
Ausführen alle: `5` Minuten\
Nächstes Ausführungsdatum: `DD.MM.YYYY 06:00:00`\
Anzahl der Anrufe: `-1`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
# Settings
scope_days=1
picking_type_ids=[8]

# Create scope dates for search
date_now = datetime.datetime.now()
# scheduled_from = date_now + datetime.timedelta(days=scope_days)
date_planned_start = date_now + datetime.timedelta(days=scope_days)

# Lookup unfinished manufacturing orders
production_ids = env['mrp.production'].search([
  ('state', 'in', ['confirmed','progress','to_close']),
  ('reserve_visible', '=', True),
  ('date_planned_start', '<=', date_planned_start),
  ('picking_type_id', 'in', picking_type_ids)
])

# Lookup confirmed outgoing pickings
# pickings_out = env['stock.picking'].search([
#   ("picking_type_code", "=", "outgoing"),
#   ("state", "in", ["confirmed", "assigned", "partially_available"]),
#   ("scheduled_date", ">=", scheduled_from),
# ], order="scheduled_date desc")


# Get lines where not lot_ids are set
# fix_moves = pickings_out.move_lines.filtered(lambda l: not l.lot_ids)
fix_moves = production_ids.move_raw_ids.filtered(lambda l: not l.lot_ids and l.product_id.qty_available > 0)
# qty_available = sum(fix_moves.mapped('product_id.qty_available'))

# raise UserError([production_ids.mapped('date_planned_start'), fix_moves.mapped('reference')])

# Trigger reservations
messages = []
for move in fix_moves:
    try:
        messages.append('Set lot for %s.' % (move.reference))
        move._action_assign()
    except:
        log('While writing move %s an error occured.' % (move.reference), level='error')

if messages:
  log(' '.join(messages))
```

### Geplante Aktion "Erledigte Menge aktualisieren" erstellen

Diese Aktion prüft ausgehende Lieferungen und setzt die erledigte Menge gemäss Bedarf ohne Berücksichtigung von Materialreservationen.

Navigieren Sie nach *Einstellungen > Technisch > Geplante Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Erledigte Menge aktualisieren`\
Modell: `ir.actions.server`\
Ausführen alle: `5` Minuten\
Nächstes Ausführungsdatum: `DD.MM.YYYY 06:00:00`\
Anzahl der Anrufe: `-1`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
# Set products to ignore
except_product_names = ["Gebinde", "Gebinde Migros", "Gebinde Bianchi"]

# Get pickings to be processed
pickings = env['stock.picking'].search(["&", ["picking_type_id", "=", 2], ("state", "in", ["confirmed", "assigned", "waiting", "partially_available"])])

# Lookup unfinished manufacturing orders
production_ids = env['mrp.production'].search([('state', 'in', ['confirmed','progress','to_close'])])

# Get moves where qty done it not equal to demand
fix_moves = pickings.move_lines.filtered(lambda m: (m.quantity_done == 0) and (m.product_id.name not in except_product_names))
fix_moves += production_ids.move_raw_ids.filtered(lambda m: (m.quantity_done == 0) and (m.product_id.name not in except_product_names))

# raise UserError(fix_moves.mapped('reference'))

# Set qty done on moves
if fix_moves:
	log('Set qty done on moves: %s' % (', '.join(fix_moves.mapped('reference'))))
for move in fix_moves:
    try:
        # Revert resevations
        move._do_unreserve()
        move.write({'quantity_done': move.product_uom_qty})
    except:
        log('While writing move %s an error occured.' % (move.reference), level='error')
      
# Get lines where qty done is not equal to demand and no move line has been created
fix_move_lines = fix_moves.mapped('move_line_ids').filtered(lambda l: l.qty_done != l.product_uom_qty)

# Set qty done with reservation value 
if fix_move_lines:
	log('Fix qty done on move lines: %s' % (', '.join(fix_move_lines.mapped('reference'))))
for line in fix_move_lines:
    line.write({
      'qty_done': line.product_uom_qty if line.product_uom_qty >0 else line.move_id.product_uom_qty
    })
```

### Geplante Aktion "Wartende Aufträge bestätigen" erstellen

Diese Aktion versetzt Lieferungen im Status *Waiting* in den Status *Assigned.*

Navigieren Sie nach *Einstellungen > Technisch > Geplante Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Wartende Aufträge bestätigen`\
Modell: `ir.actions.server`\
Ausführen alle: `5` Minuten\
Nächstes Ausführungsdatum: `DD.MM.YYYY 06:00:00`\
Anzahl der Anrufe: `-1`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
# Get outgoing pickings in waiting state
pickings = env['stock.picking'].search(["&",
  ("picking_type_id", "=", 2),
  ("state", "in", ["waiting", "confirmed"]
)])

# Assign pickings
if pickings:
	log('Assign pickings: %s' % (', '.join(pickings.mapped('name'))))

pickings.write({'state': 'assigned'})
```

### Geplante Aktion "Versandprodukte aktualisieren" erstellen

Diese Aktion prüft ausgehende Lieferungen und setzt die erledigte Menge gemäss Bedarf ohne Berücksichtigung von Materialreservationen.

Navigieren Sie nach *Einstellungen > Technisch > Geplante Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Versandprodukte aktualisieren`\
Modell: `ir.actions.server`\
Ausführen alle: `5` Minuten\
Nächstes Ausführungsdatum: `DD.MM.YYYY 06:00:00`\
Anzahl der Anrufe: `-1`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
# Get pickings to be processed
pickings = env['stock.picking'].search(["&", ["picking_type_id", "=", 2], ("state", "in", ["confirmed", "assigned", "partially_available"])])

# Update transport moves
transport_product_name = "Gebinde"
transport_moves = []
for picking in pickings:
  # Check if picking has a transport move
  transport_move_ids = picking.move_lines.filtered(lambda m: transport_product_name in m.product_id.name)
  if transport_move_ids:
    # Count boxes and set qty done if not null
    x_count_boxes_sum = sum(picking.move_lines.mapped("x_count_boxes"))
    for transport_move in transport_move_ids:
      if transport_move.quantity_done != x_count_boxes_sum and x_count_boxes_sum > 0:
        transport_moves.append(transport_move.reference)
        transport_move.write({'quantity_done': x_count_boxes_sum, 'product_uom_qty': x_count_boxes_sum})
if transport_moves:
  log('Fix qty done for transport moves: %s' % (','.join(transport_moves)))
```

### Geplante Aktion "Los aus Forecast zuweisen" erstellen

Navigieren Sie nach *Einstellungen > Technisch > Geplante Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Lot von Forecast zuweisen`\
Modell: `ir.actions.server`\
Ausführen alle: `5` Minuten\
Nächstes Ausführungsdatum: `DD.MM.YYYY 06:00:00`\
Anzahl der Anrufe: `-1`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
# Get outgoing pickings
pickings = env['stock.picking'].search(["&", ["picking_type_id", "=", 2], ("state", "in", ["confirmed", "assigned", "partially_available"])])

# Get lines where lot is tracked and not set
fix_move_lines = pickings.move_line_ids.filtered(lambda l: not l.lot_id and l.lots_visible)

# Get all products
product_tmpl_ids = fix_move_lines.mapped('product_id.product_tmpl_id.id')

# Get forecasted data for products
replenish_data = env['report.stock.report_product_product_replenishment']._get_report_data(product_tmpl_ids)

# Get incoming move for each fix move line
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

### Geplante Aktion "Negativer Bestand bereinigen" erstellen

Navigieren Sie nach *Einstellungen > Technisch > Geplante Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Negativer Bestand bereinigen`\
Modell: `ir.actions.server`\
Ausführen alle: `1` Tage\
Nächstes Ausführungsdatum: `DD.MM.YYYY 06:00:00`\
Anzahl der Anrufe: `-1`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
# Get negative quants
quant_ids = env['stock.quant'].search([('quantity', '<', 0.0)])

for quant in quant_ids:
    diff = -quant.inventory_quantity
    move_vals = quant._get_inventory_move_values(diff, quant.product_id.with_company(quant.company_id).property_stock_inventory, quant.location_id)
    move = quant.env['stock.move'].with_context(inventory_mode=False).create(move_vals)
    # move._action_done()
    env.cr.commit()
    raise UserError([move.name, move.product_id.name, move.date])

if quant_ids:
	log('Set these quants to zero: %s' % ', '.join(quant_ids.mapped(lambda q: '%s (%s)' % (q.location_id.name, q.lot_id.name))))
```

## Automatische Aktionen

### Automatische Aktion "Lieferung erledigen wenn bereit" erstellen

Mit dieser automatischen Aktion wird eine Lieferung im Status *Bereit* die erledigte Menge gleich der Bedarfsmenge gesetzt und erledigt.

Erstellen Sie unter *Einstellungen > Technisch > Automation > Automatische Aktionen* einen Eintrag mit diesen Werten:

Name der Aktion: `Lieferung erledigen wenn bereit`\
Modell: `stock.picking`\
Triggerbedingung: Beim Aktualisieren\
Anzuwenden auf:

```txt
["&",["picking_type_code","=","outgoing"],["state","=","assigned"]]
```

Python Code:

```python
for picking in records:
  for move in records.move_lines:
    move.write({'quantity_done': move.product_uom_qty})
    move.write({'state': 'done'})
  picking._action_done()
```
