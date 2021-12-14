---
tags:
- HowTo
---
[🔗 Home](/)
# Projekt
![icons_odoo_project](assets/icons_odoo_project.png)

Agiles Projektmanagement. Schön. Einfach. Open Source.

| Erweiterung                                               | Beschreibung                           |
| --------------------------------------------------------- | -------------------------------------- |
| [Project timeline](Project%20Timeline.md)                   | Timeline-Ansicht für Projektaufgaben.  |
| [Project Task Dependencies](Project%20Task%20Dependencies.md) | Projektaufgaben mit Abhängigkeiten.    |
| [Project key](Project%20Key.md)                             | Projektkürzel für Aufgabenbezeichnung. |


## Projekt anlegen

Aufgabenträger: [Projektleiter](Rollen#Projektleiter)

Öffnen sie die App *Projekt* und klicken auf *Anlegen.* Im Dialog geben sie eine Projektbezeichnung ein. Abhängig von der Odoo-Installation stehen diese Optionen zur Wahl:
* Zeiterfassung: Zeit auf Projekaufgaben rapportieren.
* Bill from Tasks: Anhand einer Projektaufgabe eine Rechnung erstellen
Wählen sie die Option entsprechend der Projektkonfiguration.
* Timesheet Timer: Zeiterfassung kann direkt auf der Aufgabe gestartet werden.

## Stufen erstellen

::: tip
Mittels Projektstufen kann der Aufgabenstatus und deren Arbeitsfluss abgebildet werden. Eine Aufgaben durchläuft verschiedene Stufen bis sie erledigt ist und archiviert werden kann.
:::

Navigieren sie in die Kanban-Ansicht eines Projekts *Projekt > Projekt auswählen* und geben im Feld *Spaltentitel* die Stufenbezeichnung ein.

::: warning
Die erstellte Projektstufe ist nur für dieses Projekt sichtbar.
:::

## Globale Stufen zuordnen

Aufgabenträger: [Projektleiter](Rollen#Projektleiter)

::: tip
Projektstufen können mit mehreren Projekten geteilt werden.
:::

Wechseln sie in den [Entwicklermodus](Einstellungen.md#Entwicklermodus%20aktivieren) und navigieren nach *Projekt > Konfiguration > Stufen*. Wählen sie eine bestehende Stufe aus und klicken sie auf *Bearbeiten*.

Im Auswahl-Feld *Projekt* können sie ein bestehendes Projekt hinzufügen. Mit *Speichern* schliessen sie den Vorgang ab. Wenn sie das hinzugefügte Projekt öffnen wird nun die gewählte Stufe dargestellt.

## Projekt duplizeren

::: tip
Beim der Duplizierung eines Projekts werden deren Aufgaben und Stufen mitkopiert.
:::

Um ein Projekt zu duplizieren führen sie folgende Aktion aus *Projekt > Projekt wählen > Übersicht > Smart-Link Projekt > Aktion > Duplizieren*.

![Projekt duplizieren](assets/Projekt%20duplizieren.gif)

## Gantt-Ansicht anzeigen

Die Gantt-Ansicht kann via *Projekt > Alle Aufgaben* angezeigt werden.

![](assets/Projekt%20Gantt-Ansicht%20aktiviert.png)

## Abrechnung für Projekt einrichten

Damit die auf einer Projektaufgabe erfassten Stunden abgerechnet werden können, müssen sie bestimmte Einstellungen vornehmen. Öffnen sie ein Projekt via *Projekt > Projekte > Kontext-Menü > Bearbeiten > Tab Einstellungen* und wählen sie als erstes die Option *Abrechenbar*. Öffnen sie den Tab *Abrechnung* und stellen sie sicher, dass diese Optionen aktiviert sind:

* **Invoice Task to**: Stunden an einen oder mehrere Kunden verrechnen
* **Preiskalkulation**: Stundensatz des Mitarbeiters oder aus Verkaufsauftrag
* **Verkaufsauftrag**: Verlinkter Verkaufsauftrag mit Standardposition

Dazu ein Beispiel:

![](assets/Projekt%20Tab%20Abrechnung.png)