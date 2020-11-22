# Lager
![icons_odoo_stock](assets/icons_odoo_stock.png)

## Lager anlegen
In den Grundeinstellungen ist ein Lager mit dem Namen der Firma, dem Kürzel *WH* und der Adresse der Firma angelegt.

Beispiel:

![Lager Lager anlegen](assets/Lager%20Lager%20anlegen.png)

### Routen
Über die Auswahl der Funktionen pro Lager wird bestimmt, welche Routen verfügbar sein. Die vorhandenen Routen sind über einen Smartbutton oben rechts erreichbar.

![Lager Konfiguration](assets/Lager%20Konfiguration.svg)


#### Reihenfolge
Die Reihenfolge der Routen und damit die Priorisierung wird über die Liste in der Darstellung Lager > Konfiguration > Routen definiert.

![Lager Routen Reihenfolge](assets/Lager%20Routen%20Reihenfolge.png)

Die entsprechende Darstellung im Tab *Lager* in der Produktansicht zeigt sich wie folgt:

![Lager Routen Reihenfolge Produkt](assets/Lager%20Routen%20Reihenfolge%20Produkt.png)

Die Sichtbarkeit der Routen in den verschiedenen Darstellungen wird über die Option *Auswahlmöglichkeit* für jede Route eingestellt.

![Lager Routen](assets/Lager%20Routen.svg)

#### Vordefinierte Routen
Für den Empfang und die Lieferung von Produkten sind Routen für die Varianten 1, 2 oder 3 Schritte vordefiniert. Über die Auswahl in der Ansicht Lager > Lager Konfiguration werden die Routen automatisch eingerichtet.

##### Empfangsschritte

Zur Auswahl stehen folgende drei Varianten:
1.  Produkte direkt anliefern (1 Schritt)
2. Receive goods in input and then stock (2 steps)
3. Receive goods in input, then quality and then stock (3 steps)

![Lager Empfangsschritte](assets/Lager%20Empfangsschritte.svg)

##### Lieferungsschritte

Zur Auswahl stehen:
1. Güter direkt anliefern (1 Schritt)
2. Send goods in output and then deliver (2 steps)
3. Ware verpacken, Ware in die Ausgabe schicken und dann ausliefern (3 Schritte)

![Lager Lieferungsschritte](assets/Lager%20Lieferungsschritte.svg)



### Regeln

Es besteht folgender Zusammenhang zwischen Lager, Routen und Regeln:

![Lager Zusammenhänge Routen](assets/Lager%20Zusammenh%C3%A4nge%20Routen.svg)

## Lagerorte

![Lager Lagerorte](assets/Lager%20Lagerorte.svg)


## Vorgangstypen
Standardmässig sind folgende Vorgangstypen eingerichtet:
1. Anlieferungen
2. Lieferaufträge
3. Manufacturing

Die Vorgangstypen erscheinen in der Lagerübersicht

![Lager Lager Übersicht](assets/Lager%20Lager%20%C3%9Cbersicht.png)

Einstellungen:

![Lager Vorgangstypen](assets/Lager%20Vorgangstypen.svg)

## Erweiterte Vorgangstypen I
Wenn in den Einstellungen für das Lager die Option *Mehrstufige Routen* eingeschaltet wird, erweitert sich die Liste der Vorgangstypen mit *Interne Transfers*. Die neue Liste zeigt sich wie folgt:

1. Anlieferungen
2. Interne Transfers
3. Lieferaufträge
4. Manufacturing

Die Option "Mehrere Lagerorte" wird automatisch eingeschaltet und es erscheinen im Menu die neuen Funktion *Lagerorte* und *Regeln*.

## Erweiterte Vorgangstypen II
Wenn für die Lieferungsschritte die Variante *3 Schritte* (siehe oben) gewählt wird, werden die Vorgangstypen mit *Pick* und *Pack* erweitert. Die neue Liste zeigt sich wie folgt:

1. Anlieferungen
2. Interne Transfers
3. Pick
4. Pack
5. Lieferaufträge
6. Manufacturing
