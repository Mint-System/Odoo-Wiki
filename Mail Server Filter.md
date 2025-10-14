---
title: Mail Server Filter
description: Eingehende und ausgehende Mail-Server anhand Datenbanknamen filtern.
kind: howto
partner: Mint-System
prev: ./base
---

# Mail Server Filter

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `mail_server_filter`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Server-Tools/tree/18.0/mail_server_filter>

## Verwendung

### Datenbank-Filter für ausgehender Mail-Server festlegen

Navigieren Sie nach _Einstellungen > Technisch > Ausgehender Mail Server_ und öffnen Sie einen Eintrag. Im Feld _Database Filter_ können Sie den Namen der Datenbank oder kommagetrennt mehrere Datenbanknamen eintragen. Ist ein Wert auf diesem Feld gesetzt, wird beim Versand von E-Mails geprüft, ob der Datenbankname im ausgehenden Mail-Server enthalten ist.

::: tip
Der Filter wird auch bei der geplanten Aktion zum Abrufen der eigehenden E-Mails angewendet.
:::

::: warning
Wenn ein E-Mail versendet wird, aber kein ausgehender Mail-Server verwendet werden kann, wirft Odoo die Fehlermeldung `Connection failed (outgoing mail server problem)`.
:::

### Datenbank-Filter für eingehende Mail-Server festlegen

Navigieren Sie nach _Einstellungen > Technisch > Eingehende Mail Server_ und öffnen Sie einen Eintrag. Im Feld _Database Filter_ können Sie den Namen der Datenbank oder kommagetrennt mehrere Datenbanknamen eintragen. Ist ein Wert auf diesem Feld gesetzt, wird beim Empfang von E-Mails geprüft, ob der Datenbankname im eingehenden Mail-Server enthalten ist.

::: tip
Andere Filter wie der _From Filter_ wird im Anschluss des _Database Filter_ geprüft.
:::
