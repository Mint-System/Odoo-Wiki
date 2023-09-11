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

### Bankauszug

### Bankauszug erfassen

Navigieren Sie nach *Finanzen* und klicken Sie auf das Bankjoural. Erfassen Sie einen neuen Bankauszug:

* **Referenz**: Eindeutige Kennzeichnung des Belegs
* **Anfangssaldo**: Banksaldo vor Begin der Transkationen
* **Endsaldo**: Banksaldo nach Ende der Transkationen
* **Transaktionen**: Erfassen Sie die Banktransaktionen mit Datum, Buchungstext, Partner und Betrag

Bestätigen Sie den Bankauszug.

### Kontoauszug importieren

Zeigen Sie das Dashboard von *Finanzen* an. Wählen Sie *Import* unter dem Name des Bankjournals. Laden Sie im Dialog die Datei mit den Kontoauszügen hoch.

![](attachments/Finanzen%20Kontoauszug%20importieren.png)

Anschliessen wird die Datei validiert und Ansicht zum Abgleichen der Konto-Bewebungen wird angezeigt.

## Abstimmung

### Abstimmung durchführen

Öffnen Sie die Übersicht der Journale via *Finanzen* und klicken auf den Knopf *Abstimmung X Positionen* des entsprechenden Journals.

### Überfällige Forderungen abstimmen

Navigieren Sie nach *Finanzen > FInanzen > Überfällige Forderungen* und erweitern Sie den Eintrag zu einem Partner. Wählen Sie Ausgleich und anschliessend den offenen Betrag. Erstellen Sie eine Gegenbuchung und schliessend Sie den Vorgang mit *Abstimmung* ab.

### Ausgleichsmodell erstellen

Navigieren Sie nach *Finanzen > Konfiguration > Ausgleichsmodelle* und erstellen Sie einen neuen Eintrag. Dazu ein Beispiel zur Rundungsdifferenz:

![](attachments/Finanzen%20Abstimmung%20Rundungsdifferenz.png)

Dieses Ausgleichsmodell können im Abgleichsvorgang mit einem Knopfdruck anwenden:

![](attachments/Finanzen%20Abstimmung%20Ausgleichsmodell%20anwenden.png)

### Buchungsatz von Vorgang aus Bankauszug anzeigen

Navigieren Sie nach *Finanzen* und wählen Sie im Kontext-Menü des Bank-Journals *Ansicht > Vorgänge* aus. Suchen Sie hier nach einem bestimmten Bankauszug-Vorgang. Öffnen Sie den Vorgang und wählen Sie *Buchungssatz*.
