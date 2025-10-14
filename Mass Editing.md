---
title: Mass Editing
description: Mühelos mehrere Einträge auf einmal bearbeiten.
kind: howto
partner: OCA
prev: ./development
---

# Mass Editing

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `mass_editing`\
Repository: <https://github.com/OCA/server-ux/tree/15.0/mass_editing>

::: warning
Diese App ist veraltet. Wir empfehlen die App [Mass Editing](Server%20Action%20Mass%20Edit.md) zu verwenden.
#deprecated
:::

## Verwendung

### Aktion Massenbearbeitung hinzufügen

Navigieren Sie nach _Einstellungen > Technisch > Server-Aktionen_ und klicken auf _Neu_.

Geben Sie im Feld _Name der Aktion_ eine für die Aktion passende Bezeichung ein. Wählen Sie im Feld _Modell_ das Datenmodell wo die Aktion verfügbar sein soll. Anschliessend wählen Sie im Feld _Folgeaktion_ die Option _Mass Edit Records_.

In der Tabelle _Fields_ können Sie nun die Felder, welche im Dialog der Massenbearbeitung zur Verfügung stehen sollen hinzufügen. Im Tab _Message_ können Sie eine optionale Nachricht für den Bearbeitungs-Dialog hinterlegen und im Tab _Sicherheit_ können Sie die Aktion auf bestimmte Gruppen einschränken.

::: warning
Im Dialog der Massenbearbeitung werden für die Felder keine Client-Validierungen durchgeführt. Beispielsweise werden Konfigurationen ignoriert, die ein Feld aufgrund des Status lesbar machen.
:::

### Massenbeearbeitung ausführen

Die Massenbearbeitung von Dokumenten führen Sie wie folgt aus:

![Massenverarbeitung ausführen](attachments/Massenverarbeitung%20ausführen.gif)

### Massenbearbeitung für Projektaufgaben erstellen

Navigieren Sie nach _Einstellungen > Technisch > Server-Aktionen_ und klicken auf _Neu_. Erstellen Sie einen Eintrag mit diesen Angaben:

- **Name der Aktion**: Aufgaben aktualiseren
- **Modell**: `project.task`
- **Folgeaktion**: Mass Edit Recoreds
- **Felder**:
    - **Name**: Phase (project.task)

Speichern Sie den Eintrag mit _Kontextuelle Aktion Erstellen_.
