---
title: Lager Verpackungen
description: Verpackungen effizient verwalten.
tags:
- HowTo
prev: ./stock
---
# Lager Verpackungen
![icons_odoo_stock](attachments/icons_odoo_stock.png)

{{ $frontmatter.description }}

::: tip
Begriffe rund um Verpackungen sind nicht korrekt übersetzt. Im foglenden eine Definition:

* **Produktverpackung** `product.packaging`: Ein Produkt kann unterschiedliche Produktverpackung haben. Das ist eine Verkaufs-Konfiugration.
* **Verpackungen** `stock.quant.package`: Produkte auf einem Transfer können verpackt werden. Verpackungen können verpackt werden.
* **Versandverpackungen** `product.packaging`: Im Zusammenhang mit der Lieferkostenberechnung gibt es Versandverpackungen. 
:::

## Verpackungen

### Produktlieferung verpacken

Öffnen Sie einen Transfer via *Lager > Vorgänge > Transfers*. Bestätigen Sie den Transfer und wählen Sie die Aktion *Verpacken* im Tab *Detailierte Vorgänge*. Odoo erstellt eine Verpackung.

![Lager Verpackungen Beispiel](attachments/Lager%20Verpackungen%20Beispiel.gif)

### Verpackung von Produktlieferung anzeigen

Öffnen Sie einen Transfer via *Lager > Vorgänge > Transfers* mit Verpackungen. Klicken Sie auf den Smart-Link *Verpackungen* und anschliessend auf eine *Verpackung*.

### Lieferung in mehrere Packungen verpacken

Jede Lieferung umfasst 1 oder mehrere *Vorgänge*. In einem Vorgang wird der Bedarf pro Produkt aufgelistet.

![](attachments/Lager%20Vorgänge.png)

Wenn Sie einen Vorgang in mehrere Packungen verpacken möchten, müssen Sie unter *Detaillierte Vorgänge* zuerst das Teilgewicht in die vordefinierte Zeile einfügen. Anschliessend können Sie weitere Zeilen mit weiteren Teilmengen hinzufügen.

![Lager Vorgänge Verpackungen](attachments/Lager%20Vorgänge%20Verpackungen.gif)

### Vorgang in mehrere Verpackungen packen

Eine Lieferung kann mehrere Vorgänge haben. Die Vorgänge lassen sich in detaillierte Vorgänge aufteilen. Jeder detaillierter Vorgang kann verpackt werden. Dazu finden Sie eine Animation wie ein Produkt in mehrere Verpackungen verpackt werden kann.

![](attachments/Lager%20Verpackungen%20mehrere%20Verpackungen.gif)

### Verpackungen anzeigen

Navigieren Sie nach *Lager > Produkte > Verpackungen*.

## Produktverpackung

### Produktverpackung erfassen

Um die verschiedenen Produktverpackungen zu erfassen navigieren Sie zu folgender Einstellung: *Lager > Konfiguration > Produkte > Produktverpackungen*.

![Lager Produktverpackungen Beispiel](attachments/Lager%20Produktverpackungen%20Beispiel.png)

## Versand

### Versandverpackungen anzeigen

Verwalten Sie Versandverpackungen unter *Lager > Konfiguration > Versandverpackungen*.

## Strichcode

### Barcode auf Produktverpackung hinterlegen

Rufen Sie eine Produktverpackung unter *Lager > Konfiguration > Produktverpackungen* auf. Hinterlegen Sie den Barcode im Feld *Strichcode*.