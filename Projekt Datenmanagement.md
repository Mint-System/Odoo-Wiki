---
tags:
- HowTo
prev: ./projekt
---
# Projekt Datenmanagement
![icons_odoo_website_sale_options](assets/icons_odoo_website_sale_options.png)

Daten zu Projekte exportieren und importieren.

### Daten Projektstufen exportieren

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

### Daten Projekte exportieren

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

### Daten Aufgaben exportieren

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