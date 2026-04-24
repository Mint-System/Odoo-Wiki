---
description: Erste Abonnementrechnung mit zeitbasiertem Rabatt.
forge: github.com
kind: howto
name: sale_subscription_period_discount
partner: Mint System
prev: ./subscription
repo: Mint-System/Odoo-Apps-Sale-Workflow
title: Sale Subscription Period Discount
versions:
- '16.0'
---


# Sale Subscription Period Discount

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Zeitbasierter Rabatt für Abonnement erstellen

Zeigen Sie _Abonnements > Konfiguration > Wiederholungszeiträume_ an und wählen Sie einen Zeitraum aus. Fügen Sie der Liste _Zeitbasierter Rabatt_ einen Eintrag hinzu.

::: tip
Der Wert im Feld _Jahr_ wird dem aktuell Jahr hinzugerechnet.
:::

### Zeitbasierter Rabatt anwenden

Der zeitbasierte Rabatt wird automatisch auf einem Abonnement abhängig vom Startdatum angewendet. Wenn Sie ein Abonnement bestätigen, ein Startdatum nach dem nächsten Abrechnungsdatum abzüglich der Wiederholungszeit wählen und die erste Rechnung erstellen, dann wendet Odoo den zeitbasierten Rabatt auf die Rechnungszeilen an.
