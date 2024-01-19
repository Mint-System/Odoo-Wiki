---
title: User roles
description: Gruppenberechtigungen mit Benutzer-Rollen verwalten.
tags:
- HowTo
- OCA
prev: ./settings
---
# User roles
![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `base_user_role`\
Repository: <https://github.com/OCA/server-backend/tree/16.0/base_user_role>

## Verwendung

### Benutzer-Rolle erstellen

Navigieren Sie nach *Einstellungen > Benutzer und Gruppen > Roles* und erstellen Sie einen neuen Eintrag. Vergeben Sie einen Namen und fügen Sie im Tab *Groups* die Gruppen hinzu, welche die Benutzer mit der Rolle erhalten sollen. Im Tab *Benutzer* wählen Sie die Benutzer aus, welche die Rollen erhalten.

::: warning
Die Zuweisung von Rollen überschreibt die bestehenden Gruppenzugehörigkeiten des Benutzers. 
:::

### Rolle an Benutzer hinzufügen

Navigieren Sie nach *Einstellungen > Benutzer und Gruppen > Benutzer* und zeigen Sie einen Benutzer an. Im Tab *Roles* können Sie bestehende Rollen dem Benutzer hinzufügen.

### Benutzer an Rolle hinzufügen

Navigieren Sie nach *Einstellungen > Benutzer und Gruppen > Roles* und zeigen Sie eine Rolle an. Fügen Sie im Tab *Benutzer* die Benutzer der Rolle hinzu.