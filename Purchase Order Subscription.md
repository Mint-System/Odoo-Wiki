---
title: Purchase Order Subscription
description: Wiederkehrende Bestellungen verwalten.
kind: howto
partner: Mint-System
prev: ./purchase
---

# Purchase Order Subscription

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `purchase_order_subscription`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Purchase-Workflow/tree/16.0/purchase_order_subscription>

## Beschreibung

Mit dieser Erweiterung können Sie Bestellungen als Einkaufsabonnements konfigurieren. Odoo prüft täglich das Abrechnungsdatum der Einkaufsabonnements und erhöht die erhaltene Menge der Bestellzeilen und die bestellte Menge. Wenn Sie eine Lieferantenrechnung erfassen, können Sie das Einkaufsabonnement wieder auswählen.

## Verwendung

### Wiederkehrende Bestellung erfassen

Zeigen Sie eine Bestellung via _Einkauf_ an oder erstellen Sie eine Neue. Im Feld _Wiederholung_ wählen Sie den entsprechenden Intervall aus. Wenn Sie das Angebot bestätigen, erscheint das Feld _Nächstes Rechnungsdatum_.

### Geplante Aktion "Aktualisiere wiederkehrende Bestellungen" manuell ausführen

Navigieren Sie nach _Einstellungen > Technisch > Geplante Aktionen_ und suchen Sie nach der Aktion _Einkaufsabonnement: Aktualisiere wiederkehrende Bestellungen_. Klicken Sie auf _Manuell Ausführen_.
