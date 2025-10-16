---
title: Abwesenheiten Aktionen
description: Aktionen für Abwesenheit App einrichten.
kind: howto
prev: ./hr-holidays
---

# Abwesenheiten Aktionen

![icons_odoo_hr_holidays](attachments/icons_odoo_hr_holidays.png)

{{ $frontmatter.description }}

## Aktionen

### Ablehnen

Navigieren Sie nach _Einstellungen > Technisch > Server-Aktionen_ und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Ablehnen`\
Modell: `hr.leave`\
Folgeaktion: `Python-Code ausführen`

```python
for rec in records:
  rec.action_refuse()
```

Die Aktion mit dem Knopf _Kontextuelle Aktion erstellen_ bestätigen und dann speichern.

In der Liste der Abwesenheiten erscheint nun in der Auswahl _Aktion_ das Menu _Ablehnen_.

![](attachments/Aktionen%20Abwesenheitszeiten%20Ablehnen.png)

### Anzahl Stunden neuberechnen

```js
for rec in records:
  rec['number_of_hours_display'] = rec.number_of_days * rec.employee_id.sudo().resource_id.calendar_id.hours_per_day
```
