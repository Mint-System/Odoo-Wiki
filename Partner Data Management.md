---
title: Kontakte Datenmanagement
description: Daten zu Kontakte exportieren und importieren.
kind: howto
prev: ./contacts
---

# Kontakte Datenmanagement

![icons_odoo_website_sale_options](attachments/icons_odoo_website_sale_options.png)

{{ $frontmatter.description }}

## Export

### Kontakte exportieren

Listenansicht: _Kontakte_

Felder:

```
name
street
street2
city
cip
country
vat
phone
mobile
email
website
is_company
bank_ids
bank_ids/bank_id
```

Datei: `res.partner.csv`

## Import

### Kontakte importieren

Listenansicht: _Kontakte_

Felder:

- **id**: Schema `base.res_partner_X` anwenden
- **lang**: Formel `=IF($Daten.E5="DE","de_CH",IF($Daten.E5="FR","fr_CH",""))` anwenden
