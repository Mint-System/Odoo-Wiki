---
title: Finanzen Buchhaltung
description: Kontenplan einrichten und Buchungen erstellen.
tags:
- HowTo
prev: ./finance
---
# Finanzen Buchhaltung
![icons_odoo_account_accountant](attachments/icons_odoo_account_accountant.png)

{{ $frontmatter.description }}

## Konfiguration

### Schwellendatum für Rechnungen festlegen

Wenn Sie beispielsweise eine Buchhaltung per 01.01.2023 starten und Rechnungen aus dem Vorjahr erfassen möchten, diese aber nicht anzeigen möchten, können Sie ein Schwellen-Datum festlegen. Navigieren Sie nach *Einstellungen > Finanzen > Steuer-Zeiträume* und wählen Sie bei *Invoicing Switch Threshold* das entsprechende Datum aus.

### Buchungszeilen ohne Entwicklermodus anzeigen

Das Menü *Buchungszeilen* wird nur im Entwicklermodus angezeigt. Um das Verhalten zu ändern, öffnen Sie *Einstellungen > Technisch > Benutzer-Interface > Menüposten*, zeigen den Menüposten *Buchungszeilen* an und entfernen im Tab *Zugriffsrechte* die Gruppe. Aktualisieren Sie den Browser und verlassen Sie den Entwicklermodus. Sie sollten den Menüposten nun sehen.

### Gebuchte Buchungen in Journal sperren

Wenn Sie verhindern möchten, dass einmal gebuchte Buchungen zurückgesetzt und verändert werden können, können Sie eine Option auf dem Journal festlegen. Navigieren Sie nach *Finanzen > Konfiguration > Journale* und öffnen Sie das ausgewählte Journal. Im Tab *Erweiterte Einstellungen* aktivieren Sie die Option *Gebuchte Einträge mit "Hash" sperren*.

## Buchhaltung

### Buchungsatz erstellen

Zeigen Sie *Finanzen > Finanzen > Sonstiges > Buchungssätze* an. Legen Sie einen Buchungssatz an und geben Sie als erstes das *Buchungsdatum* an. Im Tab *Buchungszeile* geben Sie als nächstes Soll-Konto ein und navigieren mit <kbd>Tab</kbd> zum Feld *Buchungstext*. Geben Sie den Buchungstext und den Soll-Betrag ein. Erstellen Sie mit <kbd>Enter</kbd> eine neue Zeile und geben Sie das Haben-Konto ein. Odoo übernimmt den Soll-Betrag in Haben-Feld.

![](attachments/Finanzen%20Buchhaltung%20Buchungsatz%20erstellen.png)

Speichern Sie den Buchungssatz und wählen Sie *Buchen*, wenn alle Angaben stimmen.

### Eröffnungsbuchung erstellen

Zeigen Sie die App *Finanzen* an. Auf dem Assistenden des Buchhaltungsdashboard klicken Sie auf *Kontenplan*.

![](attachments/Finance%20Accounting%20Onboarding.png)

Sie landen nun auf der Ansicht des Kontenplan, aber sehen zwei zusätzliche Felder *Anfangssoll* und *Eröffungsguthaben*.

![](attachments/Finance%20Accounting%20Opening.png)

Tragen Sie die Saldos ein und schliessen Sie den Vorgang mit *Speichern* ab. Odoo erstellt einen Buchungssatz mit Referenz *Eröffnungsjournalbuchung*. Sie können diesen Buchhungssatz aufrufen und buchen.

### Eröffnungsbuchung anpassen

Mit der Ausführung des Assistenten wird eine Eröffnungsbuchung erstellt. Navigieren Sie nach *Finanzen > Sonstiges > Buchungssätze* und öffnen Sie den Eintrag mit Referenz *Eröffnungsjournalbuchung*.

![](attachments/Odoo%20Buchhaltung%20Eröffnungsbuchung%20anpassen.png)

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

![](attachments/Finanzen%20Buchhaltung%20Eröffnung.png)

Wählen Sie *Stornobuchungssatz* unterhalb von *Bearbeiten*. Diese Auswahl erscheint, wenn die Buchung gebucht ist.

Beim Klick öffnet dieser Dialog:

![](attachments/Finanzen%20Buchhaltung%20Stornieren.png)

Wählen Sie das Journal und das Datum für die neue Buchung. Bestätigen Sie den Vorgang mit *Stornieren.*

Nun wird ein umgekehrter Buchungssatz erstellt.

![](attachments/Finanzen%20Buchhaltung%20Umkehrung.png)

Diesen können Sie wie gewohnt anpassen.

### Buchungssatz abbrechen

Einmal gebuchte Buchungssätze können nicht gelöscht, aber abgebrochen werden. Zeigen Sie einen Buchungssatz an *Finanzen > Finanzen > Buchungssätze* und klicken Sie auf *Zurücksetzen*. Anschliessend wählen Sie *Buchung Abrechen*. 

![](attachments/Finanzen%20Buchhaltung%20Abgebrochen.png)

Den abgebrochenen Buchungssatz können Sie mit *Zurücksetzen* wieder in den Entwurfsstatussetzen und von dort aus wieder buchen.

### Buchungsnummer neu sequenzieren

Die Buchungssnummer oder Bezeichnung einer Buchung kann innerhalb eines Journals neu sequenziert werden. Wählen Sie *Finanzen > Finanzen > Buchungssätze* und filtern Sie die Buchungssätze, die Sie neu sequenzieren möchten. Markieren Sie die Einträge und wählen Sie *Aktion > Resequenzierung*.

![](attachments/Finance%20Buchhaltung%20Resequenzierung.png)

Im Dialog geben Sie die Start-Sequenz ein. Die Start-Sequenz kann beispielweise `BNK1/2023/06/0349` sein. Odoo nummeriert die ausgewählten Buchungen abhängig vom jeweiligen Monat und der Anzahl Buchungen innerhalb des Monats.

![](attachments/Finance%20Buchhaltung%20Resequenzierung%20Dialog.png)

Führen Sie die Sequenzierung mit *Bestätigen* aus.

### Buchungssatz importieren

Wenn Sie einen Buchungssatz mit meheren Zeilen im Excel erstellen und anschliessend in Odoo importieren möchten, verwenden Sie diese Vorlage:

| Journal | Datum      | Buchungszeilen/Buchungstext | Buchungszeilen/Konto | Buchungszeilen/Soll | Buchungszeilen/Haben |
| ------- | ---------- | --------------------------- | -------------------- | ------------------- | -------------------- |
| Lohn    | 2022-01-31 | Lohn                        | 1091                 | 74297.35            |                      |
|         |            | Lohn                        | 1030                 |                     | 74297.35             |

Damit wird eine Lohnbuchung in Journal *Lohn* importiert. Für den Import wählen Sie *Finanzen > Finanzen > Buchungssätze > Favoriten > Datensätze importieren*. Der Import-Dialog wird die Spaltenüberschriften automatisch erkennen und mit den Felder des Datenmodells verknüpfen.

### Manuelle Buchung ohne Steuer erstellen

Entfernen Sie den Steuersatz in der Spalte *Steuern*, wenn Sie keine Mehrwertsteuer-Buchung im Buchungssatz möchten.

![Account Buchhaltung Manuelle Buchung ohne Steuer](attachments/Account%20Buchhaltung%20Manuelle%20Buchung%20ohne%20Steuer.gif)

### Sperrdatum festlegen

Im Dialog *Finanzen > Finanzen > Aktionen > Sperrdaten* können Sie Sperrdaten für die Geschäfts- und Steuerperiode definieren.

![](attachments/Finanzen%20Sperrdatum%20festlegen.png)

## Kontenplan

### Konto erfassen

Navigieren Sie nach *Finanzen > Konfiguration > Kontenplan* und erstellen Sie einen neuen Eintrag.

* **Code**: Kontonummer
* **Name**: Bezeichnung des Konto
* **Typ**: Position in der Bilanz
* **Erlaube Abstimmung**: Buchungszeilen können mit Bankbeleg abgeglichen werden

::: tip
Falls die Meldung *Prüfungsfehler* erscheint und Sie ein neues Konto mit einer bestimmten Kurzbezeichnung nicht erstellen können, dann ist es vielleicht schon vorhanden aber wegen dem Standardfilter *Aktiver Account* nicht sichtbar. Schalten Sie ihn aus um auch Konten anzuzeigen die das Attribut *Nicht mehr verwenden* eingeschaltet haben.
:::

### Kontenplan einrichten

Öffnen Sie die Finanz-App und richten Sie den Standard-Kontenplan ein. Navigieren Sie nach *Finanzen > Konfiguration > Finanzen > Kontenplan*.

Gilt bis #Odoo14.

Konten für welche Sie keine Verwendung haben, können Sie anwählen und die Checkbox *Nicht mehr verwenden* markieren.

### Kontenplan exportieren

Öffnen Sie die Übersicht der Konten *Finanzen > Konfiguration > Finanzen > Kontenplan* und filtern Sie die Konten gemäss ihren Anforderungen. Markieren Sie die Konten und wählen Sie *Select all ...*. Führen Sie *Aktion > Export* aus.

![](attachments/Finanzen%20Kontenplan%20exportieren.png)

Im Export-Dialog können Sie auf der linken Seite die zu exportierenden Felder suchen und dem Export auf der rechten Seite hinzufügen. Dies ist eine Odoo-Standardfunktion, mehr dazu unter [Daten exportieren](Data%20Management.md#Daten%20exportieren).

![](attachments/Finanzen%20Daten%20exportieren.png)

### Kontenplan gruppieren

Den Kontenplan können Sie nach beliebigen Merkmalen gruppieren und die Gruppierung als Standard speichern.

![Finanzen Kontenplan gruppieren](attachments/Finanzen%20Kontenplan%20gruppieren.gif)

### Kontengruppen erstellen

Navigieren Sie nach *Finanzen > Konfiguration > Kontengruppen* und fügen eine Kontengruppe hinzu.

* **Name**: Name der Kontengruppe
* **Code-Präfix Von bis**: Bereich der Kontennummer welche dieser Gruppe hinzugefügt werden

::: tip
Das Feld *Gruppe* muss möglicherweise noch eingeschaltet werden damit die so erstellte Kontogruppe einen Nutzen bringt.
:::

### Kontoarten anzeigen

Standardmässig werden die Kontoarten nicht angezeigt. Damit diese angezeigt werden, müssen Sie ein [Menüposten erstellen](Development.md#Entwicklung#Menüposten%20erstellen).

* **Menü**: Kontoarten
* **Obermenü**: Finanzen/Konfiguration/Finanzen
* **Aktion**: ir.actions.act_window Kontoarten

![](attachments/Finanzen%20Kontoarten%20anzeigen.png)

### Zahlungskonten konfigurieren

Auf jedem Journal vom Typ *Bank* oder *Kasse/Bank* ist hinterlegt welches Konto für die ausstehende Zahlungen bzw. Zahlungsbestätigungen verwendet werden sollen.

Öffnen Sie *Finanzen > Konfiguration > Journale > Journal auswählen* und zeigen Sie den Tab *Payments Configuration* an. Hier können Sie die Konten für die Zahlungen festlegen.

## Abgrenzung

### Rechnungsabgrenzung vornehmen

Um eine Rechnungsabgrenzung in Odoo vorzunehmen, wählen Sie die Rechnung via *Finanzen > Lieferanten > Rechnungen* aus. Zeigen Sie den Tab *Buchungszeilen* an und klicken Sie auf *Cut-Off* bei der betroffenen Zeile. Nun erscheint ein Dialog um die Abgrenzung vorzunehmen.

![](attachments/Abrechnung%20Rechnungsabgrenzung.png)

Mit *Create Journal Entries* wird die Buchung und Gegenbuchung für die Rechnungsabgrenzung erstellt.

## Steuern

### Steueranpassung erstellen

Wählen Sie *Finanzen > Finanzen > Steueranpassungen* und erstellen Sie einen neuen Eintrag. Schliessen Sie den Vorgang mit *Buchung Anlegen und Buchen* ab. Dazu ein Beispiel:

![](attachments/Finanzen%20Buchhaltung%20Steueranpassung.png)

## Überweisung

### Interne Überweisung erstellen

Wählen Sie *Finanzen > Bank-Journal > Kontextmenü > Interne Überweisung*. 

![](attachments/Finanzen%20Buchhaltung%20Interne%20Überweisung.png)

Wählen Sie ob mit *Zahlungsart*, ob Sie Geld empfang oder senden möchten. Geben Sie einen Betrag ein und schliessen Sie den Vorgang mit *Bestätigen* ab.

## Kasse

### Kassen-Beleg mit Münzzählung erfassen

Zeigen die App *Finanzen* an und wählen Sie beim Journal *Bargeld* das Kontext-Menü und *Neu > Beleg* aus.

![](attachments/Finanzen%20Buchhaltung%20Bargeld%20Beleg.png)

Geben Sie eine passende Referenz beispielsweise *Kassenabrechnung Januar 2023* ein. Bei *Anfangssaldo* klicken Sie auf *-> Zähle* und erfassen so den Anfangsbestan der Kasse. Anschliessend wiederholen Sie den Vorgang für *Endsaldo*. Nun können Sie den Beleg direkt buchen ohne bei *Transkationen* einen Eintrag zu machen. Odoo berechnet die Differenz aus Anfangs- und Endsaldo und erstellt dazu eine Transaktion.