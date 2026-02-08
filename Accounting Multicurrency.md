---
title: Buchhaltung Mehrere Währungen
description: Unterschiedliche Währungen mit Odoo Buchhaltung verarbeiten.
kind: howto
section: true
prev: ./accounting
---

# Buchhaltung Mehrere Währungen

![icons_odoo_account_accountant](attachments/icons_odoo_account_accountant.png)

{{ $frontmatter.description }}

## Währungen

### Mehrere Währungen aktivieren

Navigieren nach _Buchhaltung > Konfiguration > Einstellungen > Währungen_ und dort die Option _Mehrere Währungen_ akvieren. Nach Bedarf muss ein Journal gemäss Vorlage erstellt werden. Die verfügbaren Währungen können über die Option _Andere Währungen aktivieren_ verwaltet werden.

### Konto für Kursdifferenzbuchungen bestimmen

Zeigen Sie _Einstellungen > Buchhaltung > Währungen_ an. Unter der aktivierten Option _Mehrere Währungen_ finden Sie die Felder zum festlegen des Journals, Gewinn- und Verlustkonto für Kursdifferenzen.

### Automatische Währungssätze aktiveren

Werden mehre Währungen verwendet, können die Wechselkurse automatisch von Odoo aktualisiert werden. Navigieren Sie nach _Einstellungen > Buchhaltung > Währung_ und klicken Sie auf _Automatische Währungssätze_. Stellen Sie ein ob die Währung automatisch oder manuell aktualisiert werden soll.

![](attachments/Buchhaltung%20Mehrere%20Währungen%20Automatisch.png)

Klicken Sie auf das Icon neben dem Feld _Nächster Lauf_. Die Währungskurse werden nun aktualisiert.

### Währungskurse anzeigen

Öffnen Sie _Buchhaltung > Konfiguration > Währungen_. Hier werden alle aktivierten Währungen der entsprechende Kurs aufgelistet. In der Detailansicht sehen Sie die Einstellungen der Währung sowie vergange Kurse.

### Währung aktivieren oder deaktivieren

Öffnen Sie _Buchhaltung > Konfiguration > Währungen_. Aktivieren oder deaktivieren Sie die Währung in der Spalte _Aktiv_.

### Tageskurs für bestimmes Datum definieren

Öffnen Sie die die Kursliste einer Währung via _Finanzne > Konfiguration > Währungen > Währung auswählen > Kurse_. Legen Sie einen neuen Eintrag an oder bearbeiten Sie einen bestehendne.

![](attachments/Buchhaltung%20Mehrere%20Währungen%20Tageskurs%20definieren.png)

### Währung auf Rechnung festlegen

Zeigen Sie eine Rechnung via _Buchhaltung > Kunden > Rechnungen_ oder _Buchhaltung > Lieferanten > Rechnungen_ an. Rechts vom Eingabefeld _Journal_ können Sie die Währung festlegen.

### Position des Währungs-Symbol ändern

Zeigen Sie _Buchhaltung > Konfiguration > Buchhaltung > Währungen_ an wählen Sie eine Währung aus. Unter _Anzeige_ können Sie die Position bestimmen.

![](attachments/Buchhaltung%20Mehrere%20Währungen%20Anzeige.png)

## Überweisung

### Bankkonto-Transfer in unterschiedlicher Währung verbuchen

Registieren Sie als erstes den Bank-Transfer via _Buchhaltung > Bank > Kontext-Menü > Interne Überweisungen_. Stellen Sie sicher, dass im Dialog _Is Internal Transfer_ markiert ist. Geben Sie als _Bankkonto des Empfängers_ das Bankkonto mit der Zielwährung an. Bestätigen Sie den Transfer. Sie können diese Transfer als Zahlung via Stapelbuchungen verarbeiten lassen.

Die Abstimmung erfolgt anschliessend doppelt. Einmal der Zahlungsausgang auf dem Ursprungskonto und einmal der Zahlungseingang auf dem Zielkonto.

## Buchhaltung

### Korrektur-Buchung für Kursdifferenzen erstellen

Wenn Sie eine Korrektur-Buchung der Kursdifferenzen für ein Währungskonto erstellen möchten, navigieren Sie nach _Buchhaltung > Buchhaltung > Buchungssätze_ und erstellen einen neuen Eintrag. Wählen Sie für den Haben-Betrag das Fremdwährungskonto und als für den Soll-Betrag das Kursverlust-Konto aus. Geben Sie die Beträge in der Grundwährung ein und treffen Sie eine Auswahl für _Währung_. Auf der Zeile mit dem Fremdwährungskonto setzen Sie nun das Feld _Betrag in Währung_ auf Null.

Dazu ein Beispiel für ein Euro-Konto mit einer CHF-Buchhaltung:

![](attachments/Buchhaltung%20Mehrere%20Währungen%20Anpassung%20Kursdifferenzen.png)
