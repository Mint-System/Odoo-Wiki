---
description: Kalkuliert den besten Preis für alle Bestellpositionen und benachrichtigt
  den Verkäufer.
forge: github.com
kind: howto
name: purchase_order_line_relay_price
partner: Mint System
prev: ./purchase
repo: Mint-System/Odoo-Apps-Purchase-Workflow
title: Purchase Order Line Relay Price
versions:
- '14.0'
---


# Purchase Order Line Relay Price

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Produkt mit mehreren Lieferanten

Diese Erweiterung rechnet für ein Produkt die möglichen Staffelpreise durch und benachrichtigt den Einkäufer mit Verbesserungsvorschlägen. Voraussetzung dafür ist, dass Sie auf dem Produkt mehre [Lieferanten auf Produkt hinzufügen](Purchase.md#Lieferant%20auf%20Produkt%20hinzufügen):

**Produkt**: `[FURN_6666] Akustische Blockbildschirme`\
**Tab Einkauf**:

| Lieferant      | Startdatum | Enddatum   | Menge | Preis  | Tage bis Lieferung |
| -------------- | ---------- | ---------- | ----- | ------ | ------------------ |
| Wood Corner    |            |            | 2.00  | 100.00 | 1                  |
| Azure Interior |            | 25.01.2023 | 10.0  | 50.0   | 5                  |

### Bester Einkaufspreis berechnen

Öffnen Sie eine Bestellung und wählen Sie _Aktionen > Prüfe Preise_ oder bestätigen Sie die Angebotsanfrage.

![Purchase Order Line Relay Price Prüfe Preise](attachments/Purchase%20Order%20Line%20Relay%20Price%20Prüfe%20Preise.gif)

Wurde ein besserer Preis gefunden (in diesem Fall 500 CHF), dann erstellt Odoo eine Aktivität:

> Für das Produkt "[FURN_6666] Akustische Blockbildschirme" wurde ein besserer Staffelpreis gefunden:
>
> - 10.0 Einheiten für 50.0 mit Lieferfrist von 5 Tagen.
