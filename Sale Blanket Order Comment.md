---
description: Kommentar auf Rahmenauftrag.
forge: github.com
kind: howto
name: sale_blanket_order_comment
partner: Mint System
prev: ./sale-blanket-order
repo: Mint-System/Odoo-Apps-Sale-Workflow
title: Sale Blanket Order Comment
versions:
- '17.0'
---


# Sale Blanket Order Comment

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Erweiterung konfigurieren

Mit dem Systemparameter `sale_blanket_order_comment.copy_comment` können Sie festlegen, ob der Kommentar vom Rahmenauftrag kopiert werden soll. Setzen Sie den Wert auf `True` damit der Wert kopiert wird.

### Kommentar hinzufügen

Öffnen Sie einen Rahmenauftrag via _Verkäufe > Aufträge > Rahmenaufträge_. Im Tab _Weitere Informationen_ finden Sie das Feld _Kommentar_.

![](attachments/Sale%20Blanket%20Order%20Comment%20Feld.png)

Wenn Sie einen neuen Kommentar erfassen oder einen bestehenden Kommentar anpassen, wird das im Chatter protokolliert.

![](attachments/Sale%20Blanket%20Order%20Comment%20Chatter.png)
