---
tags:
- HowTo
---
# BI SQL Editor
![icon_oca_app](assets/icon_oca_app.png)

Ganz einfach SQL-basierte Berichte erstellen.

Technischer Name: `mass_editing`\
Repository: <https://github.com/OCA/reporting-engine/tree/13.0/bi_sql_editor>

## SQL-Bericht erstellen

Mit dem BI SQL Editor erstellen sie SQL-Abfragen und die nötigen Einstellungen, damit diese in Odoo ersichtlich ist.

Navigieren sie nach *Einstellungen > Technisch > Datenbankstruktur > SQL Views* und wählen sie *Anlegen*. Als Beispiel erstellen wir eine Abfage aller kommenden Geburtstage der Mitarbeitenden ohne das Jahr anzuzeigen.

Füllen sie die Felder wie folgt aus:

Bezeichnung: `Geburtstage`\
Technische Bezeichnung: `birthday_report`\
View Order: `tree`\
SQL Query:

```sql
SELECT
    name as x_name,
	to_char( birthday, '2021-MM-DD') as x_birthday 
FROM hr_employee 
WHERE birthday is not NULL and to_char(birthday,'MMDD') > to_char(now(),'MMDD')
ORDER BY to_char(birthday,'MMDD')
```

Anschliessend klicken sie auf *Validate SQL Expression*. Konnte die Abfrage erfolgreich validiert werden, klicken sie auf *Create SQL View, Indexes and Models*.

Im Tab *Sicherheit* entfernen sie den Gruppeneintrag und fügen *User types / Interner Benutzer* hinzu, damit die Ansicht für alle Benutzer ersichtlich ist. 

Bestätigen sie den Vorgang mit *Create UI*. Im *Extra Information* werden die erstellten UI-Ansichten und Einträge angezeigt.

![](assets/BI%20SQL%20Editor%20Ansicht%20erstellt.png)