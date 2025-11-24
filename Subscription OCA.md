---
title: Subscription OCA
description: OCA-Alternative für Abonnemente.
kind: howto
partner: OCA
prev: ./contract
---

# Subscription OCA

![](attachments/oca_icons_subscription_oca.png)

{{ $frontmatter.description }}

Technischer Name: `subscription_oca`\
Repository: <https://github.com/OCA/contract/tree/17.0/subscription_oca>

## Verwendung

### Produkt als subscribable festlegen

Zeiten Sie ein Produkt unter *Subscriptions > Subscriptions > Product* an und öffnen Sie den Tab *Verkauf*. Aktivieren Sie das Feld *Subscribable product* und legen Sie ein *Subscribable template* fest.

## Auswertung

### Subscription lines anzeigen

Damit Sie eine Übersicht der Subscription lines  erhalten, folgen Sie dem HowTo [Neue Ansicht mit Aktion hinzufügen](Development%20Actions.md#Neue%20Ansicht%20mit%20Aktion%20hinzufügen) und verwenden diese Werte:

Name der Aktion: `Subscription lines`\
Objekt: `sale.subscription.line`\
Ansichtsmodus: `tree,form,pivot`\
Menü: `Subscription lines `\
Obermenü: `Subscriptions/Subscriptions`\
Aktion: `ir.actions.act_window` `Subscription lines`\
Nummernfolge: `50`


## Aktionen

### Rechnung mit Abonnement verbinden

Navigieren Sie nach _Einstellungen > Technisch > Server-Aktionen_ und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Mit Abonnement verbinden`\
Modell: `account.move`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld _Python-Code_:

```python
for rec in records:
  order_ids = rec.invoice_line_ids.sale_line_ids.order_id
  if order_ids:
    subscriptions_ids = env['sale.subscription'].search([('sale_order_id', 'in', [order_ids.id])])
    if subscriptions_ids:
      rec.write({
        'subscription_id': subscriptions_ids[0].id
      })
      # raise UserError(subscriptions_ids)
```

Die Aktion mit dem Knopf _Kontextuelle Aktion erstellen_ bestätigen und dann speichern.
