---
title: Account Move Line Position
description: Positionsnummer anzeigen und aus Verkaufs- oder Einkaufsauftrag verlinken.
kind: howto
partner: Mint-System
prev: ./order-positions
---

# Account Move Line Position

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `account_move_line_position`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Account-Invoicing/tree/17.0/account_move_line_position>

## Konfiguration

### Positionsnummer aus Verkaufs- oder Einkaufsauftrag verlinken.

Navigieren Sie nach _Einstellungen > Abrechnung > Kundenrechnung_ und aktivieren Sie die Option _Position Numbers from Orders_. Alle Rechnungszeilen, die mit einem Verkaufs- oder Einkaufsauftrag verlinkt sind, verlinken die Positionsnummer von der entsprechenden Auftragszeile.

::: tip
Wenn Sie zusätzliche Zeilen ohne Verlinkung der Rechnungen hinzufügen, versucht Odoo die Aufzählung der Positionsnummern fortzusetzen.
:::

## Verwendung

### Positionsnummer anzeigen

Mit dieser Erweiterung werden Positionsnummern auf Transfers automatisch vom Verkaufs- oder Einkaufsauftrag verknüpft.

::: tip
Wenn Positionsnummern leer sind, können Sie _Aktionen > Positionsnummern festlegen_ ausführen.
:::

## Berichte

### Positionsnummer anzeigen

Unter <https://odoo.build/snippets> finden Sie Snippets mit der Bezeichnung _Get Postition_, beispielsweise <https://odoo.build/snippets/purchase.html#get-position>. Verwenden Sie diese Snippets um auf Berichten, die Positionsnummer aus Verkaus-, Einkaufs- und Fertigungsaufträgen anzuzeigen.
