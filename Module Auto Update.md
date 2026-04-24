---
description: Aktualisiert automatisch neue Versionen von Odoo Modulen.
forge: github.com
kind: howto
name: module_auto_update
partner: OCA
prev: ./base
repo: OCA/server-tools
title: Module Auto Update
versions:
- '19.0'
- '18.0'
- '17.0'
- '16.0'
- '15.0'
- '14.0'
---


# Module Auto Update

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Diese Erweiterung erstellt zu jedem installierten Odoo-Modul einen Hash vom Modul-Code und speichert diesen in der Datenbank. Wenn die "Auto-Upgrade Modules"-Aktion ausgeführt wird, erstellt Odoo wieder einen Hash und vergleich diesen mit der Datenbank. Wenn der Hash abweicht wird das Modul aktualisiert.

Es gibt verschiedene Szenarien wo die Auto-Upgrade Modules"-Aktion nicht funktioniert:

- Ein Modul wird in der Code-Base gelöscht, aber auf den Deployment-Umgebungen nicht deinstalliert.
- Ein Feld wird umbenannt und hat in den Deployment-Umgebungen bereits Daten.
- Es werden Abhängigkeiten zu Modulen gemacht, die auf den Deployment-Umgebungen nicht installiert sind.

## Verwendung

### Veränderte Odoo Module aktualisieren

Rufen Sie die Aktion _Apps > Auto-Upgrade Modules_ auf.

::: warning
Die erste Ausführung der Aktion aktualisiert alle Module. Odoo berechnet einen Fingerabdruck aller installierten Module. Wenn dieser noch nicht existiert oder sich verändert hat, wird das Modul aktualisiert.
:::

## Entwicklung

### Module-Hashes anzeigen

Zeigen Sie _Einstellungen > Technisch > Systemparameter_ an. Zeigen Sie den Eintrag mit Schlüssel `module_auto_update.installed_checksums` an.

::: tip
Wenn Sie den Eintrag entfernen, wird Odoo wieder eine Upgrade aller Module durchführen.
:::
