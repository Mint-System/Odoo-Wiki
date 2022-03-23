---
tags:
- HowTo
- Drittanbieter
prev: ./abrechnung
---
# Invoice Merge PDF Attachment

![](assets/icon_odoo_sv.png)

PDF-Dokumenten von Rechnungen zusammenführen.     

Technischer Name: `sh_inv_merge_pdf`\
Repository: <https://gitlab.com/mint-system/odoo-apps-partner/-/tree/14.0/sh_inv_merge_pdf>\
Odoo App Store: <https://apps.odoo.com/apps/modules/14.0/sh_inv_merge_pdf>

## PDF-Dokumente aus Rechnung zusammenführen

Mit dieser Erweiterung können sie Die Anhänge einer Rechnung eineem bestimmten Rechnungsbericht anfügen.

In den Einstellunge unter *Finanzen > Invoice Attachment Merge*, bestimmen sie den Hauptbericht.

![](assets/Invoice%20Merge%20PDF%20Attachment.png)

Wenn sie eine Rechnung erstellen, generieren sie als erstes den Anhang (hier QR-Rechung). Anschliessend legen sie auf der Rechnung, dass der Anhang zusammengeführt werden soll. Wenn sie nun den Hauptbericht generieren, werden die ausgewählten Anhänge angefügt.

![Invoice Merge PDF Attachment](assets/Invoice%20Merge%20PDF%20Attachment.gif)