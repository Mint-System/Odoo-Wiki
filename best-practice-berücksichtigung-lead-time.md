# Berücksichtigung Lead-Time

## Beispiel 1
An den Kunden *Velomarkt Plus GmbH* werden 30 Stk des Produktes *Sattel* verkauft. Der Liefertermin ist *Heute + 30 Tage*.

Das Produkt *Sattel* ist ein Fertigungsprodukt mit *Durchlaufzeit der Fertigung* 6 Tage.

Stückliste:
- 1 Stk Sattelstütze (Einkaufprodukt, Lead Time 2 Tage)
- 1 Stk Sattelüberzug (Einkaufprodukt, Lead Time 30 Tage)
- 1 Stk Sattelschelle (Einkaufprodukt, Lead Time 3 Tage)

### Replenishment
Die Übersicht *Replenishment* zeigt keinen Handlungsbedarf. Der prognostizierte Bestand des Produktes *Sattel* sind 11 Stk. Es wird nur für die nächsten 4 Tage (Durchlaufzeit der Fertigung) in die Zukunft geblickt.

Die Übersicht *Prognostizierter Bestand* zeigt, dass der Lagerbestand des Produktes *Sattel* in 30 Tagen von 11 auf -19 fällt.

![](././././././././best-practice-lange-lead-time-1.svg)

## Beispiel 2
Die Durchlaufzeit der Fertigung wird auf 30 Tage erhöht. (Jetzt zeigt das Replenishment immer noch keinen Handlungsbedarf. In der Spalte *Prognose* steht aber -19.)
Im nächsten Schritt wird ein zusätzlicher Verkaufsauftrag von 30 Stk des Produktes *Sattel* für den Kunden *Velomarkt Plus GmbH* mit Liefertermin *Heute + 30 Tage* bestätigt.
Im *Replenishment* erscheint der Vorschlag 49 Stk des Produktes *Sattel* zu bestellen. (Der prognostizierte Bestand ist -49.) Jetzt wird 30 Tage (Durchlaufzeit der Fertigung) in die Zukunft geblickt.

Die Übersicht *Prognostizierter Bestand* zeigt, dass der Lagerbestand des Produktes *Sattel* in 30 Tagen von 11 auf -19 fällt.

Mit *Order Once* wird der Fertigungsauftrag WH/MO/00001 generiert. Im *Replenishment* erscheinen dann drei Bestellvorschläge für die Produkte *Sattelstütze*, *Sattelüberzug* und *Sattelschelle*.

::: warning Liefertermin kann nicht gehalten werden
Der Liefertermin kann in diesem Beispiel nicht eingehalten werden, weil das für die Fertigung zu beschaffende Produkt *Sattelüberzug* eine Lead Time (*Tage bis Auslieferung*) von 30 Tagen hat.
:::

![](././././././././best-practice-lange-lead-time-2.svg)

<hr>

[📝 Edit on GitHub](///////https://github.com/mint-system/odoo-handbuch/blob/master/best-practice-berücksichtigung-lead-time.html.html.html.html.html.html.html)

<footer>Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a></footer>

<hr>

[📝 Edit on GitHub](//////https://github.com/mint-system/odoo-handbuch/blob/master/best-practice-berücksichtigung-lead-time.html.html.html.html.html.html)

<footer>Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a></footer>

<hr>

[📝 Edit on GitHub](/////https://github.com/mint-system/odoo-handbuch/blob/master/best-practice-berücksichtigung-lead-time.html.html.html.html.html)

<footer>Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a></footer>

<hr>

[📝 Edit on GitHub](////https://github.com/mint-system/odoo-handbuch/blob/master/best-practice-berücksichtigung-lead-time.html.html.html.html)

<footer>Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a></footer>

<hr>

[📝 Edit on GitHub](///https://github.com/mint-system/odoo-handbuch/blob/master/best-practice-berücksichtigung-lead-time.html.html.html)

<footer>Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a></footer>

<hr>

[📝 Edit on GitHub](//https://github.com/mint-system/odoo-handbuch/blob/master/best-practice-berücksichtigung-lead-time.html.html)

<footer>Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a></footer>

<hr>

[📝 Edit on GitHub](/https://github.com/mint-system/odoo-handbuch/blob/master/best-practice-berücksichtigung-lead-time.html)

<footer>Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a></footer>

<hr>

[📝 Edit on GitHub](https://github.com/Mint-System/Odoo-Handbuch/blob/master/best-practice-berücksichtigung-lead-time.md)

<footer>Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a></footer>