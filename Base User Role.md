---
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- HowTo
- OCA
prev: ./einstellungen
---
# User roles
![icon_oca_app](assets/icon_oca_app.png)

Gruppenberechtigungen mit Benutzer-Rollen verwalten.

Technischer Name: `base_user_role`\
Repository: <https://github.com/OCA/server-backend/tree/14.0/base_user_role>

## Verwendung

### Benutzer-Rolle erstellen

Navigieren Sie nach *Einstellungen > Benutzer und Gruppen > Roles* und erstellen Sie einen neuen Eintrag. Vergeben Sie einen Namen und fügen Sie im Tab *Groups* die Gruppen hinzu, welche die Benutzer mit der Rolle erhalten sollen. Im Tab *Benutzer* wählen Sie die Benutzer aus, welche die Rollen erhalten.

### Rolle an Benutzer hinzufügen

Navigieren Sie nach *Einstellungen > Benutzer und Gruppen > Benutzer* und zeigen Sie einen Benutzer an. Im Tab *Roles* können Sie bestehende Rollen dem Benutzer hinzufügen.

::: warning
Die Zuweisung von Rollen überschreibt die bestehenden Gruppenzugehörigkeiten des Benutzers. 
:::