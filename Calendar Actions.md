---
title: Kalender Aktionen
description: Kalender-Prozesse automatisieren.
kind: howto
section: true
prev: ./kalender
---

# Kalender Aktionen

![icons_odoo_calendar](attachments/icons_odoo_calendar.png)

{{ $frontmatter.description }}

## Aktionen

### Outlook Kalender synchronisieren

Navigieren Sie nach _Einstellungen > Technisch > Server-Aktionen_ und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Outlook Kalender synchronisieren`\
Modell: `res.users`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld _Python-Code_:

```python
for rec in records:
	rec._sync_microsoft_calendar()
```

Die Aktion mit dem Knopf _Kontextuelle Aktion erstellen_ bestätigen und dann speichern.

In der Formularansicht der Benutzer wählen Sie _Aktionen > Outlook Kalender synchronisieren_.
