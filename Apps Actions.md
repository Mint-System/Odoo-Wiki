---
title: Apps Aktionen
description: Aktionen für Apps einrichten.
tags:
- HowTo
prev: ./apps
---
# Apps Aktionen
![icons_odoo_hr_appraisal](attachments/icons_odoo_hr_appraisal.png)

{{ $frontmatter.description }}

## Aktionen

### Modul aktualisieren

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Modul aktualisieren`\
Modell: `ir.module.module`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Pythoncode*:

```python
for record in records:
	record.button_immediate_upgrade()
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Apps erscheint nun in der Auswahl *Aktion* das Menu *Modul aktualisieren*.