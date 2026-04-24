---
description: Rechnung mit ISR- und/oder QR-Zahlung drucken.
forge: github.com
kind: howto
name: l10n_ch_invoice_reports
partner: OCA
prev: ./l10n-ch
repo: OCA/l10n-switzerland
title: Switzerland Invoice Reports with payment option
versions:
- '15.0'
- '14.0'
---


# Switzerland Invoice Reports with payment option

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Konfiguration

### Rechnung mit QR-Zahlung aktivieren

Gilt ab #Odoo15 .

Navigieren Sie nach _Einstellungen > Buchhaltung > Ausgangsrechnung_ und aktivieren Sie im Bereich _Invoice report options_ die Option _Print invoice with QR bill_.

## Verwendung

### Rechnung mit QR-Zahlung drucken

Gilt bis #Odoo14 .

Mit dieser Erweiterung können Sie die Rechnung inklusive QR-Zahlung in einem Dokument drucken. Öffnen Sie eine Rechnung via _Buchhaltung > Kunden > Rechnungen_ und klicken Sie auf _Drucken_.

![](attachments/Switzerland%20Invoice%20Reports%20with%20payment%20option.png)

In der Mail-Vorlage können Sie den zusammengeführten Bericht als Standard festlegen.

![](attachments/Switzerland%20Invoice%20Reports%20with%20payment%20option%20mail.png)

### Rechnung mit QR-Zahlung drucken

Gilt ab #Odoo15 .

Öffnen Sie eine Rechnung unter _Buchhaltung > Kunden > Rechnungen_ und wählen Sie _Drucken > Rechnung mit zahlungschein_.

::: tip
Deaktivieren Sie Option _Einstellungen > Buchhaltung > Kundeneinzahlungen > QR codes_, wenn Sie diese Erweiterung im Einsatz haben.
:::
