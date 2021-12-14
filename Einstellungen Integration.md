---
tags:
- HowTo
---
[🔗 Einstellungen](Einstellungen.md)
# Einstellungen Integration
![icons_odoo_settings](assets/icons_odoo_settings.png)

Odoo mit Plattformen von Dritten integrieren.

## OAuth Benutzername festlegen

Wurde ein OAuth Provider konfiguriert, kann jedem Odoo Benutzer ein bestimmer OAuth Benutzername hinterlegt werden. Führen sie diese Aktionen aus *Einstellungen > Benutzer und Unternehmen > Benutzer > Benutzer wählen > Tab Oauth öffnen*. Im Feld *OAuth User ID* können sie den Benutzernamen für das Login festlegen.

![](assets/Integration%20OAuth%20Benutzername.png)

## Catchall-Alias anpassen

Unter der Catchall-Mail-Adresse versendet Odoo Nachrichten. Auf diese Adresse können die Empfänger antworten und Odoo kann die eingegangenen Nachrichten verarbeiten.

Falls sie die Adresse ändern möchten, öffnen sie *Einstellungen > Technisch > Parameter > Systemparameter* und passen den Wert für `mail.catchall.alias` an.

::: tip
Bestimmte Mail-Hoster erlauben keine Mail-Aliase für *catchall* und *no-reply*.