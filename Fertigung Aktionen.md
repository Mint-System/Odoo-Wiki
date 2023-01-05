---
tags:
- HowTo
- Aktionen
prev: ./fertigung
---
# Fertigung Aktionen
![icons_odoo_mrp](assets/icons_odoo_mrp.png)

Fertigungs-Prozesse automatisieren.

## Aktionen

### Aktion  "Reload BoM" erstellen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Reload BoM`\
Modell: `mrp.production`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld Pythoncode:
```python
for record in records:  
  record._compute_allowed_product_ids()  
  record._onchange_bom_id()  
  record._onchange_move_raw()  
  record._onchange_move_finished()  
  record._onchange_location()
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

Im Fertigungsauftrag erscheint nun in der Auswahl *Aktion* das Menu *Reload BoM*.

### Aktion  "Material-Reservationen entfernen" erstellen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Material-Reservationen entfernen`\
Modell: `mrp.production`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld Pythoncode:
```python
for production in records:  
  production.move_line_raw_ids.unlink()
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

Im Fertigungsauftrag erscheint nun in der Auswahl *Aktion* das Menu *Material-Reservation entfernen*.

### Aktion  "Material-Reservationen erstellen" erstellen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Material-Reservationen erstellen`\
Modell: `mrp.production`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld Pythoncode:
```python
for production in records:  
  production.action_assign()
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

Im Fertigungsauftrag erscheint nun in der Auswahl *Aktion* das Menu *Material-Reservation entfernen*.

## Automatische Aktionen

### Automatische Aktion "Lot-Nummer generieren" erstellen

Mit dieser automatischen Aktion wird bei der Bestätigung des Fertigungsauftrag automatisch eine Seriennummmer für das zu fertigende Produkt generiert.

Erstellen Sie unter *Einstellungen > Technisch > Automation > Automatische Aktionen* einen Eintrag mit diesen Werten:

Name der Aktion: `Lot-Nummer generieren`\
Modell: `mrp.production`\
Triggerbedingung: Beim Aktualisieren\
Beobachtete Felder: `state`\
Anzuwenden auf:

```txt
["&",["state","in",["confirmed","progress"]],["lot_producing_id","=",False]]
```

Python Code:

```python
record.action_generate_serial()
```

Beispiel für eine automatische Aktion:
![](assets/Fertigung%20Aktionen%20Lot-Nummer%20generieren.png)

### Geplante Aktion "MAterial-Reservationen entfernen" erstellen

Die Aktion lädt alle Produklieferungen, welche noch keine Losnummer haben und vergleicht diese mit Produktzugängen. Wenn es einen Produkteingang gibt, der bis einer Woche vor der Lieferung eingeht, wird die Losnummer des Zugang auf die Lieferung übertragen.

Navigieren Sie nach *Einstellungen > Technisch > Geplante Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `MAterial-Reservationen entfernen`\
Modell: `ir.actions.server`\
Ausführen alle: `1` Stunden\
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
  [('state', 'in', ('draft', 'confirmed', 'progress', 'to_close'))],
  ('reserve_visible', '=', True),
])

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