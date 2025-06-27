---
title: MRP Production Release
description: Fertigungsaufträge können zurückgesetzt und freigegebenen werden.
kind: howto
tags:
- Drittanbieter
prev: ./manufacture
---
# MRP Production Release
![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `mrp_production_release`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Manufacture/tree/16.0/mrp_production_release>

## Verwendung

### Fertigungsauftrag zurücksetzen

Die Installation dieser Erweiterung führt dazu, dass auf bestätigten Fertigungsaufträgen der Knopf *Unrelease* und *Release* erscheint. Mit der *Unrelease*-Aktion wird der Fertigungsauftrag in den Entwurfsstatus gesetzt und alle verknüpften Lagerbuchungen entfernen. In diesem Zustand kann beispielsweise die Stückliste ausgewechselt werden. Mit der *Release*-Aktion wird der Fertigungsauftrag wieder bereit für die *Bestätigung* gemacht.

![MRP Production Release](attachments/MRP%20Production%20Release.gif)

