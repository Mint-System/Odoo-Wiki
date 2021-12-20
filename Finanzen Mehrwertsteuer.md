---
tags:
- HowTo
prev: ./finanzen
---
# Finanzen Mehrwertsteuer
![icons_odoo_account_accountant](assets/icons_odoo_account_accountant.png)

Mehrwertsteuer einfach abrechnen mit Odoo.

## Steuersätze anpassen

Öffnen sie *Finanzen > Konfiguration > Finanzen > Steuern*. Hier werden alle Steuersätze festgelegt. Öffnen sie einen Eintrag und passen sie diese Felder an:

* **Steuerbezeichnung**: Ist die interne Bezeichung
* **Steuerberechnung**: Legt fest wie die Steuer berechnet wird
* **Tax Type**: Unterscheidung zwischen Einkauf und Verkauf
* **Steuergültigkeit**: Steuern nur für bestimmte Produktarten zulassen
* **Betrag**: Der Prozentsatz

Im Tab *Definition* werden die Konten für die Buchung und die Ziffer für den Umsatzsteuerbericht festlegt. Einmal für die Rechnung und einmal für die Gutschrift.

Im Tab *Erweiterte Optionen* haben sie diese wichtigen Felder:

* **Bezeichnung auf Rechnungen**: Gilt für Ein- und Ausgangsrechnungen
* **Steuergruppe**: Eine rein organsatorische Gruppierung