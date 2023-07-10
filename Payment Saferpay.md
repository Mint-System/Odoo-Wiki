---
title: Saferpay Payment Gateway
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- HowTo
- Drittanbieter
prev: ./website-ecommerce
---

# Saferpay Payment Gateway
![](attachments/odoo_icons_payment_saferpay.png)

Zahlungsanbieter für Saferpay (ohne Zahlungstokens).

Technischer Name: `payment_saferpay`\
Website: <https://apps.odoo.com/apps/modules/16.0/payment_saferpay/>\
Repository: <https://gitlab.com/mint-system/odoo-apps-partner/-/tree/16.0/payment_saferpay>

## Konfiguration

### Zahlungsoption Saferpay konfigurieren

Navigieren Sie nach *Website > Konfiguration > Zahlungsanbieter* und zeigen Sie den Eintrag *Saferpay* an. Passen Sie den Status an und tragen Sie die Daten aus dem Saferpay-Portal wie folgt ein:

* **Username**: Erstellen Sie ein neues Login unter *Einstellungen > JSON API Basic Authentication*
* **Password**: Eingabe aus Erstellung Login
* **Customer ID**: Ihre Kundennummer
* **Terminal ID**: Die Terminal-ID zu finden unter *Einstellungen > Zahlungsmittel / Terminals*
