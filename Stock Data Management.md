---
title: Lager Datenmanagement
description: Daten zu Lager exportieren und importieren.
kind: howto
prev: ./stock
---
# Lager Datenmanagement
![icons_odoo_stock](attachments/icons_odoo_stock.png)

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
