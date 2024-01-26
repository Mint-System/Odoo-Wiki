---
title: Kontakte Aktionen
description: Arbeitsflüsse mit Kontakte automatisieren.
tags:
- HowTo
prev: ./contacts
---
# Kontakte Aktionen
![icons_odoo_website_sale_options](attachments/icons_odoo_website_sale_options.png)

{{ $frontmatter.description }}

## Aktionen

### Kontakt als Privat festlegen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Kontakt als Privat festlegen`\
Modell: `res.partner`\
Folgeaktion: Den Datensatz aktualiseren
Im Tab *Zu schreibende Daten*:

* **Feld**: Adresstyp
* **Bewertungstyp**: Wert
* **Wert**: `private`

Im Tab *Zu schreibende Daten*:

* **Gruppenname**: Technisch / Zugriff auf private Adressen

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen.

### Kontakt als Kontakt festlegen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Kontakt als Kontakt festlegen`\
Modell: `res.partner`\
Folgeaktion: Den Datensatz aktualiseren
Im Tab *Zu schreibende Daten*:

* **Feld**: Adresstyp
* **Bewertungstyp**: Wert
* **Wert**: `contact`

Im Tab *Zu schreibende Daten*:

* **Gruppenname**: Technisch / Zugriff auf private Adressen

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen.

## Geplante Aktionen

### Kontakte mit geplanter Aktivität archivieren

Erfassen Sie einen [neuen Aktivitätstyp](Dialog%20Activities.md#Neuer%20Aktivitätstyp%20erfassen). Mit dieser geplanten Aktion können Sie Kontakte, welche diese Aktivität haben archivieren lassen.

Navigieren Sie nach *Einstellungen > Technisch > Geplante Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Kontakte mit geplanter Aktivität archivieren`\
Modell: `ir.actions.server`\
Ausführen alle: `1` Tage\
Nächstes Ausführungsdatum: `DD.MM.YYYY 06:00:00`\
Anzahl der Anrufe: `-1`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
name = 'Zur Archivierung und Requalifikation'

type_id = env['mail.activity.type'].search( [('name', '=', name)], limit=1)

activity_ids = env['mail.activity'].search( [('activity_type_id', '=', type_id.id), ('date_deadline', '<=', datetime.date.today())] )

partner_ids = env['res.partner'].search( [('id', 'in', activity_ids.mapped('res_id'))] )

# raise UserError(partner_ids)

partner_ids.write({'active': False})
if partner_ids:
  log('Archived partners with planned activity: %s' % ', '.join(partner_ids.mapped('display_name')))
```

::: tip
Die Aktivität auf dem Kontakt wird im Archivierungsvorgang gelöscht.
:::
