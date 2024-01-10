---
title: Finanzen Abstimmung
description: Bankkonto mit Odoo abgleichen.
tags:
- HowTo
prev: ./finance
---
# Finanzen Abstimmung
![icons_odoo_account_accountant](attachments/icons_odoo_account_accountant.png)

{{ $frontmatter.description }}

## Konfiguration

### Abstimmung für Konto erlauben

Um die Abstimmung für Buchungszeilen eines bestimmten Kontos zu erlauben, navigieren Sie nach *Finanzen > Konfiguration > Kontenplan*. Suchen Sie das bestimmte Konto und aktivieren Sie Option *Erlaube Abstimmung*.

## Bankauszug

### Bankauszug manuell erfassen

Navigieren Sie nach *Finanzen* und klicken Sie auf das Bankjournal. Erfassen Sie einen neuen Bankauszug:

* **Referenz**: Eindeutige Kennzeichnung des Belegs
* **Anfangssaldo**: Banksaldo vor Begin der Transkationen
* **Endsaldo**: Banksaldo nach Ende der Transkationen
* **Transaktionen**: Erfassen Sie die Banktransaktionen mit Datum, Buchungstext, Partner und Betrag

Bestätigen Sie den Bankauszug.

### Kontoauszug Raiffeisen erstellen

Loggen Sie sich ins eBanking <https://ebanking.raiffeisen.ch> der Raiffeisen ein. Wählen Sie *Vermögen > Kontoauszug* und anschliessend *Download-Icon > Kontodaten-Download*.

![](attachments/Finance%20Reconcile%20eBanking%20Kontodaten%20Raiffeisen.png)

Im Dialog wählen Sie als Format XML (camt.053) und wenn möglich mit Details.

![](attachments/Finance%20Reconcile%20Kontodaten-Download%20Raiffeisen.png)

Klicken Sie auf *Herunterladen* und Sie erhalten eine Datei, die Sie in Odoo importieren können.

### Kontoauszug importieren

Zeigen Sie das Dashboard von *Finanzen* an. Wählen Sie *Import* unter dem Name des Bankjournals. Laden Sie im Dialog die Datei mit den Kontoauszügen hoch.

![](attachments/Finanzen%20Kontoauszug%20importieren.png)

Anschliessen wird die Datei validiert und Ansicht zum Abgleichen der Konto-Bewegungen wird angezeigt.

## Abstimmung

### Abstimmung durchführen

Öffnen Sie die Übersicht der Journale via *Finanzen* und klicken auf den Knopf *Abstimmung X Positionen* des entsprechenden Journals. Wählen Sie eine Konto-Bewegung aus und bestimmen Sie die zu verknüpfende Buchungszeile. Bestätigen Sie Abstimmung.

::: tip
Entfernen Sie den Partner-Filter, wenn die gesuchte Buchungszeile nicht vorhanden ist.
:::

### Abstimmung mit manueller Buchung durchführen

Öffnen Sie die Übersicht der Journale via *Finanzen* und klicken auf den Knopf *Abstimmung X Positionen* des entsprechenden Journals. Wählen Sie eine Konto-Bewegung aus und zeigen Sie den Tab *Manuelle Abarbeitung* an. Erstellen Sie eine manuelle Buchung mit Journal, Konto und Buchungstext.

### Überfällige Forderungen abstimmen

Navigieren Sie nach *Finanzen > FInanzen > Überfällige Forderungen* und erweitern Sie den Eintrag zu einem Partner. Wählen Sie Ausgleich und anschliessend den offenen Betrag. Erstellen Sie eine Gegenbuchung und schliessen Sie den Vorgang mit *Abstimmung* ab.

### Buchungszeilen abstimmen

Zeigen Sie die Buchungszeilen *Finanzen > Finanzen > Buchungszeilen* an. Filtern Sie die Buchungszeilen nach nicht abgestimmt und markieren Sie die Buchungszeilen zur Abstimmung. Wählen Sie *Aktion > Abstimmen*. Wählen Sie die Gegenbuchung aus.

### Ausgleichsmodell erstellen

Navigieren Sie nach *Finanzen > Konfiguration > Ausgleichsmodelle* und erstellen Sie einen neuen Eintrag. Dazu ein Beispiel zur Rundungsdifferenz:

![](attachments/Finanzen%20Abstimmung%20Rundungsdifferenz.png)

Dieses Ausgleichsmodell können im Abgleichsvorgang mit einem Knopfdruck anwenden:

![](attachments/Finanzen%20Abstimmung%20Ausgleichsmodell%20anwenden.png)

### Buchungsatz von Vorgang aus Bankauszug anzeigen

Navigieren Sie nach *Finanzen* und wählen Sie im Kontext-Menü des Bank-Journals *Ansicht > Vorgänge*. Suchen Sie hier nach einem bestimmten Bankauszug-Vorgang. Öffnen Sie den Vorgang und wählen Sie *Buchungssatz*.

### Währungsbetrag in Bankauszug korrigieren

Zeigen Sie das Dashboard *Finanzen* an und wählen Sie für ein Bank-Journal *Kontext-Menü > Vorgänge*. Suchen Sie hier nach der Zeile mit dem falschen Währungsbetrag und öffnen Sie diese Zeile. Bearbeiten Sie den Betrag.

### Abstimmung zurücksetzen

Navigieren Sie nach *Finanzen* und wählen Sie im Kontext-Menü des Bank-Journals *Ansicht > Vorgänge*. Suchen Sie hier nach einem bestimmten Bankauszug-Vorgang. Wechseln Sie über *Ansicht* in den Dialog für den Abgleich und wählen Sie *Zurücksetzen*.
![](attachments/Abstimmung%20zurücksetzen.gif)