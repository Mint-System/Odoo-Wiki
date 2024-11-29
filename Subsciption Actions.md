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

### Abonnement schliessen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Abonnement schliessen`\
Modell: `sale.order`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
records.set_close()
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und speichern.


### Start- und Enddatum von Abonnement übernehmen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Start- und Enddatum von Abonnement übernehmen`\
Modell: `account.move`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
for line in records.invoice_line_ids:
  if line.subscription_id:
    end_date = line.subscription_id.next_invoice_date - datetime.timedelta(days=1)
    start_date = end_date - dateutil.relativedelta.relativedelta(years=line.subscription_id.recurrence_id.duration) + datetime.timedelta(days=1)
    line["subscription_start_date"] = start_date
    line["subscription_end_date"] = end_date
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und speichern.

## Geplante Aktionen

Die Aktionen deren Namen mit *Verkaufsabonnment:* beginnt, sind bereits definierte Aktionen. Deren Funktionsweise wird hier erläutert.

### Verkaufsabonnement: Ablauf des Abonnements

Diese Aktion prüft das Enddatum der Abonnmente. Standardmässig wird diese Aktion jede Woche ausgeführt.

Wenn das Enddatum zwischen heute und in einem Monat liegt, wird das Abonnement mit *Zu erneuern* markiert.

Wenn das Enddatum vor dem heutigen Tag liegt, wird das Abonnement geschlossen. Hat das Abonnement unbezahlte Rechnungen wird dies im Chatter vermerkt.

### Verkaufsabonnement: wiederkehrende Rechnungen und Zahlungen erstellen

Diese Aktion prüft das nächste Abrechnungsdatum und Enddatum der Abonnmente. Standardmässig wird diese Aktion jeden Tag ausgeführt.

Wenn das Enddatum vor dem heutigen Tag liegt, wird das Abonnement geschlossen.

Wenn das Abrechnungsdatum erreicht wurde, wird eine Rechnung erstellt und das nächste Abrechnungsdatum aktualisiert. Die Rechnung wird automatisch gebucht und verschickt.

### Verkaufsabonnement: Vor Ablauf in Stufe verschieben

Diese geplante Aktion prüft das nächste Abrechnungsdatum und verschiebt die Abonnement abhängig von der verbleibenden Wochen in eine entsprechende Stufe.

Erstellen Sie eine externe ID `__custom__.reminder_stage1` und `__custom__.reminder_stage2` für die ausgewählten Spalten.

Navigieren Sie nach *Einstellungen > Technisch > Geplante Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Verkaufsabonnement: Vor Ablauf in Spalte verschieben`\
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
   ("is_subscription", "=", True),
   ("stage_id", "=", stage_running_id.id),
   ("next_invoice_date", "<=", stage1_date),
   ("next_invoice_date", ">", stage2_date),
])
# raise UserError(stage1_subscriptions)
stage1_subscriptions.write({"stage_id": stage1_id.id})

# Search and move stage 2
stage2_subscriptions = env["sale.order"].search([
   ("is_subscription", "=", True),
   ("stage_id", "in", [stage1_id.id, stage_running_id.id]),
   ("next_invoice_date", "<=", stage2_date),
   ("next_invoice_date", ">", today),
])
# raise UserError(stage2_subscriptions)
stage2_subscriptions.write({"stage_id": stage2_id.id})
```

### Verkaufsabonnement: Vor Abrechnung verlängern

Diese geplante Aktion prüft das nächste Abrechnungsdatum der Abonnemente, erstellt ein Angebot zur Verlängerung und sendet dieses an den Kunden. Die folgenden Kriterien müssten für eine automatische Verlängerung stimmen:

* Der Verkaufsaufrag ist ein Abonnement
* Das Abonnement hat eine bestimmte Preisliste
* Das Abonnement ist in der Stufe *Laufend*
* Der Verkaufsauftrag ist im Status *Verkaufsauftrag*
* Das nächste Abrechnungsdatum liegt zwischen Heute und plus 6 Wochen

Navigieren Sie nach *Einstellungen > Technisch > Geplante Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Verkaufsabonnement: Vor Abrechnung verlängern`\
Modell: `ir.actions.server`\
Ausführen alle: `1` Tage\
Nächstes Ausführungsdatum: `DD.MM.YYYY 06:00:00`\
Anzahl der Anrufe: `-1`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
# Settings
weeks_before_invoice_date = 6
mail_template = "license_ocad_mail.mail_template_extend_subscription"
default_price_list = "product.list0"

# Get references
template = env.ref(mail_template)
pricelist_id = env.ref(default_price_list)
stage_running_id = env.ref("sale_subscription.sale_subscription_stage_in_progress")
stage_closed_id = env.ref("sale_subscription.sale_subscription_stage_closed")

# Get extend date
today = datetime.datetime.today()
extend_date = today + datetime.timedelta(weeks=weeks_before_invoice_date)

# Search subscriptions
extend_subscriptions = env["sale.order"].search([
  ("is_subscription", "=", True),
  ("pricelist_id", "=", pricelist_id.id),
  ("stage_id", "=", stage_running_id.id),
  ("subscription_child_ids", "=", False),
  ("state", "=", "sale"),
  ("next_invoice_date", "<=", extend_date),
  ("next_invoice_date", ">=", today),
])

# raise UserError([extend_subscriptions, extend_date])

# Create and send renewal order
for subscription in extend_subscriptions:
  res = subscription.prepare_renewal_order()
  res_id = res["res_id"]
  renewal_so = env["sale.order"].browse(res_id)
  renewal_so.with_context(mark_so_as_sent=True, force_send=True).message_post_with_template(
    template.id,
    composition_mode="comment",
    email_layout_xmlid="mail.mail_notification_layout_with_responsible_signature",
  )
  subscription.set_close()
```
