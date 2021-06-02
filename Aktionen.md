---
tags:
- HowTo
---
# Aktionen
![icons_odoo_website_twitter](assets/icons_odoo_website_twitter.png)

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
