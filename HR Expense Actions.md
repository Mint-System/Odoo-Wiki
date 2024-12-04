---
title: Spesen Aktionen
description: Aktionen für Spesen App einrichten.
tags:
- HowTo
prev: ./hr-attendance
---
# Spesen Aktionen
![icons_odoo_hr_expense](attachments/icons_odoo_hr_expense.png)

{{ $frontmatter.description }}

## Aktionen

### Spesenabrechnung zurücksetzen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Spesenabrechnung zurücksetzen`\
Modell: `hr.expense.sheet`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python-Code*:

```python
for rec in records:  
  rec.action_unpost()
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und speichern. In der Ansicht der Spesenabrechnungen können Sie *Aktionen > Spesenabrechnung zurücksetzen* anwählen.