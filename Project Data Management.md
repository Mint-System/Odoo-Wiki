---
title: Projekt Datenmanagement
description: Daten zu Projekte exportieren und importieren.
kind: howto
prev: ./project
---

# Projekt Datenmanagement

![icons_odoo_website_sale_options](attachments/icons_odoo_website_sale_options.png)

{{ $frontmatter.description }}

## Export

### Projektstufen exportieren

Listenansicht: _Projekt > Konfiguration > Stufen_

Felder:

```
Sequenz
Stufenbezeichnung
In Kanban eingeklappt
Beschreibung
Projekte/Externe ID
```

File: `project.task.type.csv`

### Projekte exportieren

Listenansicht: _Projekt > Konfiguration > Projekte_

Felder:

```
Sequenz
Name
Projektmanager
Kunde
Zeiterfassung
```

Datei: `project.project.csv`

### Aufgaben exportieren

Listenansicht: _Projekt > Alle Aufgaben_

Felder:

```
Titel
Projekt
Zugewiesen an
Geplante Stunden
Stufe
```

Datei: `project.task.csv`
