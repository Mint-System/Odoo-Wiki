---
tags:
- HowTo
- Aktionen
prev: ./entwicklung
---
# Entwicklung Aktionen
![icons_odoo_website_twitter](assets/icons_odoo_website_twitter.png)

Eigene Odoo Aktionen erstellen.

## Fenster umbennen

Um den angezeigten Namen eines Fenster anzuspassen, navigieren Sie nach *Eisntellungen > Technisch > Aktionen > Fesnter öffnen/schliessen ...*. Suchen Sie im Feld *Name der Aktion* nach dem Fensternamen und passen Sie den Namen an.

![Einstellungen Fenster umbennen](assets/Einstellungen%20Fenster%20umbennen.gif)

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

## Geplante Aktion "Set Order Deadline" erstellen

Mit Aktionen können Felder mit einem bestimmten Default-Wert beschrieben werden. Im folgenden Beispiel wird das Feld *Order Deadline* auf Angebotsanfragen auf das Datum *heute + 5 Tage* gesetzt.

Navigieren Sie nach *Einstellungen > Technisch > Geplante Aktionen* und erstellen Sie den folgenden Eintrag:

* Name der Aktion: `Set Order Deadline`
* Modell: `Beschaffungsauftrag`
* Auslöser: `Bei Erstellung`
* Folgeaktion: `Den Datensatz aktualisieren`
* Feld: `Order Deadline (purchase.order)`
* Wert: `datetime.datetime.today() + datetime.timedelta(days=5)`

## Geplante Aktion "Ablaufdatum Datenbank erneuern" erstellen

Diese geplante Aktion aktualisiert das Ablaufdatum der Datenbank in regelmässigen Abständen.

::: warning
Verwenden Sie diese Aktion nur in Testsystemen! Produktive System müssen vor Ablauf des echten Datums lizenziert werden!
:::

Navigieren Sie nach *Einstellungen > Technisch > Geplante Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Ablaufdatum Datenbank erneuern`\
Modell: `ir.actions.server`\
Ausführen alle: `1` Tage\
Nächstes Ausführungsdatum: `DD.MM.YYYY 06:00:00`\
Anzahl der Anrufe: `-1`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
now = datetime.datetime.now()
expiration_date = now + datetime.timedelta(days=35)
expiration_date = expiration_date.strftime('%Y-%m-%d %H:%M:%S')
env['ir.config_parameter'].sudo().set_param('database.expiration_date', expiration_date)
```

## Aktion "Recompute field" erstellen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Recompute field`\
Modell: `ir.model.fields`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Pythoncode*:

```python
records.ensure_one()
field = records
obj = env[field.model_id.model]
env.add_to_compute(obj._fields[field.name], obj.search([]))
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Felder erscheint nun in der Auswahl *Aktion* das Menu *Recompute field*.

## Aktion "Ansicht Zugriffsrechte aktualisieren" erstellen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Ansicht Zugriffsrechte aktualisieren`\
Modell: `ir.actions.server`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Pythoncode*:

```python
env["res.groups"]._update_user_groups_view()
```

Speichern Sie die Aktion und führen Sie diese direkt mit *Starten* aus.