---
title: Module Auto Update
description: Aktualisiert automatisch neue Versionen von Odoo Modulen. 
tags:
- HowTo
- OCA
prev: ./base
---
# Module Auto Update
![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `module_auto_update`\
Repository: <https://github.com/OCA/server-tools/tree/16.0/module_auto_update>

## Verwendung

### Veränderte Odoo Module aktualisieren

Rufen Sie die Aktion *Apps > Auto-Upgrade Modules*.

::: warning
Die erste Ausführung der Aktion dauert aktualisiert alle Mdoule. Odoo berechnet einen Fingerabdruck aller installierten Module, wenn dieser noch nicht existiert wird das Modul aktualisiert.
:::

## Entwicklung

### Module-Hashes anzeigen

Zeigen Sie *Einstellungen > Technisch > Systemparameter* an. Zeigen Sie den Eintrag mit Schlüssel `module_auto_update.installed_checksums` an.

::: tip
Wenn Sie den Eintrag entfernen, wird Odoo wieder eine Upgrade aller Module durchführen.
:::