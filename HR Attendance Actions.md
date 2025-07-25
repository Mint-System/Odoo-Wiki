---
title: Anwesenheiten Aktionen
description: Aktionen für Anwesenheit App einrichten.
kind: howto
prev: ./hr-attendance
---
# Anwesenheiten Aktionen
![icons_odoo_hr_attendance](attachments/icons_odoo_hr_attendance.png)

{{ $frontmatter.description }}

## Aktionen

### Fehlende Anwesenheitseinträge anzeigen

Navigieren Sie nach *Einstellungen > Technisch > Server-Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Fehlende Anwesenheitseinträge anzeigen`\
Modell: `ir.actions.server`\
Folgeaktion: `Python-Code ausführen`

```python
# Settings
days = 30
offset_days = 3
date_format = '%d.%m.%Y'
employee_domain = [] # [('name', '=', 'Roger Bünter')]
leave_state_domain = ('state', 'not in', ['draft', 'confirm'])

today = datetime.datetime.today() - datetime.timedelta(days=offset_days)
dates = [today - datetime.timedelta(days=d) for d in range(days)]
start_date = today - datetime.timedelta(days=days)

report = '# Missing attendances\n\n'
report += 'Range is from %s until %s.\n' % (start_date.strftime(date_format), today.strftime(date_format))

user_tz = timezone(env.user.tz)
utc_tz = timezone('UTC')

for employee in env['hr.employee'].search(employee_domain):
  
  attendances = env['hr.attendance'].search([
    ('employee_id', '=', employee.id),
    ('check_in', '>=', start_date)
  ])
  attendance_dates = attendances.mapped(lambda a: a.check_in.date()) if attendances else []
  
  leaves = env['hr.leave'].search([
    leave_state_domain,
    ('employee_id', '=', employee.id),
    '|', ('date_from', '>=', start_date), ('date_to', '>=', start_date),
  ])
  
  calendar_leaves = env['resource.calendar.leaves'].search([
    ('calendar_id', '=', employee.resource_calendar_id.id),
    # ('work_entry_type_id', '=', 2),
    ('resource_id', '=', False),
    '|', ('date_from', '>=', start_date), ('date_to', '<=', start_date),
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
      l.date_from < check_date < l.date_to or
      min_check_date <= l.date_from <= max_check_date or 
      min_check_date <= l.date_to <= max_check_date
    )
    
    active_calendar_leaves = calendar_leaves.filtered(lambda l:
      l.date_from < check_date < l.date_to or
      min_check_date_utc <= l.date_from <= max_check_date_utc or 
      min_check_date_utc <= l.date_to <= max_check_date_utc
    )
    
    has_attendance = check_date.date() in attendance_dates
    
    missing_attendance = work_hours > 0 and not has_attendance and not active_leaves and not active_calendar_leaves
    if missing_attendance:
      missing_dates.append(check_date.strftime(date_format) + ' (%sh)' % round(work_hours,2))
    
    # raise UserError({
    #   'start_date': start_date,
    #   'name': employee.name, 
    #   'check_date': check_date,
    #   'missing_attendance': missing_attendance,
    #   'work_hours': work_hours,
    #   'leaves': leaves.mapped('date_from'),
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
  
  # raise UserError(missing_dates)
    
  if missing_dates:
    report += '\n' + employee.name + ':\n'
    for missing_date in missing_dates:
      report += '* ' + missing_date + '\n'

raise UserError(report)
```

Diese Serveraktion produziert ein Bericht in folgendem Format:

```markdown
# Missing attendances

Range is from 08.11.2022 until 08.12.2022.

Abigail Peterson:
* 07.12.2022 (4.0h)
* 06.12.2022 (8.0h)
* 05.12.2022 (8.0h)

...
```

Wenn Sie den Bericht für bestimmte Mitarbeitende deaktivieren möchten, müssen Sie eine [Flexible Arbeitszeit erfassen](HR.md#Flexible%20Arbeitszeit%20erfassen) und dem ausgewählten Mitarbeitenden hinterlegen.

Manager können den Bericht aufrufen, wenn Sie mit den folgenden Informationen einen [Menüposten erstellen](Development.md#Entwicklung#Menüposten%20erstellen).

* **Menü**: 	`Fehlende Anwesenheitseinträge anzeigen`
* **Obermenü**: `Abwesenheitszeiten/Berichtswesen`
* **Aktion**: `ir.actions.server` `Fehlende Anwesenheitseinträge anzeigen`

### Überstunden aktualisieren

Navigieren Sie nach *Einstellungen > Technisch > Server-Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Überstunden aktualisieren`\
Modell: `hr.attendance`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python-Code*:

```python
for record in records:  
  record._update_overtime()
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Listenansicht der Anwesenheiten erscheint nun in der Auswahl *Aktion* das Menu *Überstunden aktualisieren*.

### Gleitzeitsaldo aktualisieren

Navigieren Sie nach *Einstellungen > Technisch > Server-Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Gleitzeitsaldo aktualisieren`\
Modell: `hr.employee`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python-Code*:

```python
for rec in records:
  rec.attendance_ids._update_overtime()
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

## Geplante Aktionen 

### Überstunden entfernen

Mit dieser geplanten Aktion werden registrierte Überstunden der Mitarbeitenden mit einem Arbeitsstundensoll von 0 am Ende des Monats entfernt.

Navigieren Sie nach *Einstellungen > Technisch > Geplante Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Überstunden entfernen`\
Modell: `ir.actions.server`\
Ausführen alle: `1` Monat\
Nächstes Ausführungsdatum: `01.MM.YYYY 06:00:00`\
Anzahl der Anrufe: `-1`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
last_month_until = datetime.date.today().replace(day=1) - datetime.timedelta(days=1)
last_month_from = last_month_until.replace(day=1)

# Get employees with zero hours work time
employees = env['hr.employee'].search([
	('resource_calendar_id.hours_per_day', '=', 0.0)
])

messages = []
for employee in employees:

  # Get overtimes of last month
	overtimes = env['hr.attendance.overtime'].search([
		('employee_id', '=', employee.id),
		# ('date', '>=', last_month_from),
		('date', '<=', last_month_until)
	])
	if overtimes:
		messages.append('Removed these overtime entries for %(name)s:\n' % {'name': employee.name})
		messages.extend(["- %s: %s\n" % (o.date, round(o.duration, 2)) for o in overtimes])
		overtimes.unlink()

if messages:
  log(' '.join(messages))
```

### Überstunden aktualisieren

Mit dieser geplanten Aktion werden die Überstunden anhand der Anwesenheit neu berechnet.

Navigieren Sie nach *Einstellungen > Technisch > Geplante Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Überstunden aktualisieren`\
Modell: `ir.actions.server`\
Ausführen alle: `1` Woche\
Nächstes Ausführungsdatum: `01.MM.YYYY 06:00:00`\
Anzahl der Anrufe: `-1`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
# Settings
days = 7
start_date = datetime.datetime.today() - datetime.timedelta(days=days)

attendances = env['hr.attendance'].search([
	('check_in', '>=', start_date)
])

attendances._update_overtime()
```