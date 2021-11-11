---
tags:
- HowTo
---
# Strichcode
![icons_odoo_stock_barcode](assets/icons_odoo_stock_barcode.png)

Verfolgen sie Aufträge, Produkte und Lieferungen mit Barcodes.

| Bereich                                             | Beschreibung          |
| --------------------------------------------------- | --------------------- |
| [Handscanner Zebra TC21](Handscanner-Zebra-TC21.md) | Handscanner für Odoo. |

## Produktstrichcode generieren

Öffnen sie *Einstellungen > Lager > Strichcode* und wählen sie die Aktion *Konfigurieren der Produkt-Barcodes*. In dieser Liste tragen sie für jedes Produkt einen Strichcode ein.

::: tip
Für jedes Produkt verwaltet Odoo einen Strichcode. Ähnlich der internen Referenz kann für jede Produkt-Variante ein Strichcode festgelegt werden.
:::

Stricodes müssen in erster Linie eindeutig sein. Deshalb empfehlen wir die Generierung des Strichcodes nach folgenden Schema:

Schema ausgeführt: Jahrzent + Monat + Tag + Stunde + Minute + Sekunde  
Datumsformat: `YYMMDDHHMMSS`

Angenommen zur Zeit der Erfassung des Produktbarcodes ist es der 15. Oktober 2020 um 16:48 Uhr und 15 Sekunden, ergibt das den Code `201015164815`.

Diese Sequenz füllen wir in das entsprechende Produktfeld.

![](assets/Strichcode%20f%C3%BCr%20Produkte%20generieren.png)

::: warning
Wichtig ist, dass der Produktstrichcode immer eindeutig und so kurz wie möglich ist.
:::

Hier zwei Strichcodes im Vergleich:

![](assets/Strichcode%20zwei%20Codes%20im%20Vergleich.png)

## Barcode-Befehle drucken

Mit Barcode-Befehlen können sie bestimmte Vorgänge starten oder abschliessen. Drücken sie auf *Einstellungen > Lager > Strichcode > Drucken Sie die Barcode-Befehle* und drucken sie dieses Dokument aus.

![](assets/Strichcode%20Barcode-Befehle.png)

Auf der ersten Seite finden die die Befehle, auf der zweiten die Vorgangstypen und auf der letzten die Lagerorte.

## Rütschein/Packvorgang scannen und verarbeiten

Öffnen sie *Strichcode* im Browser auf ihrem Computer oder auf der App auf ihrem mobilen Gerät. Scannen sie den Barcode auf dem Packvorgang mit dem angeschlossen Scanner, dem integrierten Scanner oder Geräte-Kamera.

![](assets/Strichcode%20scannen.png)

Sobald der Dokument-Code (immer oben rechs) gescannt wurde, werden die Positionen augeführt.

![](assets/Strichcode%20Positionen%20Scanvorgang.png)

Nun können sie einzelnen Positionen bestätigen und den Vorgang mit dem Barcode-Befehl *Validate* abschliessen.