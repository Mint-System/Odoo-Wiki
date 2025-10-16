---
title: MRP Production Release
description: Fertigungsaufträge können zurückgesetzt und freigegebenen werden.
kind: howto
partner: Mint-System
prev: ./manufacture
---

# MRP Production Release

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `mrp_production_release`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Manufacture/tree/16.0/mrp_production_release>

## Verwendung

### Fertigungsauftrag zurücksetzen

Die Installation dieser Erweiterung führt dazu, dass auf bestätigten Fertigungsaufträgen der Knopf _Unrelease_ und _Release_ erscheint. Mit der _Unrelease_-Aktion wird der Fertigungsauftrag in den Entwurfsstatus gesetzt und alle verknüpften Lagerbuchungen entfernen. In diesem Zustand kann beispielsweise die Stückliste ausgewechselt werden. Mit der _Release_-Aktion wird der Fertigungsauftrag wieder bereit für die _Bestätigung_ gemacht.

![MRP Production Release](attachments/MRP%20Production%20Release.gif)
