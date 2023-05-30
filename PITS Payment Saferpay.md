---
title: PITS Payment Saferpay
description: Saferpay Payment Provider Plugin von PIT Solutions.
tags:
- HowTo
- Drittanbieter
prev: ./website-ecommerce
---

# PITS Payment Saferpay
![](assets/odoo_icons_payment_saferpay.png)

{{ $frontmatter.description }}

Technischer Name: `pits_payment_saferpay`\
Website: <https://apps.odoo.com/apps/modules/16.0/pits_payment_saferpay/>\
Repository: <https://gitlab.com/mint-system/odoo-apps-partner/-/tree/16.0/pits_payment_saferpay>

::: warning
Die Entwicklungen der PIT Solutions AG wurden mehrfach Qualitätsmängel festgestellt. Wenn möglich verzichten Sie auf den Einsatz dieser Lösung.
:::

## Konfiguration

### Zahlungsanbieter Saferpay konfigurieren

Navigieren Sie nach *Abrechnung > Konfiguration > Saferpay Provider Configuration* und zeigen Sie den Eintrag *Saferpay Provider Configuration* an. Tragen Sie die Daten aus dem Saferpay-Portal wie folgt ein:

* **Customer ID**: Ihre Kundennummer
* **Terminal ID**: Die Terminal-ID zu finden unter *Einstellungen > Zahlungsmittel / Terminals*
* **API User Name**: Erstellen Sie ein neues Login unter *Einstellungen > JSON API Basic Authentication*
* **API Password**: Eingabe aus Erstellung Login

### Zahlungsoptionen Saferpay konfigurieren

Navigieren Sie nach *Website > Konfiguration > Zahlungsanbieter* und Filter Sie die Liste nach Einträgen it *Saferpay* im Namen. Wählen Sie einen Eintrag aus, beispielsweise *Saferpay - Credit/Debit card* und wählen Sie die Aktion *Aktivieren*. Passen Sie den *Status* an und konfigurieren Sie den Zahlungsanbieter gemäss Anforderungen.