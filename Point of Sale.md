---
title: Kassensystem
description: In wenigen Minuten einrichten, innerhalb von Sekunden verkaufen.
kind: howto
prev: ./
---
# Kassensystem
![icons_odoo_point_of_sale](attachments/icons_odoo_point_of_sale.png)

{{ $frontmatter.description }}

Website: <https://www.odoo.com/de_DE/app/point-of-sale-shop>

## Konfiguration

### Produkte für Kassensystem verfügbar machen

Um bestehende Produkte für das Kassensystem verfügbar zu machen, navigieren Sie nach *Verkauf > Produkte > Produkte* und öffnen ein Produkt. Im Tab *Verkauf* aktivieren Sie die Option *Verfügbar im Kassensystem*.

### Zahlungsmethode mit Six-Terminal erfassen

Naivigieren Sie nach *Point of Sale > Konfiguration > Zahlungsmethoden* und wählen Sie einen bestehenden Eintrag aus. Wählen Sie *Aktionen > Duplizieren* und vergeben Sie einen neuen Namen, beispielsweise *Six*. Treffen Sie im Feld *Zahlungsterminal verwenden* eine Auswahl und geben Sie im Feld *Six Terminal IP* eine IP-Adresse ein.

## Verwendung

### Sitzung starten

Navigieren Sie nach *Point of Sale* und klicken Sie dem entsprechenden Kassensystem auf *Neu Sitzung*. Sie werden in den Sitzungsmodus umgeleitet.

### Produkte hinzufügen

Im Sitzungsmodus können Sie mit einem Klick die Produkte dem Warenkorb hinzufügen.

### Zahlung mit Six auslösen

Sind alle gewünschten Produkte im Warenkrob, wählen Sie die Aktion *Zahlung*. Wählen Sie die Zahlungsmethode aus. Wenn Sie Zahlungsmethode *Six* auswählen, klicken Sie anschliesend auf *Senden*. Die Zahlungsanweisungen sollten nun auf dem Terminal erscheinen.

### Sitzung beenden

Im Sitzungsmodus klicken Sie oben rechts auf *Schliessen* und anschliessend auf *Confirm*. Sie gelangen zurück auf die Dashboard-Ansicht. Wählen Sie hier *Schliessen* um die Sitzung zu beenden. Im neuen Dialog wählen Sie *Sitzung Schliessen & Einträge Buchen*. 
