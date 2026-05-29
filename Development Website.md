---
title: Entwicklung Website
description: Website-Templates anpassen und erweitern.
kind: howto
section: true
prev: ./development
partner: Mint System
---

# Entwicklung Website

![icons_odoo_web_studio](attachments/icons_odoo_web_studio.png)

{{ $frontmatter.description }}

## Verwendung

### Ansicht anhand Website-Block suchen

Von der Website gibt es keinen direkten Link zur Ansicht-Definition. Starten Sie den Entwicklermodus in ihrem Browser und wählen Sie ein Element aus für welches Sie die Ansicht finden wollen.

![](attachments/Entwicklung%20Website%20Inspector.png)

In diesem Beispiel wurde die CSS-Klasse `o_website_sale_subscription_pricing_id` gefunden. Suche Sie unter _Einstellungen > Technisch > Ansichten_ im Feld _Arch Blob_ nach dieser Klasse.

![](attachments/Entwicklung%20Website%20Arch%20Blob.png)

Sie erhalten im besten Fall ein Suchresultat. Diese Ansicht enthält die Definition für den Website-Block.
