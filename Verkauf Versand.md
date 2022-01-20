---
tags:
- HowTo
prev: ./verkauf
---
# Verkauf Versand
![icons_odoo_sale](assets/icons_odoo_sale.png)

Versandmethoden und Logistik definieren.

## Versandmethode erstellen

Navigieren sie nach *Verkauf > Konfiguration > Versandmethoden* und erstellen sie eine neue Methode. Eine Versandmethode braucht miestends einen *Namen*, *Anbieter* und ein *Auslieferungsprodukt*. Erstellen sie für die neue Versandmethode ein Auslieferungsprodukt.

## Versand hinzufügen

Auf dem Verkaufsauftrag können sie über den Knopf *Versand Hinzufügen* eine Versandmethode wählen.

![](assets/Verkauf%20Versand%20Versandmethode%20hinzufügen.png)

Das *Auslieferungsprodukt* wird nun dem Verkaufsauftrag hinzugefügt.

## Anzahl Auslieferungsprodukte festlegen

Haben sie einen Verkaufsauftrag bestätigt und können sie auf der dazugehörigen Lieferung die definitive Anzahl der *Auslieferungsprodukte* festlegen. Dazu ein Beispiel aus der Strichcode App:

![](assets/Verkauf%20Versand%20Anzahl%20Auslieferungsprodukte%20festlegen.png)
## Retoure Auslieferungsprodukt auf Lieferung erfassen

Öffnen sie eine Lieferung via *Lager > Lieferaufträge* und klicken sie auf *Rücklieferung*. Entfernen sie im Dialog die Produkte, welche nicht zurückgeliefert wurde und geben sie die Menge ein.

![](assets/Verkauf%20Versand%20Rücklieferung.png)

Mit der Bestätigung wird ein neuer Transfer angelegt. Bestätigen sie diesen Transfer.

Auf dem Verkaufsauftrag wird nun die ausgelieferte Menge zurückgesetzt.

![](assets/Verkauf%20Versand%20Ausgeliefert%20zurückgesetzt.png)

Auf den verknüpften Lieferungen des Verkaufsauftrag ist die Retoure ersichtlich.

![](assets/Verkauf%20Versand%20Transfers%20mit%20Retoure.png)

## Retoure Auslieferungsprodukt ohne Lieferung erfassen

Das einlagerbare Auslieferungsprodukt muss für diesen Vorgang eine Lager-Route haben. Stellen sie sicher, dass auf dem Produkt eine entsprechende Route definiert ist.

Erstellen sie einen Lagereingang mit der Menge der eingegangen *Auslieferugnsprodukte*.

![](assets/Verkauf%20Versand%20Rückgabe%20Auslieferungsprodukt%20erfassen.png)
