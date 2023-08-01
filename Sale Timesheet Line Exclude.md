---
title: Sale Timesheet Line Exclude
description: Zeiterfassungseinträge als nicht abrechenbar markieren.
tags:
- HowTo
- OCA
prev: ./sale
---
# Sale Timesheet Line Exclude
![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `sale_timesheet_line_exclude`\
Repository: <https://github.com/OCA/timesheet/tree/15.0/sale_timesheet_line_exclude>

## Aktionen

### Von Abrechnung ausschliessen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Von Abrechnung ausschliessen`\
Modell: `account.analytic.line`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
for record in records:
	record.write({
	  '​exclude_from_sale_order': True
	})
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und speichern.
