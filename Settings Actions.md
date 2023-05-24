---
title: Einstellungen Aktionen
description: Odoo-Einstellungen automatisieren.
tags:
- HowTo
prev: ./settings
---
# Einstellungen Aktionen
![icons_odoo_settings](assets/icons_odoo_settings.png)

{{ $frontmatter.description }}

## Aktionen

### Sofort senden

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Sofort senden`\
Modell: `mail.mail`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
for record in records:
	record.send()
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

## Geplante Aktionen

### Abteilungsgruppen synchronisieren

Diese Aktion erstellt eine Berechtigungsgruppe für jede Abteilungsgruppe und synchronisiert die Benutzer der Abteilungsmitglieder.

Navigieren Sie nach *Einstellungen > Technisch > Geplante Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Abteilungsgruppen synchronisieren`\
Modell: `ir.actions.server`\
Ausführen alle: `15` Minuten\
Nächstes Ausführungsdatum: `DD.MM.YYYY 06:00:00`\
Anzahl der Anrufe: `-1`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
department_ids = env['hr.department'].search([])
group_ids = env['res.groups'].search([])

messages = []

## Create and update the permission group for every department
for department in department_ids:
  
  # Define permission group name
  name = 'Department ' + department.display_name

  # Get user ids for department and subdepartments
  department_users = department.member_ids.user_id
  if department.child_ids:
    department_users += department.child_ids.member_ids.user_id
  if department.child_ids.child_ids:
    department_users += department.child_ids.child_ids.member_ids.user_id

  # Search group
  group = group_ids.filtered(lambda g: g.name == name)
  
  # Create group if it does not exist
  if not group:
    messages.append("Create permission group: %s." % (name))
    group = env['res.groups'].create({
      'name': name
    })
    
  # Ensure group is unique
  group.ensure_one()
    
  # Get group users
  group_users = group.users

  # raise Warning([group.name, group_users, department_users, set(group_users) == set(department_users)])
    
  # Set members for the group
  if set(group_users) != set(department_users):
    messages.append("Set users for group: %s." % (group.name))
    group.write({
      'users': department_users
    })
    
if messages:
  log('\n'.join(messages))
```

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
env['ir.config_parameter'].sudo().set_param('database.expiration_reason', 'renewal')
```
