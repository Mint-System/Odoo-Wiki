---
title: Buchhaltung Mehrere Währungen
description: Unterschiedliche Währungen mit Odoo Buchhaltung verarbeiten.
tags:
- HowTo
prev: ./accounting
---
# Buchhaltung Mehrere Währungen
![icons_odoo_account_accountant](attachments/icons_odoo_account_accountant.png)

{{ $frontmatter.description }}

## Währungen

### Mehrere Währungen aktivieren

Navigieren nach *Buchhaltung > Konfiguration > Einstellungen > Währungen* und dort die Option *Mehrere Währungen* akvieren. Nach Bedarf muss ein Journal gemäss Vorlage erstellt werden. Die verfügbaren Währungen können über die Option *Andere Währungen aktivieren* verwaltet werden.

### Konto für Kursdifferenzbuchungen bestimmen

Zeigen Sie *Einstellungen > Buchhaltung > Währungen* an. Unter der aktivierten Option *Mehrere Währungen* finden Sie die Felder zum festlegen des Journals, Gewinn- und Verlustkonto für Kursdifferenzen.

### Automatische Währungssätze aktiveren

Werden mehre Währungen verwendet, können die Wechselkurse automatisch von Odoo aktualisiert werden. Navigieren Sie nach *Einstellungen > Buchhaltung > Währung* und klicken Sie auf *Automatische Währungssätze*. Stellen Sie ein ob die Währung automatisch oder manuell aktualisiert werden soll.

![](attachments/Buchhaltung%20Mehrere%20Währungen%20Automatisch.png)

Klicken Sie auf das Icon neben dem Feld *Nächster Lauf*. Die Währungskurse werden nun aktualisiert.

### Währungskurse anzeigen

Öffnen Sie *Buchhaltung > Konfiguration > Währungen*. Hier werden alle aktivierten Währungen der entsprechende Kurs aufgelistet. In der Detailansicht sehen Sie die Einstellungen der Währung sowie vergange Kurse.

### Währung aktivieren oder deaktivieren

Öffnen Sie *Buchhaltung > Konfiguration > Währungen*. Aktivieren oder deaktivieren Sie die Währung in der Spalte *Aktiv*.

### Tageskurs für bestimmes Datum definieren

Öffnen Sie die die Kursliste einer Währung via *Finanzne > Konfiguration > Währungen > Währung auswählen > Kurse*. Legen Sie einen neuen Eintrag an oder bearbeiten Sie einen bestehendne.

![](attachments/Buchhaltung%20Mehrere%20Währungen%20Tageskurs%20definieren.png)

### Währung auf Rechnung festlegen

Zeigen Sie eine Rechnung via *Buchhaltung > Kunden > Rechnungen* oder *Buchhaltung > Lieferanten > Rechnungen* an. Rechts vom Eingabefeld *Journal* können Sie die Währung festlegen.

### Position des Währungs-Symbol ändern

Zeigen Sie *Buchhaltung > Konfiguration > Buchhaltung > Währungen* an wählen Sie eine Währung aus. Unter *Anzeige* können Sie die Position bestimmen.

![](attachments/Buchhaltung%20Mehrere%20Währungen%20Anzeige.png)

## Überweisung

### Bankkonto-Transfer in unterschiedlicher Währung verbuchen

Registieren Sie als erstes den Bank-Transfer via *Buchhaltung > Bank > Kontext-Menü > Interne Überweisungen*. Stellen Sie sicher, dass im Dialog *Is Internal Transfer* markiert ist. Geben Sie als *Bankkonto des Empfängers* das Bankkonto mit der Zielwährung an. Bestätigen Sie den Transfer. Sie können diese Transfer als Zahlung via Stapelbuchungen verarbeiten lassen.

Die Abstimmung erfolgt anschliessend doppelt. Einmal der Zahlungsausgang auf dem Ursprungskonto und einmal der Zahlungseingang auf dem Zielkonto.

## Buchhaltung

### Korrektur-Buchung für Kursdifferenzen erstellen

Wenn Sie eine Korrektur-Buchung der Kursdifferenzen für ein Währungskonto erstellen möchten, navigieren Sie nach *Buchhaltung > Buchhaltung > Buchungssätze* und erstellen einen neuen Eintrag. Wählen Sie für den Haben-Betrag das Fremdwährungskonto und als für den Soll-Betrag das Kursverlust-Konto aus. Geben Sie die Beträge in der Grundwährung ein und treffen Sie eine Auswahl für *Währung*. Auf der Zeile mit dem Fremdwährungskonto setzen Sie nun das Feld *Betrag in Währung* auf Null.

Dazu ein Beispiel für ein Euro-Konto mit einer CHF-Buchhaltung:

![](attachments/Buchhaltung%20Mehrere%20Währungen%20Anpassung%20Kursdifferenzen.png)