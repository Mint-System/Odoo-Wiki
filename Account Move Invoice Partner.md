---
title: Account Move Invoice Partner
description: Separate Rechnungsadresse auf Rechnung festlegen.
kind: howto
partner: Mint-System
prev: ./invoicing
---
# Account Move Invoice Partner

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `account_move_invoice_partner`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Account-Invoicing/tree/16.0/account_move_invoice_partner>

## Verwendung

### Erweiterung konfigurieren

Damit die Rechnungsadresse als Empfängeradresse für die E-Mail übernommen wird, muss auf der E-Mail-Vorlage der Eintrag im Feld *An (Partner)* angepasst werden. Zur Bearbeitung rufen Sie die entsprechenden E-Mail-Vorlagen unter *Einstellungen > Technisch > E-Mail > E-Mail-Vorlagen* auf. Setzen Sie im Tab *E-Mail Konfiguration* im Feld *An (Partner)* den Wert `${object.partner_invoice_id.id}` ein.

### Rechnungsadresse festlegen

Mit dieser Erweiterung erhalten Sie ein zusätzliches Feld *Rechnungsadresse* auf der Formularansicht einer Rechnung.

![](attachments/Account%20Move%20Invoice%20Partner.png)

### Rechnung an Rechnungsadresse schicken

Mit dieser Erweiterung wird die Rechnungsadresse aus dem Kontakt auf die Rechnung übertragen. Wenn Sie eine E-Mail mit der Aktion*Senden und Drucken* vorbereiten, wird die E-Mail der Rechnungsadresse übernommen.
