---
title: Datenbank Aktionen
description: Aktion für die Datenbank ausführen.
kind: howto
tags:
    - Actions
prev: ./database
---

# Datenbank Aktionen

![icons_odoo_apps](attachments/icons_odoo_apps.png)

## Aktionen

### Cron-Lock anzeigen

Diese Aktion zeigt die Datenbank-Locks auf der `ir_cron`-Tabelle.

Navigieren Sie nach _Einstellungen > Technisch > Server-Aktionen_ und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Cron-Lock anzeigen`\
Modell: `ir.actions.server`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld _Python Code_:

```python
query = "SELECT * FROM pg_locks WHERE relation = (SELECT oid FROM pg_class WHERE relname = 'ir_cron');"
env.cr.execute(query)
res = env.cr.fetchall()
raise UserError(["Result", res])
```

### Cron-Lock entfernen

Diese Aktion entfernt Datenbank-Locks auf der `ir_cron`-Tabelle.

Navigieren Sie nach _Einstellungen > Technisch > Server-Aktionen_ und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Cron-Lock entfernen`\
Modell: `ir.actions.server`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld _Python Code_:

```python
query = "SELECT pid FROM pg_locks WHERE relation = (SELECT oid FROM pg_class WHERE relname = 'ir_cron');"
env.cr.execute(query)
pid = env.cr.fetchone()
if pid:
  query = "SELECT pg_terminate_backend(" + str(pid[0]) + ");"
  env.cr.execute(query)
```

## Geplante Aktionen

### Basis: Auto-Vacuum für interne Daten

Diese geplante Aktion ruft alle Methoden mit dem `@api.autovacuum` Decorator auf. Diese Methoden haben den Prefix `_gc` für _Garbage Collection_. Sie entfernen veraltete oder unbrauchbare Datenbankeinträge von ausgewählten Datenmodellen. Damit bleibt die Datenbank kompakt.
