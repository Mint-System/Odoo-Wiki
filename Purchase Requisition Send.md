---
title: Purchase Requisition Send
description: Kaufverträge per E-Mail versenden.
kind: howto
tags:
- Mint-System
prev: ./purchase-requisition
---
# Purchase Requisition Send
![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `purchase_requisition_send`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Purchase-Workflow/tree/17.0/purchase_requisition_send>

## Verwendung

### Erweiterung konfigurieren

Damit die Bestelladresse als Empfängeradresse für die E-Mail übernommen wird,  muss in der E-Mail-Vorlage im Feld  *An (Partner)* der Wert `${object.partner_order_id.id}` eingetragen sein. Zur Bearbeitung rufen Sie die entsprechende E-Mail-Vorlage unter *Einstellungen > Technisch > E-Mail > E-Mail-Vorlagen* auf.

### Kaufvertrag per E-Mail versenden

Mit dieser Erweiterungen können Sie Kaufverträge per E-Mail verschicken. Zeigen Sie einen Kaufvertrag via *Einkauf > Aufträge > Kaufverträge* an und wählen Sie die Aktion *Per E-Mail Versenden*.

::: tip
Der Kaufvertrag wird nach dem Versenden in den Zustand *Gesendet* versetzt, wenn dieser im Zustand *Entwurf* oder *Bestätigt* war.
:::
