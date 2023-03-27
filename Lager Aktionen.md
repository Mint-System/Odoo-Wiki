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

### Transfer abbrechen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Transfer abbrechen`\
Modell: `stock.picking`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
for record in records:  
  record.write({'state': 'cancel'})
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Transfers erscheint nun in der Auswahl *Aktion* das Menu *Transfer zurücksetzen*.

### Lagerbuchung abbrechen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Lagerbuchung abbrechen`\
Modell: `stock.move`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
for record in records:  
  record.write({'state': 'cancel'})
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Lagerbuchungen erscheint nun in der Auswahl *Aktion* das Menu *Lagerbuchung zurücksetzen*.

### Lagerbuchung zurücksetzen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Lagerbuchung zurücksetzen`\
Modell: `stock.move`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
for record in records:  
  record.write({'state': 'draft'})
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Lagerbuchungen erscheint nun in der Auswahl *Aktion* das Menu *Lagerbuchung zurücksetzen*.

![](assets/Lager%20Aktion%20%20Lagerbuchung%20Zurücksetzen%20erstellen.png)

### Als verfügbar markieren

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Als verfügbar markieren`\
Modell: `stock.move`\
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

### Lagerbuchung erledigen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Lagerbuchung erledigen`\
Modell: `stock.move`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
for record in records:
  record._action_done()
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Lagerbuchungen erscheint nun in der Auswahl *Aktion* das Menu *Lagerbuchung erledigen*.

### Reservationsdatum aktualisieren

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Reservationsdatum aktualisieren`\
Modell: `stock.move`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
for rec in records.filtered(lambda r: r.state in ['assigned', 'confirmed', 'partially_available']):
	rec.write({
	  'reservation_date': rec.date
	})
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

Zeigen Sie die Liste der Lagebuchungen an, markieren Sie die Einträge und wählen Sie *Aktion > Reservationsdatum aktualisieren*.

### Reservierungen aufheben

Mit dieser Aktion können Sie alle Reservierungen für ausgewählte Produkte aufheben und das Reservationsdatum der verknüpften Lagerbuchungen aktualisieren.

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Reservierungen zurücksetzen`\
Modell: `product.template`\
Folgeaktion: `Python-Code ausführen`\
Sicherheit-Gruppennamen: `Lager \ Administrator`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
for product_id in records.product_variant_id:
	# Get assigned moves for first variant
	move_ids = env['stock.move'].search([ "&", ("product_id", "=", product_id.id), ("state", "in", ["assigned", "partially_available"]) ])
	if move_ids:
		move_ids._do_unreserve()
		log('Unreserved moves for product: %s' % product_id.display_name)
		for move in move_ids:
		  move.write({
	  		  'reservation_date': move.date
	  		})
```

Duplizieren Sie den Eintrag für die Produktvarianten und passen Sie ihn wie folgt an:

Modell: `product.product`\
Pythoncode:

```python
for product_id in records:
	# Get assigned moves for product
	move_ids = env['stock.move'].search([ "&", ("product_id", "=", product_id.id), ("state", "in", ["assigned", "partially_available"]) ])
	if move_ids:
		move_ids._do_unreserve()
		log('Unreserved moves for product: %s' % product_id.display_name)
		for move in move_ids:
		  move.write({
	  		  'reservation_date': move.date
	  		})
```

Beide Aktionen mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und speichern.

In der Ansicht der Produkte haben Sie nun die Auswahl *Aktion > Reservierungen aufheben*.

### Reservierungen zurücksetzen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Reservierungen zurücksetzen`\
Modell: `ir.actions.server`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
# Get outgoing pickings with reservations
pickings = env['stock.picking'].search(["&", ["picking_type_id", "=", 2], ("state", "in", ["assigned", "partially_available"])])
# Unreserve pickings
pickings.do_unreserve()
# Log picking names
log('Unreserved these pickings: %s' % (pickings.mapped('name')))
```

Speichern Sie die Aktion und führen Sie diese mit *Starten* aus.

### Bestand zurücksetzen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Bestand zurücksetzen`\
Modell: `stock.quant`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
for record in records:
	record.sudo().write({
	  'quantity': 0
	})
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Bestände erscheint nun in der Auswahl *Aktion* das Menu *Bestand zurücksetzen*.

### Reservierter Bestand zurücksetzen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Reservierter Bestand zurücksetzen`
Modell: `stock.quant`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
for record in records:
	record.sudo().write({
		'reserved_quantity': 0
	})
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Bestände erscheint nun in der Auswahl *Aktion* das Menu *Reservierter Bestand*.

### Ablaufende Los-Nummern aktualisieren

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Ablaufende Los-Nummern aktualisieren`
Modell: `stock.picking`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
now = datetime.datetime.now()

for picking in records:
  
  lines = picking.move_line_ids.filtered(lambda l: l.tracking)
  
  for line in lines:
    
    # Check expiring quantities
    quants = line.product_id.stock_quant_ids.filtered(lambda q: 
      q.lot_id and
      q.quantity > 0 and
      q.removal_date and
      q.removal_date > now
    ).sorted(key=lambda r: r.removal_date)
    
    # Update with newer quantity
    if quants and quants[0].lot_id != line.lot_id:
      line.write({
        'lot_id': quants[0].lot_id.id
      })
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Bestände erscheint nun in der Auswahl *Aktion* das Menu *Reservierter Bestand*.

### Nicht reserverierte Mengen anzeigen

Dieser Serveraktion erstellt eine Prüfbericht zu den Material-Reservationen.

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Nicht reserverierte Mengen anzeigen`
Modell: `ir.actions.server`\
Folgeaktion: `Python-Code ausführen`

```python
#!/usr/bin/python
quants = env['stock.quant'].search([])
move_line_ids = []
warning = ''

for quant in quants:

    move_lines = env['stock.move.line'].search([
        ('product_id', '=', quant.product_id.id),
        ('location_id', '=', quant.location_id.id),
        ('lot_id', '=', quant.lot_id.id),
        ('package_id', '=', quant.package_id.id),
        ('owner_id', '=', quant.owner_id.id),
        ('product_qty', '!=', 0),
    ])

    move_line_ids += move_lines.ids
    reserved_on_move_lines = sum(move_lines.mapped('product_qty'))
    move_line_str = str.join(', ', [str(move_line_id) for move_line_id in move_lines.ids])

    if quant.location_id.should_bypass_reservation():
        # If a quant is in a location that should bypass the reservation, its `reserved_quantity` field
        # should be 0.
        if quant.reserved_quantity != 0:
            quant.write({'reserved_quantity': 0})
    else:
        # If a quant is in a reservable location, its `reserved_quantity` should be exactly the sum
        # of the `product_qty` of all the partially_available / assigned move lines with the same
        # characteristics.
        if quant.reserved_quantity == 0:
            if move_lines:
                move_lines.with_context(bypass_reservation_update=True).write({'product_uom_qty': 0})
        elif quant.reserved_quantity < 0:
            quant.write({'reserved_quantity': 0})
            if move_lines:
                move_lines.with_context(bypass_reservation_update=True).write({'product_uom_qty': 0})
        else:
            if reserved_on_move_lines != quant.reserved_quantity:
                move_lines.with_context(bypass_reservation_update=True).write({'product_uom_qty': 0})
                quant.write({'reserved_quantity': 0})
            else:
                if any(move_line.product_qty < 0 for move_line in move_lines):
                    move_lines.with_context(bypass_reservation_update=True).write({'product_uom_qty': 0})
                    quant.write({'reserved_quantity': 0})

move_lines = env['stock.move.line'].search([('product_id.type', '=', 'product'), ('product_qty', '!=', 0), ('id', 'not in', move_line_ids)])
move_lines_to_unreserve = []
for move_line in move_lines:
    if not move_line.location_id.should_bypass_reservation():
        move_lines_to_unreserve.append(move_line.id)

if len(move_lines_to_unreserve) > 1:
    env.cr.execute(""" 
            UPDATE stock_move_line SET product_uom_qty = 0, product_qty = 0 WHERE id in %s ;
        """ % (tuple(move_lines_to_unreserve), ))
elif len(move_lines_to_unreserve) == 1:
    env.cr.execute(""" 
        UPDATE stock_move_line SET product_uom_qty = 0, product_qty = 0 WHERE id = %s ;
        """ % move_lines_to_unreserve[0])

```

Eine Ausgabe des Berichts sieht beispielsweise so aus:

```
Problematic quant found: 14919 (quantity: 31.0, reserved_quantity: 28.0)
its `reserved_quantity` field is not 0 while its location should bypass the reservation
These move lines are reserved on it: 55606 (sum of the reservation: 28.0)
******************
Problematic quant found: 21572 (quantity: 8.0, reserved_quantity: 6.0)
its `reserved_quantity` does not reflect the move lines reservation
These move lines are reserved on it: 61025, 61026, 61027, 61028, 61030, 61031, 61032, 61033, 61034, 61036, 62618, 62622, 62626, 62630, 62634, 62638, 62642, 62646, 62650, 62654, 62658, 62662, 62666, 62670, 62674, 62678, 62682, 62686 (sum of the reservation: 5.999999999999993)
******************
Problematic move line found: 62502 (reserved_quantity: 87.0)
There is no exiting quants despite its `reserved_quantity`
******************
Problematic move line found: 56003 (reserved_quantity: 3.0)
There is no exiting quants despite its `reserved_quantity`
******************
```

### Nicht reservierte Mengen korrigieren

Diese Serveraktion korrigiert die falsch reservierten Mengen.

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Nicht reservierte Mengen korrigieren`
Modell: `ir.actions.server`\
Folgeaktion: `Python-Code ausführen`

```python
#!/usr/bin/python
quants = env['stock.quant'].search([])
move_line_ids = []
warning = ''

for quant in quants:

    move_lines = env['stock.move.line'].search([
        ('product_id', '=', quant.product_id.id),
        ('location_id', '=', quant.location_id.id),
        ('lot_id', '=', quant.lot_id.id),
        ('package_id', '=', quant.package_id.id),
        ('owner_id', '=', quant.owner_id.id),
        ('product_qty', '!=', 0),
    ])

    move_line_ids += move_lines.ids
    reserved_on_move_lines = sum(move_lines.mapped('product_qty'))
    move_line_str = str.join(', ', [str(move_line_id) for move_line_id in move_lines.ids])

    if quant.location_id.should_bypass_reservation():
        # If a quant is in a location that should bypass the reservation, its `reserved_quantity` field
        # should be 0.
        if quant.reserved_quantity != 0:
            quant.write({'reserved_quantity': 0})
    else:
        # If a quant is in a reservable location, its `reserved_quantity` should be exactly the sum
        # of the `product_qty` of all the partially_available / assigned move lines with the same
        # characteristics.
        if quant.reserved_quantity == 0:
            if move_lines:
                move_lines.with_context(bypass_reservation_update=True).write({'product_uom_qty': 0})
        elif quant.reserved_quantity < 0:
            quant.write({'reserved_quantity': 0})
            if move_lines:
                move_lines.with_context(bypass_reservation_update=True).write({'product_uom_qty': 0})
        else:
            if reserved_on_move_lines != quant.reserved_quantity:
                move_lines.with_context(bypass_reservation_update=True).write({'product_uom_qty': 0})
                quant.write({'reserved_quantity': 0})
            else:
                if any(move_line.product_qty < 0 for move_line in move_lines):
                    move_lines.with_context(bypass_reservation_update=True).write({'product_uom_qty': 0})
                    quant.write({'reserved_quantity': 0})

move_lines = env['stock.move.line'].search([('product_id.type', '=', 'product'), ('product_qty', '!=', 0), ('id', 'not in', move_line_ids)])
move_lines_to_unreserve = []
for move_line in move_lines:
    if not move_line.location_id.should_bypass_reservation():
        move_lines_to_unreserve.append(move_line.id)

if len(move_lines_to_unreserve) > 1:
    env.cr.execute(""" 
            UPDATE stock_move_line SET product_uom_qty = 0, product_qty = 0 WHERE id in %s ;
        """ % (tuple(move_lines_to_unreserve), ))
elif len(move_lines_to_unreserve) == 1:
    env.cr.execute(""" 
        UPDATE stock_move_line SET product_uom_qty = 0, product_qty = 0 WHERE id = %s ;
        """ % move_lines_to_unreserve[0])
```

Zur Ausführung dieses Berichts müssen Sie [Superuser werden](Einstellungen.md#Superuser%20werden).

## Geplante Aktionen

### Los aus Anlieferung zuweisen

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

### Reservierung für Lieferperiode aktualisieren

Die Aktion lädt alle Produklieferungen, welche noch keine Losnummer haben und vergleicht diese mit Produktzugängen. Wenn es einen Produkteingang gibt, der bis einer Woche vor der Lieferung eingeht, wird die Losnummer des Zugang auf die Lieferung übertragen.

Navigieren Sie nach *Einstellungen > Technisch > Geplante Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Reservierung für Lieferperiode aktualisieren`\
Modell: `ir.actions.server`\
Ausführen alle: `12` Stunden\
Nächstes Ausführungsdatum: `DD.MM.YYYY 09:00:00`\
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
        messages.append('Reserved materials for %s.' % (move.reference))
        move._action_assign()
    except:
        log('While writing move %s an error occured.' % (move.reference), level='error')

if messages:
  log(' '.join(messages))
```

### Erledigte Menge aktualisieren

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

### Wartende Aufträge bestätigen

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

### Versandprodukte aktualisieren

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

### Los aus Vorhersage zuweisen

Navigieren Sie nach *Einstellungen > Technisch > Geplante Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Lot aus Vorhersage zuweisen`\
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

### Negativer Bestand bereinigen

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

### Los in Produktlieferungen aktualisieren

Diese geplante Aktion aktualisiert regelmässig das Los in Produktlieferungen für ausgewählte Produkte. Dabei wird die erledigte Menge beibehalten.

Navigieren Sie nach *Einstellungen > Technisch > Geplante Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Los in Produktlieferungen aktualisieren`\
Modell: `ir.actions.server`\
Ausführen alle: `3` Stunden\
Nächstes Ausführungsdatum: `DD.MM.YYYY 09:00:00`\
Anzahl der Anrufe: `-1`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
# Settings
product_ids = [70]

# Lookup unfinished picking orders
pickings = env['stock.picking'].search([
	('picking_type_id', '=', 2),
	('state', 'in', ['confirmed', 'assigned', 'partially_available'])
])

# Get move lines with lot
update_move_lines = pickings.move_line_ids.filtered(lambda l: l.product_id.id in product_ids and l.tracking)

# raise Warning([pickings,update_move_lines.mapped('reference')])

# Unreserve material
messages = []
error_messages = []
for line in update_move_lines:
  try:
	  # Check expiring quantities
    quants = line.product_id.stock_quant_ids.filtered(lambda q: 
      q.lot_id and
      q.quantity > 0 and
      q.removal_date and
      q.removal_date > now
    ).sorted(key=lambda r: r.removal_date)
    
    # Update with newer quantity
    if quants and quants[0].lot_id != line.lot_id:
      messages.append('Update move line %s.' % (line.reference))
      line.write({
        'lot_id': quants[0].lot_id.id
      })
  except Exception as e:
    error_messages.append('While updating move line %s an error occured: %s' % (line.reference, e))

if messages and not error_messages:
  log(' '.join(messages))
if error_messages:
  log(' '.join(error_messages), level='error')
```

### Transfers auf geplantes Datum erledigen

Diese geplante Aktion erledigt markierte Aufträge sobald die geplante Zeit eingetroffen ist.

Navigieren Sie nach *Einstellungen > Technisch > Geplante Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Transfers auf geplantes Datum erledigen`\
Modell: `ir.actions.server`\
Ausführen alle: `1` Stunden\
Nächstes Ausführungsdatum: `DD.MM.YYYY 09:00:00`\
Anzahl der Anrufe: `-1`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
# Settings
date_to = datetime.datetime.now()
date_from = date_to - datetime.timedelta(hours=15)

# Lookup marked picking orders
pickings = env['stock.picking'].search([
	('x_autocomplete', '=', True),
	('state', 'in', ['confirmed', 'assigned', 'partially_available']),
	('scheduled_date', '<=', date_to),
	('scheduled_date', '>=', date_from)
])

# raise Warning([pickings,pickings.mapped('name')])

# Complete pickings
messages = []
error_messages = []
for picking in pickings:
  try:
	  messages.append('Complete picking %s on schedule.' % (picking.name))
	  picking.button_validate()
  except Exception as e:
    error_messages.append('While try to complete picking %s an error occured: %s' % (picking.name, e))

if messages and not error_messages:
  log(' '.join(messages))
if error_messages:
  log(' '.join(error_messages), level='error')
```

### Abgelaufene Bestände entfernen

Diese geplante Aktion setzt die Menge von markierte Chargen auf Null sobald das Ablaufdatum erreicht ist.

Navigieren Sie nach *Einstellungen > Technisch > Geplante Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Abgelaufene Bestände entfernen`\
Modell: `ir.actions.server`\
Ausführen alle: `1` Stunden\
Nächstes Ausführungsdatum: `DD.MM.YYYY 09:00:00`\
Anzahl der Anrufe: `-1`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
# Settings
now = datetime.datetime.now()

# Lookup marked lots
lots = env['stock.production.lot'].search([
	('x_autoremove', '=', True),
	('product_expiry_alert', '=', True),
	('removal_date', '<=', now)
])
lots = lots.filtered(lambda l: l.product_qty > 0.0)

# raise Warning([lots[0].display_name, lots[0].product_id.name, lots[0].product_qty])

# Remove quants
msg = []
error_msg = []
for lot in lots:
  try:
	  quants = lot.quant_ids.filtered(lambda q: q.location_id.usage == 'internal')
	  if quants:
	    msg.append('Remove expired quants for lot %s / %s.' % (lot.product_id.name, lot.display_name))
	    quants.sudo().write({
	      'quantity': 0.0
	    })
	    env.cr.commit()
  except Exception as e:
    error_msg.append('While trying to remove quants for lot %s an error occured: %s' % (lot.name, e))

if msg and not error_msg:
  log(' '.join(msg))
if error_msg:
  log(' '.join(error_msg), level='error')
```


## Automatische Aktionen

### Lieferung erledigen wenn bereit

Mit dieser automatischen Aktion wird eine Lieferung im Status *Bereit* die erledigte Menge gleich der Bedarfsmenge gesetzt und erledigt.

Erstellen Sie unter *Einstellungen > Technisch > Automation > Automatische Aktionen* einen Eintrag mit diesen Werten:

Name der Aktion: `Lieferung erledigen wenn bereit`\
Modell: `stock.picking`\
Triggerbedingung: Beim Aktualisieren\
Anzuwenden auf:

```python
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

### Liefergewicht von Verpackung berechnen

Mit dieser automatischen Aktion wird auf Verpackung das Liefergewicht aus dem geschäftzten Produktgewicht und dem Gewicht der Verpackung berechnet.

Erstellen Sie unter *Einstellungen > Technisch > Automation > Automatische Aktionen* einen Eintrag mit diesen Werten:

Name der Aktion: `Liefergewicht von Verpackung berechnen`\
Modell: `stock.quant.package`\
Triggerbedingung: Bei Erstellung und Aktualisierung\
Trigger-Feld:
* `​estimated_pack_weight_kg`
* `pack_weight`
* `quant_ids`
* `single_product_qty`
* `single_product_id`
Anzuwenden auf:

```python
for rec in records:
  rec.write({
    'shipping_weight': rec.estimated_pack_weight_kg + rec.pack_weight
  })
```