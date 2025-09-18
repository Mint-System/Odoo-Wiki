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

Zeigen Sie *Management System > Configuration > Risik Stages* an. Bearbeiten Sie die Stufen gemäss ihren Anforderungen.

### Wahrscheinlichkeit und Auswirkung verwalten

Zeigen Sie *Management System > Configuration > Severity* oder *Management System > Configuration > Probabily*. Passen Sie die Einträge gemäss ihren Anforderungen an.

## Verwendung

### Risiko erfassen

Navigieren Sie nach *Management System > Evaluation > Risks* und erstellen Sie einen neuen Eintrag. Füllen Sie alle Felder im Tab *General Information* aus. Im Tab *Assets* wählen Sie die betroffenen Assets.

### Revision von Risiko erstellen

Rufen Sie ein Risiko unter *Management System > Evaluation > Risks*  auf. Wählen Sie die Aktion *Create Revision*. Im Tab *Revisions* wird eine Kopie vom aktuellen Risiko erstellt.
