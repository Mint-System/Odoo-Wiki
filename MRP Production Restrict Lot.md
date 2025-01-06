---
title: MRP Production Restrict Lot
description: Auswahl der Los-Nummer auf der Tablet-Ansicht einschränken.
tags:
- HowTo
- Drittanbieter
prev: ./manufacture
---
# MRP Production Restrict Lot
![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `mrp_production_restrict_lot`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Manufacture/tree/16.0/mrp_production_restrict_lot>

## Verwendung

### Auswahl der verfügbaren Los-Nummer festlegen

Mit dieser Erweiterung können Sie die Auswahl von Los-Nummer in der Tablet-Ansicht von Fertigungsaufträgen einschränken. Als Vorbereitung rufen Sie einen *Fertigungsauftrag* unter *Fertigung > Vorgänge > Fertigungsaufträge* auf. Bestätigen Sie den Auftrag, wenn dieser noch im Status *Entwurf ist*. Zeigen Sie für eine Komponente die Ansicht *Detailierte Vorgänge* an. Fügen Sie für jede verüfgbare Los-Nummer eine Zeile hinzu und bestätigen Sie den Dialog.

![](attachments/MRP%20Production%20Restrict%20Lot%20Deetail.png)

Zeigen Sie die Tablet-Ansicht des Arbeitsauftrages an. In der Auswahl der Los-Nummer, stehen nur die hinzugefügten Los-Nummern bereit.

![](attachments/MRP%20Production%20Restrict%20Lot%20Tablet.png)