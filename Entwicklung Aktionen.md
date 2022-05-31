---
tags:
- HowTo
- Aktionen
prev: ./entwicklung
---
## Entwicklung Aktionen
![icons_odoo_website_twitter](assets/icons_odoo_website_twitter.png)

Eigene Odoo Aktionen erstellen.

## Beim Aktualisieren eine Validierung ausführen

Mit *Automatischen Aktionen* kann ein Datensatz, der aktualisiert wurde, zusätzlich validiert werden. In unserem Beispiel wollen wir unterbinden, dass Qualitätsalarme auf bestimmte Stufen gesetzt werden.

Navigieren Sie nach *Einstellungen > Technisch > Aktionen > Automatische Aktionen* und erstellen Sie einen neuen Eintrag:

Modell: `Qualitätsalarm`\
Triggerbedingung: `Beim Aktualisieren`\
Beobachtete Felder: `Stufe (quality.alert)`\
Python Code:

```python
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

