---
title: Product Barcode Generator
description: Autogenerate EAN13 product barcodes.
kind: howto
tags:
- Mint-System
prev: ./product
---
# Product Barcode Generator
![](attachments/icon_odoo_product_barcode.png)

{{ $frontmatter.description }}

Technischer Name: `product_barcode`\
Repository: <https://github.com/CybroOdoo/CybroAddons/tree/17.0/product_barcode>\
Odoo App Store: <https://apps.odoo.com/apps/modules/14.0/product_barcode/>

## Verwendung

### Generate product barcode

Once the app is installed Odoo will automtically create EAN13 standard barcodes.

![Odoo App Product Barcode Generator](attachments/Odoo%20App%20Product%20Barcode%20Generator.gif)

### Barcode generieren

Mit dieser Server-Aktion können Sie für alle Produkte einen EAN13-Barcode generieren.

Navigieren Sie nach *Einstellungen > Technisch > Server-Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Barcode generieren`\
Modell: `ir.actions.server`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
def ean_checksum(eancode):
    """returns the checksum of an ean string of length 13, returns -1 if the string has the wrong length"""
    if len(eancode) != 13:
        return -1

    oddsum = 0
    evensum = 0
    eanvalue = eancode
    reversevalue = eanvalue[::-1]
    finalean = reversevalue[1:]

    for i in range(len(finalean)):
        if i % 2 == 0:
            oddsum += int(finalean[i])
        else:
            evensum += int(finalean[i])
    total = (oddsum * 3) + evensum

    check = int(10 - total % 10.0) % 10
    return check

## Generate ean by id

def generate_ean(ean):
    """Creates and returns a valid ean13 from an invalid one"""
    if not ean:
        return "0000000000000"
    ean = ean[:13]
    if len(ean) < 13:
        ean = ean + '0' * (13 - len(ean))
    return ean[:-1] + str(ean_checksum(ean))

## Search products without barcode

product_ids = env['product.product'].search([('barcode','=',False)])

## Generate barcode for each product

for product in product_ids:
    barcode_id = product.id
    barcode_search = False
    while not barcode_search:
        ean = generate_ean(str(barcode_id))
        if env['product.product'].search([('barcode', '=', ean)]):
            barcode_search = False
            barcode_id += 1
        else:
            barcode_search = True

    product.write({'barcode': ean})
```

Speichern Sie die Aktion führen Sie diese mit *Starten* aus.
