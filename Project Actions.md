---
title: Projekt Aktionen
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- HowTo
prev: ./project
---
# Projekt Aktionen
![icons_odoo_project](assets/icons_odoo_project.png)

Aktionen für Projekt App einrichten.

## Geplante Aktionen

### Projektmenü aktualisieren

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

  # Check if action entry exists
  action = env['ir.actions.act_window'].search([('name', '=', name)], limit=1)
  # raise Warning([action])
  
  # Create action if it does not exist otherwise update
  if not action:
    action = env['ir.actions.act_window'].create({
      'name': name,
      'res_model': 'project.task',
      'view_mode': 'kanban,tree,form,calendar,pivot,graph,gantt,activity,map',
      'domain': "[('project_id', '=', %s)]"  % (project.id),
      'context': "{ 'default_project_id': %s, 'search_default_my_tasks': True }" % (project.id)
    })
  else:
    action.update({
      'name': name,
      'res_model': 'project.task',
      'view_mode': 'kanban,tree,form,calendar,pivot,graph,gantt,activity,map',
      'domain': "[('project_id', '=', %s)]"  % (project.id),
      'context': "{ 'default_project_id': %s, 'search_default_my_tasks': True }" % (project.id)
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
    new_menus.append(menu.name)
  else:
    menu.update({
      'name': name,
      'action': action_ref,
      'parent_id': parent_menu_id,
      'sequence': project.id,
    })

# Get all archived projects
project_ids = env['project.project'].search([('active','=',False)])

for project in project_ids:

  # Set name for action and view
  name = 'Projektaufgaben ' + project.name
  if project.key:
    name += ' (' + project.key + ')'

  # Check if menu entry exists and remove it if found
  menu = env['ir.ui.menu'].search([('name', '=', name)], limit=1)
  if menu:
    menu.unlink()
  
  # Check if action entry exists and remove it if found
  action = env['ir.actions.act_window'].search([('name', '=', name)], limit=1)
  if action:
    action.unlink()
  
if new_menus:
  log('Created new menus: %s' % (', '.join(new_menus)))
```

Legen Sie den Wert für `parent_menu_id` fest. Damit bestimmen Sie unter welchem Menüpunkt die Projektmenüs erscheinen sollen.

![Projekt Projektmenu aktualisieren](assets/Projekt%20Projektmenu%20aktualisieren.gif)