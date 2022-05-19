---
tags:
- HowTo
prev: ./
---
# Projekt
![icons_odoo_project](assets/icons_odoo_project.png)

Agiles Projektmanagement. Schön. Einfach. Open Source.

| Erweiterung                                                       | Beschreibung                                           |
| ----------------------------------------------------------------- | ------------------------------------------------------ |
| [Project timeline](Project%20Timeline.md)                         | Timeline-Ansicht für Projektaufgaben.                  |
| [Project Task Dependencies](Project%20Task%20Dependencies.md)     | Projektaufgaben mit Abhängigkeiten.                    |
| [Project key](Project%20Key.md)                                   | Projektkürzel für Aufgabenbezeichnung.                 |
| [Business Requirement](Business%20Requirement.md)                 | Projektanforderungen erfassen und verknüpfen.          |
| [Project Task Default Stage](Project%20Task%20Default%20Stage.md) | Standardstufen für Projektaufgaben.                    |
| [Project Templates](Project%20Templates.md)                       | Projekt aus Projektvorlage erstellen.                  |
| [Project Task Material](Project%20Task%20Material.md)             | Liste von verbrauchten Materialien auf Projektaufgabe. |
| [Sequential Code for Tasks](Sequential%20Code%20for%20Tasks.md)   | Sequenznummer für Projektaufgaben.                     |

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

## Projekt duplizeren

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

## Geplante Aktion "Projektmenü aktualisieren" erstellen

Mit dieser geplanten Aktion generiert Odoo für jedes Projekt einen Menüeintrag. Damit können Sie schneller zwischen Projektaufgaben navigieren.

Navigieren Sie nach *Einstellungen > Technisch > Geplante Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Projektmenü aktualisieren`\
Modell: `ir.actions.server`\
Ausführen alle: `1` Tage\
Nächstes Ausführungsdatum: `DD.MM.YYYY 06:00:00`\
Anzahl der Anrufe: `-1`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Pythoncode*:

```python
# Settings
parent_menu_id = 218

# Get all projects
project_ids = env['project.project'].search([])
# raise Warning([project_ids.mapped('name')])

new_menus = []
for project in project_ids:

  # Set name for action and view
  name = 'Projektaufgaben ' + project.name
  if project.key:
    name += ' (' + project.key + ')'

  # Check if view entry exists
  action = env['ir.actions.act_window'].search([('name', '=', name)], limit=1)
  # raise Warning([action])
  
  # Create action if it does not exist otherwise update
  if not action:
    action = env['ir.actions.act_window'].create({
      'name': name,
      'res_model': 'project.task',
      'view_mode': 'kanban,tree,form,calendar,pivot,graph,activity,map',
      'domain': "[('project_id', '=', %s)]"  % (project.id),
      'context': "{ 'default_project_id': %s }" % (project.id)
    })
  else:
    action.update({
      'name': name,
      'res_model': 'project.task',
      'view_mode': 'kanban,tree,form,calendar,pivot,graph,activity,map',
      'domain': "[('project_id', '=', %s)]"  % (project.id),
      'context': "{ 'default_project_id': %s }" % (project.id)
    })

  
  # Set action reference
  action_ref = 'ir.actions.act_window,' + str(action.id)
  
  # Check if menu entry exists
  menu = env['ir.ui.menu'].search([('name', '=', name)], limit=1)
  # raise Warning([menu])
  
  # Create menu if does not exist otherwise update
  if not menu:
    menu = env['ir.ui.menu'].create({
      'name': name,
      'action': action_ref,
      'parent_id': parent_menu_id,
      'sequence': project.id,
    })
    new_menus.append(menu)
  else:
    menu.update({
      'name': name,
      'action': action_ref,
      'parent_id': parent_menu_id,
      'sequence': project.id,
    })
     
if new_menus:
  log('Created new menus: %s' % (new_menus))
````

Legen Sie den Wert für `parent_menu_id` fest. Damit bestimmen Sie unter welchem Menüpunkt die Projektmenüs erscheinen sollen.

![Projekt Projektmenu aktualisieren](assets/Projekt%20Projektmenu%20aktualisieren.gif)