---
title: Mass Editing
description: Mühelos mehrere Einträge auf einmal bearbeiten.
kind: howto
tags:
- OCA
prev: ./development
---
# Mass Editing
![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `mass_editing`\
Repository: <https://github.com/OCA/server-ux/tree/15.0/mass_editing>

## Verwendung

### Aktion Massenbearbeitung hinzufügen

Navigieren Sie nach *Einstellungen > Technisch > Server-Aktionen* und klicken auf *Neu*.

Geben Sie im Feld *Name der Aktion* eine für die Aktion passende Bezeichung ein. Wählen Sie im Feld *Modell* das Datenmodell wo die Aktion verfügbar sein soll. Anschliessend wählen Sie im Feld *Folgeaktion* die Option *Mass Edit Records*.

In der Tabelle *Fields* können Sie nun die Felder, welche im Dialog der Massenbearbeitung zur Verfügung stehen sollen hinzufügen. Im Tab *Message* können Sie eine optionale Nachricht für den Bearbeitungs-Dialog hinterlegen und im Tab *Sicherheit* können Sie die Aktion auf bestimmte Gruppen einschränken.

::: warning
Im Dialog der Massenbearbeitung werden für die Felder keine Client-Validierungen durchgeführt. Beispielsweise werden Konfigurationen ignoriert, die ein Feld aufgrund des Status lesbar machen. 
:::

### Massenbeearbeitung ausführen

Die Massenbearbeitung von Dokumenten führen Sie wie folgt aus:

![Massenverarbeitung ausführen](attachments/Massenverarbeitung%20ausführen.gif)

### Massenbearbeitung für Projektaufgaben erstellen

Navigieren Sie nach *Einstellungen > Technisch > Server-Aktionen* und klicken auf *Neu*. Erstellen Sie einen Eintrag mit diesen Angaben:

* **Name der Aktion**: Aufgaben aktualiseren
* **Modell**: `project.task`
* **Folgeaktion**: Mass Edit Recoreds
* **Felder**:
	* **Name**: Project Phase (project.task)

Speichern Sie den Eintrag mit *Kontextuelle Aktion Erstellen*.
