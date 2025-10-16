---
title: Kassensystem
description: In wenigen Minuten einrichten, innerhalb von Sekunden verkaufen.
kind: howto
prev: ./
partner: Odoo S.A.
---

# Kassensystem

![icons_odoo_point_of_sale](attachments/icons_odoo_point_of_sale.png)

{{ $frontmatter.description }}

Website: <https://www.odoo.com/de_DE/app/point-of-sale-shop>

## Konfiguration

### Produkte für Kassensystem verfügbar machen

Um bestehende Produkte für das Kassensystem verfügbar zu machen, navigieren Sie nach _Verkauf > Produkte > Produkte_ und öffnen ein Produkt. Im Tab _Verkauf_ aktivieren Sie die Option _Verfügbar im Kassensystem_.

### Zahlungsmethode mit Six-Terminal erfassen

Naivigieren Sie nach _Point of Sale > Konfiguration > Zahlungsmethoden_ und wählen Sie einen bestehenden Eintrag aus. Wählen Sie _Aktionen > Duplizieren_ und vergeben Sie einen neuen Namen, beispielsweise _Six_. Treffen Sie im Feld _Zahlungsterminal verwenden_ eine Auswahl und geben Sie im Feld _Six Terminal IP_ eine IP-Adresse ein.

## Verwendung

### Sitzung starten

Navigieren Sie nach _Point of Sale_ und klicken Sie dem entsprechenden Kassensystem auf _Neu Sitzung_. Sie werden in den Sitzungsmodus umgeleitet.

### Produkte hinzufügen

Im Sitzungsmodus können Sie mit einem Klick die Produkte dem Warenkorb hinzufügen.

### Zahlung mit Six auslösen

Sind alle gewünschten Produkte im Warenkrob, wählen Sie die Aktion _Zahlung_. Wählen Sie die Zahlungsmethode aus. Wenn Sie Zahlungsmethode _Six_ auswählen, klicken Sie anschliesend auf _Senden_. Die Zahlungsanweisungen sollten nun auf dem Terminal erscheinen.

### Sitzung beenden

Im Sitzungsmodus klicken Sie oben rechts auf _Schliessen_ und anschliessend auf _Confirm_. Sie gelangen zurück auf die Dashboard-Ansicht. Wählen Sie hier _Schliessen_ um die Sitzung zu beenden. Im neuen Dialog wählen Sie _Sitzung Schliessen & Einträge Buchen_.
