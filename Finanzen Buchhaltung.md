---
tags:
- HowTo
prev: ./finanzen
---
# Finanzen Buchhaltung
![icons_odoo_account_accountant](assets/icons_odoo_account_accountant.png)

Kontenplan einrichten und Buchungen erstellen.

## Konfiguration

### Schwellendatum für Rechnungen festlegen

Wenn Sie beispielsweise eine Buchhaltung per 01.01.2023 starten und Rechnungen aus dem Vorjahr erfassen möchten, diese aber nicht anzeigen möchten, können Sie ein Schwellen-Datum festlegen. Navigieren Sie nach *Einstellungen > Finanzen > Steuer-Zeiträume* und wählen Sie bei *Invoicing Switch Threshold* das entsprechende Datum aus.

## Buchhaltung

### Buchungsatz erstellen

Zeigen Sie *Finanzen > Finanzen > Sonstiges > Buchungssätze* an. Legen Sie einen Buchungssatz an und geben Sie als erstes das *Buchungsdatum* an. Im Tab *Buchungszeile* geben Sie als nächstes Soll-Konto ein und navigieren mit <kbd>Tab</kbd> zum Feld *Buchungstext*. Geben Sie den Buchungstext und den Soll-Betrag ein. Erstellen Sie mit <kbd>Enter</kbd> eine neue Zeile und geben Sie das Haben-Konto ein. Odoo übernimmt den Soll-Betrag in Haben-Feld.

![](assets/Finanzen%20Buchhaltung%20Buchungsatz%20erstellen.png)

Speichern Sie den Buchungssatz und wählen Sie *Buchen*, wenn alle Angaben stimmen.

### Eröffnungsbuchung anpassen

Mit der Ausführung des Assisten wird eine Eröffungsbuchung erstellt. Navigieren Sie nach *Finanzen > Sonstiges > Buchungssätze* und öffnen Sie den Eintrag mit Bezeichnung *Journal-Eintrag wird geöffnet*.

![](assets/Odoo%20Buchhaltung%20Eröffnungsbuchung%20anpassen.png)

Fügen Sie die Konten mit der entsprechenden Saldierung hinzu und buchen Sie Eröffnungsbuchung.

::: tip
Als Gegenkonto für die Anfangssaldo verwenden Sie das Konto *999999 Unverteilte Gewinne/Verluste*.
:::

### Buchungssatz korrigieren

Haben Sie eine fehlerhafte Buchung gemacht, können Sie diese einfach korrigieren. Öffnen Sie den Buchungssatz via *Finanzen > Finanzen > Buchungssätze*. Wählen Sie *Zurücksetzen* und korrigieren Sie beispielsweise ein Konto auf dem Buchungssatz. Buchen Sie die korrektur mit der Aktion *Buchen*.

::: warning
Falls Sie eine Rechnung korrigieren, geht Zahlungsabgleiche verloren. Diese müssen Sie wieder verknüpfen.
:::

### Buchungssatz umkehren

Angenommen Sie möchten einen Buchungssatz umkehren, beispielsweise für die Buchung von Transitorischen, öffnen Sie diesen via *Finanzen > Finanzen > Buchungssätze*.

Hier haben wir eine Buchung am 31.12.

![](assets/Finanzen%20Buchhaltung%20Eröffnung.png)

Wählen Sie *Stornobuchungssatz* unterhalb von *Bearbeiten*. Diese Auswahl erscheint, wenn die Buchung gebucht ist.

Beim Klick öffnet dieser Dialog:

![](assets/Finanzen%20Buchhaltung%20Stornieren.png)

Wählen Sie das Journal und das Datum für die neue Buchung. Bestätigen Sie den Vorgang mit *Stornieren.*

Nun wird ein umgekehrter Buchungssatz erstellt.

![](assets/Finanzen%20Buchhaltung%20Umkehrung.png)

Diesen können Sie wie gewohnt anpassen.

### Buchungssatz abbrechen

Einmal gebuchte Buchungssätze können nicht gelöscht, aber abgebrochen werden. Zeigen Sie einen Buchungssatz an *Finanzen > Finanzen > Buchungssätze* und klicken Sie auf *Zurücksetzen*. Anschliessend wählen Sie *Buchung Abrechen*. 

![](assets/Finanzen%20Buchhaltung%20Abgebrochen.png)

Den abgebrochenen Buchungssatz können Sie mit *Zurücksetzen* wieder in den Entwurfsstatussetzen und von dort aus wieder buchen.

### Buchungssatz importieren

Wenn Sie einen Buchungssatz mit meheren Zeilen im Excel erstellen und anschliessend in Odoo importieren möchten, verwenden Sie diese Vorlage:

| Journal | Datum      | Buchungszeilen/Buchungstext | Buchungszeilen/Konto | Buchungszeilen/Soll | Buchungszeilen/Haben |
| ------- | ---------- | --------------------------- | -------------------- | ------------------- | -------------------- |
| Lohn    | 2022-01-31 | Lohn                        | 1091                 | 74297.35            |                      |
|         |            | Lohn                        | 1030                 |                     | 74297.35             |

Damit wird eine Lohnbuchung in Journal *Lohn* importiert. Für den Import wählen Sie *Finanzen > Finanzen > Buchungssätze > Favoriten > Datensätze importieren*. Der Import-Dialog wird die Spaltenüberschriften automatisch erkennen und mit den Felder des Datenmodells verknüpfen.

### Manuelle Buchung ohne Steuer erstellen

Entfernen Sie den Steuersatz in der Spalte *Steuern*, wenn Sie keine Mehrwertsteuer-Buchung im Buchungssatz möchten.

![Account Buchhaltung Manuelle Buchung ohne Steuer](assets/Account%20Buchhaltung%20Manuelle%20Buchung%20ohne%20Steuer.gif)

### Buchungszeilen ohne Entwicklermodus anzeigen

Das Menü *Buchungszeilen* wird nur im Entwicklermodus angezeigt. Um das Verhalten zu ändern, öffnen Sie *Einstellungen > Technisch > Benutzer-Interface > Menüeinträge*, zeigen den Menüeintrag *Buchungszeilen* an und entfernen im Tab *Zugriffsrechte* die Gruppe. Aktualisieren Sie den Browser und verlassen Sie den Entwicklermodus. Sie sollten den Menüeintrag nun sehen.

### Sperrdatum festlegen

Im Dialog *Finanzen > Finanzen > Aktion > Sperrdaten* können Sie Sperrdaten für die Geschäfts- und Steuerperiode definieren.

![](assets/Finanzen%20Sperrdatum%20festlegen.png)

## Kontenplan

### Kontenplan einrichten

Öffnen Sie die Finanz-App und richten Sie den Standard-Kontenplan ein. Navigieren Sie nach *Finanzen > Konfiguration > Finanzen > Kontenplan*.

Konten für welche Sie keine Verwendung haben, können Sie anwählen und die Checkbox *Nicht mehr verwenden* markieren.

### Kontenplan exportieren

Öffnen Sie die Übersicht der Konten *Finanzen > Konfiguration > Finanzen > Kontenplan* und filtern Sie die Konten gemäss ihren Anforderungen. Markieren Sie die Konten und wählen Sie *Select all ...*. Führen Sie *Aktion > Export* aus.

![](assets/Finanzen%20Kontenplan%20exportieren.png)

Im Export-Dialog können Sie auf der linken Seite die zu exportierenden Felder suchen und dem Export auf der rechten Seite hinzufügen. Dies ist eine Odoo-Standardfunktion, mehr dazu unter [Daten exportieren](Datenmanagement.md#Daten%20exportieren).

![](assets/Finanzen%20Daten%20exportieren.png)

### Kontenplan gruppieren

Den Kontenplan können Sie nach beliebigen Merkmalen gruppieren und die Gruppierung als Standard speichern.

![Finanzen Kontenplan gruppieren](assets/Finanzen%20Kontenplan%20gruppieren.gif)

### Kontengruppen erstellen

Navigieren Sie nach *Finanzen > Konfiguration > Kontengruppen* und fügen eine Kontengruppe hinzu.

* **Name**: Name der Kontengruppe
* **Code-Präfix Von bis**: Bereiech der Kontennummer welche dieser Gruppe hinzugefügt werden

### Kontoarten anzeigen

Standardmässig werden die Kontoarten nicht angezeigt. Damit diese angezeigt werden, müssen Sie ein [Menüeintrag erstellen](Entwicklung.md#Entwicklung#Menüeintrag%20erstellen).

* **Menü**: Kontoarten
* **Obermenü**: Finanzen/Konfiguration/Finanzen
* **Aktion**: ir.actions.act_window Kontoarten

![](assets/Finanzen%20Kontoarten%20anzeigen.png)

### Zahlungskonten konfigurieren

Auf jedem Journal vom Typ *Bank* oder *Kasse/Bank* ist hinterlegt welches Konto für die ausstehende Zahlungen bzw. Zahlungsbestätigungen verwendet werden sollen.

Öffnen Sie *Finanzen > Konfiguration > Journale > Journal auswählen* und zeigen Sie den Tab *Payments Configuration* an. Hier können Sie die Konten für die Zahlungen festlegen.

## Abgrenzung

### Rechnungsabgrenzung vornehmen

Um eine Rechnungsabgrenzung in Odoo vorzunehmen, wählen Sie die Rechnung via *Finanzen > Lieferanten > Rechnungen* aus. Zeigen Sie den Tab *Buchungszeilen* an und klicken Sie auf *Cut-Off* bei der betroffenen Zeile. Nun erscheint ein Dialog um die Abgrenzung vorzunehmen.

![](assets/Abrechnung%20Rechnungsabgrenzung.png)

Mit *Create Journal Entries* wird die Buchung und Gegenbuchung für die Rechnungsabgrenzung erstellt.

## Steuern

### Steueranpassung erstellen

Wählen Sie *Finanzen > Finanzen > Steueranpassungen* und erstellen Sie einen neuen Eintrag. Schliessen Sie den Vorgang mit *Buchung Anlegen und Buchen* ab. Dazu ein Beispiel:

![](assets/Finanzen%20Buchhaltung%20Steueranpassung.png)

## Überweisung

### Interne Überweisung erstellen

Wählen Sie *Finanzen > Bank-Journal > Kontextmenü > Interne Überweisung*. 

![](assets/Finanzen%20Buchhaltung%20Interne%20Überweisung.png)

Wählen Sie ob mit *Zahlungsart*, ob Sie Geld empfang oder senden möchten. Geben Sie einen Betrag ein und schliessen Sie den Vorgang mit *Bestätigen* ab.