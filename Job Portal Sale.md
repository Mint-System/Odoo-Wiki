---
title: Job Portal Sale
description: Stelleninserate verrechnen.
tags:
- HowTo
- Drittanbieter
prev: ./
---
# Job Portal Sale
![](attachments/icons_odoo_job_portal_base.png)

{{ $frontmatter.description }}

Technischer Name: `job_portal_sale`\
Repository: <https://github.com/Sozialinfo/Odoo-Apps-Vertical-Job-Portal/tree/16.0/job_portal_sale>

## Aktionen

### Beschreibung Auftragszeile generieren

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Beschreibung Auftragszeile generieren`\
Modell: `sale.order`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python-Code*:

```python
for rec in records.filtered(lambda r: r.joboffer_id):
	joboffer_id = rec.joboffer_id
	for line in rec.order_line.filtered(lambda l: l.product_id):
		description = line.product_id.name
		
		if joboffer_id.ref:
			description += (' %s vom %s') % (joboffer_id.ref, joboffer_id.publication_start_date.date().strftime('%d.%m.%y'))
			
		if joboffer_id.name:
			description += '\n' + joboffer_id.name
			
		if joboffer_id.author or joboffer_id.reference:
			description += '\n'
			
		if joboffer_id.author:
			description += joboffer_id.author.name
			
		if joboffer_id.author and joboffer_id.reference:
			description += ' / '
			
		if joboffer_id.reference:
			description += 'Ihre Referenz: ' + joboffer_id.reference
		
		line.write({'name': description})
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.


## Automatisierte Aktionen 

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