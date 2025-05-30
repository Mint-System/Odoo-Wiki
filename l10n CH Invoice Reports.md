---
title: Switzerland Invoice Reports with payment option
description: Rechnung mit ISR- und/oder QR-Zahlung drucken.
kind: howto
tags:
- OCA
prev: ./l10n-ch
---
# Switzerland Invoice Reports with payment option
![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `l10n_ch_invoice_reports`\
Repository: <https://github.com/OCA/l10n-switzerland/tree/15.0/l10n_ch_invoice_reports>

## Konfiguration

### Rechnung mit QR-Zahlung aktivieren

Gilt ab #Odoo15 .

Navigieren Sie nach *Einstellungen > Buchhaltung > Ausgangsrechnung* und aktivieren Sie im Bereich *Invoice report options* die Option *Print invoice with QR bill*.

## Verwendung

### Rechnung mit QR-Zahlung drucken

Gilt bis #Odoo14 .

Mit dieser Erweiterung können Sie die Rechnung inklusive QR-Zahlung in einem Dokument drucken. Öffnen Sie eine Rechnung via *Buchhaltung > Kunden > Rechnungen* und klicken Sie auf *Drucken*.

![](attachments/Switzerland%20Invoice%20Reports%20with%20payment%20option.png)

In der Mail-Vorlage können Sie den zusammengeführten Bericht als Standard festlegen.

![](attachments/Switzerland%20Invoice%20Reports%20with%20payment%20option%20mail.png)

### Rechnung mit QR-Zahlung drucken

Gilt ab #Odoo15 .

Öffnen Sie eine Rechnung unter *Buchhaltung > Kunden > Rechnungen* und wählen Sie *Drucken > Rechnung mit zahlungschein*.

::: tip
Deaktivieren Sie Option *Einstellungen > Buchhaltung > Kundeneinzahlungen > QR codes*, wenn Sie diese Erweiterung im Einsatz haben.
:::