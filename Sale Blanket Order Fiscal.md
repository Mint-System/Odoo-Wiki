---
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- HowTo
- Drittanbieter
prev: ./sale-blanket-order
---
# Sale Blanket Order Fiscal
![icon_oms_box](assets/icon_oms_box.png)

Steuerzuordnung von Rahmenauftrag auf den Verkaufsauftrag kopieren.

Technischer Name: `sale_blanket_order_fiscal`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Sale-Workflow/tree/14.0/sale_blanket_order_fiscal>

## Verwendung

### Erweiterung konfigurieren

Mit dem Systemparameter `sale_blanket_order_fiscal.copy_fiscal` können Sie festlegen, ob die Steuerzuordnung vom Rahmenauftrag kopiert werden soll. Setzen Sie den Wert auf `True` damit der Wert kopiert wird.

### Steuerzuordnung festlegen

Mit dieser Erweiterung können Sie auf dem Verkaufsauftrag die *Steuerzuordnung* festlegen. 

![](assets/Sale%20Blanket%20Order%20Extended.png)