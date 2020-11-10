# Fertigungsplanung

## Beispiel Fertigungsauftrag Rahmen unbeschichtet
Für die Details des Produktes siehe [Rahmen unbeschichtet](Theorie-Definition-Beispiel-Fahrrad.md#Rahmen%20unbeschichtet).

### Lagerbestand/Arbeitspläne

![Theorie Rahmen unbeschichtet Lagerbestand Arbeitspläne](assets/Theorie%20Rahmen%20unbeschichtet%20Lagerbestand%20Arbeitspl%C3%A4ne.svg)

### Stammdaten/Einkaufsinformationen

![Theorie Stammdaten Einkaufsinformationen](assets/Theorie%20Stammdaten%20Einkaufsinformationen.svg)

### Automatische Fertigungsaufträge
Es wird ein Fertigungsauftrag für 8 Stk. *Rahmen unbeschichtet* erstellt. Die Materialverfügbarkeit zeigt sich wie folgt:

![Theorie Fertigungsauftrag Rahmen unbeschichtet Berechnung](assets/Theorie%20Fertigungsauftrag%20Rahmen%20unbeschichtet%20Berechnung.svg)

Der erste Auftrag erscheint wie folgt:

![Theorie Fertigungsauftrag Scheduler 0](assets/Theorie%20Fertigungsauftrag%20Scheduler%200.svg)

Nach dem ersten Durchlauf des Schedulers sind weitere Fertigungsaufträge und eine Angebotsanfrage bereit.

![Theorie Fertigungsauftrag Scheduler 1](assets/Theorie%20Fertigungsauftrag%20Scheduler%201.svg)

![Theorie Einkauf Scheduler 1](assets/Theorie%20Einkauf%20Scheduler%201.svg)

Nach dem zweiten Durchlauf des Schedulers ist die erste Angebotsanfrage erweitert und eine zweite erstellt worden.

![Theorie Einkauf Scheduler 2](assets/Theorie%20Einkauf%20Scheduler%202.svg)

### Übersicht Materialverfügbarkeit
Mittels der Übersicht *Berichtswesen/Prognostizierter Bestand* in der App Lager  zeigt sich die Materialverfügbarkeit auf der Zeitschiene folgendermassen:

![Theorie Forecasted Stock](assets/Theorie%20Forecasted%20Stock.png)

### Planung optimieren
Die Minus-Bestände werden über Aufträge aufgefüllt. Die Bestellung der Rundrohre 1 und 2 auf Ende Monat zeigt genügenden Lagerbestand in der langen Frist. Die neue Situation zeigt sich wie folgt:

![Theorie Forecasted Stock 2](assets/Theorie%20Forecasted%20Stock%202.png)

Als Nächstes werden die Produktionsaufträge zeitlich geschoben, bis zu keinem Zeitpunkt ein Minus-Bestand von Material vorausgesagt ist.

Dies erfolgt über das Verschieben der Objekte in der grafischen Übersicht *Planung nach Produktion* oder die direkte Eingabe im Feld *Geplantes Datum* pro Fertigungsauftrag.

![Theorie Planung Gantt](assets/Theorie%20Planung%20Gantt.png)

![Theorie Planung Geplantes Datum](assets/Theorie%20Planung%20Geplantes%20Datum.png)