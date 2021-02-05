# Material-Reservierung

Das Beispiel der Fertigung von [Rahmen unbeschichtet](////////best-practice-fertigungsplanung.html.html.html.html.html.html.html.html#beispiel-fertigungsauftrag-rahmen-unbeschichtet) zeigt eine dreistufige Produktionsplanung.

![](././././././././theorie-material-reservierung.svg)

::: tip
Die Fertigungsaufträge der zweiten Stufe könnten gestartet werden, wenn das benötigte Produkt Fettentferner nicht schon für den Auftrag der ersten Stufe reserviert wäre.
:::

Mit der Funktion *Reservierung Abbrechen* wird die Zuordnung des Materials für den Auftrag der Stufe 1 aufgelöst. Anschliessend kann das Material mit der Funktion *Verüfgbarkeit prüfen* für jeden einzelnen Auftrag der Stufe 2 reserviert werden.

## Prüfung der Materialverfügbarkeit
Die Übersicht zur aktuellen Materialverfügbarkeit bezüglich der Aufträge zeigt die Liste *Fertigungsaufträge*. Das Attribut *Materialverfügbarkeit* zeigt ob das für die Fertigung notwendige Material im Lager vorhanden ist (*Bereit*) oder nicht (*Warteliste*). Für die Aktualisierung dieser Information wird jeder Fertigungsauftrag der Warteliste aufgerufen und mit der Funktion *Verfügbarkeit Prüfen* abgefragt, wie viel Material reserviert werden kann. Im besten Fall kann soviel reserviert werden wie notwendig ist. Dann ändert die Zeilenfarbe von rot auf grün. Wenn alle Zeilen grün sind, wechselt der Status der Materialverfügbarkeit auf *Bereit*. (Und die Funktion *Verfügbarkeit Prüfen* steht nicht mehr zur Verfügung.)

<hr>

[📝 Edit on GitHub](///////https://github.com/mint-system/odoo-handbuch/blob/master/theorie-material-reservierung.html.html.html.html.html.html.html)

<footer>Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a></footer>

<hr>

[📝 Edit on GitHub](//////https://github.com/mint-system/odoo-handbuch/blob/master/theorie-material-reservierung.html.html.html.html.html.html)

<footer>Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a></footer>

<hr>

[📝 Edit on GitHub](/////https://github.com/mint-system/odoo-handbuch/blob/master/theorie-material-reservierung.html.html.html.html.html)

<footer>Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a></footer>

<hr>

[📝 Edit on GitHub](////https://github.com/mint-system/odoo-handbuch/blob/master/theorie-material-reservierung.html.html.html.html)

<footer>Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a></footer>

<hr>

[📝 Edit on GitHub](///https://github.com/mint-system/odoo-handbuch/blob/master/theorie-material-reservierung.html.html.html)

<footer>Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a></footer>

<hr>

[📝 Edit on GitHub](//https://github.com/mint-system/odoo-handbuch/blob/master/theorie-material-reservierung.html.html)

<footer>Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a></footer>

<hr>

[📝 Edit on GitHub](/https://github.com/mint-system/odoo-handbuch/blob/master/theorie-material-reservierung.html)

<footer>Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a></footer>

<hr>

[📝 Edit on GitHub](https://github.com/Mint-System/Odoo-Handbuch/blob/master/theorie-material-reservierung.md)

<footer>Copyright © <a href="https://www.mint-system.ch/">Mint System GmbH</a></footer>