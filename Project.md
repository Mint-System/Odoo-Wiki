---
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- HowTo
prev: ./
---
# Projekt
![icons_odoo_project](assets/icons_odoo_project.png)

Agiles Projektmanagement. Schön. Einfach. Open Source.

Website: <https://www.odoo.com/de_DE/app/project>

## Bereiche

| Bereich                                                   | Beschreibung                                   |
| --------------------------------------------------------- | ---------------------------------------------- |
| [Projekt Aktionen](Project%20Actions.md)                  | Aktionen für Projekt App einrichten.           |
| [Projekt Datenmanagement](Project%20Data%20Management.md) | Daten zu Projekte exportieren und importieren. |

## Erweiterungen

| Erweiterung                                                                       | Beschreibung                                             |
| --------------------------------------------------------------------------------- | -------------------------------------------------------- |
| [Business Requirement](Business%20Requirement.md)                                 | Projektanforderungen erfassen und verknüpfen.            |
| [Project Key Link Type](Project%20Key%20Link%20Type.md)                           | Projektnummer anhand Projekttyp erstellen.               |
| [Project Key](Project%20Key.md)                                                   | Projektkürzel für Aufgabenbezeichnung.                   |
| [Project Phase](Project%20Phase.md)                                               | Projektaufgaben mit Projektphasen verwalten.             |
| [Project Task All Menu](Project%20Task%20All%20Menu.md)                           | Menu Alle Aufgaben hinzufügen.                           |
| [Project Task Default Stage](Project%20Task%20Default%20Stage.md)                 | Standardstufen für Projektaufgaben.                      |
| [Project Task Dependencies](Project%20Task%20Dependencies.md)                     | Projektaufgaben mit Abhängigkeiten.                      |
| [Project Task Dependency Counter](Project%20Task%20Dependency%20Counter.md)       | Smart Button für abhängige Aufgaben.                     |
| [Project Task Material](Project%20Task%20Material.md)                             | Liste von verbrauchten Materialien auf Projektaufgabe.   |
| [Project Templates](Project%20Templates.md)                                       | Projekt aus Projektvorlage erstellen.                    |
| [Project Timeline Task Dependencies](Project%20Timeline%20Task%20Dependencies.md) | Timeline-Ansicht für Projektaufgaben mit Abhängigkeiten. |
| [Project Timeline](Project%20Timeline.md)                                         | Timeline-Ansicht für Projektaufgaben.                    |
| [Project Type](Project%20Type.md)                                                 | Projekte nach Typ verwalten.                             |
| [Project Timesheet Time Control](Project%20Timesheet%20Time%20Control.md)         | Zeiterfassung auf Projektaufgabe starten.                |
| [Sequential Code for Tasks](Sequential%20Code%20for%20Tasks.md)                   | Sequenznummer für Projektaufgaben.                       |

## Verwaltung

### Projekt anlegen

Öffnen Sie die App *Projekt* und klicken auf *Anlegen.* Im Dialog geben Sie eine Projektbezeichnung ein. Abhängig von der Odoo-Installation stehen diese Optionen zur Wahl:

* **Zeiterfassung**: Zeit auf Projekaufgaben rapportieren.
* **Bill from Tasks**: Anhand einer Projektaufgabe eine Rechnung erstellen
Wählen Sie die Option entsprechend der Projektkonfiguration.
* **Timesheet Timer**: Zeiterfassung kann direkt auf der Aufgabe gestartet werden.

### Aufgaben anzeigen

Wählen Sie *Projekt* und klicken Sie auf eine Projekt-Kachel. Sie sehen nun die Aufgaben gefiltert anhand es ausgewählten Projekts. Klicken Sie auf eine Aufgabe um die Details zu sehen.

### Meine Aufgaben anzeigen

Wählen Sie *Projekt > Aufgaben*. Hier sehen Sie alle Aufgaben, die ihnen zugeordnet wurden.

### Aufgabenstufen erstellen

::: tip
Mittels Aufgabenstufen kann der Aufgabenstatus und deren Arbeitsfluss abgebildet werden. Eine Aufgaben durchläuft verschiedene Stufen bis Sie erledigt ist und archiviert werden kann.
:::

Navigieren Sie in die Kanban-Ansicht eines Projekts *Projekt > Projekt auswählen* und geben im Feld *Spaltentitel* die Stufenbezeichnung ein.

::: warning
Die erstellte Aufgabenstufen ist nur für dieses Projekt sichtbar.
:::

### Globale Aufgabenstufen erstellen zuordnen

::: tip
Aufgabenphasen können mit mehreren Projekten geteilt werden.
:::

Wechseln Sie in den [Entwicklermodus](Settings.md#Entwicklermodus%20aktivieren) und navigieren nach *Projekt > Konfiguration > Aufgabenphasen*. Wählen Sie eine bestehende Phase aus und klicken Sie auf *Bearbeiten*.

Im Auswahl-Feld *Projekt* können Sie ein bestehendes Projekt hinzufügen. Mit *Speichern* schliessen Sie den Vorgang ab. Wenn Sie das hinzugefügte Projekt öffnen wird nun die gewählte Stufe dargestellt.

### Projekt duplizieren

::: tip
Beim der Duplizierung eines Projekts werden deren Aufgaben und Phasen mitkopiert.
:::

Um ein Projekt zu duplizieren führen Sie folgende Aktion aus *Projekt > Projekt wählen > Übersicht > Smart-Link Projekt > Aktion > Duplizieren*.

![Projekt duplizieren](assets/Projekt%20duplizieren.gif)

## Auswertung

### Gantt-Ansicht anzeigen

Die Gantt-Ansicht kann via *Projekt > Alle Aufgaben* angezeigt werden.

![](assets/Projekt%20Gantt-Ansicht%20aktiviert.png)

## Abrechnung

### Abrechnung für Projekt einrichten

Damit die auf einer Projektaufgabe erfassten Stunden abgerechnet werden können, müssen Sie bestimmte Einstellungen vornehmen. Öffnen Sie ein Projekt via *Projekt > Projekte > Kontext-Menü > Bearbeiten > Tab Einstellungen* und wählen Sie als erstes die Option *Abrechenbar*. Öffnen Sie den Tab *Abrechnung* und stellen Sie sicher, dass diese Optionen aktiviert sind:

* **Invoice Task to**: Stunden an einen oder mehrere Kunden verrechnen
* **Preiskalkulation**: Stundensatz des Mitarbeiters oder aus Verkaufsauftrag
* **Verkaufsauftrag**: Verlinkter Verkaufsauftrag mit Standardposition

Dazu ein Beispiel:

![](assets/Projekt%20Tab%20Abrechnung.png)

## Berechtigungen

### Benutzer dürfen keine Aufgaben erstellen

Wenn Sie verhindern möchten, dass Mitglieder der Gruppe *Projekt / Benutzer* Projektaufgaben erstellen können, gehen Sie wie folgt vor.

Öffnen Sie *Einstellungen > Benutzer und Gruppen > Gruppen* und öffnen Sie die Gruppe *Projekt / Benutzer*. Navigieren Sie zum Tab *Zugriffsrechte* und bearbeiten Sie den Eintrag *project.task*. Entfernen Sie die Berechtigung *Erstellen* und *Löschen*.

Weil die Berechtigung von *Projekt / Benutzer* nach *Projekt / Administrator* vererbt wird, braucht es eine Anpassung. Zeiten Sie den Tab *Zugriffsrechte* der Gruppe *Projekt / Administrator* und erstellen Sie einen neuen Eintrag:

![](assets/Projekt%20Berechtigung%20Administrator%20Aufgabe.png)

## Diskussion

### Benachrichtigung bei Erstellung von Aufgabe erhalten

Um eine Benachrichtigung zu erhalten, wenn eine Aufgabe in einem bestimmten Projekt erstellt, müssen Sie das Projekt via *Projekt > Konfiguration > Projekte* bearbeiten. Nun müssen Sie ein [eigenes Abonnement hinzufügen](Discuss.md#Eigenes%20Abonnement%20hinzufügen). 

![](assets/Projekt%20Subscription%20bearbeiten.png)