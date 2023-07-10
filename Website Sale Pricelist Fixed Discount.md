---
title: Website Sale Pricelist Fixed Discount
description: Warenkorb mit Rabatten aus Preisliste mit Festpreis.
tags:
- HowTo
- Drittanbieter
prev: ./website
---

# Website Sale Pricelist Fixed Discount
![icon_oms_box](attachments/icon_oms_box.png)

{{ $frontmatter.description }}

Technischer Name: `website_sale_pricelist_fixed_discount`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Website/tree/16.0/website_sale_pricelist_fixed_discount>

## Verwendung

### Preisliste mit Rabatt einrichten

Damit Rabatte auf aus der Preisliste auf den Warenkorb / Angebot übertragen wird, müssen Sie einen [Rabatt auf Preisregel mit Festpreise festlegen](Product%20Pricelist%20Fixed%20Discount.md#Rabatt%20auf%20Preisregel%20mit%20Festpreise%20festlegen). Dazu ein Beispiel:

![](attachments/Website%20Sale%20Pricelist%20Fixed%20Discount%20Preisliste.png)

::: warning
Die Anwendung von Rabatten funktioniert auch für wiederkehrende Produkte. Dazu müssen Sie die Produktpreise doppelt erfassen, einmal in den *Preisregeln* und einmal in den *Time-based rules*.
:::