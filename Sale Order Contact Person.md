---
title: Sale Order Contact Person
description: Kontaktperson auf Verkaufsauftrag festlegen.
kind: howto
tags:
- Mint-System
prev: ./sale
---
# Sale Order Contact Person
![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `sale_order_contact_person`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Sale-Workflow/tree/15.0/sale_order_contact_person>

::: warning
Diese App ist veraltet. Wir empfehlen die App [Sale Order Sale Partner](Sale%20Order%20Sale%20Partner.md) zu verwenden.
#DEPRECATED
:::

## Konfiguration

### Empfängeradresse auf E-Mail-Vorlage festlegen

Damit die Kontaktperson als Empfängeradresse für die E-Mail übernommen wird, darf auf der E-Mail-Vorlage kein Eintrag im Feld *An (Partner)* sein. Zur Bearbeitung rufen Sie die entsprechenden E-Mail-Vorlagen unter *Einstellungen > Technisch > E-Mail > E-Mail-Vorlagen* auf. Ersetzen Sie den Eintrag in *An (Partner)* `{{ object.partner_id.id }}` mit `{{ object.partner_contact_id.id or object.partner_id.id }}`.

## Verwendung

### Kontaktperson hinzufügen

Öffnen Sie *Verkauf* und wählen Sie einen Verkaufsauftrag aus. Im Feld *Kontaktperson* können Sie einen bliegen Kontakt als Kontaktperson festlegen.

![](attachments/Sale%20Order%20Contact%20Person%20Beispiel.png)
