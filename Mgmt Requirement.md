---
title: Mgmt Requirement
description: Verwalten Sie Anforderungen and die Organisation.
kind: howto
tags:
- Mint-System
prev: ./management-system
---

# Mgmt Requirement
![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `mgmt_requirement`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Management-System/tree/17.0/mgmt_requirement>

## Konfiguration

### Requirement-Tags verwalten

Navigieren Sie nach *Management System > Configuration > Requirement Tags*. Definieren Sie die Tags zur Verwaltung der Requirements.

## Verwendung

### Dokumente erfassen

Requirements können via Paragraphen mit Dokumenten verknüpft werden. Unter *Management System > Inventory > Documets* können Sie die Dokumente erfassen.

### Paragraphen erfassen

Unter *Management System > Inventory > Paragraphs* können Sie Paragraphen aus Dokumenten erfassen. Geben Sie eine Titel und eine Beschreibung ein. Im Feld *Reference* geben Sie eine eindeutige Bezeichnung zur Identifizierung des Paragraphen ein. Im Feld *Document* verlinken Sie den Paragaphen mit dem entsprechenden Dokument.

### Requirement erfassen

Zeigen Sie *Management System > Audit > Requirements* an. Erstellen Sie einen neuen Eintrag:

* **System**: Wählen Sie das Management System aus.
* **Tag**: Ordnen Sie ausgewählte Tags zur Filterung hinzu.

Im  Tab *Paragraphs* verlinken Sie das Requirement mit den Dokument-Paragraphen.
