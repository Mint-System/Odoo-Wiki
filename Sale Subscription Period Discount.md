---
title: Sale Subscription Period Discount
description: Erste Abonnementrechnung mit zeitbasiertem Rabatt.
tags:
- HowTo
- Drittanbieter
prev: ./sale
---
# Sale Subscription Partner Pricelist
![icon_oms_box](attachments/icon_oms_box.png)

{{ $frontmatter.description }}

Technischer Name: `sale_subscription_period_discount`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Sale-Workflow/tree/16.0/sale_subscription_period_discount>

## Verwendung

### Zeitbasierter Rabatt für Abonnement erstellen

Zeigen Sie *Abonnements > Konfiguration > Wiederholungszeiträume* an und wählen Sie einen Zeitraum aus. Fügen Sie der Liste *Zeitbasierter Rabatt* einen Eintrag hinzu.

### Zeitbasierter Rabat anwenden

Der zeitbasierte Rabatt wird automatisch auf einem Abonnement abhängig vom Startdatum. Wenn Sie das Abonnement bestätigen, ein Startdatum wählen, welches nach dem nächsten Abrechnungsdatum abzüglich der Wiederholung liegt und eine Rechnung erstellen, wendet Odoo den zeitbasierten Rabatt auf die Rechnungszeilen an.