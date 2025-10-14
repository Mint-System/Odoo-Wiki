---
title: Mmgt Asset Risk
description: Verbinde Risiken und Assets.
kind: howto
partner: Mint-System
prev: ./management-system
---

# Mmgt Asset Risk

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `mgmt_asset_risk`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Management-System/tree/18.0/mgmt_asset_risk>

## Konfiguration

### Risiko-Stufen verwalten

Zeigen Sie _Management System > Configuration > Risik Stages_ an. Bearbeiten Sie die Stufen gemäss ihren Anforderungen.

### Wahrscheinlichkeit und Auswirkung verwalten

Zeigen Sie _Management System > Configuration > Severity_ oder _Management System > Configuration > Probabily_. Passen Sie die Einträge gemäss ihren Anforderungen an.

## Verwendung

### Risiko erfassen

Navigieren Sie nach _Management System > Evaluation > Risks_ und erstellen Sie einen neuen Eintrag. Füllen Sie alle Felder im Tab _General Information_ aus. Im Tab _Assets_ wählen Sie die betroffenen Assets.

### Revision von Risiko erstellen

Rufen Sie ein Risiko unter _Management System > Evaluation > Risks_ auf. Wählen Sie die Aktion _Create Revision_. Im Tab _Revisions_ wird eine Kopie vom aktuellen Risiko erstellt.
