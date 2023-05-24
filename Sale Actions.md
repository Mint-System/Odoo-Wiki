---
title: Verkauf Aktionen
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- HowTo
- Aktionen
prev: ./sale
---
# Verkauf Aktionen
![icons_odoo_sale](assets/icons_odoo_sale.png)

Arbeitsflüsse in Verkauf automatisieren.

## Aktionen

### Auf Erledigt setzen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Auf Erledigt setzen`\
Modell: `sale.order`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
for record in records:
	record.write({
	  'state': 'done'
	})
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und speichern.

### Als Anzahlung markieren

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Als Anzahlung markieren`\
Modell: `sale.order.line`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
for rec in records:
  rec.update({'is_downpayment': True })
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und speichern.

### Verkaufsauftrag abbrechen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Verkaufsauftrag abbrechen`\
Modell: `sale.order`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
for rec in records:  
  rec.write({'state': 'cancel'})
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Verkaufsaufträge können Sie die Einträge markieren und *Aktion > Verkaufsauftrag abbrechen* auswählen.