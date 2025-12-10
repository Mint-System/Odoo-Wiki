---
title: User roles
description: Gruppenberechtigungen mit Benutzer-Rollen verwalten.
kind: howto
partner: OCA
prev: ./settings
---

# User roles

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `base_user_role`\
Repository: <https://github.com/OCA/server-backend/tree/19.0/base_user_role>

## Verwendung

### Benutzer-Rolle erstellen

Navigieren Sie nach _Einstellungen > Benutzer und Gruppen > Roles_ und erstellen Sie einen neuen Eintrag. Vergeben Sie einen Namen und fügen Sie im Tab _Groups_ die Gruppen hinzu, welche die Benutzer mit der Rolle erhalten sollen. Im Tab _Benutzer_ wählen Sie die Benutzer aus, welche die Rollen erhalten.

::: warning
Die Zuweisung von Rollen überschreibt die bestehenden Gruppenzugehörigkeiten des Benutzers.
:::

### Rolle an Benutzer hinzufügen

Navigieren Sie nach _Einstellungen > Benutzer und Gruppen > Benutzer_ und zeigen Sie einen Benutzer an. Im Tab _Roles_ können Sie bestehende Rollen dem Benutzer hinzufügen.

### Benutzer an Rolle hinzufügen

Navigieren Sie nach _Einstellungen > Benutzer und Gruppen > Roles_ und zeigen Sie eine Rolle an. Fügen Sie im Tab _Benutzer_ die Benutzer der Rolle hinzu.
