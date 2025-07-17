---
title: MRP Documents Share
description: Teilen Sie Zeichnungen und Step-Dateien zu ihren Produkten als URL-Dokument.
kind: howto
tags:
- Mint-System
prev: ./manufacture
---
# MRP Documents Share
![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `mrp_documents_share`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Manufacture/tree/17.0/mrp_documents_share>

## Verwendung

### Zeichnung und Step-Datei hinzufügen

Erstellen Sie einen teilbaren Link zu ihrer Zeichung oder Step-Datei. Hier ein Beispiel mit Google Drive:

![](attachments/Google%20Drive%20öffentlicher%20Link.png)

Navigieren Sie zu ihrem Produkt und erstellen Sie einen neuen Eintrag für die Zeichnung oder Step-Datei.

![](attachments/MRP%20Documents%20Share%20Zeichnung%20hinzufügen.png)

Im Feld *Url* fügen Sie den öffentlichen Link hinzu.

![](attachments/MRP%20Documents%20Share%20Url%20hinzufügen.png)

Wenn Sie eine Bestellung auslösen, erscheint der Link auf dem Bericht und der Portal-Ansicht.

Bericht:

![](attachments/MRP%20Documents%20Share%20Bestellung.png)

Portal-Ansicht:

![](attachments/MRP%20Documents%20Share%20Portal%20Ansicht.png)

Falls das Produkt produziert wird, sehen Sie in der Workcenter-Tablet-Ansicht den Link auf die Zeichnung.

![](attachments/MRP%20Documents%20Share%20Operation%20Drawing%20Link.png)

### Alle Produktionsdokumente anzeigen

Die hinterlegten Zeichnungen und Step-Dateien können Sie auf einer Listenanischt anzeigen lassen. Navigieren Sie nach *Fertigung > Produkte > Produktionsdokumente*.

## Aktionen

### Produktionsdokumente mit Produkt verknüpfen

Damit die Produktionsdokumente und Produkte in beide Richtigungen verknüpft werden, kann diese Aktion auf den Produkten ausgeführt werden.

Navigieren Sie nach *Einstellungen > Technisch > Server-Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Produktionsdokumente mit Produkt verknüpfen`\
Modell: `product.template`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
for rec in records:
  if rec.drawing_file:
    rec.drawing_file.sudo().write({
      'res_model': 'product.template',
      'res_id': rec.id,
    })
  if rec.step_file:
    rec.step_file.sudo().write({
      'res_model': 'product.template',
      'res_id': rec.id,
    })
```

Schliessen Sie die Aktion mit *Kontextuelle Aktion Erstellen* ab. Markieren Sie die Produkte unter *Fertigung > Produkte > Produkte* und wählen Sie *Aktionen > Produktionsdokumente mit Produkt verknüpfen*.

Dasselbe können Sie für Produktvarianten einrichten:

Name der Aktion: `Produktionsdokumente mit Produkt verknüpfen`\
Modell: `product.product`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
for rec in records.product_tmpl_id:
  if rec.drawing_file:
    rec.drawing_file.sudo().write({
      'res_model': 'product.template',
      'res_id': rec.id,
    })
  if rec.step_file:
    rec.step_file.sudo().write({
      'res_model': 'product.template',
      'res_id': rec.id,
    })
```

Schliessen Sie die Aktion mit *Kontextuelle Aktion Erstellen* ab. Markieren Sie die Produkte unter *Fertigung > Produkte > Produkte* und wählen Sie *Aktionen > Produktionsdokumente mit Produkt verknüpfen*.
