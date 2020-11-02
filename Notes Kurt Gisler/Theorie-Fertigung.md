## Theorie
### Item Structure
Ein Produkt (Item) besteht aus 0-n Unterprodukten. Jedes kann produziert (Make Item) oder eingekauft werden (Buy Item). Für die Herstellung eines Produktes benötigt man:
- Zeichnungen, CAD-Dateien usw. (Design)
- Arbeitspläne, Verfahrensanweisungen, Montageanleitungen usw. (Process)
- Stücklisten (Bill of Material)

Beispiel:

![Item Structure](Item%20Structure.svg)

## Beispiel Produkt Fahrrad

![Beispiel Produkt Fahrrad](Beispiel%20Produkt%20Fahrrad.svg)

# Best Practice Fertigungsplanung

## Beispiel Fertigungsauftrag Rahmen unbeschichtet
### Item Structure

![Beispiel Fertigungsauftrag Rahmen unbeschichtet Item Structure](Beispiel%20Fertigungsauftrag%20Rahmen%20unbeschichtet%20Item%20Structure.svg)

### Lagerbestand/Arbeitspläne

![Beispiel Fertigungsauftrag Rahmen unbeschichtet Lagerbestand Arbeitspläne](Beispiel%20Fertigungsauftrag%20Rahmen%20unbeschichtet%20Lagerbestand%20Arbeitspl%C3%A4ne.svg)

### Fertigungsauftrag
Zu fertigende Menge: 10 Einheiten. 

![Beispiel Fertigungsauftrag Rahmen unbeschichtet Berechnung](Beispiel%20Fertigungsauftrag%20Rahmen%20unbeschichtet%20Berechnung.svg)

Nach VERFÜGBARKEIT PRÜFEN erscheint folgende Übersicht:

![Beispiel Fertigungsaufträge Materialverfügbarkeit](Beispiel%20Fertigungsauftr%C3%A4ge%20Materialverf%C3%BCgbarkeit.png)

![Beispiel Gannt MH00001](Beispiel%20Gannt%20MH00001.png)


Rahmen schweissen|---|Kommentar
:- |-:| :-
Startdatum|2020-10-22 08.00.00|Zeitdifferenz 40 Minuten
Enddatum|2020-10-22 09.40.00|Es werden 5 Rahmen produziert für die jeweils 20 Minuten geplant sind
Arbeitsplatz|Schweissen|

Rahmen reinigen|---|Kommentar
:- |-:| :-
Startdatum|2020-10-22 09.40.00|Zeitdifferenz 25 Minuten
Enddatum|2020-10-22 10.05.00|Es werden 5 Rahmen gereinigt für die jeweils 5 Minuten geplant sind
Arbeitsplatz|Schweissen

Qualitätsprüfung|---|Kommentar
:- |-:| :-
Startdatum|2020-10-22 10.05.00|Zeitdifferenz 50 Minuten
Enddatum|2020-10-22 10.55.00|Es werden 5 Rahmen geprüft für die jeweils 10 Minuten geplant sind
Arbeitsplatz|Qualitätsprüfung|

Weil nicht alle Materialien verfügbar sind (Unterrohr, Sitzstrebe, Kettenstrebe) müssen weitere Fertigungsaufträge erstellt werden. Nach dem Durchlauf des Schedulers erscheinen folgende neuen Aufträge (blau eingefärbt):

![Beispiel Fertigungsaufträge](Notes%20Kurt%20Gisler/Beispiel%20Fertigungsauftr%C3%A4ge.png)

Führen sie die folgende Funktion aus: *Material- und Ressourcenplanung: Planung von Fertigungsaufträgen*. Damit ändert der Status auf geplant und die Aufträge erscheinen in der Gantt-Darstellung.

?> Die automatische Auftragsplanung berücksichtigt die Abhängigkeiten untereinander nicht. D.h. die Fertigung des Rahmen unbeschichtet wird gleichzeitig mit dem dafür notwendigen Oberrohr um 08:00 Uhr gestartet.

?> Falls die Produkte auf *Replenish on Order (MTO)* eingestellt sind werden die Aufträge für Unterrohr, Sitzstrebe, Kettenstrebe direkt ohne Scheduler erfasst. Sie werden aber ebenfalls wie oben geschildert gleichzeitig gestartet (keine Berücksichtigung der Abhängigkeiten).
