---
tags:
- HowTo
- OCA
prev: ./finanzen
---
# Switzerland Bank Type
![icon_oca_app](assets/icon_oca_app.png)

Lokalisierung für Schweizer Banken und Bankkontos.

Technischer Name: `l10n_ch_base_bank`\
Repository: <https://github.com/OCA/l10n-switzerland/tree/14.0/l10n_ch_base_bank>

## Clearingnummer der Bank hinzufügen

Mit dieser Erweiterung kann bei einer Bank die *Clearingingnummer* hinterlegt werden. Navigieren sie nach *Kontakte > Konfiguration > Bankkonten > Bankverzeichnis* und wählen sie eine Bank aus.

![](assets/Switzerland%20Bank%20type%20Clearingnummer.png)

## Bankenverzeichnis aktualiseren

Auf der Seite [SIX - Download Bankenstamm](https://www.six-group.com/de/products-services/banking-services/interbank-clearing/online-services/download-bank-master.html) erhalten sie eine Liste aller Schweizer Banken. Laden sie die Datei [Bankenstamm (Excel)](https://api.six-group.com/api/epcd/bankmaster/v2/public/downloads/bcbankenstamm_e.xls) herunter und öffnen diese zur Bearbeitung. Entfernen sie alle Spalten ausser:
* IID
* Short Name
* Bank/Institution Name
* Domicile Address
* Postal Address
* Zip Code
* Place
* Phone
* BIC

Entfernen sie alle Bankeinträge ohne BIC/SWIFT-Eintrag.

In zeigen sie *Kontakte > Konfiguration > Bankkonten > Bankverzeichnis* an und wählen *Favoriten > Datensätze importieren*. Laden sie die Datei und ordnen sie die Spalten wie folgt zu.

![](assets/Switzerland%20Bank%20Type%20Spalte%20zuordnen.png)

Führen sie einen Test aus und importieren sie die Daten.