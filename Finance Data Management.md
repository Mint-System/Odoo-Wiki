---
title: Finanzen Datenmanagement
description: Daten zu Finanzen exportieren und importieren.
tags:
- HowTo
prev: ./finance
---
# Finanzen Datenmanagement
![icons_odoo_account_accountant](attachments/icons_odoo_account_accountant.png)

{{ $frontmatter.description }}

## Export

### Kontenplan exportieren

Listenansicht: *Finanzen > Konfiguration > Kontenplan*

Felder:

```
account_type
code
name
reconcile
deprecated
```


## Import

### Bankenstamm importieren

Auf der Seite [SIX - Download Bankenstamm](https://www.six-group.com/de/products-services/banking-services/interbank-clearing/online-services/download-bank-master.html) erhalten Sie eine Liste aller Schweizer Banken. Laden Sie die Datei [Bankenstamm (Excel)](https://api.six-group.com/api/epcd/bankmaster/v2/public/downloads/bcbankenstamm_e.xls) herunter und öffnen diese zur Bearbeitung. Entfernen Sie alle Spalten ausser:

* Bank/Institution Name
* Domicile Address
* Postal Address
* Zip Code
* Place
* Phone
* BIC

Entfernen Sie alle Bankeinträge ohne BIC/SWIFT-Eintrag.

In zeigen Sie *Kontakte > Konfiguration > Bankkonten > Bankverzeichnis* an und wählen *Favoriten > Datensätze importieren*. Laden Sie die Datei und ordnen Sie die Spalten wie folgt zu.

![](attachments/Import%20Bankenstamm.png)

Führen Sie einen Test aus und importieren Sie die Daten.