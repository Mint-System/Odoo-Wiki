---
title: Buchhaltung Datenmanagement
description: Daten zur Buchhaltung exportieren und importieren.
kind: howto
prev: ./accounting
---

# Buchhaltung Datenmanagement

![icons_odoo_account_accountant](attachments/icons_odoo_account_accountant.png)

{{ $frontmatter.description }}

## Export

### Kontenplan exportieren

Listenansicht: _Buchhaltung > Konfiguration > Kontenplan_

Felder:

```
account_type
code
name
reconcile
deprecated
```

### Steuern exportieren

Listenansicht _Buchhaltung > Konfiguration > Steuern_

Felder:

```
name
amount_type
type_tax_use
amount
invoice_repartition_line_ids/id
invoice_repartition_line_ids/sequence
invoice_repartition_line_ids/factor_percent
invoice_repartition_line_ids/repartition_type
invoice_repartition_line_ids/account_id/id
invoice_repartition_line_ids/tag_ids/id
refund_repartition_line_ids/id
refund_repartition_line_ids/sequence
refund_repartition_line_ids/factor_percent
refund_repartition_line_ids/repartition_type
refund_repartition_line_ids/account_id/id
refund_repartition_line_ids/tag_ids/id
description
tax_group_id/id
price_include
```

## Import

### Bankenstamm importieren

Auf der Seite [SIX - Download Bankenstamm](https://www.six-group.com/de/products-services/banking-services/interbank-clearing/online-services/download-bank-master.html) erhalten Sie eine Liste aller Schweizer Banken. Laden Sie die Datei [Bankenstamm (Excel)](https://api.six-group.com/api/epcd/bankmaster/v2/public/downloads/bcbankenstamm_e.xls) herunter und öffnen diese zur Bearbeitung. Entfernen Sie alle Spalten ausser:

- Bank/Institution Name
- Domicile Address
- Postal Address
- Zip Code
- Place
- BIC

Entfernen Sie alle Bankeinträge ohne BIC/SWIFT-Eintrag.

::: tip
Die Liste von SIX umfasst auch Filialen und enthält BIC-Codes teilweise mehrfach. In Odoo braucht es pro BIC-Code nur eine Bank und Filialen sind nicht nötig.

Um die Daten zu bereinigen, können Sie die Liste in Excel wie folgt filtern:

- IID-Art = 1 (Hauptsitz)
- SIC-IID beginnt nicht mit "3" (die 3-er SIC-IID ist für QR-Rechnungen, hat aber die gleiche BIC und führt somit zu Duplikaten)
- BIC ist nicht leer

Löschen Sie im Excel alle Einträge, die **nicht** diesen Kriterien entsprechen.
:::

In zeigen Sie _Kontakte > Konfiguration > Bankkonten > Bankverzeichnis_ an und wählen _Favoriten > Datensätze importieren_. Laden Sie die Datei und ordnen Sie die Spalten wie folgt zu.

![](attachments/Import%20Bankenstamm.png)

Führen Sie einen Test aus und importieren Sie die Daten.

::: tip
Um den Import zu vereinfachen, können Sie die Spalten wie folgt umbennen:

- id
- name
- street
- street2
- zip
- city
- bic

Für die Spalte `id` verwenden Sie Werte aus _SIC-IID_.
:::

### Bilanzpositionen aus Kontenplan erstellen

Exportieren Sie den den Kontenplan mit den Felder `Name` und `Code`. Erstellen Sie eine Spalte `Bezeichnung` an der ersten Position mit der Formel `=CONCAT(B2," ",C2)`. Importieren Sie die Datei als Budgetposition. Als Namen verwenden Sie das Feld `Bezeichnung` und als Konto das Feld `Code`. Ignorieren Sie die Spalte `Name`.

### Offene Kreditoren importieren

Bei der Eröffnung der Buchhaltung müssen Kreditoren aus der alten System nach Odoo importiert werden damit Sie die Zahlungen im neuen Jahr abgleiche können. Erstellen Sie einen Export der Kreditoren (Offenen Posten) und generieren Sei eine CSV-Datei `account_move.csv` im folgenden Format:

| id                          | journal_id | ref               | date     | line_ids/id                     | line_ids/name | line_ids/partner_id        | line_ids/account_id/id | line_ids/credit | line_ids/debit |
| --------------------------- | ---------- | ----------------- | -------- | ------------------------------- | ------------- | -------------------------- | ---------------------- | --------------- | -------------- |
| account_move_open_creditors | Sonstiges  | Offene Kreditoren | 01.01.24 | account_move_line_open_credit_1 | 9093006875466 | Einwohnergemeinde Dubis    | l10n_ch.1_ch_coa_2000  |                 | 231.55         |
|                             |            |                   |          | account_move_line_open_credit_2 | 9238006875518 | Stadt Bernach              | l10n_ch.1_ch_coa_2000  |                 | 199.25         |
|                             |            |                   |          | account_move_line_open_credit_3 | 8958006875445 | Soziale Dienste Stadt Bern | l10n_ch.1_ch_coa_2000  |                 | 360.8          |
|                             |            |                   |          | account_move_line_open_credit_4 |               |                            | `$XML_ID_99999`        | 791.6           |                |

Ersetzen Sie `$XML_ID_99999` mit dem entsprechenden Wert.

Navigieren Sie nach _Buchhaltung > Buchhaltung > Journalbuchungen_ und importieren Sie die Datei.
