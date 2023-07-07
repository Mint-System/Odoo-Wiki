---
title: Projekt Datenmanagement
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- HowTo
prev: ./project
---
# Projekt Datenmanagement
![icons_odoo_website_sale_options](assets/icons_odoo_website_sale_options.png)

Daten zu Projekte exportieren und importieren.

## Export

### Projektstufen exportieren

Listenansicht: *Projekt > Konfiguration > Stufen*

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

Listenansicht: *Projekt > Konfiguration > Projekte*

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

Listenansicht: *Projekt > Alle Aufgaben*

Felder:
```
Titel
Projekt
Zugewiesen an
Geplante Stunden
Stufe
```
Datei: `project.task.csv`