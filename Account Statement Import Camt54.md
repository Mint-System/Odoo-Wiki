---
title: Account Statement Import Camt54
description: Camt54 Bankauszug mit Details zu Einzahlungen importieren.
tags:
- HowTo
prev: ./accounting
---
# Account Statement Import Camt54
![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `account_statement_import_camt54`\
Repository: <https://github.com/OCA/bank-statement-import/tree/16.0/account_statement_import_camt54>

## Konfiguration

### Bank-Datenübertragung festlegen

Navigieren Sie nach *Buchhaltung > Konfiguration > Journale* und zeigen Sie das Bank-Journal an. Im Tab *Buchungssätze* wählen Sie im Feld *Bank-Feeds* die entsprechende Option aus.

## Verwendung

### Camt54 importieren und abgleichen

Gilt bis #Odoo14.

Navigieren Sie nach *Buchhaltung* wählen beim abzugleichenden Konto *Import Auszüge* aus. Laden Sie im Dialog die XML-Datei hoch. Nach Bedarf können Sie den Namen der Datei anpassen.

![](attachments/Bank%20Account%20Camt54%20Import%20hochladen.png)

Klicken Sie auf *Import* und anschliessend *Buchen*. Nun stehen die Belege zum Abgleich bereit. Wählen Sie *Abgleichen* und starten Sie den Vorgang.

### Camt54 importieren und abstimmen

Gilt ab #Odoo15.

Zeigen Sie dei App *Buchhaltung* an und wählen Sie *Import Statement (OCA)*. Im Dialog wählen Sie die XML-Datei oder die Zip-Datei im Camt54-Format aus. Klicken Sie auf *Import and View*. Wählen Sie *Buchen* und anschliessend *Abstimmung*.

::: tip
Die IBAN des Bankauszugs muss mit der IBAN des Bank-Journals übereinstimmen.
:::

## Troubleshooting

### Camt54-Datei kann nicht importiert werden

**Problem**

Beim Importieren der Camt54-Datei wird ein Fehler geworfen:

```
Sie können dieses Konto (1021 Bank - Durchlaufskonto) nicht in diesem Journal benutzen. Prüfen Sie den Abschnitt "Zulässige Journale" auf der Registerkarte "Erweiterte Einstellungen" im entsprechenden Journal.
```

**Ursache**

Auf dem genannten Konto ist ist das Bank-Journal nicht als zulässiges Journal hinterlegt.

**Lösung**

Sie müssen das Bank-Journal als [zulässiges Journal auf dem Konto festlegen](Accounting.md#Zulässige%20Journale%20auf%20Konto%20festlegen).