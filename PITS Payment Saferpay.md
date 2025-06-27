---
title: PITS Payment Saferpay
description: Saferpay Payment Provider Plugin von PIT Solutions.
kind: howto
tags:
- Drittanbieter
prev: ./website-e-commerce
---

# PITS Payment Saferpay
![](attachments/odoo_icons_payment_saferpay.png)

{{ $frontmatter.description }}

Technischer Name: `pits_payment_saferpay`\
Website: <https://apps.odoo.com/apps/modules/16.0/pits_payment_saferpay/>\
Repository: <https://gitlab.com/mint-system/odoo-apps-partner/-/tree/16.0/pits_payment_saferpay>

## Konfiguration

### Zahlungsanbieter Saferpay konfigurieren

Navigieren Sie nach *Rechnungsstellung > Konfiguration > Saferpay Provider Configuration* und zeigen Sie den Eintrag *Saferpay Provider Configuration* an. Tragen Sie die Daten aus dem Saferpay-Portal wie folgt ein:

* **Customer ID**: Ihre Kundennummer
* **Terminal ID**: Die Terminal-ID zu finden unter *Einstellungen > Zahlungsmittel / Terminals*
* **API User Name**: Erstellen Sie ein neues Login unter *Einstellungen > JSON API Basic Authentication*
* **API Password**: Eingabe aus Erstellung Login

### Erlaubte Währungen auf Zahlungssymbole konfigurieren

Zeigen Sie die Liste der Zahlungssymbole via *Website > Konfiguration > Zahlungssymbole* an. Öffnen Sie die Symbole, welche Sie verfügbar machen wollen und zeigen Sie den Tab *Saferpay Configurations* an. Legen Sie im Feld *Allowed currencies* die verfügbaren Währungen aus.

### Zahlungsoptionen Saferpay konfigurieren

Navigieren Sie nach *Website > Konfiguration > Zahlungsanbieter* und Filter Sie die Liste nach Einträgen it *Saferpay* im Namen. Wählen Sie einen Eintrag aus, beispielsweise *Saferpay - Credit/Debit card* und wählen Sie die Aktion *Aktivieren*. Konfigurieren Sie den Zahlungsanbieter im Tab *Konfiguration* wie folgt:

* **Status**: Wählen Sie für den produktiven Betrieb *Aktivieren* und für den Testbetrieb *Testmodus*
* **Zahlungsjournal**: Erstellen Sie bei Bedarf ein neues Zahlungsjournal *Saferpay* mit Kürzel *SFP*
* **Payment Interface**: Wählen Sie hier *Payment Page* (empfohlen) oder *Transaction Interface* aus
