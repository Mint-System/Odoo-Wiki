---
title: MRP Production Assign Lot
description: Los aus eingehenden Lagerbuchungen an unreservierte Komponenten zuweisen.
kind: howto
partner: Mint-System
prev: ./manufacture
---
# MRP Production Assign Lot
![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `mrp_production_assign_lot`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Manufacture/tree/16.0/mrp_production_assign_lot>

## Konfiguration

### Vorgangstypen und Komponenten für Los-Zuweisung vorbereiten

Mit dieser Erweiterung können Lot-Nummern aus Wareneingängen und Fertigungsaufträgen an unreservierte Komponenten zugewiesen werden. Setzen Sie die Option *Benutze vorhandene Los/Seriennummer* bei Vorgangstypen  vom Typ *Wareneingang* unter *Lager > Konfiguration > Vorgangstypen*. Damit können Sie auf Anlieferungen die Los-Nummer direkt festlegen:

![](attachments/MRP%20Production%20Assign%20Lot%20Wareneingang.png)

Auf den Komponenten muss die Option *Nachverfolgung mittels Chargen* aktiviert sein. Gibt es einen Fertigungsauftrag mit einer erwarteten Lieferung, können Sie nun die Charge zuweisen lassen und die Lagerbuchung der Komponente als zugewiesen markieren.

![](attachments/MRP%20Production%20Assign%20Lot%20Fertigungsauftrag.png)

## Verwendung

### Los zuweisen

Mit dieser Erweiterung finden Sie auf Fertigungsaufträgen die Aktion *Los zuweisen*. Damit können Sie an jeder unreservierten Zeile eine Los-Nummer aus dem Wareneingang zuweisen.

![MRP Production Assign Lot](attachments/MRP%20Production%20Assign%20Lot.gif)

Im Chatter wird die Zuweisung entsprechend vermerkt:

![](attachments/MRP%20Production%20Assign%20Lot%20Chatter.png)

### Los von erstem Backorder zuweisen

Gilt bis #Odoo15.

Mit dieser Erweiterung wird das Los der der Arbeitsaufträge aus dem ersten Backorder auf die neuen Backorders übertragen.

![MRP Production Assign Lot Backorder](attachments/MRP%20Production%20Assign%20Lot%20Backorder.gif)
