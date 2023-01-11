---
tags:
- HowTo
prev: ./anwesenheit
---
# Anwesenheit Aktionen
![icons_odoo_hr_attendance](assets/icons_odoo_hr_attendance.png)

Aktionen für Anwesenheit App einrichten.

## Aktionen

### Fehlende Anwesenheitseinträge anzeigen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Fehlende Anwesenheitseinträge anzeigen`\
Modell: `ir.actions.server`\
Folgeaktion: `Python-Code ausführen`

```python
# Settings
days = 30
shift_days = 3
date_format = '%d.%m.%Y'
employee_domain = [] #[('name', '=', 'Abigail Peterson')]
leave_state_domain = ('state', 'not in', ['draft', 'confirm'])

today = datetime.datetime.today() - datetime.timedelta(days=shift_days)
dates = [today - datetime.timedelta(days=d) for d in range(days)]
check_in_start = today - datetime.timedelta(days=days)

report = '# Missing attendances\n\n'
report += 'Range is from %s until %s.\n' % (check_in_start.strftime(date_format), today.strftime(date_format))

user_tz = timezone(env.user.tz)
utc_tz = timezone('UTC')

for employee in env['hr.employee'].search(employee_domain):
  
  attendances = env['hr.attendance'].search([
    ('employee_id', '=', employee.id),
    ('check_in', '>=', check_in_start)
  ])
  attendance_dates = attendances.mapped(lambda a: a.check_in.date()) if attendances else []
  
  leaves = env['hr.leave'].search([
    leave_state_domain,
    ('employee_id', '=', employee.id),
    '|', ('date_from', '<=', check_in_start), ('date_to', '>=', check_in_start),
  ])
  
  calendar_leaves = env['resource.calendar.leaves'].search([
    ('calendar_id', '=', employee.resource_calendar_id.id),
    '|', ('date_from', '<=', check_in_start), ('date_to', '>=', check_in_start),
  ])
  
  missing_dates = []
  for check_date in dates:
    
    min_check_date = datetime.datetime.combine(check_date.date(), datetime.time.min)
    max_check_date = datetime.datetime.combine(check_date.date(), datetime.time.max)
    
    min_check_date_utc = min_check_date - user_tz.utcoffset(check_date)
    max_check_date_utc = max_check_date - user_tz.utcoffset(check_date)
    
    work_hours = employee.resource_calendar_id.get_work_hours_count(
      min_check_date,
      max_check_date,
      False
    )
    
    active_leaves = leaves.filtered(lambda l: 
      min_check_date <= l.date_from <= max_check_date or 
      min_check_date <= l.date_to <= max_check_date)
    
    active_calendar_leaves = calendar_leaves.filtered(lambda l: 
      min_check_date_utc <= l.date_from <= max_check_date_utc or 
      min_check_date_utc <= l.date_to <= max_check_date_utc)
    
    has_attendance = check_date.date() in attendance_dates
    
    if work_hours > 0 and not has_attendance and not active_leaves and not active_calendar_leaves:
      missing_dates.append(check_date.strftime(date_format) + ' (%sh)' % work_hours)
    
    # raise UserError({
    #   'name': employee.name, 
    #   'check_date': check_date,
    #   'work_hours': work_hours,
    #   'active_leaves': active_leaves,
    #   'calendar_leaves': calendar_leaves[0].date_from,
    #   'active_calendar_leaves': active_calendar_leaves,
    #   'has_attendance': has_attendance,
    #   'min_check_date': min_check_date,
    #   'max_check_date': max_check_date,
    #   'delta': user_tz.utcoffset(check_date),
    #   'min_check_date_utc': min_check_date_utc,
    #   'max_check_date_utc': max_check_date_utc,
    # }.items())
    
  if missing_dates:
    report += '\n' + employee.name + ':\n'
    for missing_date in missing_dates:
      report += '* ' + missing_date + '\n'

raise UserError(report)
```

Diese Serveraktion produziert ein Bericht in folgenden Format:

```markdown
# Missing attendances

Range is from 08.11.2022 until 08.12.2022.

Abigail Peterson:
* 07.12.2022 (4.0h)
* 06.12.2022 (8.0h)
* 05.12.2022 (8.0h)

...
```

Wenn Sie den Bericht für bestimmte Mitarbeitende deaktivieren möchten, müssen Sie eine [Flexible Arbeitszeit erfassen](Personal.md#Flexible%20Arbeitszeit%20erfassen) und den entsprechenden Mitarbeitenden hinterlegen.

### Überstunden aktualisieren

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
