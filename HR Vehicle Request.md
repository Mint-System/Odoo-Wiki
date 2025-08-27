---
title: HR Vehicle Request
description: Fahrzeuganfragen für Mitarbeitende verwalten.
kind: howto
partner: Mint-System
prev: ./hr
---
# HR Vehicle Request
![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `hr_vehicle_request`\
Repository: <https://github.com/Mint-System/Odoo-Apps-HR/tree/14.0/hr_vehicle_request>

## Verwendung

### Fahrzeuganfrage erstellen

Navigieren Sie nach *Personal > Fahrzeuganfrage > Fahrzeuganfrage* und erstellen Sie einen neuen Eintrag. Dazu ein Beispiel:

![](attachments/HR%20Vehicle%20Request%20Example.png)

Versenden Sie die Anfrage mit *Anfrage Senden*.

### Fahrzeuganfrage validieren

Navigieren Sie nach *Personal > Fahrzeuganfrage > Fahrzeuganfrage* und filtern Sie die Einträge nach *Warte auf Bestätigung*.

![](attachments/HR%20Vehicle%20Request%20Waiting.png)

Öffnen Sie eine Anfrage und validieren Sie diese mit *Bestätigen* oder *Ablehnen*.

### Fahrzeug retournieren

Öffnen Sie ihre *Fahrzeuganfrage* unter Personal > Fahrzeuganfrage > Fahrzeuganfrage* und klicken Sie auf *Retournieren*.

## Automatisierte Aktionen

### Fahrzeuganfrage automatisch bestätigen

Mit dieser automatischen Aktion wird eine Fahrzeuganfrage mit einem bestimmten Attribut (Beispiel: `vehicle_id.model_id.vehicle_type`) automatisch bestätigt.

Erstellen Sie unter *Einstellungen > Technisch > Automation > Automatisierte Aktionen* einen Eintrag mit diesen Werten:

Name der Aktion: `Fahrzeuganfrage automatisch bestätigen`\
Modell: `employee.fleet`\
Auslöser: Beim Aktualisieren\
Trigger-Felder: `state`\\
Anzuwenden auf: `["&",["state","=","waiting"],["vehicle_id.model_id.vehicle_type","=","cable_car"]]`\
Folgeaktion: Python-Code ausführen\
Python Code:

```python
for rec in records:
  rec.approve()
```
