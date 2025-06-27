---
title: Sale Timesheet Line Exclude
description: Zeiterfassungseinträge als nicht abrechenbar markieren.
kind: howto
tags:
- OCA
prev: ./hr-timesheet
---
# Sale Timesheet Line Exclude
![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `sale_timesheet_line_exclude`\
Repository: <https://github.com/OCA/timesheet/tree/17.0/sale_timesheet_line_exclude>

::: warning
Diese App erweitert die `_timesheet_determine_sale_line` Methode. Abhängig von der Installations-Reihenfolge der anderen Module, welche diese Methode erweitern, kann der Methoden-Aufruf blockiert werden.
:::

## Aktionen

### Von Abrechnung aus-/einschliessen

Navigieren Sie nach *Einstellungen > Technisch > Server-Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Von Abrechnung aus-/einschliessen`\
Modell: `account.analytic.line`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
for rec in records:
	rec.write({
	  'exclude_from_sale_order': False if rec.exclude_from_sale_order else True
	})
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und speichern.
