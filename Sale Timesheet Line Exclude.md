---
title: Sale Timesheet Line Exclude
description: Zeiterfassungseinträge als nicht abrechenbar markieren.
kind: howto
partner: OCA
prev: ./hr-timesheet
---

# Sale Timesheet Line Exclude

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `sale_timesheet_line_exclude`\
Repository: <https://github.com/OCA/timesheet/tree/17.0/sale_timesheet_line_exclude>

## Konfiguration

### Berechtigung für "Von Abrechnung aus-/einschliessen" erteilen

Zeigen Sie die Gruppen unter *Einstellungen > Benutzer & Unternehmen > Gruppen* an. Suchen Sie nach *Exclude timesheets from sale order*. Öffnen Sie die Gruppe und fügen Sie Benutzer hinzu.

## Aktionen

### Von Abrechnung aus-/einschliessen

Navigieren Sie nach _Einstellungen > Technisch > Server-Aktionen_ und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Von Abrechnung aus-/einschliessen`\
Modell: `account.analytic.line`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld _Python Code_:

```python
for rec in records:
	rec.write({
	  'exclude_from_sale_order': False if rec.exclude_from_sale_order else True
	})
```

Die Aktion mit dem Knopf _Kontextuelle Aktion erstellen_ bestätigen und speichern.
