# Best Practice Fertigungsplanung

## Beispiel Fertigungsauftrag Rahmen unbeschichtet
### Item Structure
![Item Structure Rahmen unbeschichtet](assets/Item%20Structure%20Rahmen%20unbeschichtet.svg)

### Lagerbestand/Arbeitspläne

Produkt|Anzahl|Arbeitsplan|Vorgänge
:- |-:|:- |:- 
Rahmen unbeschichtet|0|Rahmen zusammenfügen (35 Min.)|Rahmen schweissen (20 Min.), Rahmen reinigen (5 Min.), Masse prüfen 10 (Min.)
Oberrohr|5|Rohr vorbereiten (85 Min.)|Rohr zuschneiden (15 Min.), Rohr schleifen (10 Min.), Rohr grundieren (60 Min.)
Steuerrohr|7|Rohr vorbereiten (85 Min.)|Rohr zuschneiden (15 Min.), Rohr schleifen (10 Min.), Rohr grundieren (60 Min.)
Unterrohr|4|Rohr vorbereiten (85 Min.)|Rohr zuschneiden (15 Min.), Rohr schleifen (10 Min.), Rohr grundieren (60 Min.)
Sitzrohr|6|Rohr vorbereiten (85 Min.)|Rohr zuschneiden (15 Min.), Rohr schleifen (10 Min.), Rohr grundieren (60 Min.)
Sitzstrebe|1|Rohr vorbereiten (85 Min.)|Rohr zuschneiden (15 Min.), Rohr schleifen (10 Min.), Rohr grundieren (60 Min.)
Kettenstrebe|0|Rohr vorbereiten (85 Min.)|Rohr zuschneiden (15 Min.), Rohr schleifen (10 Min.), Rohr grundieren (60 Min.)
Rundrohr Typ 1|3|---|---
Rundrohr Typ 2|2|---|---

### Fertigungsauftrag
Zu fertigende Menge: 5 Einheiten

Nach VERFÜGBARKEIT PRÜFEN erscheint folgende Übersicht:

![Material Verfügbarkeit](assets/Material%20Verf%C3%BCgbarkeit.png)

![Gannt MH00001](assets/Gannt%20MH00001.png)


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

![Fertigungsaufträge](assets/Fertigungsauftr%C3%A4ge.png)

Führen sie die folgende Funktion aus: *Material- und Ressourcenplanung: Planung von Fertigungsaufträgen*. Damit ändert der Status auf geplant und die Aufträge erscheinen in der Gantt-Darstellung.

?> Die automatische Auftragsplanung berücksichtigt die Abhängigkeiten untereinander nicht. D.h. die Fertigung des Rahmen unbeschichtet wird gleichzeitig mit dem dafür notwendigen Oberrohr um 08:00 Uhr gestartet.

?> Falls die Produkte auf *Replenish on Order (MTO)* eingestellt sind werden die Aufträge für Unterrohr, Sitzstrebe, Kettenstrebe direkt ohne Scheduler erfasst. Sie werden aber ebenfalls wie oben geschildert gleichzeitig gestartet (keine Berücksichtigung der Abhängigkeiten).


