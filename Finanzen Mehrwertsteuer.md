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

## Steuerperiode festlegen

Öffnen sie *Finanzen > Konfiguration > Einstellungen > Steuern*. Legen sie im Bereich *regelmässige Steuernrückzahlungen* die Periode für die Steuerrückzahlungen fest.

## Konten-Tags ohne Entwicklermodus anzeigen

Das Menü *Konten-Tags* wird nur im Entwicklermodus angezeigt. Um das Verhalten zu ändern, öffnen sie *Einstellungen > Technisch > Benutzer-Interface > Menüeinträge*, zeigen den Menüeintrag *Konten-Tags* an und entfernen im Tab *Zugriffsrechte* die Gruppe. Aktualisieren sie den Browser und verlassen sie den Entwicklermodus. Sie sollten den Menüeintrag nun sehen.

## Steuerkonten konfigurieren

Klicken sie auf *Einstellungen > Finanzen > Steuern > Konfigurieren der Steuerkonten*. Hier können sie die Konten pro Steuersatz für die Bezahlung der Umsatzsteuer hinterlegen.

![](assets/Finanzen%20Mehrwertsteuer%20Steuerkonten%20konfigurieren.png)

## Steuergruppen anzeigen

Damit sie eine Übersicht der Steuergruppen erhalten,müssen sie via *Einstellungen > Technisch > Benutzer-Interface > Menüeinträge* einen neuen Eintrag anlegen.

Menü: `Steuergruppen`\
Obermenü: `Finanzen/Konfiguration/Finanzen`\
Aktion: `ir.actions.act_window` `Steuergruppen`\
Nummernfolge: `10`