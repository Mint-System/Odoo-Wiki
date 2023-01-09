---
tags:
- HowTo
- Aktionen
prev: ./entwicklung
---
# Entwicklung Aktionen
![icons_odoo_website_twitter](assets/icons_odoo_website_twitter.png)

Eigene Odoo Aktionen erstellen.

## Aktionen

### Aktion bearbeiten

Odoo unterscheidet im wesentlichen zwischen drei Aktionen.

**Fenster-Aktion**: Verwendet zum anzeigen von Ansichten. Navigieren Sie nach *Einstellungen > Technisch > Aktionen > Fenster öffnen/schliessen*.

**Server-Aktion**: Für geplante Aktionen und Aktionen verknüpft mit Datenmodelle. Navigieren Sie nach *Einstellungen > Technisch > Aktionen > Server Aktionen*.

**Automatische Aktion**: Aktion bei bestimmten Zuständen auslösen. Navigieren Sie nach *Einstellungen > Technisch > Automation > Server Aktionen*.

### Aktuelle Aktion bearbeiten

Mit jedem Klick auf ein Menü oder Knopf wird in Odoo eine Aktion ausgeührt. Die ausgeführte Aktion können Sie mit *Entwicklertools > Aktion bearbeiten* anzeigen und bearbeiten.

### Standardwert auf Aktion definieren

Wenn Sie die [aktuelle Aktion bearbeiten](#Aktuelle%20Aktion%20bearbeiten) können Sie im Feld *Wert aus Kontext* einen Standardwert für das aktuelle Datenmodell festlegen. Dazu ein paar Bespiele:

Heutiges Datum als Standardwert für das Feld `ordering_date`.

```
{ 'default_ordering_date': datetime.datetime.today().strftime('%Y-%m-%d') }
```

::: warning
Dokumentieren Sie die Anpassung von Aktionen. Bei einer Aktualisierung der Module gehen die Änderungen verloren.
:::

## Automatische Aktionen

### Beim Aktualisieren eine Validierung ausführen

Mit *Automatischen Aktionen* kann ein Datensatz, der aktualisiert wurde, zusätzlich validiert werden. In unserem Beispiel wollen wir unterbinden, dass Qualitätsalarme auf bestimmte Stufen gesetzt werden.

Navigieren Sie nach *Einstellungen > Technisch > Automation > Automatische Aktionen* und erstellen Sie einen neuen Eintrag:

Modell: `Qualitätsalarm`\
Triggerbedingung: `Beim Aktualisieren`\
Beobachtete Felder: `Stufe (quality.alert)`\
Python Code:

```python
if record.stage_id.sequence in [0,1,2]:
	raise UserError('This stage is not allowed!')
```

![Aktionen Stufe nicht erlaubt](assets/Aktionen%20Stufe%20nicht%20erlaubt.gif)

### Set Order Deadline

Mit Aktionen können Felder mit einem bestimmten Default-Wert beschrieben werden. Im folgenden Beispiel wird das Feld *Order Deadline* auf Angebotsanfragen auf das Datum *heute + 5 Tage* gesetzt.

Navigieren Sie nach *Einstellungen > Technisch > Automation > Automatische Aktionen* und erstellen Sie den folgenden Eintrag:

* Name der Aktion: `Set Order Deadline`
* Modell: `Beschaffungsauftrag`
* Auslöser: `Bei Erstellung`
* Folgeaktion: `Den Datensatz aktualisieren`
* Feld: `Order Deadline (purchase.order)`
* Wert: `datetime.datetime.today() + datetime.timedelta(days=5)`

## Ansichten

### Neue Ansicht mit Aktion hinzufügen

Fehlen bestimmte Ansichten, können diese ganz einfach mit einer Aktion und einem Menüeintrag erstellt werden. In diesem Bespiel wollen wir die die Komponenten aller Stücklisten in einer Tabelle darstellen.

Navigieren Sie nach *Einstellungen > Technisch > Aktionen > Fenster öffnen/schliessen ...* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `BoM Komponenenten`\
Objekt: `mrp.bom.line`\
Ansichtsreferenz: Gemäss Angaben\
Wertebereich: Gemäss Angaben\
Wert aus Kontext: Gemäss Angaben

Navigieren Sie nach *Einstellungen > Technisch > Benutzer-Interface > Menüeinträge* und erstellen Sie einen neuen Eintrag:

Menü: `BoM Komponenenten`\
Obermenü: `Fertigung/Produkte`\
Aktion: `ir.actions.act_window` `BoM Komponenenten`
Nummernfolge: `3`

Nachdem der Browser aktualisiert haben Sie Zugriff auf das neue Menü und Ansicht.

![](assets/Aktionen%20neue%20Ansicht.png)

### Fenstername umbennen

Um den angezeigten Namen eines Fenster anzuspassen, navigieren Sie nach *Eisntellungen > Technisch > Aktionen > Fesnter öffnen/schliessen ...*. Suchen Sie im Feld *Name der Aktion* nach dem Fensternamen und passen Sie den Namen an.

![Einstellungen Fenster umbennen](assets/Einstellungen%20Fenster%20umbennen.gif)

## Geplante Aktionen

### Ablaufdatum Datenbank erneuern

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

## Aktionen

### Feld neu berechnen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Feld neu berechnen`\
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

In der Liste der Felder erscheint nun in der Auswahl *Aktion* das Menu *Feld neu berechnen*.

### Ansicht Zugriffsrechte aktualisieren

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Ansicht Zugriffsrechte aktualisieren`\
Modell: `ir.actions.server`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Pythoncode*:

```python
env["res.groups"]._update_user_groups_view()
```

Speichern Sie die Aktion und führen Sie diese direkt mit *Starten* aus.

### Compose E-Mail

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Compose E-Mail`\
Modell: Referenz gemäss Geschäftsobjekt\
Folgeaktion: `Python-Code ausführen`

```python
if record:
  compose_form = env.ref('mail.email_compose_message_wizard_form', False)
  ctx = dict(
      default_model='account.move',
      default_res_id=record.id,
      default_composition_mode='comment',
      custom_layout='mail.mail_notification_light',
  )
  action = {
      'name': 'Compose E-Mail',
      'type': 'ir.actions.act_window',
      'view_mode': 'form',
      'res_model': 'mail.compose.message',
      'views': [(compose_form.id, 'form')],
      'view_id': compose_form.id,
      'target': 'new',
      'context': ctx,
  }
```

Speichern Sie die Serveraktion und zeigen Sie die [Metadaten an](Entwicklung.md#Metadaten%20anzeigen). Notieren Sie sich die *ID* des Datensatzes.

Als nächtes müssen Sie die [Formularansicht bearbeiten](Entwicklung%20Ansichten.md#Formularansicht%20bearbeiten) und ein [Snippet hinzufügen](Entwicklung%20Snippets.md#Snippet%20hinzufügen) um diesen Knopf einzufügen:

```xml
<button name="$ID" type="action" string="Compose E-Mail"/>
```

Wobei `$ID` der notierten *ID* der Serveraktion entspricht.

Mit diesem Knopf können Sie den E-Mail-Dialog öffnen.

![Entwicklung Aktionen Compose E-Mail](assets/Entwicklung%20Aktionen%20Compose%20E-Mail.gif)