---
description: Ganz einfach SQL-basierte Berichte erstellen.
tags:
- HowTo
- OCA
prev: ./development
---
# BI SQL Editor
![icon_oca_app](assets/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `bi_sql_editor`\
Repository: <https://github.com/OCA/reporting-engine/tree/14.0/bi_sql_editor>

## Verwendung

### SQL-Bericht erstellen

Mit dem BI SQL Editor erstellen Sie ganz einfach SQL-Abfragen und die nötigen Einstellungen um diese als Ansicht in Odoo anzuzeigen.

Navigieren Sie nach *Einstellungen > Technisch > Datenbankstruktur > SQL Views* und wählen Sie *Anlegen*. Als Beispiel erstellen wir eine Abfage der kommenden Geburtstage aller Mitarbeitenden ohne den Jahrgang anzuzeigen.

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

Anschliessend klicken Sie auf *Validate SQL Expression*. Konnte die Abfrage erfolgreich validiert werden, klicken Sie auf *Create SQL View, Indexes and Models*.

Im Tab *Sicherheit* entfernen Sie den Standard-Gruppeneintrag und fügen *User types / Interner Benutzer* hinzu. Damit wird die Ansicht für alle Benutzer sichtbar. 

Bestätigen Sie den Vorgang mit *Create UI*. Im Tab *Extra Information* werden die erstellten UI-Elemente und Einträge verlinkt.

![](assets/BI%20SQL%20Editor%20Ansicht%20erstellt.png)