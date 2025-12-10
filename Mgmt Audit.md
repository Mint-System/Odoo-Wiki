---
title: Mgmt Audit
description: Auditieren Sie ihr Unternehmen.
kind: howto
partner: Mint-System
prev: ./management-system
---

# Mgmt Audit

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `mgmt_audit`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Management-System/tree/17.0/mgmt_audit>

## Konfiguratin

### Audit-Stufen verwalten

Navigieren Sie nach _Management System > Configuration > Audit Stages_. Passen Sie die Stufen gemäss ihren Anforderungen an.

## Verwendung

### Audit erstellen

Zeigen Sie _Management System > Audit > Audits_ an. Erstellen Sie einen neuen Eintrag und füllen Sie die Felder im ersten Tab aus. Im Tab _Statements_ können Sie die zu prüfenden Risikos hinzufügen.

### Audit für ausgewählte Risiken erstellen

Rufen Sie die Risiken via _Management System > Evaluation > Risks_ an und wechseln Sie in die Listenansicht. Filter und markieren Sie die Risiken und wählen Sie _Aktionen > Create Audit with Risk Statements_.

### Nonconformities anzeigen

Die erfassten Nonconformities sind unter _Management System > Evaluation > Non-Conformities_ aufgelistet.

### Recommendations anzeigen

Die Recommendations sind unter _Management System > Evaluation > Recommendations_ verfügbar.
