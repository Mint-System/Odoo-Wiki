---
tags:
- HowTo
prev: ./anwesenheit
---
# Anwesenheit Aktionen
![icons_odoo_hr_attendance](assets/icons_odoo_hr_attendance.png)

Aktionen für Anwesenheit App einrichten.

## Aktionen

### Aktion "Fehlende Anwesenheitseinträge anzeigen" erstellen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Fehlende Anwesenheitseinträge anzeigen`\
Modell: `ir.actions.server`\
Folgeaktion: `Python-Code ausführen`

```python
# Settings
days = 6
emplyee_domain = [('name', '=', 'Abigail Peterson')]

today = datetime.datetime.today()
dates = [today - datetime.timedelta(days=d) for d in range(days)]
check_in_start = today - datetime.timedelta(days=days)

for employee in env['hr.employee'].search(emplyee_domain):
  
  attendances = env['hr.attendance'].search([
    ('employee_id', '=', employee.id),
    ('check_in', '>=', check_in_start)
  ])
  attendance_dates = attendances.mapped(lambda a: a.check_in.date())
  
  leaves = env['hr.leave'].search([
    ('employee_id', '=', employee.id),
    '|', ('date_from', '>=', check_in_start), ('date_to', '<=', check_in_start),
  ])

  missing_dates = []
  for check_date in dates:
    
    work_hours = employee.resource_calendar_id.get_work_hours_count(
      datetime.datetime.combine(check_date.date(), datetime.time.min),
      datetime.datetime.combine(check_date.date(), datetime.time.max),
      False
    )
    
    missing_dates.append([check_date, work_hours])
    
    raise UserError({
      'name': employee.name, 
      'check_date': check_date.date(),
      'attendances': attendances,
      'attendance_dates': attendance_dates,
      'leaves': leaves,
      'work_hours': work_hours,
      'check': check_date.date() in attendance_dates
    }.items())
    
  raise UserError(missing_dates)
```

### Aktion "Überstunden aktualisieren" hinzufügen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Überstunden aktualisieren`\
Modell: `hr.attendance`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Pythoncode*:

```python
for record in records:  
  record._update_overtime()
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

Im Formular der Anwesenheitszeiten erscheint nun in der Auswahl *Aktion* das Menu *Überstunden aktualisieren*.
