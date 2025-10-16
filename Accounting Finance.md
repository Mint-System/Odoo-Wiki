---
title: Buchhaltung Finanzbuchhaltung
description: Kontenplan einrichten und Buchungen erstellen.
kind: howto
prev: ./accounting
---

# Buchhaltung Finanzbuchhaltung

![icons_odoo_account_accountant](attachments/icons_odoo_account_accountant.png)

{{ $frontmatter.description }}
d

## Konfiguration

### Schwellendatum für Rechnungen festlegen

Wenn Sie beispielsweise eine Buchhaltung per 01.01.2023 starten und Rechnungen aus dem Vorjahr erfassen möchten, diese aber nicht anzeigen möchten, können Sie ein Schwellen-Datum festlegen. Navigieren Sie nach _Einstellungen > Buchhaltung > Steuer-Zeiträume_ und wählen Sie bei _Invoicing Switch Threshold_ das entsprechende Datum aus.

### Buchungszeilen ohne Entwicklermodus anzeigen

Das Menü _Buchungszeilen_ wird nur im Entwicklermodus angezeigt. Um das Verhalten zu ändern, öffnen Sie _Einstellungen > Technisch > Benutzer-Interface > Menüposten_, zeigen den Menüposten _Buchungszeilen_ an und entfernen im Tab _Zugriffsrechte_ die Gruppe. Aktualisieren Sie den Browser und verlassen Sie den Entwicklermodus. Sie sollten den Menüposten nun sehen.

### Gebuchte Buchungen in Journal sperren

Wenn Sie verhindern möchten, dass einmal gebuchte Buchungen zurückgesetzt und verändert werden können, können Sie eine Option auf dem Journal festlegen. Navigieren Sie nach _Buchhaltung > Konfiguration > Journale_ und öffnen Sie das ausgewählte Journal. Im Tab _Erweiterte Einstellungen_ aktivieren Sie die Option _Gebuchte Einträge mit "Hash" sperren_.

## Buchhaltung

### Buchungsatz erstellen

Zeigen Sie _Buchhaltung > Buchhaltung > Sonstiges > Buchungssätze_ an. Legen Sie einen Buchungssatz an und geben Sie als erstes das _Buchungsdatum_ an. Im Tab _Buchungszeile_ geben Sie als nächstes Soll-Konto ein und navigieren mit <kbd>Tab</kbd> zum Feld _Buchungstext_. Geben Sie den Buchungstext und den Soll-Betrag ein. Erstellen Sie mit <kbd>Enter</kbd> eine neue Zeile und geben Sie das Haben-Konto ein. Odoo übernimmt den Soll-Betrag in Haben-Feld.

![](attachments/Buchhaltung%20Buchungsatz%20erstellen.png)

Speichern Sie den Buchungssatz und wählen Sie _Buchen_, wenn alle Angaben stimmen.

### Eröffnungsbuchung erstellen

Zeigen Sie die App _Buchhaltung_ an. Auf dem Assistenden des Buchhaltungsdashboard klicken Sie auf _Kontenplan_.

![](attachments/Accounting%20Onboarding.png)

Sie landen nun auf der Ansicht des Kontenplan, aber sehen zwei zusätzliche Felder _Anfangssoll_ und _Eröffungsguthaben_.

![](attachments/Accounting%20Opening.png)

Tragen Sie die Saldos ein und schliessen Sie den Vorgang mit _Speichern_ ab. Odoo erstellt einen Buchungssatz mit Referenz _Eröffnungsjournalbuchung_. Sie können diesen Buchhungssatz aufrufen und buchen.

### Eröffnungsbuchung anpassen

Mit der Ausführung des Assistenten wird eine Eröffnungsbuchung erstellt. Navigieren Sie nach _Buchhaltung > Sonstiges > Buchungssätze_ und öffnen Sie den Eintrag mit Referenz _Eröffnungsjournalbuchung_.

![](attachments/Odoo%20Buchhaltung%20Eröffnungsbuchung%20anpassen.png)

Fügen Sie die Konten mit der entsprechenden Saldierung hinzu und buchen Sie Eröffnungsbuchung.

::: tip
Als Gegenkonto für die Anfangssaldo verwenden Sie das Konto _999999 Unverteilte Gewinne/Verluste_.
:::

### Buchungssatz korrigieren

Haben Sie eine fehlerhafte Buchung gemacht, können Sie diese einfach korrigieren. Öffnen Sie den Buchungssatz via _Buchhaltung > Buchhaltung > Buchungssätze_. Wählen Sie _Zurücksetzen_ und korrigieren Sie beispielsweise ein Konto auf dem Buchungssatz. Buchen Sie die korrektur mit der Aktion _Buchen_.

::: warning
Falls Sie eine Rechnung korrigieren, geht Zahlungsabgleiche verloren. Diese müssen Sie wieder verknüpfen.
:::

### Buchungssatz umkehren

Angenommen Sie möchten einen Buchungssatz umkehren, beispielsweise für die Buchung von Transitorischen, öffnen Sie diesen via _Buchhaltung > Buchhaltung > Buchungssätze_.

Hier haben wir eine Buchung am 31.12.

![](attachments/Buchhaltung%20Eröffnung.png)

Wählen Sie _Stornobuchungssatz_ unterhalb von _Bearbeiten_. Diese Auswahl erscheint, wenn die Buchung gebucht ist.

Beim Klick öffnet dieser Dialog:

![](attachments/Buchhaltung%20Stornieren.png)

Wählen Sie das Journal und das Datum für die neue Buchung. Bestätigen Sie den Vorgang mit _Stornieren._

Nun wird ein umgekehrter Buchungssatz erstellt.

![](attachments/Buchhaltung%20Buchhaltung%20Umkehrung.png)

Diesen können Sie wie gewohnt anpassen.

### Buchungssatz abbrechen

Einmal gebuchte Buchungssätze können nicht gelöscht, aber abgebrochen werden. Zeigen Sie einen Buchungssatz an _Buchhaltung > Buchhaltung > Buchungssätze_ und klicken Sie auf _Zurücksetzen_. Anschliessend wählen Sie _Buchung Abrechen_.

![](attachments/Buchhaltung%20Abgebrochen.png)

Den abgebrochenen Buchungssatz können Sie mit _Zurücksetzen_ wieder in den Entwurfsstatussetzen und von dort aus wieder buchen.

### Buchungsnummer neu sequenzieren

Die Buchungssnummer oder Bezeichnung einer Buchung kann innerhalb eines Journals neu sequenziert werden. Wählen Sie _Buchhaltung > Buchhaltung > Buchungssätze_ und filtern Sie die Buchungssätze, die Sie neu sequenzieren möchten. Markieren Sie die Einträge und wählen Sie _Aktionen > Resequenzierung_.

![](attachments/Buchhaltung%20Resequenzierung.png)

Im Dialog geben Sie die Start-Sequenz ein. Die Start-Sequenz kann beispielweise `BNK1/2023/06/0349` sein. Odoo nummeriert die ausgewählten Buchungen abhängig vom jeweiligen Monat und der Anzahl Buchungen innerhalb des Monats.

![](attachments/Buchhaltung%20Resequenzierung%20Dialog.png)

Führen Sie die Sequenzierung mit _Bestätigen_ aus.

### Buchungssatz importieren

Wenn Sie einen Buchungssatz mit meheren Zeilen im Excel erstellen und anschliessend in Odoo importieren möchten, verwenden Sie diese Vorlage:

| Journal | Datum      | Buchungszeilen/Buchungstext | Buchungszeilen/Konto | Buchungszeilen/Soll | Buchungszeilen/Haben |
| ------- | ---------- | --------------------------- | -------------------- | ------------------- | -------------------- |
| Lohn    | 2022-01-31 | Lohn                        | 1091                 | 74297.35            |                      |
|         |            | Lohn                        | 1030                 |                     | 74297.35             |

Damit wird eine Lohnbuchung in Journal _Lohn_ importiert. Für den Import wählen Sie _Buchhaltung > Buchhaltung > Buchungssätze > Favoriten > Datensätze importieren_. Der Import-Dialog wird die Spaltenüberschriften automatisch erkennen und mit den Felder des Datenmodells verknüpfen.

### Manuelle Buchung ohne Steuer erstellen

Entfernen Sie den Steuersatz in der Spalte _Steuern_, wenn Sie keine Mehrwertsteuer-Buchung im Buchungssatz möchten.

![Account Buchhaltung Manuelle Buchung ohne Steuer](attachments/Account%20Buchhaltung%20Manuelle%20Buchung%20ohne%20Steuer.gif)

### Sperrdatum festlegen

Im Dialog _Buchhaltung > Buchhaltung > Aktionen > Sperrdaten_ können Sie Sperrdaten für die Geschäfts- und Steuerperiode definieren.

![](attachments/Buchhaltung%20Sperrdatum%20festlegen.png)

## Kontenplan

### Konto erfassen

Navigieren Sie nach _Buchhaltung > Konfiguration > Kontenplan_ und erstellen Sie einen neuen Eintrag.

- **Code**: Kontonummer
- **Name**: Bezeichnung des Konto
- **Typ**: Position in der Bilanz
- **Erlaube Abstimmung**: Buchungszeilen können mit Bankbeleg abgeglichen werden

::: tip
Falls die Meldung _Prüfungsfehler_ erscheint und Sie ein neues Konto mit einer bestimmten Kurzbezeichnung nicht erstellen können, dann ist es vielleicht schon vorhanden aber wegen dem Standardfilter _Aktiver Account_ nicht sichtbar. Schalten Sie ihn aus um auch Konten anzuzeigen die das Attribut _Nicht mehr verwenden_ eingeschaltet haben.
:::

### Konto archivieren

Wenn Sie ein Konto nicht benötigen, können Sie dieses archivieren. Navigieren Sie nach _Buchhaltung > Konfiguration > Kontenplan_ und klicken Sie beim entsprechende Konto auf _Ansicht_. Aktivieren Sie die Option _Nicht mehr verwendet_ um das Konto zu archivieren.

::: warning
Es ist nicht empfohlen die nicht benötigten Konten zu löschen. Die Konten werden vom Kontenplan definiert und werden bei einem Update wieder angelegt.
:::

### Kontenplan einrichten

Öffnen Sie die Finanz-App und richten Sie den Standard-Kontenplan ein. Navigieren Sie nach _Buchhaltung > Konfiguration > Buchhaltung > Kontenplan_.

Gilt bis #Odoo14.

Konten für welche Sie keine Verwendung haben, können Sie anwählen und die Checkbox _Nicht mehr verwenden_ markieren.

### Kontenplan exportieren

Öffnen Sie die Übersicht der Konten _Buchhaltung > Konfiguration > Buchhaltung > Kontenplan_ und filtern Sie die Konten gemäss ihren Anforderungen. Markieren Sie die Konten und wählen Sie _Select all ..._. Führen Sie _Aktionen > Export_ aus.

![](attachments/Buchhaltung%20Kontenplan%20exportieren.png)

Im Export-Dialog können Sie auf der linken Seite die zu exportierenden Felder suchen und dem Export auf der rechten Seite hinzufügen. Dies ist eine Odoo-Standardfunktion, mehr dazu unter [Daten exportieren](Data%20Management.md#Daten%20exportieren).

![](attachments/Buchhaltung%20Daten%20exportieren.png)

### Kontenplan gruppieren

Den Kontenplan können Sie nach beliebigen Merkmalen gruppieren und die Gruppierung als Standard speichern.

![](attachments/Buchhaltung%20Kontenplan%20gruppieren.gif)

### Kontengruppen erstellen

Navigieren Sie nach _Buchhaltung > Konfiguration > Kontengruppen_ und fügen eine Kontengruppe hinzu.

- **Name**: Name der Kontengruppe
- **Code-Präfix Von bis**: Bereich der Kontennummer welche dieser Gruppe hinzugefügt werden

::: tip
Das Feld _Gruppe_ muss eingeschaltet sein damit die erstellte Kontogruppe einen Nutzen bringt.
:::

### Kontoarten anzeigen

Standardmässig werden die Kontoarten nicht angezeigt. Damit diese angezeigt werden, müssen Sie ein [Menüposten erstellen](Development.md#Entwicklung#Menüposten%20erstellen).

- **Menü**: Kontoarten
- **Obermenü**: Buchhaltung/Konfiguration/Buchhaltung
- **Aktion**: ir.actions.act_window Kontoarten

![](attachments/Buchhaltung%20Kontoarten%20anzeigen.png)

### Zahlungskonten konfigurieren

Auf jedem Journal vom Typ _Bank_ oder _Kasse/Bank_ ist hinterlegt welches Konto für die ausstehende Zahlungen bzw. Zahlungsbestätigungen verwendet werden sollen.

Öffnen Sie _Buchhaltung > Konfiguration > Journale > Journal auswählen_ und zeigen Sie den Tab _Payments Configuration_ an. Hier können Sie die Konten für die Zahlungen festlegen.

## Abgrenzung

### Rechnungsabgrenzung vornehmen

Um eine Rechnungsabgrenzung in Odoo vorzunehmen, wählen Sie die Rechnung via _Buchhaltung > Lieferanten > Rechnungen_ aus. Zeigen Sie den Tab _Buchungszeilen_ an und klicken Sie auf _Cut-Off_ bei der betroffenen Zeile. Nun erscheint ein Dialog um die Abgrenzung vorzunehmen.

![](attachments/Abrechnung%20Rechnungsabgrenzung.png)

Mit _Create Journal Entries_ wird die Buchung und Gegenbuchung für die Rechnungsabgrenzung erstellt.

## Steuern

### Steueranpassung erstellen

Wählen Sie _Buchhaltung > Buchhaltung > Steueranpassungen_ und erstellen Sie einen neuen Eintrag. Schliessen Sie den Vorgang mit _Buchung Anlegen und Buchen_ ab. Dazu ein Beispiel:

![](attachments/Buchhaltung%20Steueranpassung.png)

## Überweisung

### Interne Überweisung erstellen

Wählen Sie _Buchhaltung > Bank-Journal > Kontextmenü > Interne Überweisung_.

![](attachments/Buchhaltung%20Interne%20Überweisung.png)

Wählen Sie ob mit _Zahlungsart_, ob Sie Geld empfang oder senden möchten. Geben Sie einen Betrag ein und schliessen Sie den Vorgang mit _Bestätigen_ ab.

## Kasse

### Kassen-Beleg mit Münzzählung erfassen

Zeigen die App _Buchhaltung_ an und wählen Sie beim Journal _Bargeld_ das Kontext-Menü und _Neu > Beleg_ aus.

![](attachments/Buchhaltung%20Bargeld%20Beleg.png)

Geben Sie eine passende Referenz beispielsweise _Kassenabrechnung Januar 2023_ ein. Bei _Anfangssaldo_ klicken Sie auf _-> Zähle_ und erfassen so den Anfangsbestan der Kasse. Anschliessend wiederholen Sie den Vorgang für _Endsaldo_. Nun können Sie den Beleg direkt buchen ohne bei _Transkationen_ einen Eintrag zu machen. Odoo berechnet die Differenz aus Anfangs- und Endsaldo und erstellt dazu eine Transaktion.
