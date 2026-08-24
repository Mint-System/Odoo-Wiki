---
title: Fertigung Aktionen
description: Fertigungs-Prozesse automatisieren.
kind: howto
section: true
prev: ./manufacture
partner: Mint System
---

# Fertigung Aktionen

![icons_odoo_mrp](attachments/icons_odoo_mrp.png)

{{ $frontmatter.description }}

## Aktionen

### Fertigungsauftrag abbrechen

Navigieren Sie nach _Einstellungen > Technisch > Serveraktionen_ und erstellen Sie einen neuen Eintrag:

- **Name**: `Fertigungsauftrag abbrechen`
- **Modell**: `mrp.production`
- **Typ**: `Code ausführen`
- **Code**:

```python
for rec in records:
  rec.write({'state': 'cancel'})
```

Die Aktion mit dem Knopf _Kontextuelle Aktion erstellen_ bestätigen und dann speichern.

In der Liste der Fertigungsauftrag können Sie die Einträge markieren und _Aktionen > Fertigungsauftrag abbrechen_ auswählen.

### Reload BoM

Navigieren Sie nach _Einstellungen > Technisch > Serveraktionen_ und erstellen Sie einen neuen Eintrag:

- **Name**: `Reload BoM`
- **Modell**: `mrp.production`
- **Typ**: `Code ausführen`
- **Code**:

```python
for record in records:
  record._compute_allowed_product_ids()
  record._onchange_bom_id()
  record._onchange_move_raw()
  record._onchange_move_finished()
  record._onchange_location()
```

Die Aktion mit dem Knopf _Kontextuelle Aktion erstellen_ bestätigen und dann speichern.

Im Fertigungsauftrag erscheint nun in der Auswahl _Aktion_ das Menu _Reload BoM_.

### Material-Reservationen entfernen

Navigieren Sie nach _Einstellungen > Technisch > Serveraktionen_ und erstellen Sie einen neuen Eintrag:

- **Name**: `Material-Reservationen entfernen`
- **Modell**: `mrp.production`
- **Typ**: `Code ausführen`
- **Code**:

```python
for production in records:
  production.move_line_raw_ids.unlink()
```

Die Aktion mit dem Knopf _Kontextuelle Aktion erstellen_ bestätigen und dann speichern.

Im Fertigungsauftrag erscheint nun in der Auswahl _Aktion_ das Menu _Material-Reservation entfernen_.

### Material-Reservationen erstellen

Navigieren Sie nach _Einstellungen > Technisch > Serveraktionen_ und erstellen Sie einen neuen Eintrag:

- **Name**: `Material-Reservationen erstellen`
- **Modell**: `mrp.production`
- **Typ**: `Code ausführen`
- **Code**:

```python
for production in records:
  production.action_assign()
```

Die Aktion mit dem Knopf _Kontextuelle Aktion erstellen_ bestätigen und dann speichern.

Im Fertigungsauftrag erscheint nun in der Auswahl _Aktion_ das Menu _Material-Reservation entfernen_.

### Abgebrochener Fertigungsauftrag auf bestätigt setzen

avigieren Sie nach _Einstellungen > Technisch > Serveraktionen_ und erstellen Sie einen neuen Eintrag:

- **Name**: `Abgebrochener Fertigungsauftrag auf erledigt setzen`
- **Modell**: `mrp.production`
- **Typ**: `Code ausführen`
- **Code**:

```python
for production in records:
    if production.state != 'cancel':
        continue
    production.write({'state': 'confirmed'})
```

Die Aktion mit dem Knopf _Kontextuelle Aktion erstellen_ speichern.

## Geplante Aktionen

### Material-Reservationen entfernen

Diese geplante Aktion entfernt regelmässig Material-Reservationen auf Fertigungsaufträgen.

Navigieren Sie nach _Einstellungen > Technisch > Automatisierungsregeln_ und erstellen Sie einen neuen Eintrag:

- **Name**: `Material-Reservationen entfernen`
- **Modell**: `ir.actions.server`
- **Ausführen alle**: `3` Stunden
- **Nächstes Ausführungsdatum**: `DD.MM.YYYY 09:00:00`
- **Anzahl der Anrufe**: `-1`
- **Typ**: `Code ausführen`
- **Code**:

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

## Automatisierungsregeln

### Los-Nummer generieren

Mit dieser automatischen Aktion wird bei der Bestätigung des Fertigungsauftrag automatisch eine Seriennummmer für das zu fertigende Produkt generiert.

Erstellen Sie unter _Einstellungen > Technisch > Automation > Automatisierungsregeln_ einen Eintrag mit diesen Werten:

- **Name**: `Los-Nummer generieren`
- **Modell**: `mrp.production`
- **Auslöser**: Beim Aktualisieren
- **Trigger-Felder**: `state`
- **Anzuwenden auf**:

```txt
["&",["state","in",["confirmed","progress"]],["lot_producing_id","=",False]]
```

- **Code**:

```python
record.action_generate_serial()
```

Beispiel für eine automatische Aktion:

![](attachments/Fertigung%20Aktionen%20Lot-Nummer%20generieren.png)

### Los-Nummer übertragen

Diese automatische Aktion stellt sicher, dass die zu produzierende Los-Nummer von Fertigungsauftrag auf einen Folgeauftrag übertragen wird. 

Navigieren Sie nach _Einstellungen > Technisch > Automatisierungsregeln_ und erstellen Sie einen neuen Eintrag:

- **Name**: `Los-Nummer übertragen`
- **Modell**: `mrp.production`
- **Auslöser**: Beim Erstellung
- **Anzuwenden auf**: `[]`
- **Code**:

```python
for rec in records.filtered("backorder_ids"):
    lot_producing_id = rec.backorder_ids.mapped("lot_producing_ids")[-1:]
    rec.write({"lot_producing_ids": lot_producing_id})
```
