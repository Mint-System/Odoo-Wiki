---
title: Qualität Aktionen
description: Arbeitsflüsse im Qualitätsmanagement automatisieren.
kind: howto
tags:
- Actions
prev: ./quality
---

# Qualität Aktionen
![icons_odoo_quality_control](attachments/icons_odoo_quality_control.png)

{{ $frontmatter.description }}

## Automatisierte Aktionen

### Qualitätskontrolle archivieren

Mit dieser Aktion werden Qualitätskontrolle vom Typ *Register Consumed Materials* bei Erstellung archiviert.

Navigieren Sie nach *Einstellungen > Technisch > Automation > Automatisierte Aktionen* und erstellen Sie den folgenden Eintrag:

* Name der Aktion: `Qualitätskontrolle entfernen`
* Modell: `quality.check`
* Auslöser: `Bei Erstellung`
* Anwenden auf: `[["test_type_id.technical_name","=","register_consumed_materials"]]`
* Folgeaktion: `Den Datensatz aktualisieren`
* Feld: `x_active`
* Wert: `False`
