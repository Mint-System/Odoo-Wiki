---
title: Invoice Merge PDF Attachment
description: PDF-Dokumenten von Rechnungen zusammenführen.     
tags:
- HowTo
- Drittanbieter
prev: ./finance
---
# Invoice Merge PDF Attachment

![](assets/icon_odoo_sv.png)

{{ $frontmatter.description }}

Technischer Name: `sh_inv_merge_pdf`\
Repository: <https://gitlab.com/mint-system/odoo-apps-partner/-/tree/14.0/sh_inv_merge_pdf>\
Odoo App Store: <https://apps.odoo.com/apps/modules/14.0/sh_inv_merge_pdf>

## Verwendung

### PDF-Dokumente aus Rechnung zusammenführen

Mit dieser Erweiterung können Sie Die Anhänge einer Rechnung eineem bestimmten Rechnungsbericht anfügen.

In den Einstellunge unter *Finanzen > Invoice Attachment Merge*, bestimmen Sie den Hauptbericht.

![](assets/Invoice%20Merge%20PDF%20Attachment.png)

Wenn Sie eine Rechnung erstellen, generieren Sie als erstes den Anhang (hier QR-Rechung). Anschliessend legen Sie auf der Rechnung, dass der Anhang zusammengeführt werden soll. Wenn Sie nun den Hauptbericht generieren, werden die ausgewählten Anhänge angefügt.

![Invoice Merge PDF Attachment](assets/Invoice%20Merge%20PDF%20Attachment.gif)