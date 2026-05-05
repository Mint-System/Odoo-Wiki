---
description: Rechnungsbeträge und andere Währung umrechnen.
forge: github.com
kind: howto
name: account_invoice_change_currency
partner: OCA
prev: ./invoicing
repo: OCA/account-invoicing
title: Account Invoice Change Currency
versions:
- '16.0'
- '15.0'
- '14.0'
---


# Account Invoice Change Currency

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Rechnungsbetrag in Währung umrechnen

Mit dier Erweiterung können Sie die Beträge einer Rechnung in eine andere Währung umrechnen lassen. Zeigen Sie eine Rechnung an und wählen Sie im Feld _Währung_ eine andere Währung aus. Odoo zeigt im Feld _Umrechungsfaktor_ den Kurs an. Klicken Sie auf das Aktualisieren-Icon um die Beträge in die Währung umzurechen.

::: tip
Sie können den Umrechnungsfaktor manuell überschreiben.
:::

### Umrechnung in andere Währung zurücksetzen

Wenn Sie auf der Rechnung die ursprüngliche Währung wählen, wird der Inhalt des Feld _Umrechnungsfaktor_ entfernt. Klicken Sie auf das Aktualisieren-Icon, es werden die originalen Beträge wieder angezeigt.
