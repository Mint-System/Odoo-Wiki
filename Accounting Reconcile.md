---
title: Buchhaltung Abstimmung
description: Bankkonto mit Odoo abgleichen.
kind: howto
section: true
prev: ./accounting
---

# Buchhaltung Abstimmung

![icons_odoo_account_accountant](attachments/icons_odoo_account_accountant.png)

{{ $frontmatter.description }}

## Konfiguration

### Abstimmung für Konto erlauben

Um die Abstimmung für Buchungszeilen eines bestimmten Kontos zu erlauben, navigieren Sie nach _Buchhaltung > Konfiguration > Kontenplan_. Suchen Sie das bestimmte Konto und aktivieren Sie Option _Erlaube Abstimmung_.

### Kontoauszüge manuell erfassen

Navigieren Sie nach _Buchhaltung_ und klicken Sie auf das Bank-Journal. Erfassen Sie einen neuen Kontoauszug:

- **Referenz**: Eindeutige Kennzeichnung des Kontoauszugs
- **Anfangssaldo**: Banksaldo vor Begin der Transaktionen
- **Endsaldo**: Banksaldo nach Ende der Transaktionen
- **Transaktionen**: Erfassen Sie die Banktransaktionen mit Datum, Buchungstext, Partner und Betrag

Bestätigen Sie den Kontoauszug.

### Kontoauszug Raiffeisen erstellen

Loggen Sie sich ins eBanking <https://ebanking.raiffeisen.ch> der Raiffeisen ein. Wählen Sie _Vermögen > Kontoauszug_ und anschliessend _Download-Icon > Kontodaten-Download_.

![](attachments/Accounting%20Reconcile%20eBanking%20Kontodaten%20Raiffeisen.png)

Im Dialog wählen Sie als Format XML (camt.053) und wenn möglich mit Details.

![](attachments/Accounting%20Reconcile%20Kontodaten-Download%20Raiffeisen.png)

Klicken Sie auf _Herunterladen_ und Sie erhalten eine Datei, die Sie in Odoo importieren können.

### Kontoauszug importieren

Zeigen Sie das Dashboard von _Buchhaltung_ an. Wählen Sie _Import_ unter dem Name des Bank-Journal. Laden Sie im Dialog die Datei mit den Kontoauszügen hoch.

![](attachments/Buchhaltung%20Kontoauszug%20importieren.png)

Anschliessend wird die Datei validiert und die Ansicht zur Abstimmung der Konto-Bewegungen angezeigt.

### Kontoauszüge anzeigen

Zeigen Sie die App _Buchhaltung_ an. Klicken Sie rechts vom Bank-Journals auf das Kontext-Menü und wählen Sie _Ansicht > Kontoauszüge_. Hier werden die importierten Kontoauszüge anzeigt.

### Kontoauszug entfernen

Zeigen Sie die App _Buchhaltung_ an. Klicken Sie rechts vom Bank-Journals auf das Kontext-Menü und wählen Sie _Ansicht > Kontoauszüge_. Markieren Sie den Kontoauszug und wählen Sie _Aktionen > Löschen_.

::: warning
Bereits abgestimmte Positionen müssen zurückgesetzt werden.
:::

## Abstimmung

### Abstimmung durchführen

Öffnen Sie die Übersicht der Journale via _Buchhaltung_ und klicken auf den Knopf _Abstimmung X Positionen_ des entsprechenden Journals. Wählen Sie eine Kontobewegung aus und bestimmen Sie die zu verknüpfende Buchungszeile. Bestätigen Sie Abstimmung.

::: tip
Entfernen Sie den Partner-Filter, wenn die gesuchte Buchungszeile nicht vorhanden ist.
:::

::: warning
Automatismen im Abstimmungs-Dialog können einen Vorschlag für "Offener Saldo" generieren:

![](attachments/Account%20Reconcile%20Offener%20Saldo.png)

Diese Abstimmungen sind nicht mit einer Rechnungszeile verbunden, sondern werden lediglich auf das Debitoren-Konto transferiert.
:::

### Abstimmung mit manueller Buchung durchführen

Öffnen Sie die Übersicht der Journale via _Buchhaltung_ und klicken auf den Knopf _Abstimmung X Positionen_ des entsprechenden Journals. Wählen Sie eine Konto-Bewegung aus und zeigen Sie den Tab _Manuelle Bearbeitung_ an. Erstellen Sie eine manuelle Buchung mit Journal, Konto und Buchungstext.

### Abstimmung mit Überzahlung durchführen

Wenn Sie eine Gutschrift erhalten haben und deren Betrag höher ist als der Rechnungsbetrag, müssen Sie zur Abstimmung eine manuelle Buchung erstellen. Wählen Sie dazu die Kontobewegung aus, bestimmen Sie die Buchungszeile der Rechung und wählen Sie den Tab _Manuell Bearbeitung_. Bei Differenzen wird dieser Dialog mit dem verbleibenden Betrag vorbereitet. Wählen Sie ein Ausgleichsmodell oder wählen Sie ein passendes _Konto_ aus. Bestätigen Sie den Vorgang.

![](attachments/Buchhaltung%20Abstimmung%20mit%20Differenz.png)

### Überfällige Forderungen abstimmen

Navigieren Sie nach _Buchhaltung > Buchhaltung > Überfällige Forderungen_ und erweitern Sie den Eintrag zu einem Partner. Wählen Sie Ausgleich und anschliessend den offenen Betrag. Erstellen Sie eine Gegenbuchung und schliessen Sie den Vorgang mit _Abstimmung_ ab.

### Buchungszeilen abstimmen

Zeigen Sie die Buchungszeilen _Buchhaltung > Buchhaltung > Buchungszeilen_ an. Filtern Sie die Buchungszeilen nach nicht abgestimmt und markieren Sie die Buchungszeilen zur Abstimmung. Wählen Sie _Aktionen > Abstimmen_. Wählen Sie die Gegenbuchung aus.

### Kontoauszug bestätigen

Gilt bis #Odoo15.

Wenn alle Vorgänge eines Kontoauszugs abgestimmt sind, können Sie den Kontoauszug bestätigen. Zeigen Sie den Kontoauszug an und wählen Sie die Aktion _Bestätigen_. Odoo prüft die Vorgänge und generiert einen Bericht analog des Kontoauszug.

### Abstimmung zurücksetzen

Navigieren Sie nach _Buchhaltung_ und wählen Sie im Kontext-Menü des Bank-Journals _Ansicht > Vorgänge_. Suchen Sie hier nach einem bestimmten Kontoauszug-Vorgang. Wechseln Sie über _Ansicht_ in den Dialog für die Abstimmung und wählen Sie _Zurücksetzen_.

![](attachments/Abstimmung%20zurücksetzen.gif)\

## Buchungen

### Buchungssatz von Vorgang aus Kontoauszug anzeigen

Navigieren Sie nach _Buchhaltung_ und wählen Sie im Kontext-Menü des Bank-Journals _Ansicht > Vorgänge_. Suchen Sie hier nach einem bestimmten Vorgang. Öffnen Sie den Vorgang und wählen Sie _Buchungssatz_.

### Währungsbetrag in Kontoauszug korrigieren

Zeigen Sie das Dashboard _Buchhaltung_ an und wählen Sie für ein Bank-Journal _Kontext-Menü > Vorgänge_. Suchen Sie hier nach der Zeile mit dem falschen Währungsbetrag und öffnen Sie diese Zeile. Bearbeiten Sie den Betrag.

## Ausgleichsmodell

### Ausgleichsmodell erstellen

Gilt bis #Odoo15:

Navigieren Sie nach _Buchhaltung > Konfiguration > Ausgleichsmodelle_ und erstellen Sie einen neuen Eintrag.

Dazu ein Beispiel zur Rundungsdifferenz:

![](attachments/Buchhaltung%20Abstimmung%20Rundungsdifferenz.png)

Dieses Ausgleichsmodell können Sie in der Abstimmung mit einem Knopfdruck anwenden:

![](attachments/Buchhaltung%20Abstimmung%20Ausgleichsmodell%20anwenden.png)

### Ausgleichsmodell 5% Unterbezahlung erstellen

Gilt bis #Odoo16:

Navigieren Sie nach _Buchhaltung > Konfiguration > Ausgleichsmodelle_ und erstellen Sie einen neuen Eintrag.

- **Name**: Rechnung bis 5% Unterbezahlung
- **Typ**: Regel zum Abgleich von Rechnungen
- **Zahlungstoleranz**: 5%
- **Match Invoice/bill with**: Buchungstext und Referenz

## Auswertung

### Offene Rechnungen nach Abgleich anzeigen

Navigieren Sie nach \*Buchhaltung > Buchhaltung > Buchungszeilen. Filtern Sie die Zeilen gemäss diesen Bedingungen:

- Abgleich Nr. ist gesetzt
- Offener Betrag ist grösser 0

Sie erhalten so eine Übersicht der Rechnungen mit Unterbezahlung.

![](attachments/Offene%20Rechnungszeilen%20nach%20Abgleich%20anzeigen.png)
