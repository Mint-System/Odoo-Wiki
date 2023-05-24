---
title: Externe ID
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- Best-Practice
prev: ./best-practice
---
# Externe ID

Die externe ID / XML-ID ist in Odoo sinngemäss eine UUID (Universal Unique Identifier). Sie hilft Datensätze auch ausserhalb des Systems eindeutig zu identifizieren.

Die externe ID und XML-ID sind das gleiche.

## Export / Import

Wenn man Datensätze aus Odoo exportiert, generiert Odoo eine XML-ID. Anhand dieser ID kann der Datensatz wieder identfiziert werden. Konkret kann in der Export-Datei eine Spalte anpassen und wieder importieren. Anhand der externen ID weiss Odoo, welche Datensätze aktualisiert weden müssen.

## Produktvarianten

Beim Einschalten der Produktvarianten generiert Odoo für alle bestehenden Datensätze eine externe ID.

Ohne Produktvarianten:

![](assets/ir_model_data%20product.product%201.png)

Mit Produktvarianten:

![](assets/ir_model_data%20product.product%202.png)