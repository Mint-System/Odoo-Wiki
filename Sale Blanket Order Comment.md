---
title: Sale Blanket Order Comment
description: Kommentar auf Rahmenauftrag.
tags:
- HowTo
- Drittanbieter
prev: ./sale-blanket-order
---
# Sale Blanket Order Comment
![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `sale_blanket_order_comment`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Sale-Workflow/tree/16.0/sale_blanket_order_comment>

## Verwendung

### Erweiterung konfigurieren

Mit dem Systemparameter `sale_blanket_order_comment.copy_comment` können Sie festlegen, ob der Kommentar vom Rahmenauftrag kopiert werden soll. Setzen Sie den Wert auf `True` damit der Wert kopiert wird.

### Kommentar hinzufügen

Öffnen Sie einen Rahmenauftrag via *Verkäufe > Aufträge > Rahmenaufträge*. Im Tab *Weitere Informationen* finden Sie das Feld *Kommentar*.

![](attachments/Sale%20Blanket%20Order%20Comment%20Feld.png)

Wenn Sie einen neuen Kommentar erfassen oder einen bestehenden Kommentar anpassen, wird das im Chatter protokolliert.

![](attachments/Sale%20Blanket%20Order%20Comment%20Chatter.png)