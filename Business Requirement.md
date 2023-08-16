---
title: Business Requirement
description: Projektanforderungen erfassen und verknüpfen.
tags:
- HowTo
- OCA
prev: ./project
---
# Business Requirement
![](attachments/icon_oca_business_requirement.png)

{{ $frontmatter.description }}

Technischer Name: `business_requirement`\
Repository: <https://github.com/OCA/business-requirement/tree/14.0/business_requirement>

## Verwendung

### Projektanforderung erfassen

Öffnen sie  die App *Business Requirement* und klicken sie auf *Anlegen*. Geben sie einen Titel ein und füllen sie die Felder wie nötig aus.

![](attachments/Business%20Requirement%20erstellen.png)

Beim Speichern wird gemäss Sequenz eine ID generiert. Sie können diese [Sequenz anpassen](Settings.md#Sequenz%20anpassen).

![](attachments/Business%20Requirement%20Sequenz.png)

## Berechtigungen

### Portal-Zugriff für Stakeholder erlauben

Damit Stakeholder im Portal das Business Requirement sehen, braucht es eine Anpassung der Berechtigungen. Navigieren Sie nach *Einstellungen > Benutzer und Unternehmen > Gruppen* und zeigen Sie Gruppe *Benutzertypen / Portal* an. Führen Sie [Rechte für Daten auf Gruppe vergeben](Settings%20Permissions.md#Rechte%20für%20Daten%20auf%20Gruppe%20vergeben) mit diesen Parameter aus:

* **Name**: Business Requirement portal access
* **Modell**: `business.requirement`
* **Domain**: `[('portal_published', '=', True),('partner_id', '=', user.partner_id.id)]`
* **Berechtigung**: Setze Leseberechtigung
