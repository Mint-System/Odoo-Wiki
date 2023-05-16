---
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- HowTo
- Drittanbieter
prev: ./manufacture
---
# MRP Production Release
![icon_oms_box](assets/icon_oms_box.png)

Fertigungsaufträge können zurückgesetzt und freigegebenen werden.

Technischer Name: `mrp_production_release`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Manufacture/tree/14.0/mrp_production_release>

## Verwendung

### Fertigungsauftrag zurücksetzen

Die Installation dieser Erweiterung führt dazu, dass auf bestätigten Fertigungsaufträgen der Knopf *Unrelease* und *Release* erscheint. Mit der *Unrelease*-Aktion wird der Fertigungsauftrag in den Entwurfsstatus gesetzt und alle verknüpften Lagerbuchungen entfernen. In diesem Zustand kann beispielsweise die Stückliste ausgewechselt werden. Mit der *Release*-Aktion wird der Fertigungsauftrag wieder bereit für die *Bestätigung* gemacht.

![MRP Production Release](assets/MRP%20Production%20Release.gif)

