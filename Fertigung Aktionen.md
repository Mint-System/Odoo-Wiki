---
tags:
- HowTo
- Aktionen
prev: ./fertigung
---
## Fertigung Aktionen
![icons_odoo_mrp](assets/icons_odoo_mrp.png)

Fertigungs-Prozesse automatisieren.

## Aktion  "Reload BoM" erstellen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Reload BoM`\
Modell: `Fertigungsauftrag`\
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

## Automatische Aktion "Lot-Nummer generieren" erstellen

Mit dieser automatischen Aktion wird bei der Bestätigung des Fertigungsauftrag automatisch eine Seriennummmer für das zu fertigende Produkt generiert.

Erstellen Sie unter *Einstellungen > Technisch > Automation > Automatische Aktionen* einen Eintrag mit diesen Werten:

Name der Aktion: `Lot-Nummer generieren`\
Modell: `mrp.production`\
Triggerbedingung: Beim Aktualisieren\
Beobachtete Felder: `state`\
Anzuwenden auf:

```text
["&",["state","in",["confirmed","progress"]],["lot_producing_id","=",False]]
```

Python Code:

```python
record.action_generate_serial()
```

Beispiel für eine automatische Aktion:
![](assets/Fertigung%20Aktionen%20Lot-Nummer%20generieren.png)
