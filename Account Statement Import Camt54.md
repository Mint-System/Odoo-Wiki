---
title: Account Statement Import Camt54
description: Camt54 Bankauszug mit Details zu Einzahlungen importieren.
kind: howto
partner: OCA
prev: ./accounting
---

# Account Statement Import Camt54

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `account_statement_import_camt54`\
Repository: <https://github.com/OCA/bank-statement-import/tree/18.0/account_statement_import_camt54>

## Konfiguration

### Bank-Datenübertragung festlegen

Navigieren Sie nach _Buchhaltung > Konfiguration > Journale_ und zeigen Sie das Bank-Journal an. Im Tab _Buchungssätze_ wählen Sie im Feld _Bank-Feeds_ die entsprechende Option aus.

## Verwendung

### Camt54 importieren und abgleichen

Gilt bis #Odoo14.

Navigieren Sie nach _Buchhaltung_ wählen beim abzugleichenden Konto _Import Auszüge_ aus. Laden Sie im Dialog die XML-Datei hoch. Nach Bedarf können Sie den Namen der Datei anpassen.

![](attachments/Bank%20Account%20Camt54%20Import%20hochladen.png)

Klicken Sie auf _Import_ und anschliessend _Buchen_. Nun stehen die Belege zum Abgleich bereit. Wählen Sie _Abgleichen_ und starten Sie den Vorgang.

### Camt54 importieren und abstimmen

Gilt ab #Odoo15.

Zeigen Sie dei App _Buchhaltung_ an und wählen Sie _Import Statement (OCA)_. Im Dialog wählen Sie die XML-Datei oder die Zip-Datei im Camt54-Format aus. Klicken Sie auf _Import and View_. Wählen Sie _Buchen_ und anschliessend _Abstimmung_.

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
