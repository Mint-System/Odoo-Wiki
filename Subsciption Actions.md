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

Die Aktionen deren Namen mit *Verkaufsabonnment:* beginnt, sind bereits definierte Aktionen. Deren Funktionsweise wird hier erläutert.

### Verkaufsabonnement: Ablauf des Abonnements

Diese Aktion prüft das Enddatum der Abonnmente. Standardmässig wird diese Aktion jede Woche ausgeführt.

Wenn das Enddatum zwischen heute und in einem Monat liegt, wird das Abonnement mit *Zu erneuern* markiert.

Wenn das Enddatum vor dem heutigen Tag liegt, wird das Abonnement geschlossen. Hat das Abonnement unbezahlte Rechnungen wird dies im Chatter vermerkt.

#FIXME 

### Verkaufsabonnement: wiederkehrende Rechnungen und Zahlungen erstellen

Diese Aktion prüft das nächste Abrechnungsdatum der Abonnmente. Standardmässig wird diese Aktion jeden Tag ausgeführt.

Wenn das Enddatum vor dem heutigen Tag liegt, wird das Abonnement geschlossen.

#FIXME 

### Abonnemente vor Ablauf in Stufe verschieben

Diese geplante Aktion prüft das nächste Abrechnungsdatum und verschiebt die Abonnement abhängig von der verbleibenden Wochen in eine entsprechende Stufe.

Erstellen Sie eine externe ID `__custom__.reminder_stage1` und `__custom__.reminder_stage2` für die ausgewählten Spalten.

Navigieren Sie nach *Einstellungen > Technisch > Geplante Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Abonnemente vor Ablauf in Spalte verschieben`\
Modell: `ir.actions.server`\
Ausführen alle: `1` Tage\
Nächstes Ausführungsdatum: `DD.MM.YYYY 06:00:00`\
Anzahl der Anrufe: `-1`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
# Settings
stage1_ref = "__custom__.reminder_stage1"
stage2_ref = "__custom__.reminder_stage2"
stage1_weeks = 6
stage2_weeks = 2

# Get references
stage1_id = env.ref(stage1_ref)
stage2_id = env.ref(stage2_ref)
stage_running_id = env.ref("sale_subscription.sale_subscription_stage_in_progress")

# Get expiring dates
today = datetime.datetime.today()
stage1_date = today + datetime.timedelta(weeks=stage1_weeks)
stage2_date = today + datetime.timedelta(weeks=stage2_weeks)

# Search and move stage 1
stage1_subscriptions = env["sale.order"].search([
   ('is_subscription', '=', True),
   ('stage_id', '=', stage_running_id.id),
   ('next_invoice_date', '<=', stage1_date),
   ('next_invoice_date', '>', stage2_date),
])
# raise UserError(stage1_subscriptions)
stage1_subscriptions.write({'stage_id': stage1_id.id})

# Search and move stage 2
stage2_subscriptions = env["sale.order"].search([
   ('is_subscription', '=', True),
   ('stage_id', 'in', [stage1_id.id, stage_running_id.id]),
   ('next_invoice_date', '<=', stage2_date),
   ('next_invoice_date', '>', today),
])
# raise UserError(stage2_subscriptions)
stage2_subscriptions.write({'stage_id': stage2_id.id})
```