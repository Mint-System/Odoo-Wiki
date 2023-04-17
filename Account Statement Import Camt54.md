---
tags:
- HowTo
prev: ./finanzen
---
# Account Statement Import Camt54
![icon_oca_app](assets/icon_oca_app.png)

Camt54 Bankauszug mit den Details zu Einzahlungen importieren.

Technischer Name: `account_statement_import_camt54`\
Repository: <https://github.com/OCA/bank-statement-import/tree/15.0/account_statement_import_camt54>

## Konfiguration

### Bank-Datenübertragung festlegen

Navigieren Sie nach *Finanzen > Konfiguration > Journale* und zeigen Sie das Bankjournal an. Im Tab *Buchungssätze* wählen Sie im Feld *Bank Datenübertragung* die entsprechende Option aus.

## Verwendung

### Camt54 importieren und abgleichen

Gilt bis #Odoo14.

Navigieren Sie nach *Finanzen* wählen beim abzugleichenden Konto *Import Auszüge* aus. Laden Sie im Dialog die XML-Datei hoch. Nach Bedarf können Sie den Namen der Datei anpassen.

![](assets/Bank%20Account%20Camt54%20Import%20hochladen.png)

Klicken Sie auf *Import* und anschliessend *Buchen*. Nun stehen die Belege zum Abgleich bereit. Wählen Sie *Abgleichen* und starten Sie den Vorgang.

### Camt54 importieren und abgleichen

Gilt ab #Odoo15.

Zeigen Sie dei App *Finanzen* an und wählen Sie *Import Statement (OCA)*. Im Dialog wählen Sie die XML-Datei oder die Zip-Datei im Camt54-Format aus. Klicken Sie auf *Import and View*. Wählen Sie *Buchen* und anschliessend *Abstimmung*.

::: tip
Die IBAN des Bankauszugs muss mit der IBAN des Bankjournals übereinstimmen.
:::