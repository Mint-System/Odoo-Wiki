---
title: Abonnement Aktionen
description: Arbeitsflüsse für Abonnemente automatisieren.
tags:
- HowTo
- Aktionen
prev: ./sale
---
# Abonnemente Aktionen
![icons_odoo_sale](attachments/icons_odoo_sale.png)

{{ $frontmatter.description }}

## Aktionen

### Start- und Enddatum Abonnement aktualisieren

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Start- und Enddatum Abonnement aktualisieren`\
Modell: `account.move`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
for line in records.invoice_line_ids:
  if line.subscription_id:
    line["subscription_start_date"] = datetime.date(2024, 1, 1)
    line["subscription_end_date"] = datetime.date(2024, 12, 31)
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und speichern.

## Geplante Aktionen

Die Aktionen deren Namen mit *Verkaufsabonnment: * beginnt, sind bereits definierte Aktionen. Deren Funktionsweise wird hier erläutert.

### Verkaufsabonnement: Ablauf des Abonnements

#FIXME 

### Verkaufsabonnement: wiederkehrende Rechnungen und Zahlungen erstellen

#FIXME 