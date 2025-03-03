---
title: Stock Quant Package Dimension
description: Dimensionen und geschätztes Gewicht auf Paket.
tags:
- HowTo
- OCA
prev: ./stock
---
# Stock Quant Package Dimension
![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `stock_quant_package_dimension`\
Repository: <https://github.com/OCA/stock-logistics-workflow/tree/17.0/stock_quant_package_dimension>

## Verwendung

### Geschäftztes Gewicht von Verpackung anzeigen

Wenn Sie unter *Lager > Übersicht > Lieferaufträge* eine [Produktlieferung verpacken](Stock%20Packaging.md#Produktlieferung%20verpacken) wird mit dieser Erweiterung eine Gewichtsschätzung erstellt.

Zeigen Sie die [Verpackungen](Stock%20Packaging.md#Verpackungen%20anzeigen) an, im Feld  *Estimated weight (in kg)* ist die Gewichtsschätzung ersichtlich.

Wenn Sie die  [Mengenheit Logistik festlegen](Product%20Logistics%20UoM.md#Mengenheit%20Logistik%20festlegen)) wird diese in der Berechnung der Gewichtsschätzung berücksichtigt.

::: warning
Andere Feld auf der Verpackung wie *Liefergewicht* und *Pack Weight* berücksichtigen die Mengeneinheit Logistik des Produkts nicht.
:::