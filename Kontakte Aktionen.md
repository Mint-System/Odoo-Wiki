---
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- HowTo
prev: ./kontakte
---
# Kontakte Aktionen
![icons_odoo_website_sale_options](assets/icons_odoo_website_sale_options.png)

Arbeitsflüsse mit Kontakte automatisieren.

## Geplante Aktionen

### Kontakte mit geplanter Aktivität archivieren

Erfassen Sie einen [neuen Aktivitätstyp](Diskussion%20Aktivitäten.md#Neuer%20Aktivitätstyp%20erfassen). Mit dieser geplanten Aktion können Sie Kontakte, welche diese Aktivität haben archivieren lassen.

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