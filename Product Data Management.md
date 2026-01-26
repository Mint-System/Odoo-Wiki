---
title: Produkt Datenmanagement
description: Daten zu Produkten exportieren und importieren.
kind: howto
prev: ./product
---

# Produkt Datenmanagement

![](attachments/icons_odoo_product.png)

{{ $frontmatter.description }}

## Export

### Produkte mit Attributen exportieren

Listenansicht: _Verkauf > Konfiguration > Attribute_

Felder:

```
name
value_ids/id
value_ids/name
```

Datei: `product.attribute.csv`

Listenansicht: _Verkauf > Produkte > Produkte_

Felder:

```
name
purchase_ok
sale_ok
default_code
type
attribute_line_ids/id
attribute_line_ids/value_ids/id
```

Datei: `product.template.csv`
