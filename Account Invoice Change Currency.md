---
title: Account Invoice Change Currency
description: Rechnungsbeträge und andere Währung umrechnen.
kind: howto
partner: OCA
prev: ./invoicing
---
# Account Invoice Change Currency
![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `account_invoice_change_currency`\
Repository: <https://github.com/OCA/account-invoicing/tree/16.0/account_invoice_change_currency>

## Verwendung

### Rechnungsbetrag in Währung umrechnen

Mit dier Erweiterung können Sie die Beträge einer Rechnung in eine andere Währung umrechnen lassen. Zeigen Sie eine Rechnung an und wählen Sie im Feld *Währung* eine andere Währung aus. Odoo zeigt im Feld *Umrechungsfaktor* den Kurs an. Klicken Sie auf das Aktualisieren-Icon um die Beträge in die Währung umzurechen.

::: tip
Sie können den Umrechnungsfaktor manuell überschreiben.
:::

### Umrechnung in andere Währung zurücksetzen

Wenn Sie auf der Rechnung die ursprüngliche Währung wählen, wird der Inhalt des Feld *Umrechnungsfaktor* entfernt. Klicken Sie auf das Aktualisieren-Icon, es werden die originalen Beträge wieder angezeigt.
