---
tags:
- HowTo
prev: ./finanzen
---
# Finanzen Buchhaltung
![icons_odoo_account_accountant](assets/icons_odoo_account_accountant.png)

Kontenplan einrichten und Buchungen erstellen.

## Buchungsatz erstellen

Zeigen sie *Finanzen > Finanzen > Sonstiges > Buchungssätze* an. Legen sie einen Buchungssatz an und geben sie als erstes das *Buchungsdatum* an. Im Tab *Buchungszeile* geben sie als nächstes Soll-Konto ein und navigieren mit <kbd>Tab</kbd> zum Feld *Buchungstext*. Geben sie den Buchungstext und den Soll-Betrag ein. Erstellen sie mit <kbd>Enter</kbd> eine neue Zeile und geben sie das Haben-Konto ein. Odoo übernimmt den Soll-Betrag in Haben-Feld.

![](assets/Finanzen%20Buchhaltung%20Buchungsatz%20erstellen.png)

Speichern sie den Buchungssatz und wählen sie *Buchen*, wenn alle Angaben stimmen.

## Eröffnungsbuchung anpassen

Mit der Ausführung des Assisten wird eine Eröffungsbuchung erstellt. Navigieren sie nach *Finanzen > Sonstiges > Buchungssätze* und öffnen sie den Eintrag mit Bezeichnung *Journal-Eintrag wird geöffnet*.

![](assets/Odoo%20Buchhaltung%20Eröffnungsbuchung%20anpassen.png)

Fügen sie die Konten mit der entsprechenden Saldierung hinzu und buchen sie Eröffnungsbuchung.

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

## Kontoauszug importieren

Zeigen sie das Dashboard von *Finanzen* an. Wählen sie *Import* unter dem Name des Bankjournals. Laden sie im Dialog die Datei mit den Kontoauszügen hoch.

![](assets/Finanzen%20Kontoauszug%20importieren.png)

Anschliessen wird die Datei validiert und Ansicht zum Abgleichen der Konto-Bewebungen wird angezeigt.

## Buchungszeilen ohne Entwicklermodus anzeigen

Das Menü *Buchungszeilen* wird nur im Entwicklermodus angezeigt. Um das Verhalten zu ändern, öffnen sie *Einstellungen > Technisch > Benutzer-Interface > Menüeinträge*, zeigen den Menüeintrag *Buchungszeilen* an und entfernen im Tab *Zugriffsrechte* die Gruppe. Aktualisieren sie den Browser und verlassen sie den Entwicklermodus. Sie sollten den Menüeintrag nun sehen.

## Buchungssatz korrigieren

Haben sie eine fehlerhafte Buchung gemacht, können sie diese einfach korrigieren. Öffnen sie den Buchungssatz via *Finanzen > Finanzen > Buchungssätze*. Wählen sie *Zurücksetzen* und korrigieren sie beispielsweise ein Konto auf dem Buchungssatz. Buchen sie die korrektur mit der Aktion *Buchen*.

::: warning
Falls sie eine Rechnung korrigieren, geht Zahlungsabgleiche verloren. Diese müssen sie wieder verknüpfen.
:::

## Buchungssatz umkehren

Angenommen sie möchten einen Buchungssatz umkehren, beispielsweise für die Buchung von Transitorischen, öffnen sie diesen via *Finanzen > Finanzen > Buchungssätze*.

Hier haben wir eine Buchung am 31.12.

![](assets/Finanzen%20Buchhaltung%20Eröffnung.png)
Wählen sie *Stornobuchungssatz* unterhalb von *Bearbeiten*. Diese Auswahl erscheint, wenn die Buchung gebucht ist.

Beim Klick öffnet dieser Dialog:


![](assets/Finanzen%20Buchhaltung%20Stornieren.png)

Wählen sie das Journal und das Datum für die neue Buchung. Bestätigen sie den Vorgang mit *Stornieren.*

Nun wird ein umgekehrter Buchungssatz erstellt.

![](assets/Finanzen%20Buchhaltung%20Umkehrung.png)

Diesen können sie wie gewohnt anpassen.