---
title: Datenbereinigung
description: Die Datenqualität ganz einfach verbessern.
tags:
- HowTo
prev: ./
---
# Datenbereinigung
![icons_odoo_data_cleaning](attachments/icons_odoo_data_cleaning.png)

{{ $frontmatter.description }}

## Verwendung

### Duplikate in Kontakte bereinigen

Öffnen Sie *Data Cleaning > Konfiguration > Regeln > Deduplizierung* und zeigen Sie den Eintrag *Contact*. Hier können Sie einstellen unter welchen Bedingungen Kontakt-Einträge als Duplikate erkannt werden sollen.

![](attachments/Data%20Cleaning%20Eintrag.png)

Suchen Sie nach Duplikaten mit *Deduplizieren*.

![](attachments/Data%20Cleaning%20Duplikat.png)

Mit der Aktion *Zusammenführen* können Sie erkannten Duplikate bereinigt werden.

::: warning
Der Bereinigungsvorgang berücksichtigt die Verknüpftung der Daten. In der Spalte *Verwendet bei* werden die verlinkten Objekte angezeigt.
:::

### Odoo Bot Mail-Adresse ändern

Der Odoo Bot verschickt unter der E-Mail-Adresse `odoobot@example.com` Informations-Mails zum System.

![](attachments/Einstellungen%20OdooBot%20Mail.png)

Wenn wie die Absender-Adresse ändern möchten, öffnen Sie *Kontakt* und wählen *Filter > Archiviert*. Nun erscheint der Kontakt-Eintrag *OdooBot* und Sie können dort die Mail-Adresse ändern.
