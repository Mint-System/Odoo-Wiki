---
title: Datenbereinigung
description: Die Datenqualität ganz einfach verbessern.
kind: howto
prev: ./
partner: Odoo S.A.
---

# Datenbereinigung

![icons_odoo_data_cleaning](attachments/icons_odoo_data_cleaning.png)

{{ $frontmatter.description }}

## Verwendung

### Duplikate in Kontakte bereinigen

Öffnen Sie _Data Cleaning > Konfiguration > Regeln > Deduplizierung_ und zeigen Sie den Eintrag _Contact_. Hier können Sie einstellen unter welchen Bedingungen Kontakt-Einträge als Duplikate erkannt werden sollen.

![](attachments/Data%20Cleaning%20Eintrag.png)

Suchen Sie nach Duplikaten mit _Deduplizieren_.

![](attachments/Data%20Cleaning%20Duplikat.png)

Mit der Aktion _Zusammenführen_ können Sie erkannten Duplikate bereinigt werden.

::: warning
Der Bereinigungsvorgang berücksichtigt die Verknüpfung der Daten. In der Spalte _Verwendet bei_ werden die verlinkten Objekte angezeigt.
:::

### Odoo Bot Mail-Adresse ändern

Der Odoo Bot verschickt unter der E-Mail-Adresse `odoobot@example.com` Informations-Mails zum System.

![](attachments/Einstellungen%20OdooBot%20Mail.png)

Wenn wie die Absender-Adresse ändern möchten, öffnen Sie _Kontakt_ und wählen _Filter > Archiviert_. Nun erscheint der Kontakt-Eintrag _OdooBot_ und Sie können dort die Mail-Adresse ändern.

## Benachrichtigung

### Benachrichtigung "Zusammenzuführende Duplikate" deaktivieren

Unter _Datenbereinigung > Konfiguration > Deduplizierung_ finden Sie die Deduplizierungsregeln. Zeigen Sie eine Regeln an. Im Feld _Benutzer benachrichtigen_ finden Sie die Benutzer, welche eine Benachrichtigung für diese Regeln erhalten. Entfernen Sie die gewünschten Benutzer.
