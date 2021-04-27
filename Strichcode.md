# Strichcode
![icons_odoo_stock_barcode](assets/icons_odoo_stock_barcode.png)

Verfolgen sie Aufträge, Produkte und Lieferungen mit Barcodes.

## Produktstrichcode generieren

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
