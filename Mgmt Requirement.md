---
title: Mgmt Requirement
description: Verwalten Sie Anforderungen and die Organisation.
kind: howto
partner: Mint-System
prev: ./management-system
---

# Mgmt Requirement

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `mgmt_requirement`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Management-System/tree/17.0/mgmt_requirement>

## Konfiguration

### Requirement-Tags verwalten

Navigieren Sie nach _Management System > Configuration > Requirement Tags_. Definieren Sie die Tags zur Verwaltung der Requirements.

## Verwendung

### Dokumente erfassen

Requirements können via Paragraphen mit Dokumenten verknüpft werden. Unter _Management System > Inventory > Documets_ können Sie die Dokumente erfassen.

### Paragraphen erfassen

Unter _Management System > Inventory > Paragraphs_ können Sie Paragraphen aus Dokumenten erfassen. Geben Sie eine Titel und eine Beschreibung ein. Im Feld _Reference_ geben Sie eine eindeutige Bezeichnung zur Identifizierung des Paragraphen ein. Im Feld _Document_ verlinken Sie den Paragaphen mit dem entsprechenden Dokument.

### Requirement erfassen

Zeigen Sie _Management System > Audit > Requirements_ an. Erstellen Sie einen neuen Eintrag:

- **System**: Wählen Sie das Management System aus.
- **Tag**: Ordnen Sie ausgewählte Tags zur Filterung hinzu.

Im Tab _Paragraphs_ verlinken Sie das Requirement mit den Dokument-Paragraphen.
