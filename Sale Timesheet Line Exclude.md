---
description: Zeiterfassungseinträge als nicht abrechenbar markieren.
forge: github.com
kind: howto
name: sale_timesheet_line_exclude
partner: OCA
prev: ./hr-timesheet
repo: OCA/timesheet
title: Sale Timesheet Line Exclude
versions:
- '19.0'
- '18.0'
- '17.0'
- '16.0'
- '15.0'
- '14.0'
---


# Sale Timesheet Line Exclude

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Konfiguration

### Berechtigung für "Von Abrechnung aus-/einschliessen" erteilen

Zeigen Sie die Gruppen unter *Einstellungen > Benutzer & Unternehmen > Gruppen* an. Suchen Sie nach *Exclude timesheets from sale order*. Öffnen Sie die Gruppe und fügen Sie Benutzer hinzu.

## Aktionen

### Von Abrechnung aus-/einschliessen

Navigieren Sie nach _Einstellungen > Technisch > Server-Aktionen_ und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Von Abrechnung aus-/einschliessen`\
Modell: `account.analytic.line`\
Typ: `Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld _Python Code_:

```python
for rec in records:
	rec.write({
	  'exclude_from_sale_order': False if rec.exclude_from_sale_order else True
	})
```

Die Aktion mit dem Knopf _Kontextuelle Aktion erstellen_ bestätigen und speichern.
