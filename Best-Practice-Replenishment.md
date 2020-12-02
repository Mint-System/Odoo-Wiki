# Replenishment

## Beispiel 1
Am 30.11.yyyy werden an den Kunden *Fahrrad-Traum AG* 10 Stk *Rahmen unbeschichtet* verkauft.

### Definition der Lieferung
Auslieferungsbedingungen: Wenn alle Produkte bereit sind

Liefertermin: 14.12.yyyy hh:mm:ss

(Als Expected wird der 02.12. angezeigt, weil die *Auslieferungszeit* auf 1 Tag gesetzt ist. Details zur Produktdefinition siehe [Definition Beispiel Fahrrad](Best-Practice-Definition-Beispiel-Fahrrad.md))

### Ablauf

Nach der Bestätigung des Auftrags erscheint der Vorschlag 8 Stk zu produzieren in der Liste *Replenish*.
(Falls der Liefertermin auf den 15.12.yyyy gesetzt worden wäre, würde der Vorschlag erst ein Tag später erscheinen.)

![Best Practice Replenishment Übersicht Schritt 1](assets/Best%20Practice%20Replenishment%20%C3%9Cbersicht%20Schritt%201.svg)

Der Auftrag wird mit *Order Once* bestätigt und damit der *WH/MO/00001* automatisch erstellt. Unmittelbar darauf erscheint die erweiterte Liste mit den folgenden neuen Vorschlägen.

![Best Practice Replenishment Übersicht Schritt 2](assets/Best%20Practice%20Replenishment%20%C3%9Cbersicht%20Schritt%202.svg)

Mit dem Bestätigen des Auftrages *Kettenstrebe* wird der Auftrag *WH/MO/00002* erstellt, die  zusätzliche Position *Rundrohr Typ 2* erscheint und die Quantität des *Fettentferner A* wird um 8 ml erhöht.

![Best Practice Replenishment Übersicht Schritt 2B](assets/Best%20Practice%20Replenishment%20%C3%9Cbersicht%20Schritt%202B.svg)

Mit der Beauftragung des Steuerrohrs wird der Auftrag *WH/MO/00003* erstellt und die Liste verändert sich bezüglich Quantitä des *Fettentferner A*.

![Best Practice Replenishment Übersicht Schritt 2C](assets/Best%20Practice%20Replenishment%20%C3%9Cbersicht%20Schritt%202C.svg)

Sobald der Auftrag *Sitzrohr* bestätigt wird (automatischer Auftrag *WH/MO/00004*) erscheint die zusätzliche Position für das Produkt *Rundrohr Typ 1*. Die Position *Fettentferner A* wird bezüglich Quantität von 20 auf 31 ml erhöht:

![Best Practice Replenishment Übersicht Schritt 4](assets/Best%20Practice%20Replenishment%20%C3%9Cbersicht%20Schritt%204.svg)

Mit der nächsten Bestätigung (automatischer Auftrag *WH/MO/00005*) werden die Quantitäten für die Positionen *Rundrohr Typ 2* und "Fettentferner A* erhöht und die Bestellvorschläge P00001 und P00002 erstellt. (P00001 hat zwei Positionen.)

![Best Practice Replenishment Übersicht Schritt 5](assets/Best%20Practice%20Replenishment%20%C3%9Cbersicht%20Schritt%205.svg)

Anschliessend ist die Liste leer.

Die beiden Bestellvorschläge P00001 und P00002 werden nun bestätigt.

Jetzt ist sämtliches Material bestellt. Der zeitliche Ablauf bedarf noch einer Feinplanung.

## Beispiel 2
In diesem Beispiel wird eine Lieferung von 20 Kettenstreben vom Lieferant *Eisenwaren Huber AG* in 6 Tagen erwartet. Es werden ebenfalls am 30.11.yyyy 10 Stk *Rahmen unbeschichtet* an den Kunden *Fahrrad-Traum AG* verkauft.

Das System schlägt mir auch diesmal vor 8 Stk einzukaufen (Prognose: -8). Die Sicht auf die detaillierte Prognose-Übersicht zeigt, dass aber dem 10.12. überzählige 12 Stk Kettenstreben an Lager sind.

Für den *Forecasted Stock* berechnet das System den Bestand zum Datum *Heute + Durchlaufzeit der Fertigung*. D.h. die Route *Fertigung* hat Priorität. (Das ängert auch nicht, wenn bei *Meldebestände* die *Peferred Route* auf *Einkaufen* gesetzt ist).
Die *Preferred Route* wird auf *Einkaufen* gesetzt.

Es ist folgende Entscheidung zu treffen.
- Es werden die empfohlenen 8 Stk sofort bestellt damit der Auftrag WH/MO/00001 baldmöglichst gestartet werden kann
- Der Start des Fertigungsauftrags WH/MO/00001 wird

Hinweis: Wenn der der Start des Fertigungsauftrages um 10 Tage nach hinten verschoben und der Scheduler gestartet wird, dann ist auf der Liste *Replenishment* nur noch die Beschaffung der Kettenstrebe vorgeschlagen.

Zu bestellen wird auf 0 gesetzt. Damit verschwinden die Knöpfe *Order Once* und *Automate Orders*. (Nach dem erneuten *Replenish* verschwindet der Eintrag ganz.)

Erst mit *VERFÜGBARKEIT PRÜFEN* im Fertigungsauftrag wird ...


