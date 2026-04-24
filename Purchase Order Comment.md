---
description: Kommentar-Feld für Einkaufsaufträge.
forge: github.com
kind: howto
name: purchase_order_comment
partner: Mint System
prev: ./purchase
repo: Mint-System/Odoo-Apps-Purchase-Workflow
title: Purchase Order Comment
versions:
- '17.0'
---


# Purchase Order Comment

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Erweiterung konfigurieren

Mit dem Systemparameter `purchase.order.copy_requisition_comment` können Sie festlegen, ob der Kommentar vom Einkaufsvertrag kopiert werden soll. Setzen Sie den Wert auf `True` damit der Wert kopiert wird.

### Kommentar hinzufügen

Öffnen Sie einen Einkaufsauftrag via _Einkauf > Aufträge > Bestellungen_. Im Tab _Weitere Informationen_ finden Sie das Feld _Kommentar_.

![](attachments/Purchase%20Order%20Comment.png)

### Kommentar auf Kaufvertrag hinzufügen

Öffnen Sie einen Kaufvertrag via *Einkauf > Aufträge > Kaufverträge. Im Tab *Weitere Informationen* finden Sie das Feld *Kommentar\*.

![](attachments/Purchase%20Order%20Comment%20Kaufvertrag.png)
