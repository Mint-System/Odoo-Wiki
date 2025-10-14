---
title: Account Currency Communication
description: Legt den Kommunikations-Standard auf der Währung fest.
kind: howto
partner: Mint-System
prev: /.invoicing
---

# Account Currency Communication

![icon_oms_box](../attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `account_currency_communication`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Account-Invoicing/tree/17.0/account_currency_communication>

## Beschreibung

Mit dieser Erweiterung können Sie den Kommunikations-Standard, welcher die Rechnungsreferenz generiert, auf der Währung (anstelle des Journals) festlegen. Beim Buchen wird dann die Zahlungsreferenz einer Kundenrechnung anhand dem festgelegten Kommunikations-Standard auf der Währung der Rechnung generiert.

## Verwendung

Der Administrator wählt unter _Rechnungsstellung > Konfiguration > Buchhaltung > Währungen_ eine Wahrung aus und legt für diese Währung den Kommunikations-Standard fest. Wird eine Kundenrechnung in dieser Währung erstellt, wird die Zahlungsreferenz aus diesem Standard generiert.
