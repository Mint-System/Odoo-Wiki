---
tags:
- HowTo
prev: ./finanzen
---
# Finanzen Abstimmung
![icons_odoo_account_accountant](assets/icons_odoo_account_accountant.png)

Bankkonto mit Odoo abgleichen.

## Abstimmung

### Kontoauszug importieren

Zeigen Sie das Dashboard von *Finanzen* an. Wählen Sie *Import* unter dem Name des Bankjournals. Laden Sie im Dialog die Datei mit den Kontoauszügen hoch.

![](assets/Finanzen%20Kontoauszug%20importieren.png)

Anschliessen wird die Datei validiert und Ansicht zum Abgleichen der Konto-Bewebungen wird angezeigt.

### Abstimmung durchführen

Öffnen Sie die Übersicht der Journale via *Finanzen* und klicken auf den Knopf *Abstimmen X Artikel* des entsprechenden Bankjournals.

### Überfällige Forderungen abtimmen

Navigieren Sie nach *Finanzen > FInanzen > Überfällige Forderungen* und erweitern Sie den Eintrag zu einem Partner. Wählen Sie Ausgleich und anschliessend den offenen Betrag. Erstellen Sie eine Gegenbuchung und schliessend Sie den Vorgang mit *Abstimmen* ab.

### Ausgleichsmodell erstellen

Navigieren Sie nach *Finanzen > Konfiguration > Ausgleichsmodelle* und erstellen Sie einen neuen Eintrag. Dazu ein Beispiel zur Rundungsdifferenz:

![](assets/Finanzen%20Abstimmung%20Rundungsdifferenz.png)

Dieses Ausgleichsmodell können im Abgleichsvorgang mit einem Knopfdruck anwenden:

![](assets/Finanzen%20Abstimmung%20Ausgleichsmodell%20anwenden.png)

### Buchungsatz von Zeile aus Kontoauszug anzeigen

Navigieren Sie nach *Finanzen* und wählen Sie im Kontext-Menü des Bank-Journals *Ansicht > Vorgänge* aus. Suchen Sie hier nach einer bestimmten Bankauszugs-Zeile. Öffnen Sie die Zeile und wählen Sie *Buchungssatz*.