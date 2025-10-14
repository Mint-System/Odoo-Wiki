---
title: Mass Editing
description: Aktionen zur Bearbeitung von mehreren Einträgen erstellen.
kind: howto
tags:
    - OCA
prev: ./development
---

# Mass Editing

![icon_oca_app](../attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `server_action_mass_edit`\
Repository: <https://github.com/OCA/Server-UX/tree/18.0/server_action_mass_edit>

## Verwendung

### Aktion zur Massenbearbeitung erstellen

Navigieren Sie nach _Einstellungen > Technisch > Serveraktionen_ und erstellen Sie einen neuen Eintrag. Dazu ein Beispiel:

- **Name**: Aufgabe aktualisieren
- **Modell**: `project.task`

Wählen Sie als _Folgeaktion_ den Wert _Massenbearbeitung Datensätze_. Im Tab _Felder_ fügen Sie die Modell-Felder hinzu, die im Dialog zur Massenbearbeitung bearbeitet werden können.
