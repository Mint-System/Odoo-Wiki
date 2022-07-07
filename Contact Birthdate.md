---
tags:
- HowTo
- OCA
prev: ./kontakte
---
# Contact's birthdate
![icon_oca_app](assets/icon_oca_app.png)

Geburtstag bei Kontakten speichern für tolle Erinnerungen.

Technischer Name: `partner_contact_birthdate`\
Repository: <https://github.com/OCA/partner-contact/tree/14.0/partner_contact_birthdate>

## Geburtsdatum für Kontakt speichern

Öffnen Sie einen Kontakt und zeigen Sie den Tab *Persönliche Auskunft*. Bearbeiten Sie den Kontakt und legen Sie das Geburtstdatum im Feld *Geburtsdatum* fest. Odoo berechnet dazu das Alter.

![](assets/Contact%20Birthdate%20Tab%20mit%20Geburtsdatum.png)

## Geburtstagskalender für Kontakte erstellen

Mit dieser Erweiterung können Sie Geburtstage bei Kontakten hinterlegen. Um einen fortlaufenden Kalender der Geburtstage zu generieren, müssen Sie die App [BI SQL Editor](BI%20SQL%20Editor.md) installieren. Damit lassen sich einfach Datenbankabfragen als Odoo-Ansichten darstellen. Dazu ein Beispiel für eine einfache Geburtstagsliste:

Bezeichnung: `Geburtstag Kontakte`\
Technische Bezeichnung: `contact_birthday_report`\
View Order: `tree`\
SQL Query:

```sql
SELECT
    name as x_name,
	to_char( birthdate_date, '2021-MM-DD') as x_birthday,
	EXTRACT(YEAR from AGE(birthdate_date)) as x_age
FROM res_partner 
WHERE birthdate_date is not NULL and to_char(birthdate_date,'MMDD') > to_char(now() - INTERVAL '4 DAY','MMDD')
ORDER BY to_char(birthdate_date,'MMDD')
```

Feldtyp für `x_age` von `float` auf `integer` ändern.