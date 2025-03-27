---
title: Lager Aktionen
description: Arbeitsflüsse in der Produkteverwaltung automatisieren.
tags:
- HowTo
- Aktionen
prev: ./product
---
# Produkt Aktionen
![](attachments/icons_odoo_product.png)

{{ $frontmatter.description }}

## Aktionen

### Übersetzung von Name anpassen

Navigieren Sie nach *Einstellungen > Technisch > Server-Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Übersetzung von Name anpassen`\
Modell: `product.template`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
src_lang = 'de_CH'
dest_lang = 'en_GB'

products = []
for rec in records:
  src_term = rec.with_context({'lang': src_lang}).name
  dest_term = rec.with_context({'lang': dest_lang}).name
  if src_term != dest_term:
    products.append(rec)
    rec.with_context({'lang': dest_lang}).write({'name': src_term})

message = 'Updated name of %s products.' % (len(products))
action = {
  'type': 'ir.actions.client',
  'tag': 'display_notification',
  'params': {
    'message': message,
  }
}
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und speichern.