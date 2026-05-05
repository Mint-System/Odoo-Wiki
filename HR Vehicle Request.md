---
description: Fahrzeuganfragen für Mitarbeitende verwalten.
forge: github.com
kind: howto
name: hr_vehicle_request
partner: Mint System
prev: ./hr
repo: Mint-System/Odoo-Apps-HR
title: HR Vehicle Request
versions:
- '14.0'
---


# HR Vehicle Request

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

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

## Automatische Aktionen

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
