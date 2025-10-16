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

Navigieren Sie nach _Personal > Fahrzeuganfrage > Fahrzeuganfrage_ und erstellen Sie einen neuen Eintrag. Dazu ein Beispiel:

![](attachments/HR%20Vehicle%20Request%20Example.png)

Versenden Sie die Anfrage mit _Anfrage Senden_.

### Fahrzeuganfrage validieren

Navigieren Sie nach _Personal > Fahrzeuganfrage > Fahrzeuganfrage_ und filtern Sie die Einträge nach _Warte auf Bestätigung_.

![](attachments/HR%20Vehicle%20Request%20Waiting.png)

Öffnen Sie eine Anfrage und validieren Sie diese mit _Bestätigen_ oder _Ablehnen_.

### Fahrzeug retournieren

Öffnen Sie ihre _Fahrzeuganfrage_ unter Personal > Fahrzeuganfrage > Fahrzeuganfrage* und klicken Sie auf *Retournieren\*.

## Automatisierte Aktionen

### Fahrzeuganfrage automatisch bestätigen

Mit dieser automatischen Aktion wird eine Fahrzeuganfrage mit einem bestimmten Attribut (Beispiel: `vehicle_id.model_id.vehicle_type`) automatisch bestätigt.

Erstellen Sie unter _Einstellungen > Technisch > Automation > Automatisierte Aktionen_ einen Eintrag mit diesen Werten:

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
