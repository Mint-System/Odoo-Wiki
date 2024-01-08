---
title: Verkauf Aktionen
description: Arbeitsflüsse in Verkauf automatisieren.
tags:
- HowTo
- Aktionen
prev: ./sale
---
# Verkauf Aktionen
![icons_odoo_sale](attachments/icons_odoo_sale.png)

{{ $frontmatter.description }}

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

### Verkaufsauftrag bestätigen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Verkaufsauftrag bestätigen`\
Modell: `sale.order`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
for rec in records:  
  rec.action_confirm()
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Liste der Verkaufsaufträge können Sie die Einträge markieren und *Aktion > Verkaufsauftrag bestätigen* auswählen.

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

### Beschaffung starten

Mit dieser Serveraktion können Sie die Beschaffungsregeln auf den Autragszeilen für einen Verkaufsauftrag manuell auslösen.

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Beschaffung starten`\
Modell: `sale.order`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
for rec in records:  
  rec.order_line._action_launch_stock_rule()
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

### Steuersätze aktualisieren

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Steuersätze aktualisieren`\
Modell: `sale.order`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python-Code*:

```python
for line in records.order_line:
	line._compute_tax_id()
```

## Automatisierte Aktionen

### Angebot automatisch bestätigen

Mit dieser automatischen Aktion wird ein Angebot mit einem bestimmten Attribut (Beispiel: `partner_id.address_checked`) automatisch bestätigt.

Erstellen Sie unter *Einstellungen > Technisch > Automation > Automatisierte Aktionen* einen Eintrag mit diesen Werten:

Name der Aktion: `Angebot automatisch bestätigen`\
Modell: `sale.order`\
Auslöser: Bei Erstellung und Aktualisierung\
Trigger-Felder: `partner_id`\
Abgrenzung vor Aktualisierung: `[("partner_id.address_checked", "!=", True)]`\
Anzuwenden auf: `[("partner_id.address_checked", "=", True)]`\
Python Code:

```python
for rec in records:
  rec.action_confirm()
  rec.message_post(body="Die Kundenadresse ist geprüft, der Verkaufsauftrag wurde automatisch bestätigt.")
```

### Angebot bestätigen und Rechnungen erstellen

Mit dieser automatischen Aktion wird ein Angebot mit einem bestimmten Attribut (Beispiel: `x_as4import`) automatisch bestätigt. Rechnungen werden erstellt und ebenfalls bestätigt.

Erstellen Sie unter *Einstellungen > Technisch > Automation > Automatisierte Aktionen* einen Eintrag mit diesen Werten:

Name der Aktion: `Angebot bestätigen und Rechnungen erstellen`\
Modell: `sale.order`\
Auslöser: Bei Erstellung und Aktualisierung\
Trigger-Felder: `x_as4import`\
Abgrenzung vor Aktualisierung: `[("x_as4import", "!=", True)]`\
Anzuwenden auf: `[("x_as4import", "=", True)]`\
Python Code:

```python
records.action_confirm()
records._compute_amounts()
records._create_invoices()
for invoice in records.invoice_ids:
  invoice.action_post()
```

### Abonnemente auf Angebot entfernen

Name der Aktion: `Abonemente auf Angebot entfernen`\
Modell: `sale.order`\
Auslöser: Bei Erstellung und Aktualisierung\
Python Code:

```python
for rec in records:
  allow_ids = rec.team_id.member_ids.partner_id
  unsubscribe_ids = rec.message_partner_ids.filtered(lambda p: p not in allow_ids)
  if unsubscribe_ids:
    rec.message_unsubscribe(unsubscribe_ids.ids)
```

### Abonnement für Kontakt anlegen und bestätigen

Mit dieser automatisierten Aktion wird für einen Kontakt automatisch ein Abonnement angelegt.

Name der Aktion: `Abonnement für Kontakt anlegen und bestätigen`\
Modell: `res.partner`\
Auslöser: Bei Erstellung und Aktualisierung\
Auslöser-Felder: `backup_membership`\
Anwenden auf: `[("backup_membership", "!=", False)]`
Python Code:

```python
default_pricelist_id = env.ref("product.list0")
for rec in records.filtered(lambda r: r.property_product_pricelist.id == default_pricelist_id.id):
  xml_id = ""
  if rec.backup_membership.lower() == "basic":
	  xml_id = "job_portal_sale.product_template_13"
  if rec.backup_membership.lower() == "plus":
    xml_id = "job_portal_sale.product_template_14"
    
  product = env.ref(xml_id, raise_if_not_found=False)
  
  # raise UserError(product)

  if product:

    sale_order = env["sale.order"].create({
      "partner_id": rec.id,
      "order_line": [(0,0,{
        "product_id": product.product_variant_id.id,
        "order_partner_id": rec.id,
        "name": product.name,
        "product_uom_qty": 1,
        "price_unit": product.list_price,
      })],
      "recurrence_id": env.ref("sale_temporal.recurrence_yearly").id
    })
    sale_order.action_confirm()
    sale_order.message_post(body="Dieser Verkaufsauftrag wurde automatisch erstellt und bestätigt.")
```