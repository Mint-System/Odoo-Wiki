---
title: Einstellungen Datenmanagement
description: Daten zu Einstellungen exportieren und importieren.
kind: howto
section: true
prev: ./settings
---

# Einstellungen Datenmanagement

![icons_odoo_settings](attachments/icons_odoo_settings.png)

{{ $frontmatter.description }}

## Export

### Benutzer exportieren

Listenansicht: _Einstellungen > Benutzer > Benutzer verwalten_

Felder:

```
id
name
login
lang
```

Datei: `res.users.csv`

### Zugriffsrechte exportieren

Listenansicht: _Einstellungen > Technisch > Sicherheit > Zugriffsrechte_

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

Listenansicht: _Einstellungen > Benutzer > Benutzer verwalten_
