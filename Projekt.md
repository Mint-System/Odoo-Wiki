---
tags:
- HowTo
prev: ./
---
# Projekt
![icons_odoo_project](assets/icons_odoo_project.png)

Agiles Projektmanagement. Schön. Einfach. Open Source.

## Bereiche

| Bereich                                   | Beschreibung                         |
| ----------------------------------------- | ------------------------------------ |
| [Projekt Aktionen](Projekt%20Aktionen.md) | Aktionen für Projekt App einrichten. |

## Erweiterungen

| Erweiterung                                                               | Beschreibung                                           |
| ------------------------------------------------------------------------- | ------------------------------------------------------ |
| [Project timeline](Project%20Timeline.md)                                 | Timeline-Ansicht für Projektaufgaben.                  |
| [Project Task Dependencies](Project%20Task%20Dependencies.md)             | Projektaufgaben mit Abhängigkeiten.                    |
| [Project key](Project%20Key.md)                                           | Projektkürzel für Aufgabenbezeichnung.                 |
| [Business Requirement](Business%20Requirement.md)                         | Projektanforderungen erfassen und verknüpfen.          |
| [Project Task Default Stage](Project%20Task%20Default%20Stage.md)         | Standardstufen für Projektaufgaben.                    |
| [Project Templates](Project%20Templates.md)                               | Projekt aus Projektvorlage erstellen.                  |
| [Project Task Material](Project%20Task%20Material.md)                     | Liste von verbrauchten Materialien auf Projektaufgabe. |
| [Sequential Code for Tasks](Sequential%20Code%20for%20Tasks.md)           | Sequenznummer für Projektaufgaben.                     |
| [Project timesheet time control](Project%20timesheet%20time%20control.md) | Zeiterfassung auf Projektaufgabe starten.                                                       |

## Projekt anlegen

Aufgabenträger: [Projektleiter](Rollen#Projektleiter)

Öffnen Sie die App *Projekt* und klicken auf *Anlegen.* Im Dialog geben Sie eine Projektbezeichnung ein. Abhängig von der Odoo-Installation stehen diese Optionen zur Wahl:
* Zeiterfassung: Zeit auf Projekaufgaben rapportieren.
* Bill from Tasks: Anhand einer Projektaufgabe eine Rechnung erstellen
Wählen Sie die Option entsprechend der Projektkonfiguration.
* Timesheet Timer: Zeiterfassung kann direkt auf der Aufgabe gestartet werden.

## Stufen erstellen

::: tip
Mittels Projektstufen kann der Aufgabenstatus und deren Arbeitsfluss abgebildet werden. Eine Aufgaben durchläuft verschiedene Stufen bis Sie erledigt ist und archiviert werden kann.
:::

Navigieren Sie in die Kanban-Ansicht eines Projekts *Projekt > Projekt auswählen* und geben im Feld *Spaltentitel* die Stufenbezeichnung ein.

::: warning
Die erstellte Projektstufe ist nur für dieses Projekt sichtbar.
:::

## Globale Stufen zuordnen

Aufgabenträger: [Projektleiter](Rollen#Projektleiter)

::: tip
Projektstufen können mit mehreren Projekten geteilt werden.
:::

Wechseln Sie in den [Entwicklermodus](Einstellungen.md#Entwicklermodus%20aktivieren) und navigieren nach *Projekt > Konfiguration > Stufen*. Wählen Sie eine bestehende Stufe aus und klicken Sie auf *Bearbeiten*.

Im Auswahl-Feld *Projekt* können Sie ein bestehendes Projekt hinzufügen. Mit *Speichern* schliessen Sie den Vorgang ab. Wenn Sie das hinzugefügte Projekt öffnen wird nun die gewählte Stufe dargestellt.

## Projekt duplizieren

::: tip
Beim der Duplizierung eines Projekts werden deren Aufgaben und Stufen mitkopiert.
:::

Um ein Projekt zu duplizieren führen Sie folgende Aktion aus *Projekt > Projekt wählen > Übersicht > Smart-Link Projekt > Aktion > Duplizieren*.

![Projekt duplizieren](assets/Projekt%20duplizieren.gif)

## Gantt-Ansicht anzeigen

Die Gantt-Ansicht kann via *Projekt > Alle Aufgaben* angezeigt werden.

![](assets/Projekt%20Gantt-Ansicht%20aktiviert.png)

## Abrechnung für Projekt einrichten

Damit die auf einer Projektaufgabe erfassten Stunden abgerechnet werden können, müssen Sie bestimmte Einstellungen vornehmen. Öffnen Sie ein Projekt via *Projekt > Projekte > Kontext-Menü > Bearbeiten > Tab Einstellungen* und wählen Sie als erstes die Option *Abrechenbar*. Öffnen Sie den Tab *Abrechnung* und stellen Sie sicher, dass diese Optionen aktiviert sind:

* **Invoice Task to**: Stunden an einen oder mehrere Kunden verrechnen
* **Preiskalkulation**: Stundensatz des Mitarbeiters oder aus Verkaufsauftrag
* **Verkaufsauftrag**: Verlinkter Verkaufsauftrag mit Standardposition

Dazu ein Beispiel:

![](assets/Projekt%20Tab%20Abrechnung.png)