---
description: Daten zu Lager exportieren und importieren.
tags:
- HowTo
prev: ./stock
---
# Lager Datenmanagement
![icons_odoo_stock](assets/icons_odoo_stock.png)

{{ $frontmatter.description }}

## Produktverpackungen exportieren

Listenansicht: *Lager > Konfiguration > Produktverpackungen*

Felder:
```
product_id
name
barcode
```
Datei: `product.packaging.csv`

Calc-Formeln: `=CONCAT(F2," - ",G2)`

## Bestand exportieren

Listenansicht: *Lager > Konfiguration > Lagerort > Bestand*

Felder:
```
product_id
location_id/id
lot_id/id
inventory_quantity
```
Datei: `stock.quant.csv`
