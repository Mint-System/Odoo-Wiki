---
title: Spesen Aktionen
description: Aktionen für Spesen App einrichten.
kind: howto
section: true
prev: ./hr-attendance
---

# Spesen Aktionen

![icons_odoo_hr_expense](attachments/icons_odoo_hr_expense.png)

{{ $frontmatter.description }}

## Aktionen

### Spesenabrechnung zurücksetzen

Navigieren Sie nach _Einstellungen > Technisch > Server-Aktionen_ und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Spesenabrechnung zurücksetzen`\
Modell: `hr.expense.sheet`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld _Python-Code_:

```python
for rec in records:
  rec.action_unpost()
```

Die Aktion mit dem Knopf _Kontextuelle Aktion erstellen_ bestätigen und speichern. In der Ansicht der Spesenabrechnungen können Sie _Aktionen > Spesenabrechnung zurücksetzen_ anwählen.
