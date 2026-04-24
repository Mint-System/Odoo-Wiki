---
description: Aktionen zur Bearbeitung von mehreren Einträgen erstellen.
forge: github.com
kind: howto
name: server_action_mass_edit
prev: ./development
repo: OCA/Server-UX
tags:
- OCA
title: Mass Editing
versions:
- '18.0'
- '17.0'
- '16.0'
---


# Mass Editing

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Aktion zur Massenbearbeitung erstellen

Navigieren Sie nach _Einstellungen > Technisch > Serveraktionen_ und erstellen Sie einen neuen Eintrag. Dazu ein Beispiel:

- **Name**: Aufgabe aktualisieren
- **Modell**: `project.task`

Wählen Sie als _Folgeaktion_ den Wert _Massenbearbeitung Datensätze_. Im Tab _Felder_ fügen Sie die Modell-Felder hinzu, die im Dialog zur Massenbearbeitung bearbeitet werden können.
