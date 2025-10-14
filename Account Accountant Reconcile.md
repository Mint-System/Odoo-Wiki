---
title: Account Accountant Reconcile
description: Bank-Gutschriften anhand Referenz und Betrag abgleichen.
kind: howto
partner: Mint-System
prev: ./accounting
---

# Account Accountant Reconcile

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `account_accountant_reconcile`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Account-Reconcile/tree/16.0/account_accountant_reconcile>

## Beschreibung

Beim Import von Kontoauszügen versucht Odoo die Kontoauszugszeilen automatisch abzustimmen. Diese Erweiterung ersetzt die bestehende Abstimmungs-Methode. Sie sucht die passende Rechnungszeilen anhand der Zahlungsreferenz und des Betrags und gleicht diese bei einer eindeutigen Übereinstimmung ab.

## Verwendung

### Automatische Abstimmung manuell ausführen

Navigieren Sie nach _Einstellungen > Technisch > Geplante Aktionen_ und rufen Sie die Aktion _Versuchen Sie, Ihre Kontoauszugszeilen automatisch abzustimmen_ auf. Führen Sie diese Aktion mit _Manuell Ausführen_ aus.
