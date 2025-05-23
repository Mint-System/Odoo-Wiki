---
title: Entwicklung Aktionen
description: Eigene Odoo Aktionen erstellen.
kind: howto
tags:
- Actions
prev: ./development
---
# Entwicklung Aktionen
![icons_odoo_web_studio](attachments/icons_odoo_web_studio.png)

{{ $frontmatter.description }}

## Ansichten

### Neue Ansicht mit Aktion hinzufügen

Fehlen bestimmte Ansichten, können diese ganz einfach mit einer Aktion und einem Menüposten erstellt werden. In diesem Bespiel wollen wir die die Komponenten aller Stücklisten in einer Tabelle darstellen.

Navigieren Sie nach *Einstellungen > Technisch > Aktionen > Fenster öffnen/schliessen ...* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `BoM Komponenenten`\
Objekt: `mrp.bom.line`\
Ansichtsreferenz: Gemäss Angaben\
Wertebereich: Gemäss Angaben\
Wert aus Kontext: Gemäss Angaben\
Ansichten: Gemäss Angaben

Navigieren Sie nach *Einstellungen > Technisch > Benutzer-Interface > Menüposten* und erstellen Sie einen neuen Eintrag:

Menü: `BoM Komponenenten`\
Obermenü: `Fertigung/Produkte`\
Aktion: `ir.actions.act_window` `BoM Komponenenten`\
Nummernfolge: `3`

Nachdem der Browser aktualisiert haben Sie Zugriff auf das neue Menü und Ansicht.

![](attachments/Aktionen%20neue%20Ansicht.png)

### Ansicht einer Aktion hinzufügen

Wenn eine [Aktion bearbeiten](#Aktion%20bearbeiten), können Sie die verfügbaren Ansichtstypen im Feld *Ansichtmodus* festlegen. Ebenfalls können Sie steuern welche Ansicht abhängig vom Type aufgerufen werden. Auf der selben Bearbeitungsansicht können Sie unter *Ansichten* eine Liste bearbeiten.

![](attachments/Entwicklung%20Aktionen%20Ansichten.png)

### Fenstername umbennen

Um den angezeigten Namen eines Fenster anzuspassen, navigieren Sie nach *Eisntellungen > Technisch > Aktionen > Fesnter öffnen/schliessen ...*. Suchen Sie im Feld *Name der Aktion* nach dem Fensternamen und passen Sie den Namen an.

![Einstellungen Fenster umbennen](attachments/Einstellungen%20Fenster%20umbennen.gif)

## Entwicklung

Odoo unterscheidet im wesentlichen zwischen vier Aktionen.

**Fensteraktionen**: Verwendet zum anzeigen von Ansichten. Navigieren Sie nach *Einstellungen > Technisch > Aktionen > Fensteraktionen*.

**Serveraktionen**: Für Aktionen verknüpft mit Datenmodellen. Navigieren Sie nach *Einstellungen > Technisch > Aktionen > Serveraktionen*.

**Geplante Aktionen**: Zeitlich geplante Serveraktionen. Navigieren Sie nach *Einstellungen > Technisch > Automatisierung > Geplante Aktionen*.

**Automatisierte Aktionen**: Aktion bei bestimmten Zuständen auslösen. Navigieren Sie nach *Einstellungen > Technisch > Automatisierung > Automatisierte Aktionen*.

### Serverkaktion erstellen

Navigieren Sie nach *Einstellungen > Technisch > Aktionen > Serveraktionen* und erstellen Sie einen neuen Eintrag. Wenn Sie als Modell *Serveraktion* wählen, erhalten Sie eine Aktion *Manuell Ausführen*. Wenn Sie ein anderes Datenmodell wählen, müssen Sie *Kontextuelle Aktion Erstellen* ausführen, damit die Aktion auf der Formular- und Listenansicht des gewählten Datenmodell erscheint.

### Serveraktion manuell ausführen

Rufen Sie eine Serverkation mit Modell *Serverkation* unter *Einstellungen > Technisch > Aktionen > Serveraktionen* auf. Führen Sie die Serveraktion mit dem Knopf *Manuell Ausführen* aus.

### Fensteraktion bearbeiten

Navigieren Sie nach *Einstellungen > Technisch > Aktionen > Fensteraktionen* und suchen Sie anhand *Namen der Aktion*. Mehrere Aktionen können den gleichen Namen haben. Die wichtigsten Felder sind:

* **Ansichtsmodus**: Verfügbare Ansichten nach Aufruf der Aktion.
* **Wertebereich**: Filter für die angezeigten Daten.
* **Wert aus Kontext**: Kontext-Definitionen.
* **Ansichten**: Ordnet und spezifiziert die Auswahl der verfügbaren Ansichten.

### Aktuelle Aktion bearbeiten

Mit jedem Klick auf ein Menü oder Knopf wird in Odoo eine Aktion ausgeführt. Die ausgeführte Aktion können Sie mit *Entwicklertools > Aktion bearbeiten* anzeigen und bearbeiten.

### Standardwert auf Aktion definieren

Wenn Sie die [aktuelle Aktion bearbeiten](#Aktuelle%20Aktion%20bearbeiten) können Sie im Feld *Wert aus Kontext* einen Standardwert für das aktuelle Datenmodell festlegen. Dazu ein paar Bespiele:

Heutiges Datum als Standardwert für das Feld `ordering_date`.

```
{ 'default_ordering_date': datetime.datetime.today().strftime('%Y-%m-%d') }
```

::: warning
Dokumentieren Sie die Anpassung von Aktionen. Bei einer Aktualisierung der Module gehen die Änderungen verloren.
:::

## Aktionen

### Feld neu berechnen

Navigieren Sie nach *Einstellungen > Technisch > Server-Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Feld neu berechnen`\
Modell: `ir.model.fields`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python-Code*:

```python
for field in records:
  obj = env[field.model_id.model]
  env.add_to_compute(obj._fields[field.name], obj.search([]))
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Felder erscheint nun in der Auswahl *Aktion* das Menu *Feld neu berechnen*.

### Ansicht Zugriffsrechte aktualisieren

Navigieren Sie nach *Einstellungen > Technisch > Server-Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Ansicht Zugriffsrechte aktualisieren`\
Modell: `ir.actions.server`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python-Code*:

```python
env["res.groups"]._update_user_groups_view()
```

Speichern Sie die Aktion und führen Sie diese direkt mit *Starten* aus.

### Vererbte Ansichten entfernen

Navigieren Sie nach *Einstellungen > Technisch > Server-Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Vererbte Ansichten entfernen`\
Modell: `ir.ui.view`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python-Code*:

```python
records.inherit_children_ids.unlink()
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

### Compose E-Mail

Navigieren Sie nach *Einstellungen > Technisch > Server-Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Compose E-Mail`\
Modell: Referenz gemäss Dokument\
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

Speichern Sie die Serveraktion und zeigen Sie die [Metadaten an](Development.md#Metadaten%20anzeigen). Notieren Sie sich die *ID* des Datensatzes.

Als nächtes müssen Sie die [Formularansicht bearbeiten](Development%20Views.md#Formularansicht%20bearbeiten) und ein [Snippet hinzufügen](Development%20Snippets.md#Snippet%20hinzufügen) um diesen Knopf einzufügen:

```xml
<button name="$ID" type="action" string="Compose E-Mail"/>
```

Wobei `$ID` der notierten *ID* der Serveraktion entspricht.

Mit diesem Knopf können Sie den E-Mail-Dialog öffnen.

![Entwicklung Aktionen Compose E-Mail](attachments/Entwicklung%20Aktionen%20Compose%20E-Mail.gif)

## Automatisierte Aktionen

### Beim Aktualisieren eine Validierung ausführen

Mit *Automatischen Aktionen* kann ein Datensatz, der aktualisiert wurde, zusätzlich validiert werden. In unserem Beispiel wollen wir unterbinden, dass Qualitätsalarme auf bestimmte Stufen gesetzt werden.

Navigieren Sie nach *Einstellungen > Technisch > Automation > Automatisierte Aktionen* und erstellen Sie einen neuen Eintrag:

Modell: `Qualitätsalarm`\
Auslöser: Beim Aktualisieren\
Trigger-Felder: `Stufe (quality.alert)`\
Python Code:

```python
if record.stage_id.sequence in [0,1,2]:
	raise UserError('This stage is not allowed!')
```

![Aktionen Stufe nicht erlaubt](attachments/Aktionen%20Stufe%20nicht%20erlaubt.gif)

### Recipient Bank (Empfängerbank) zuordnen

In diesem Beispiel wird bei Erzeugen einer Rechnung aus einem Verkaufsauftrag automatisch das Feld _Recipient Bank (Empfängerbank)_ in der Rechnung ausgefüllt.

Modell: `Buchungssatz`\
Auslöser: Bei Erstellung und Aktualisierung\
Python Code:

```python
for rec in records:
  if rec.sale_order_id: # Überprüfen, ob es sich um eine Kundenrechnung handelt
    if rec.currency_id.name == 'CHF':
        account = rec.company_id.bank_ids.filtered(lambda r: r.id == 40)
    elif rec.currency_id.name == 'EUR':
        account = rec.company_id.bank_ids.filtered(lambda r: r.id == 1)
    elif rec.currency_id.name == 'USD':
        account = rec.company_id.bank_ids.filtered(lambda r: r.id == 41)
    else:
        account = False

    if account:
        rec.write({'partner_bank_id': account})
```