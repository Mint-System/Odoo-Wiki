---
title: BI SQL Editor
description: Ganz einfach SQL-basierte Berichte erstellen.
kind: howto
partner: OCA
prev: ./development
---

# BI SQL Editor

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `bi_sql_editor`\
Repository: <https://github.com/OCA/reporting-engine/tree/18.0/bi_sql_editor>

## Verwendung

### SQL-Bericht erstellen

Mit dem BI SQL Editor erstellen Sie ganz einfach SQL-Abfragen und die nötigen Einstellungen um diese als Ansicht in Odoo anzuzeigen.

Navigieren Sie nach _Einstellungen > Technisch > Datenbankstruktur > SQL Views_ und wählen Sie _Neu_. Als Beispiel erstellen wir eine Abfage der kommenden Geburtstage aller Mitarbeitenden ohne den Jahrgang anzuzeigen.

Füllen Sie die Felder wie folgt aus:

Bezeichnung: `Geburtstage`\
Technische Bezeichnung: `birthday_report`\
View Order: `tree`\
SQL Query:

```sql
SELECT
    name as x_name,
	to_char(birthday, '2021-MM-DD') as x_birthday
FROM hr_employee
WHERE active = True and birthday is not NULL and to_char(birthday,'MMDD') > to_char(now() - INTERVAL '4 DAY','MMDD')
ORDER BY to_char(birthday,'MMDD')
```

Anschliessend klicken Sie auf _Validate SQL Expression_. Konnte die Abfrage erfolgreich validiert werden, klicken Sie auf _Create SQL View, Indexes and Models_.

Im Tab _Sicherheit_ entfernen Sie den Standard-Gruppeneintrag und fügen _User types / Interner Benutzer_ hinzu. Damit wird die Ansicht für alle Benutzer sichtbar.

Bestätigen Sie den Vorgang mit _Create UI_. Im Tab _Extra Information_ werden die erstellten UI-Elemente und Einträge verlinkt.

![](attachments/BI%20SQL%20Editor%20Ansicht%20erstellt.png)
