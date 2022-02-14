---
tags:
- HowTo
prev: ./
---
# Data Cleaning
![](assets/icon_odoo_data_cleaning.png)

Die Datenqualität ganz einfach verbessern.

## Duplikate in Kontakte bereinigen

Öffnen sie *Data Cleaning > Konfiguration > Regeln > Deduplizierung* und zeigen sie den Eintrag *Contact*. Hier können sie einstellen unter welchen Bedingungen Kontakt-Einträge als Duplikate erkannt werden sollen.

![](assets/Data%20Cleaning%20Eintrag.png)

Suchen sie nach Duplikaten mit *Deduplizieren*.

![](assets/Data%20Cleaning%20Duplikat.png)

Mit der Aktion *Zusammenführen* können sie erkannten Duplikate bereinigt werden.

::: warning
Der Bereinigungsvorgang berücksichtigt die Verknüpftung der Daten. In der Spalte *Verwendet bei* werden die verlinkten Objekte angezeigt.
:::

## Odoo Bot Mail-Adresse ändern

Der Odoo Bot verschickt unter der E-Mail-Adresse `odoobot@example.com` Informations-Mails zum System.

![](assets/Einstellungen%20OdooBot%20Mail.png)

Wenn wie die Absender-Adresse ändern möchten, öffnen sie *Kontakt* und wählen *Filter > Archiviert*. Nun erscheint der Kontakt-Eintrag *OdooBot* und sie können dort die Mail-Adresse ändern.