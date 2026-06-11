---
description: Positionsnummer anzeigen und aus Verkaufs- oder Einkaufsauftrag verlinken.
forge: github.com
kind: howto
name: account_move_line_position
partner: Mint System
prev: ./order-positions
repo: Mint-System/Odoo-Apps-Account-Invoicing
title: Account Move Line Position
versions:
- '19.0'
- '17.0'
- '16.0'
- '15.0'
- '14.0'
---


# Account Move Line Position

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

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
