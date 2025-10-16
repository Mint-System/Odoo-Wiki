---
title: Saferpay Payment Gateway
description: Zahlungsanbieter für Saferpay (ohne Zahlungstokens).
kind: howto
partner: Mint-System
prev: ./website-e-commerce
---

# Saferpay Payment Gateway

![](attachments/odoo_icons_payment_saferpay.png)

{{ $frontmatter.description }}

Technischer Name: `payment_saferpay`\
Website: <https://apps.odoo.com/apps/modules/16.0/payment_saferpay/>\
Repository: <https://gitlab.com/mint-system/odoo-apps-partner/-/tree/16.0/payment_saferpay>

## Konfiguration

### Zahlungsoption Saferpay konfigurieren

Navigieren Sie nach _Website > Konfiguration > Zahlungsanbieter_ und zeigen Sie den Eintrag _Saferpay_ an. Passen Sie den Status an und tragen Sie die Daten aus dem Saferpay-Portal wie folgt ein:

- **Username**: Erstellen Sie ein neues Login unter _Einstellungen > JSON API Basic Authentication_
- **Password**: Eingabe aus Erstellung Login
- **Customer ID**: Ihre Kundennummer
- **Terminal ID**: Die Terminal-ID zu finden unter _Einstellungen > Zahlungsmittel / Terminals_
