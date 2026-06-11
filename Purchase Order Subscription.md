---
description: Wiederkehrende Bestellungen verwalten.
forge: github.com
kind: howto
name: purchase_order_subscription
partner: Mint System
prev: ./purchase
repo: Mint-System/Odoo-Apps-Purchase-Workflow
title: Purchase Order Subscription
versions:
- '18.0'
- '16.0'
---


# Purchase Order Subscription

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Mit dieser Erweiterung können Sie Bestellungen als Einkaufsabonnements konfigurieren. Odoo prüft täglich das Abrechnungsdatum der Einkaufsabonnements und erhöht die erhaltene Menge der Bestellzeilen und die bestellte Menge. Wenn Sie eine Lieferantenrechnung erfassen, können Sie das Einkaufsabonnement wieder auswählen.

## Verwendung

### Wiederkehrende Bestellung erfassen

Zeigen Sie eine Bestellung via _Einkauf_ an oder erstellen Sie eine Neue. Im Feld _Wiederholung_ wählen Sie den entsprechenden Intervall aus. Wenn Sie das Angebot bestätigen, erscheint das Feld _Nächstes Rechnungsdatum_.

### Geplante Aktion "Aktualisiere wiederkehrende Bestellungen" manuell ausführen

Navigieren Sie nach _Einstellungen > Technisch > Geplante Aktionen_ und suchen Sie nach der Aktion _Einkaufsabonnement: Aktualisiere wiederkehrende Bestellungen_. Klicken Sie auf _Manuell Ausführen_.
