---
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- HowTo
- Drittanbieter
prev: ./development
---
# Mail Server Filter
![icon_oms_box](assets/icon_oms_box.png)

Eingehende und ausgehende Mail-Server anhand Datenbanknamen filtern.

Technischer Name: `mail_server_filter`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Server-Tools/tree/16.0/mail_server_filter>

## Verwendung

### Datenbank-Filter für ausgehender Mail-Server festlegen 

Navigieren Sie nach *Einstellungen > Technisch > Ausgehender Mail Server* und öffnen Sie einen Eintrag.  Im Feld *Database Filter* können Sie den Namen der Datenbank oder kommagetrennt mehrere Datenbanknamen eintragen. Ist ein Wert auf diesem Feld gesetzt, wird beim Versand von E-Mails geprüft, ob der Datenbankname im ausgehenden Mail-Server enthalten ist.

::: tip
Der Filter wird auch bei der geplanten Aktion zum Abrufen der eigehenden E-Mails angewendet.
:::

::: warning
Wenn ein E-Mail versendet wird, aber kein ausgehender Mail-Server verwendet werden kann, wirft Odoo die Fehlermeldung `Connection failed (outgoing mail server problem)`.
:::

### Datenbank-Filter für eingehende Mail-Server festlegen 

Navigieren Sie nach *Einstellungen > Technisch > Eingehende Mail Server* und öffnen Sie einen Eintrag.  Im Feld *Database Filter* können Sie den Namen der Datenbank oder kommagetrennt mehrere Datenbanknamen eintragen. Ist ein Wert auf diesem Feld gesetzt, wird beim Empfang von E-Mails geprüft, ob der Datenbankname im eingehenden Mail-Server enthalten ist.

::: tip
Andere Filter wie der *From Filter* wird im Anschluss des *Database Filter* geprüft.
:::