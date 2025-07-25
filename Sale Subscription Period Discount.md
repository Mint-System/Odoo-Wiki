---
title: Sale Subscription Period Discount
description: Erste Abonnementrechnung mit zeitbasiertem Rabatt.
kind: howto
tags:
- Mint-System
prev: ./subscription
---
# Sale Subscription Period Discount
![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `sale_subscription_period_discount`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Sale-Workflow/tree/16.0/sale_subscription_period_discount>

## Verwendung

### Zeitbasierter Rabatt für Abonnement erstellen

Zeigen Sie *Abonnements > Konfiguration > Wiederholungszeiträume* an und wählen Sie einen Zeitraum aus. Fügen Sie der Liste *Zeitbasierter Rabatt* einen Eintrag hinzu.

::: tip
Der Wert im Feld *Jahr* wird dem aktuell Jahr hinzugerechnet.
:::

### Zeitbasierter Rabatt anwenden

Der zeitbasierte Rabatt wird automatisch auf einem Abonnement abhängig vom Startdatum angewendet. Wenn Sie ein Abonnement bestätigen, ein Startdatum nach dem nächsten Abrechnungsdatum abzüglich der Wiederholungszeit wählen und die erste Rechnung erstellen, dann wendet Odoo den zeitbasierten Rabatt auf die Rechnungszeilen an.
