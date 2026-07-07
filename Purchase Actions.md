---
title: Einkauf Aktionen
description: Arbeitsflüsse in Einkauf automatisieren.
kind: howto
section: true
prev: ./purchase
partner: Mint System
---

# Einkauf Aktionen

![icons_odoo_purchase](attachments/icons_odoo_purchase.png)

{{ $frontmatter.description }}

## Aktionen

### Einkaufsbeschreibung erneut übertragen

Mit dieser Aktion _Einkaufsbeschreibung in Einkaufszeilen kopieren_ wird das Feld _Purchase Description_ eines Produkts in die zugehörige Produktzeile einer Bestellung kopiert.

Navigieren Sie nach  _Einstellungen > Technisch > Automation > Serveraktionen_ und erstellen Sie den folgenden Eintrag:

- Name der Aktion: `Einkaufsbeschreibung in Einkaufszeilen kopieren`
- Modell: `Bestellung`
- Type: Code ausführen
- Python-Code:
  ```python
  for order in records:
    partner_lang = order.partner_id.lang
    for line in order.order_line:
        if line.product_id:
            product_lang = line.product_id.with_context(
                lang=partner_lang,
                partner_id=order.partner_id.id,
            )
            line.write({
                'name': line._get_product_purchase_description(product_lang)
            })
  ```


## Automatische Aktionen

### Bestellfrist festlegen

Mit Aktionen können Felder mit einem bestimmten Default-Wert beschrieben werden. Im folgenden Beispiel wird das Feld _Order Deadline_ auf Angebotsanfragen auf das Datum _heute + 5 Tage_ gesetzt.

Navigieren Sie nach _Einstellungen > Technisch > Automation > Automatisierte Aktionen_ und erstellen Sie den folgenden Eintrag:

- Name der Aktion: `Bestellfrist festlegen`
- Modell: `Beschaffungsauftrag`
- Auslöser: `Bei Erstellung`
- Folgeaktion: `Den Datensatz aktualisieren`
- Feld: `Order Deadline (purchase.order)`
- Wert: `datetime.datetime.today() + datetime.timedelta(days=5)`

## Automatische Aktionen

### Aktivität Rechnung prüfen für Käufer erstellen

Mit dieser automatischen Aktion wird beim anwählen der Option _Zum Überprüfen_ auf einer Rechnung mit einem Einkauf eine Aktivität zur Prüfung der Rechnung dem Käufer zugeordnet.

Erstellen Sie unter _Einstellungen > Technisch > Automation > Automatisierte Aktionen_ einen Eintrag mit diesen Werten:

Name der Aktion: `Aktivität Rechnung prüfen für Käufer erstellen`\
Modell: `acclount.move`\
Auslöser: Beim Aktualisieren\
Trigger-Felder: `to_check`
Anzuwenden auf: `[("to_check", "=", True),("purchase_order_count",">",0)]`
Folgeaktion: Code ausführen\
Python-Code:

```python
for rec in records:
  user_id = rec.line_ids.purchase_line_id.order_id.user_id[0]
  if user_id:
    env['mail.activity'].with_context(mail_notify_force_send=True).create({
      'activity_type_id': env.ref('mail.mail_activity_data_todo').id,
      'summary': 'Rechnung prüfen',
      'note': 'Das ist eine Rechnung zu einer Bestellung von Ihnen. Bitte überprüfen Sie die Rechnung und wählen Sie "Als geprüft markieren".',
      'res_id': rec.id,
      'res_model_id': env.ref('account.model_account_move').id,
      'user_id': user_id.id,
    })
```

### Gelieferte Menge eintragen

Name der Aktion: `Gelieferte Menge eintragen`\
Modell: `purchase.order`\
Auslöser: Bei Erstellung und Aktualisierung\
Trigger-Felder: `state`
Anzuwenden auf: `[("state", "=", "purchase")]`
Folgeaktion: Code ausführen\
Python-Code:

```python
for rec in records:
  if rec.user_id:
    activity = env['mail.activity'].with_context(mail_notify_force_send=True).create({
      'activity_type_id': env.ref('mail.mail_activity_data_email').id,
      'date_deadline': rec.date_planned,
      'summary': 'Gelieferte Menge eintragen',
      'note': 'Bitte tragen Sie die gelieferte Menge nach der Leistungserbringung ein.',
      'res_id': rec.id,
      'res_model_id': env.ref('purchase.model_purchase_order').id,
      'user_id': rec.user_id.id,
    })
```
