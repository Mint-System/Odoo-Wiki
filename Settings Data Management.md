---
title: Einstellungen Datenmanagement
description: Daten zu Einstellungen exportieren und importieren.
tags:
- HowTo
prev: ./settings
---
# Einstellungen Datenmanagement
![icons_odoo_website_sale_options](assets/icons_odoo_website_sale_options.png)

{{ $frontmatter.description }}

## Export

### Benutzer exportieren

Listenansicht: *Einstellungen > Benutzer > Benutzer verwalten*

Felder:
```
id
name
login
lang
```
Datei: `res.users.csv`

### Zugriffsrechte exportieren

Listenansicht: *Einstellungen > Technisch > Sicherheit > Zugriffsrechte*

Felder:
```
id
model_id/id
perm_read
perm_write
perm_unlink
perm_create
```
Datei: `ir.model.access.csv`

Calc-Formeln: `=CONCAT(IF(B2="True","C",""),IF(C2="True","R",""),IF(D2="True","U",""),IF(E2="True","D",""))`

## Import

### Benutzer importieren

Listenansicht: *Einstellungen > Benutzer > Benutzer verwalten*
