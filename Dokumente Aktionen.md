---
description: Arbeitsflüsse mit Dokumenten automatisieren.
tags:
- HowTo
- Aktionen
prev: ./dokumente
---
# Dokumente Aktionen
![icon_odoo_document_inbox](assets/icon_odoo_document_inbox.png)

{{ $frontmatter.description }}

## Geplante Aktionen

### Dokumente an Wareneingang zuordnen

Navigieren Sie nach *Einstellungen > Technisch > Geplante Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Dokumente an Wareneingang zuordnen`\
Modell: `ir.actions.server`\
Ausführen alle: `1` Tage\
Nächstes Ausführungsdatum: `DD.MM.YYYY 06:00:00`\
Anzahl der Anrufe: `-1`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
tag = env['documents.tag'].search([ ('name','=','WE zugeordnet') ],limit=1)
folder = env['documents.folder'].search([ ('name','=','Wareneingang') ],limit=1)
documents = env['documents.document'].search([ ('folder_id','=',folder.id),('res_model','=','documents.document') ])
pickings = env['stock.picking'].search([ ('picking_type_code', '=', 'incoming'),('state','in',['done']) ])

messages = []
for document in documents:
  name = document.name.replace('_','/').replace('.pdf','')
  picking = pickings.filtered(lambda p: p.name == name)
  if picking:
    document.write({
      'res_model': 'stock.picking',
      'res_id': picking[0].id,
      'tag_ids': [tag.id]
    })
    messages.append('Assigned document %s to stock picking %s.' % (document.name, picking.name))

if messages:
  log(' '.join(messages))
```