---
tags:
- HowTo
prev: ./entwicklung
---
# Entwicklung Aktionen
![icons_odoo_website_twitter](assets/icons_odoo_website_twitter.png)

Eigene Odoo Aktionen erstellen.

## Beim Aktualisieren eine Validierung ausführen

Mit *Automatischen Aktionen* kann ein Datensatz, der aktualisiert wurde, zusätzlich validiert werden. In unserem Beispiel wollen wir unterbinden, dass Qualitätsalarme auf bestimmte Stufen gesetzt werden.

Navigieren Sie nach *Einstellungen > Technisch > Aktionen > Automatische Aktionen* und erstellen Sie einen neuen Eintrag:

Modell: `Qualitätsalarm`\
Triggerbedingung: `Beim Aktualisieren`\
Beobachtete Felder: `Stufe (quality.alert)`\
Python Code:

```py
if record.stage_id.sequence in [0,1,2]:
	raise UserError('This stage is not allowed!')
```

![Aktionen Stufe nicht erlaubt](assets/Aktionen%20Stufe%20nicht%20erlaubt.gif)

## Neue Ansicht mit Aktion hinzufügen

Fehlen bestimmte Ansichten, können diese ganz einfach mit einer Aktion und einem Menüeintrag erstellt werden. In diesem Bespiel wollen wir die die Komponenten aller Stücklisten in einer Tabelle darstellen.

Navigieren Sie nach *Einstellungen > Technisch > Aktionen > Fenster öffnen/schliessen ...* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `BoM Komponenenten`\
Objekt: `mrp.bom.line`\
Ansichtsreferenz: Gemäss Angaben

Navigieren Sie nach *Einstellungen > Technisch > Benutzer-Interface > Menüeinträge* und erstellen Sie einen neuen Eintrag:

Menü: `BoM Komponenenten`\
Obermenü: `Fertigung/Produkte`\
Aktion: `ir.actions.act_window` `BoM Komponenenten`
Nummernfolge: `3`

Nachdem der Browser aktualisiert haben Sie Zugriff auf das neue Menü und Ansicht.

![](assets/Aktionen%20neue%20Ansicht.png)

## Automatische Archivierung der Los/Chargen

Mit dieser Aktionen werden Los/Chargen archiviert, wenn Sie eine Menge von 0 haben und werden dearchiviert wenn die Menge grösser 0 ist. Diese Aktion bötigt die Erweiterung [Stock Production Lot Active](Stock%20Production%20Lot%20Active.md).

Navigeren nach *Einstellungen > Technisch > Geplante Aktionen* und einen neuen Eintrag erstellen:

* Name der Aktion: `Mint System: Archive Stock Production Lot`
* Modell: `Serveraktion`
* Anzahl aufrufe: `-1`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

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


## Default-Wert für Order Deadline 

Mit Aktionen können Felder mit einem bestimmten Default-Wert beschrieben werden. Im folgenden Beispiel wird das Feld *Order Deadline* bei einer Angebotsanfrage auf das Datum *heute + 5 Tage* gesetzt.

Navigieren Sie nach *Einstellungen > Technisch > Geplante Aktionen* und erstellen Sie den folgenden Eintrag:

* Name der Aktion: `Mint System: Set Order Deadline`
* Modell: `Beschaffungsauftrag`
* Auslöser: `Bei Erstellung`
* Folgeaktion: `Den Datensatz aktualisieren`
* Feld: `Order Deadline (purchase.order)`
* Bewertungstyp: 
* Wert: `datetime.datetime.today() + datetime.timedelta(days=5)`

