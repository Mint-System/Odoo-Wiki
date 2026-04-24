---
description: Gruppenberechtigungen mit Benutzer-Rollen verwalten.
forge: github.com
kind: howto
name: base_user_role
partner: OCA
prev: ./settings
repo: OCA/server-backend
title: User roles
versions:
- '19.0'
- '18.0'
- '17.0'
- '16.0'
- '15.0'
- '14.0'
---


# User roles

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

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
