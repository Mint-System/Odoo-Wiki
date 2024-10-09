---
title: Datenbank Aktionen
description: Aktion für die Datenbank ausführen.
tags:
- HowTo
- Aktionen
prev: ./database
---
# Datenbank Aktionen
![icons_odoo_apps](attachments/icons_odoo_apps.png)

### Cron-Lock entfernen

Diese Aktion entfernt Datenbank-Locks auf der `ir_cron`-Tabelle.

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Cron-Lock entfernen`\
Modell: `ir.actions.server`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
query = "SELECT pid FROM pg_locks WHERE relation = (SELECT oid FROM pg_class WHERE relname = 'ir_cron');"
env.cr.execute(query)            
pid = env.cr.fetchone()
if pid:
  query = "SELECT pg_terminate_backend(" + str(pid[0]) + ");"
  env.cr.execute(query)
```
