---
title: Float align at decimal
description: Formatiert Floats nach Anzahl der Dezimalstellen.
kind: howto
partner: Mint-System
prev: ./server
---

# Float align at decimal

![icon_oms_box](../attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `float_align_at_decimal`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Server-Tools/tree/16.0/float_align_at_decimal>

## Beschreibung

Diese Erweiterung stellt ein Widget `decimal_align` zur Verfügung, mit dem sich Dezimalzahlen (Floats) für die Verwendung in QWeb-Reports formatieren und ausrichten lassen, z.B. in Tabellen.

Das Widget wird wie andere Widgets auch als QWeb-Option in Form eines Dictonaries eingebunden, zum Beispiel `t-options="{'widget': 'decimal_align', 'decimals': 2}"`
