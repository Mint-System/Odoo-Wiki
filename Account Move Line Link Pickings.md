---
description: Lieferaufträge mit Rechnungszeile verlinken.
tags:
- HowTo
- Drittanbieter
prev: ./finanzen
---
# Account Move Line Link Pickings
![icon_oms_box](assets/icon_oms_box.png)

{{ $frontmatter.description }}

Technischer Name: `account_move_line_link_pickings`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Account-Invoicing/tree/14.0/account_move_line_link_pickings>

## Verwendung

### Verlinkte Lieferaufträge auf Rechnungszeile anzeigen

Mit dieser Erweiterung werden Lieferungen mit der Rechnungszeile verlinkt.

![](assets/Account%20Move%20Line%20Link%20Pickings.png)

### Sammelrechnung erstellen

Mit dem Snippet <https://odoo.build/snippets/account.html#group-by-pickings> und dieser Erweiterung können Sie Sammelrechnungen generieren.

![](assets/Account%20Move%20Line%20Link%20Pickings%20Sammelrechnung.png)

Für die Implementation müssen Sie Folgendes berücksichtigen:
* [Snippet hinzufügen](Entwicklung%20Snippets.md#Snippet%20hinzufügen)
* [Für mehrere Verkaufsaufträge eine Rechnung generieren](Verkauf.md#Für%20mehrere%20Verkaufsaufträge%20eine%20Rechnung%20generieren) 