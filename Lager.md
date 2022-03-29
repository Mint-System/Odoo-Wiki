---
tags:
- HowTo
prev: ./
---
# Lager
![icons_odoo_stock](assets/icons_odoo_stock.png)

Maximieren sie die Effizienz Ihres Lagers.

| Bereich                                                 | Beschreibung                      |
| ------------------------------------------------------- | --------------------------------- |
| [Handscanner Zebra TC21](Handscanner%20Zebra%20TC21.md) | Handscanner für Odoo.             |
| [Handscanner Zebra DS22](Handscanner%20Zebra%20DS22.md) | Handscanner für Odoo.             |
| [Lager Verpackungen](Lager%20Verpackungen.md)           | Verpackungen effizient verwalten. |
| [Lager Bestand](Lager%20Bestand.md)                                                        |                                   |

| Erweiterung                                                         | Beschreibung                                                                                                |
| ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| [Demand Planner](Demand%20Planner.md)                               | Bestellvorschläge für Kompontenten aus Stücklisten anhand Lageroperationen und Prognosen generieren lassen. |
| [Stock Production Lot Active](Stock%20Production%20Lot%20Active.md) | Erlaubt die Archivierung von Los/Chargen.                                                                   |
| [Stock Move Line Position](Stock%20Move%20Line%20Position.md)       | Positionsnummer aus dem Verkaufs- oder Einkaufsauftrag anzeigen.                                            |
| [Stock Delivery Note](Stock%20Delivery%20Note.md)                   | Notiz auf Lieferschein.                                                                                     |
| [Stock Move Line Packaging](Stock%20Move%20Line%20Packaging.md)     | Verknüpfen der Verpackung von Verkaufsauftrag.                                                              |
| [Stock Barcode Packaging](Stock%20Barcode%20Packaging.md)           | Verpackung auf Strichcode-Vorgang anzeigen.                                                                 |
| [Product Logistics UoM](Product%20Logistics%20UoM.md)               | Individuelle Mengenheit für Produkte festlegen.                                                             |
| [Stock Move Weight UoM](Stock%20Move%20Weight%20UoM.md)             | Berechnung Gewicht unter Berücksichtigung der Mengeneinheit.                                                |
| [Stock Move Line Auto Fill](Stock%20Move%20Line%20Auto%20Fill.md)   | Die erledigte Menge auf einem Transfer automatisch ausfüllen.                                               |
| [Stock Critical Forecast](Stock%20Critical%20Forecast.md)           | Kritisches Datum für gelieferte Produkte und Komponenten in der Fertigung anzeigen.                                  |

## Produkt aufstocken

Mit *Aufstocken* werden Produkte an Lager gelegt. Für die Produkte bestehenden unterschiedliche Vorgänge wie diese ins Lager gelanden. Zum Aufstocken öffnen sie *Lager > Produkte > Produkte* und öffnen ein Produkt. Wählen sie nun *Aufstocken*.

![](assets/Lager%20Produkt%20aufstocken.png)

Geben sie die Menge ein und wählen sie *Bestätigen*. Nun wird entsprechend der Einstellung im Tab *Lager* des Produkts ein Transfer angelegt.

## Erweiterte Vorgangstypen einrichten

Wenn in den Einstellungen für das Lager die Option *Mehrstufige Routen* eingeschaltet wird, erweitert sich die Liste der Vorgangstypen mit *Interne Transfers*. Die neue Liste zeigt sich wie folgt:

1. Anlieferungen
2. Interne Transfers
3. Lieferaufträge
4. Manufacturing

Die Option *Mehrere Lagerorte* wird automatisch eingeschaltet und es erscheinen im Menu die neuen Funktion *Lagerorte* und *Regeln*.

![](assets/Lager%20Erweitertes%20Menu.png)

## Ablaufdatum aktivieren

Für Produkte in Lots oder Produkte mit Seriennummer könne sie ein Ablaufdatum festlegen. Öffnen sie das Produkt via *Lager > Produkte > Produkte* und zeigen sie den Tab *Lager* an. Unter Lieferfolgung müssen sie eine Option für *Nachverfolung* auswählen. Nun erscheint die Checkbox *Ablaudatum*. Aktivieren sie diese und konfigurieren sie die Ablaufzeiten.

![](assets/Lager%20Ablaufdatum%20konfiguriert.png)

## Sicherheitsvorlaufzeiten definieren

Die Sicherheitsvorlaufzeiten können sie zentral unter *Einstellungen > Lager > Erweiterte Planung* festlegen. Aktivieren sie für jeweilige Vorlaufzeit die Checkbox und tragen sie die gewünschten Zeiten ein

## Bordereau-Export erstellen

Öffnen sie *Lager > Berichtswesen > Produktlieferungen*. Filtern sie die Daten wie  folgt:

* Ausgehend
* Erledigt

Gruppieren und sortieren sie Lagerbuchungen nach:

* Datum > Tag
* Lieferadresse
* Produkt

Markieren sie zu exportierenden Lagerbuchungen und wählen sie *Aktion > Export*. Wählen sie diese Felder:

* Lagerbuchung/Lieferadresse
* Produkt/Referenz
* Produkt
* Produkt/HS-Code
* Erledigt

## Rundungsgenauigkeit einer Mengeneinheit ändern

Wenn sie die Rundungsgenauigkeit (Stellen nach dem Komma) einer Mengeneinheit ändern möchten, öffnen sie *Lager > Konfiguration > Mengeneinheiten > UoM* und wählen hier die Einheit aus. Im Feld *Rundungsgenauigkeit* geben sie den entsprechenden Wert ein. 

::: warning
Die Anzahl Dezimalstellen für eine Einheit wird unter *Einstellungen > Technisch> Datenbankstruktur > Dezimalstellen* verwaltet. Passen sie dort den entsprechenden Eintrag an.
:::

Die hier gemachten Einstellung haben Einfluss auf die Darstellung der Zahl.

![](assets/Lager%20Wicht%20mit%203%20Kommastellen.png)

## Aktion  "Lagerbuchung zurücksetzen" erstellen

Navigieren sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen sie einen neuen Eintrag:

Name der Aktion: `Lagerbuchung zurücksetzen`\
Modell: `stock.move`\
Folgeaktion: `Python-Code ausführen`

Kopieren sie die folgenden Zeilen in das Feld *Pythoncode*:

```py
for record in records:  
  record.write({'state': 'draft'})
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Lagerbuchungen erscheint nun in der Auswahl *Aktion* das Menu *Lagerbuchung zurücksetzen*.

![](assets/Lager%20Aktion%20%20Lagerbuchung%20Zurücksetzen%20erstellen.png)

## Aktion  "Lagerbuchung abbrechen" erstellen

Navigieren sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen sie einen neuen Eintrag:

Name der Aktion: `Lagerbuchung abbrechen`\
Modell: `stock.move`\
Folgeaktion: `Python-Code ausführen`

Kopieren sie die folgenden Zeilen in das Feld *Pythoncode*:

```py
for record in records:  
  record.write({'state': 'cancel'})
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Lagerbuchungen erscheint nun in der Auswahl *Aktion* das Menu *Lagerbuchung zurücksetzen*.

## Aktion  "Lagerbuchung erledigen" erstellen

Navigieren sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen sie einen neuen Eintrag:

Name der Aktion: `Lagerbuchung erledigen`\
Modell: `stock.move`\
Folgeaktion: `Python-Code ausführen`

Kopieren sie die folgenden Zeilen in das Feld *Pythoncode*:

```py
for record in records:
  record._action_done()
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Lagerbuchungen erscheint nun in der Auswahl *Aktion* das Menu *Lagerbuchung erledigen*.

## Vorgangstyp für Retouren definieren

Öffnen sie *Lager > Konfiguration > Route* und wählen sie eine Route aus. Klicken sie auf die *Regel* auf der die Retoure erfolgt. Wählen sie auf der Regel den *Vorgangstyp* aus und bearbeiten sie diesen. Im Feld *Vorgangstyp für Retouren* wählen sie den Vorgangstyp für die Retoure aus.


## Transfer korrigieren

Wurde ein Transfer einmal erledigt, kann er nicht mehr bearbeitet werden. Jedoch können sie diesen *Entsperren* um bestimmte Felder zu ändern.

![Lager Transfer entsperren](assets/Lager%20Transfer%20entsperren.gif)

## Geplante Aktion "Erledigte Menge korrigieren" erstellen

Navigieren sie nach *Einstellungen > Technisch > Geplante Aktionen* und erstellen sie einen neuen Eintrag:

Name der Aktion: `Erledigte Menge korrigieren`\
Modell: `ir.actions.server`\
Ausführen alle: `15` Minuten\
Nächstes Ausführungsdatum: `DD.MM.YYYY 06:00:00`\
Anzahl der Anrufe: `-1`\
Folgeaktion: `Python-Code ausführen`

Kopieren sie die folgenden Zeilen in das Feld *Python Code*:

```python
# Set products to ignore
except_product_names = ["Gebinde"]

# Get pickings to be processed
pickings = env['stock.picking'].search(["&", ["picking_type_id", "=", 2], ("state", "in", ["confirmed", "assigned", "partially_available"])])

# Get moves where qty done it not equal to demand
fix_moves = pickings.move_lines.filtered(lambda m: (m.quantity_done != m.product_uom_qty) and (m.product_id.name not in except_product_names))

if fix_moves:
	log('Fix qty done for moves: %s' % (fix_moves))

for move in fix_moves:
    try:
        move.write({'quantity_done': move.product_uom_qty})
    except:
        log('While writing move %s with origin %s an error occured.' % (move, move.origin), level='error')
      
# Get lines where qty done is not equal to demand and no move line has been created
fix_move_lines = pickings.move_line_ids.filtered(lambda l: (l.qty_done != l.move_id.product_uom_qty) and (l.product_id.name not in except_product_names))

if fix_move_lines:
	log('Fix qty done for move lines: %s' % (fix_move_lines))

for line in fix_move_lines:
    line.write({'qty_done': line.move_id.product_uom_qty})

# Assign pickings
assign_pickings = pickings.filtered(lambda p: p.state in ["confirmed"])

if assign_pickings:
	log('Assign pickings: %s' % (assign_pickings))

for picking in assign_pickings:
    picking.write({'state': 'assigned'})
    
# Update transport moves

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
        transport_move.write({'quantity_done': x_count_boxes_sum})
if transport_moves:
  log('Fix qty done for transport moves: %s' % (transport_moves))
```

## Lagerort Lagerschwund mit externer ID ergänzen

Erfassen sie für das Lagerort *Virtual Locations/Scrap* eine externe ID gemäss [Externe ID erfassen](Entwicklung.md#Externe%20ID%20erfassen). Die Definition ist wie folgt:

![](assets/Lager%20Lagerschwund%20externe%20ID.png)

## Geplante Aktion "Lot automatisch zuweisen" erstellen

Navigieren sie nach *Einstellungen > Technisch > Geplante Aktionen* und erstellen sie einen neuen Eintrag:

Name der Aktion: `Lot automatisch zuweisen`\
Modell: `ir.actions.server`\
Ausführen alle: `15` Minuten\
Nächstes Ausführungsdatum: `DD.MM.YYYY 06:00:00`\
Anzahl der Anrufe: `-1`\
Folgeaktion: `Python-Code ausführen`

Kopieren sie die folgenden Zeilen in das Feld *Python Code*:

```py
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
