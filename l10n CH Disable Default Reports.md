---
description: Generierung der QR- und ISR-Berichte deaktivieren.
forge: github.com
kind: howto
name: l10n_ch_disable_default_reports
partner: Mint System
prev: ./l10n-ch
repo: Mint-System/Odoo-Apps-Account-Invoicing
title: Switzerland Disable Default Reports
versions:
- '16.0'
- '15.0'
- '14.0'
---


# Switzerland Disable Default Reports

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Schweizer QR-Rechnungen aktivieren

Gilt ab #Odoo16 .

Zeigen Sie eine Kundenrechnung unter _Buchhaltung > Kunden > Rechnungen_ an. Aktivieren Sie die Option _Schweizer QR-Rechnung aktivieren_.

### Rechnung ohne Standardberichte versenden

Gilt bis #Odoo15 .

Mit dieser Erweiterung wird die Generierung der Standardberichte deaktiviert. Es wird nur der Bericht, der in der E-Mail-Vorlage definiert ist, geladen.

![](attachments/Switzerland%20Disable%20Default%20Reports.png)
