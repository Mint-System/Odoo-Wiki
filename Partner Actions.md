---
title: Kontakte Aktionen
description: Arbeitsflüsse mit Kontakte automatisieren.
tags:
- HowTo
prev: ./partner
---
# Kontakte Aktionen
![icons_odoo_website_sale_options](attachments/icons_odoo_website_sale_options.png)

{{ $frontmatter.description }}

## Geplante Aktionen

### Kontakte mit geplanter Aktivität archivieren

Erfassen Sie einen [neuen Aktivitätstyp](Discuss%20Activities.md#Neuer%20Aktivitätstyp%20erfassen). Mit dieser geplanten Aktion können Sie Kontakte, welche diese Aktivität haben archivieren lassen.

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

## Automatische Aktionen

### Bankkonto mit Bank verknüpfen

Mit dieser Aktion versucht Odoo anhand des *Bank Code* in der IBAN eine passende Bank im Bank-Verzeichnis zu finden. Die Aktion erfordert die Installation von [Partner Bank Code](Partner%20Bank%20Code.md).

Erstellen Sie unter *Einstellungen > Technisch > Automation > Automatische Aktionen* einen Eintrag mit diesen Werten:

Name der Aktion: `Bankkonto mit Bank verknüpfen`\
Modell: `res.partner.bank`\
Trigger-Felder: `acc_number`
Auslöser: Bei Erstellung und Aktualisierung\
Abgrenzung vor Aktualisierung: `[("sanitized_acc_number", "!=", False)]`\
Folgeaktion: Python-Code ausführen\
Python Code:

```python
for rec in records:
  bank_code = rec.sanitized_acc_number[4:9]
  bank = env['res.bank'].search([('bank_code', '=ilike', bank_code+'%')], limit=1)
  if bank:
    rec['bank_id'] = bank.id
```