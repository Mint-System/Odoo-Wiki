---
description: Bank-Gutschriften anhand Referenz und Betrag abgleichen.
forge: github.com
kind: howto
name: account_accountant_reconcile
partner: Mint System
prev: ./accounting
repo: Mint-System/Odoo-Apps-Account-Reconcile
title: Account Accountant Reconcile
versions:
- '16.0'
---


# Account Accountant Reconcile

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Beim Import von Kontoauszügen versucht Odoo die Kontoauszugszeilen automatisch abzustimmen. Diese Erweiterung ersetzt die bestehende Abstimmungs-Methode. Sie sucht die passende Rechnungszeilen anhand der Zahlungsreferenz und des Betrags und gleicht diese bei einer eindeutigen Übereinstimmung ab.

## Verwendung

### Automatische Abstimmung manuell ausführen

Navigieren Sie nach _Einstellungen > Technisch > Geplante Aktionen_ und rufen Sie die Aktion _Versuchen Sie, Ihre Kontoauszugszeilen automatisch abzustimmen_ auf. Führen Sie diese Aktion mit _Manuell Ausführen_ aus.
