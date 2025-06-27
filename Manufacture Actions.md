---
title: Fertigung Aktionen
description: Fertigungs-Prozesse automatisieren.
kind: howto
tags:
- Actions
prev: ./manufacture
---
# Fertigung Aktionen
![icons_odoo_mrp](attachments/icons_odoo_mrp.png)

{{ $frontmatter.description }}

## Aktionen

### Fertigungsauftrag abbrechen

Navigieren Sie nach *Einstellungen > Technisch > Server-Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Fertigungsauftrag abbrechen`\
Modell: `mrp.production`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
for rec in records:  
  rec.write({'state': 'cancel'})
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Fertigungsauftrag können Sie die Einträge markieren und *Aktionen > Fertigungsauftrag abbrechen* auswählen.

### Reload BoM

Navigieren Sie nach *Einstellungen > Technisch > Server-Aktionen* und erstellen Sie einen neuen Eintrag:

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

Navigieren Sie nach *Einstellungen > Technisch > Server-Aktionen* und erstellen Sie einen neuen Eintrag:

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

Navigieren Sie nach *Einstellungen > Technisch > Server-Aktionen* und erstellen Sie einen neuen Eintrag:

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

## Automatisierte Aktionen

### Lot-Nummer generieren

Mit dieser automatischen Aktion wird bei der Bestätigung des Fertigungsauftrag automatisch eine Seriennummmer für das zu fertigende Produkt generiert.

Erstellen Sie unter *Einstellungen > Technisch > Automation > Automatisierte Aktionen* einen Eintrag mit diesen Werten:

Name der Aktion: `Lot-Nummer generieren`\
Modell: `mrp.production`\
Auslöser: Beim Aktualisieren\
Trigger-Felder: `state`\
Anzuwenden auf:

```txt
["&",["state","in",["confirmed","progress"]],["lot_producing_id","=",False]]
```

Python Code:

```python
record.action_generate_serial()
```

Beispiel für eine automatische Aktion:
![](attachments/Fertigung%20Aktionen%20Lot-Nummer%20generieren.png)

## Geplante Aktionen

### Material-Reservationen entfernen

Diese geplante Aktion entfernt regelmässig Material-Reservationen auf Fertigungsaufträgen.

Navigieren Sie nach *Einstellungen > Technisch > Geplante Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Material-Reservationen entfernen`\
Modell: `ir.actions.server`\
Ausführen alle: `3` Stunden\
Nächstes Ausführungsdatum: `DD.MM.YYYY 09:00:00`\
Anzahl der Anrufe: `-1`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
# Lookup unfinished manufacturing orders
production_ids = env['mrp.production'].search([
  ('state', 'in', ['draft', 'confirmed', 'progress', 'to_close']),
  ('reservation_state', 'in', ['assigned']),
])

# raise Warning(production_ids.mapped('name'))

# Unreserve material
messages = []
error_messages = []
for production in production_ids:
  try:
    messages.append('Unreserve materials for %s.' % (production.name))
    production.move_line_raw_ids.unlink()
  except:
    error_messages.append('While unlinking move lines for %s an error occured.' % (production.name))

if messages and not error_messages:
  log(' '.join(messages))
if error_messages:
  log(' '.join(error_messages), level='error')
```