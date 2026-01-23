---
title: PITS Payment Saferpay
description: Saferpay Payment Provider Plugin von PIT Solutions.
kind: howto
partner: Mint-System
prev: ./website-e-commerce
---

# PITS Payment Saferpay

![](attachments/odoo_icons_payment_saferpay.png)

{{ $frontmatter.description }}

Technischer Name: `pits_payment_saferpay`\
Website: <https://apps.odoo.com/apps/modules/18.0/pits_payment_saferpay/>
::: warning
Seit #Odoo18 wird diese App nicht mehr benötigt. 
#DEPRECATED
:::

## Konfiguration

### Zahlungsanbieter Saferpay konfigurieren

Navigieren Sie nach _Rechnungsstellung > Konfiguration > Saferpay Provider Configuration_ und zeigen Sie den Eintrag _Saferpay Provider Configuration_ an. Tragen Sie die Daten aus dem Saferpay-Portal wie folgt ein:

- **Customer ID**: Ihre Kundennummer
- **Terminal ID**: Die Terminal-ID zu finden unter _Einstellungen > Zahlungsmittel / Terminals_
- **API User Name**: Erstellen Sie ein neues Login unter _Einstellungen > JSON API Basic Authentication_
- **API Password**: Eingabe aus Erstellung Login

### Erlaubte Währungen auf Zahlungssymbole konfigurieren

Zeigen Sie die Liste der Zahlungssymbole via _Website > Konfiguration > Zahlungssymbole_ an. Öffnen Sie die Symbole, welche Sie verfügbar machen wollen und zeigen Sie den Tab _Saferpay Configurations_ an. Legen Sie im Feld _Allowed currencies_ die verfügbaren Währungen aus.

### Zahlungsoptionen Saferpay konfigurieren

Navigieren Sie nach _Website > Konfiguration > Zahlungsanbieter_ und Filter Sie die Liste nach Einträgen it _Saferpay_ im Namen. Wählen Sie einen Eintrag aus, beispielsweise _Saferpay - Credit/Debit card_ und wählen Sie die Aktion _Aktivieren_. Konfigurieren Sie den Zahlungsanbieter im Tab _Konfiguration_ wie folgt:

- **Status**: Wählen Sie für den produktiven Betrieb _Aktivieren_ und für den Testbetrieb _Testmodus_
- **Zahlungsjournal**: Erstellen Sie bei Bedarf ein neues Zahlungsjournal _Saferpay_ mit Kürzel _SFP_
- **Payment Interface**: Wählen Sie hier _Payment Page_ (empfohlen) oder _Transaction Interface_ aus
