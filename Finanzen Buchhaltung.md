---
tags:
- HowTo
---
[🔗 Finanzen](Finanzen.md)
# Finanzen Buchhaltung
![icons_odoo_account_accountant](assets/icons_odoo_account_accountant.png)

Kontenplan einrichten und Buchungen erstellen.

## Buchungsatz erstellen

Zeigen sie *Finanzen > Finanzen > Sonstiges > Buchungssätze* an. Legen sie einen Buchungssatz an und geben sie als erstes das *Buchungsdatum* an. Im Tab *Buchungszeile* geben sie als nächstes Soll-Konto ein und navigieren mit <kbd>Tab</kbd> zum Feld *Buchungstext*. Geben sie den Buchungstext und den Soll-Betrag ein. Erstellen sie mit <kbd>Enter</kbd> eine neue Zeile und geben sie das Haben-Konto ein. Odoo übernimmt den Soll-Betrag in Haben-Feld.

![](assets/Finanzen%20Buchhaltung%20Buchungsatz%20erstellen.png)

Speichern sie den Buchungssatz und wählen sie *Buchen*, wenn alle Angaben stimmen.

## Kontenplan einrichten

Öffnen sie die Finanz-App und richten Sie den Standard-Kontenplan ein. Navigieren sie nach *Finanzen > Konfiguration > Finanzen > Kontenplan*.

Konten für welche sie keine Verwendung haben, können sie anwählen und die Checkbox *Nicht mehr verwenden* markieren.

## Sperrdatum festlegen

Im Dialog *Finanzen > Finanzen > Aktion > Sperrdaten* können sie Sperrdaten für die Geschäfts- und Steuerperiode definieren.e

![](assets/Finanzen%20Sperrdatum%20festlegen.png)

## Kontenplan exportieren

Öffnen sie die Übersicht der Konten *Finanzen > Konfiguration > Finanzen > Kontenplan* und filtern sie die Konten gemäss ihren Anforderungen. Markieren sie die Konten und wählen sie *Select all ...*. Führen sie *Aktion > Export* aus.

![](assets/Finanzen%20Kontenplan%20exportieren.png)

Im Export-Dialog können sie auf der linken Seite die zu exportierenden Felder suchen und dem Export auf der rechten Seite hinzufügen. Dies ist eine Odoo-Standardfunktion, mehr dazu unter [Daten exportieren](Datenmanagement.md#Daten%20exportieren).

![](assets/Finanzen%20Daten%20exportieren.png)

## Kontenplan gruppieren

Den Kontenplan können sie nach beliebigen Merkmalen gruppieren und die Gruppierung als Standard speichern.

![Finanzen Kontenplan gruppieren](assets/Finanzen%20Kontenplan%20gruppieren.gif)

## Kontengruppen erstellen

Navigieren sie nach *Finanzen > Konfiguration > Kontengruppen* und fügen eine Kontengruppe hinzu.

* **Name**: Name der Kontengruppe
* **Code-Präfix Von bis**: Bereiech der Kontennummer welche dieser Gruppe hinzugefügt werden

## Kontoarten anzeigen

Standardmässig werden die Kontoarten nicht angezeigt. Damit diese angezeigt werden, müssen sie ein [Menüeintrag erstellen](Entwicklung.md#Entwicklung#Menüeintrag%20erstellen).

* **Menü**: Kontoarten
* **Obermenü**: Finanzen/Konfiguration/Finanzen
* **Aktion**: ir.actions.act_window Kontoarten

![](assets/Finanzen%20Kontoarten%20anzeigen.png)

## Zahlungskonten konfigurieren

Auf jedem Journal vom Typ *Bank* oder *Kasse/Bank* ist hinterlegt welches Konto für die ausstehende Zahlungen bzw. Zahlungsbestätigungen verwendet werden sollen.

Öffnen sie *Finanzen > Konfiguration > Journale > Journal auswählen* und zeigen sie den Tab *Payments Configuration* an. Hier können sie die Konten für die Zahlungen festlegen.