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
Im Fertigungsauftrag erscheint nun in der Auswahl *Action* das Menu *Reload BoM*.