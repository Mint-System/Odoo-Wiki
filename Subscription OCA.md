---
title: Subscription OCA
description: OCA-Alternative für Abonnemente.
kind: howto
partner: OCA
prev: ./contract
---

# Subscription OCA

![](attachments/oca_icons_subscription_oca.png)

{{ $frontmatter.description }}

Technischer Name: `subscription_oca`\
Repository: <https://github.com/OCA/contract/tree/17.0/subscription_oca>

## Verwendung

### Produkt als subscribable festlegen

Zeiten Sie ein Produkt unter *Subscriptions > Subscriptions > Product* an und öffnen Sie den Tab *Verkauf*. Aktivieren Sie das Feld *Subscribable product* und legen Sie ein *Subscribable template* fest.

## Auswertung

### Subscription lines anzeigen

Damit Sie eine Übersicht der Subscription lines  erhalten, folgen Sie dem HowTo [Neue Ansicht mit Aktion hinzufügen](Development%20Actions.md#Neue%20Ansicht%20mit%20Aktion%20hinzufügen) und verwenden diese Werte:

Name der Aktion: `Subscription lines`\
Objekt: `sale.subscription.line`\
Ansichtsmodus: `tree,form`\
Menü: `Subscription lines `\
Obermenü: `Subscriptions/Subscriptions`\
Aktion: `ir.actions.act_window` `Subscription lines`\
Nummernfolge: `50`
