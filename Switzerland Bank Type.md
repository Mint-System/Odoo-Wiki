---
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- HowTo
- OCA
prev: ./finance
---
# Switzerland Bank Type
![icon_oca_app](assets/icon_oca_app.png)

Lokalisierung für Schweizer Banken und Bankkontos.

Technischer Name: `l10n_ch_base_bank`\
Repository: <https://github.com/OCA/l10n-switzerland/tree/14.0/l10n_ch_base_bank>

## Verwendung

### Clearingnummer der Bank hinzufügen

Mit dieser Erweiterung kann bei einer Bank die *Clearingingnummer* hinterlegt werden. Navigieren Sie nach *Kontakte > Konfiguration > Bankkonten > Bankverzeichnis* und wählen Sie eine Bank aus.

![](assets/Switzerland%20Bank%20type%20Clearingnummer.png)

### Bankenverzeichnis aktualiseren

Auf der Seite [SIX - Download Bankenstamm](https://www.six-group.com/de/products-services/banking-services/interbank-clearing/online-services/download-bank-master.html) erhalten Sie eine Liste aller Schweizer Banken. Laden Sie die Datei [Bankenstamm (Excel)](https://api.six-group.com/api/epcd/bankmaster/v2/public/downloads/bcbankenstamm_e.xls) herunter und öffnen diese zur Bearbeitung. Entfernen Sie alle Spalten ausser:
* IID
* Short Name
* Bank/Institution Name
* Domicile Address
* Postal Address
* Zip Code
* Place
* Phone
* BIC

Entfernen Sie alle Bankeinträge ohne BIC/SWIFT-Eintrag.

In zeigen Sie *Kontakte > Konfiguration > Bankkonten > Bankverzeichnis* an und wählen *Favoriten > Datensätze importieren*. Laden Sie die Datei und ordnen Sie die Spalten wie folgt zu.

![](assets/Switzerland%20Bank%20Type%20Spalte%20zuordnen.png)

Führen Sie einen Test aus und importieren Sie die Daten.