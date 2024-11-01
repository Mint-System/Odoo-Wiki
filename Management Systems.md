---
title: Management Systems
description: Odoo for Management Systems (ISO, IEC, BS, EASA).
tags:
- HowTo
- OCA
prev: ./
---
# Management Systems
![icons_odoo_sale_subscription](attachments/icons_odoo_sale_subscription.png)

{{ $frontmatter.description }}

## Erweiterungen

| Erweiterung                                     | Beschreibung                                                       |
| ----------------------------------------------- | ------------------------------------------------------------------ |
| [Management System](Mgmtsystem.md)              | Management System by OCA.                                          |
| [Management](mgmt.md)                           | Management System by Mint System.                                  |
| [Mgmt Asset Risk](Mgmt%20Asset%20Risk.md)       | Verbinde Risiken und Assets.                                       |
| [Mgmt Audit Project](Mgmt%20Audit%20Project.md) | Erstellen Sie Projektaufgaben für Empfehlungen und Nonconformties. |
| [Mgmt Audit](Mgmt%20Audit.md)                   | Auditieren Sie ihr Unternehmen.                                    |
| [Mgmt Base](Mgmt%20Base.md)                     | Basis für die Management-System Module.                            |
| [Mgmt Hazard Risk](Mgmt%20Hazard%20Risk.md)     | Risiko-Kalkulation basieren auf Gefahren.                          |
| [Mgmt Requirement](Mgmt%20Requirement.md)       | Verwalten Sie Anforderungen and die Organisation.                  |
| [Mgmt Risk](Mgmt%20Risk.md)                     | Verwaltung von ISO27001 Risiken.                                   |
| [Mgmtsystem Audit](Mgmtsystem%20Audit.md)       | Audit-Module for the OCA Management System.                            |
| [Mmgt Asset](Mmgt%20Asset.md)                   | Asset-Verwaltung für das Management-System.                        |

## Beschreibung

Das Mint System Mangement System besteht aus verschiedenen Modulen. Die folgende Grafik zeigt die Abhängigkeit der Module:

```mermaid
graph TD
  mgmt_asset --> mgmt_base
  mgmt_asset --> product
  mgmt_asset --> maintenance
  mgmt_asset_risk --> mgmt_asset
  mgmt_asset_risk --> mgmt_risk
  mgmt_audit --> mgmt_requirement
  mgmt_audit --> mgmt_risk
  mgmt_auditlog --> mgmt_base
  mgmt_auditlog --> auditlog
  mgmt_audit_project --> mgmt_audit
  mgmt_audit_project --> project
  mgmt_base --> base
  mgmt_hazard_risk --> mgmt_risk
  mgmt_requirement --> mgmt_risk
  mgmt_risk --> mgmt_base
  mgmt_risk --> hr
```