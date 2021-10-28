---
tags:
- HowTo
---
# Aktionen
![icons_odoo_website_twitter](assets/icons_odoo_website_twitter.png)

Validierungen und Ansicht können mit Odoo Aktionen einfach erstellt werden.

## Beim Aktualisieren eine Validierung ausführen

Mit *Automatischen Aktionen* kann ein Datensatz, der aktualisiert wurde, zusätzlich validiert werden. In unserem Beispiel wollen wir unterbinden, dass Qualitätsalarme auf bestimmte Stufen gesetzt werden.

Navigieren sie nach *Einstellungen > Technisch > Aktionen > Automatische Aktionen* und erstellen sie einen neuen Eintrag:

Modell: `Qualitätsalarm`\
Triggerbedingung: `Beim Aktualisieren`\
Beobachtete Felder: `Stufe (quality.alert)`\
Python Code:

```py
if record.stage_id.sequence in [0,1,2]:
	raise UserError('This Stufe ist nicht erlaubt!')
```

![Aktionen Stufe nicht erlaubt](assets/Aktionen%20Stufe%20nicht%20erlaubt.gif)

## Neue Ansicht mit Aktion hinzufügen

Fehlen bestimmte Ansichten, können diese ganz einfach mit einer Aktion und einem Menüeintrag erstellt werden. In diesem Bespiel wollen wir die die Komponenten aller Stücklisten in einer Tabelle darstellen.

Navigieren sie nach *Einstellungen > Technisch > Aktionen > Fenster öffnen/schliessen ...* und erstellen sie einen neuen Eintrag:

Name der Aktion: `BoM Komponenenten`\
Objekt: `mrp.bom.line`

Navigieren sie nach *Einstellungen > Technisch > Benutzer-Interface > Menüeinträge* und erstellen sie einen neuen Eintrag:

Menü: `BoM Komponenenten`\
Obermenü: `Fertigung/Produkte`\
Aktion: `ir.actions.act_window` `BoM Komponenenten`
Nummernfolge: `3`

Nachdem der Browser aktualisiert haben sie Zugriff auf das neue Menü und Ansicht.

![](assets/Aktionen%20neue%20Ansicht.png)

## BoM Reload Aktion erstellen

Navigieren sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen sie einen neuen Eintrag:

Name der Aktion: `Reload BoM`\
Modell: `Fertigungsauftrag`\
Folgeaktion: `Python-Code ausführen`

Kopieren sie die folgenden Zeilen in das Feld Pythoncode:
```py
for record in records:  
  record._compute_allowed_product_ids()  
  record._onchange_bom_id()  
  record._onchange_move_raw()  
  record._onchange_move_finished()  
  record._onchange_location
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

Im Fertigungsauftrag erscheint nun in der Auswahl *Aktion* das Menu *Reload BoM*.

## Aktion Reset to Draft erstellen

Navigieren sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen sie einen neuen Eintrag:

Name der Aktion: `Reset to Draft`\
Modell: `account.move`\
Folgeaktion: `Python-Code ausführen`

Kopieren sie die folgenden Zeilen in das Feld *Pythoncode*:

```py
for record in records:  
  record.button_draft()
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Buchungssätze erscheint nun in der Auswahl *Aktion* das Menu *Reset to Draft*.

## Aktion Cancel Reconcilation erstellen

Navigieren sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen sie einen neuen Eintrag:

Name der Aktion: `Cancel Reconcilation`\
Modell: `account.bank.statement.line`\
Folgeaktion: `Python-Code ausführen`

Kopieren sie die folgenden Zeilen in das Feld *Pythoncode*:

```py
for record in records:  
  record.button_cancel_reconciliation()
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Vorgänge erscheint nun in der Auswahl *Aktion* das Menu *Cancel Reconcilation*.

## Aktion Abwesenheitzeiten Ablehnen erstellen

Navigieren sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen sie einen neuen Eintrag:

Name der Aktion: `Ablehnen`\
Modell: `hr.leave`\
Folgeaktion: `Python-Code ausführen`

```py
for record in records:  
  record.action_refuse()
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Abwesenheitszeiten erscheint nun in der Auswahl *Aktion* das Menu *Ablehnen*.

![](assets/Aktionen%20Abwesenheitszeiten%20Ablehnen.png)

## Automatische Archivierung der Los/Chargen

Mit dieser Aktionen werden Los/Chargen archiviert, wenn sie eine Menge von 0 haben und werden dearchiviert wenn die Menge grösser 0 ist. Diese Aktion bötigt die Erweiterung [Stock Production Lot Active](Stock-Production-Lot-Active.md).

Navigeren nach *Einstellungen > Technisch > Geplante Aktionen* und einen neuen Eintrag erstellen:

* Name der Aktion: `Mint System: Archive Stock Production Lot`
* Modell: `Serveraktion`
* Anzahl aufrufe: `-1`

Kopieren sie die folgenden Zeilen in das Feld *Python Code*:

```py
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
