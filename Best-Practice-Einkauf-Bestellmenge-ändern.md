---
tags:
- Best-Practice
---
# Best Practice: Bestellmenge ändern

## Allgemein

Die in einem Beschaffungsauftrag vereinbarte Liefermenge kann (vor dem Eintreffen der Ware) geändert werden. Die entsprechenden Lagerbewegungen werden bei einer Vergrösserung der Menge automatisch nachgeführt. Bei einer Verkleinerung der Menge sind manuelle Änderungen notwendig die über Warnmeldungen angezeigt werden.

## Fall 1: Vergrösserung der Bestellmenge

Im folgenden Beispiel wird ein Beschaffungsauftrag für 10 Stk City Bike erstellt und nachträglich auf 12 Stk vergrössert.

Im ersten Schritt werden also 10 Stk *City Bike* bestellt. Mit der Bestätigung des Auftrags wird ein Warentransfer für 10 Stk angelegt der über den Smart-Button *Wareneingang* oben rechts sichtbar wird. 

![Best Practice Einkauf Bestellmenge ändern](assets/Best%20Practice%20Einkauf%20Bestellmenge%20ändern.png)

Ein Interner Transfer für die 10 Stk *City Bike* erscheint als Vorgang.

![Best Practice Einkauf Bestellmenge ändern Wareneingang](assets/Best%20Practice%20Einkauf%20Bestellmenge%20ändern%20Wareneingang.png)

Falls nun der Beschaffungsauftrag über die Funktion *Bearbeiten* von 10 auf 12 Stk. vergrössert wird, erscheint die Änderung nach *Bestätigen* im Chatter wie folgt:
![Best Practice Einkauf Bestellmenge ändern Vergrösserung Chatter](assets/Best%20Practice%20Einkauf%20Bestellmenge%20ändern%20Vergrösserung%20Chatter.png)

Prüfen sie nun über den Smart-Button *Wareneingang* die Veränderung des Internen Transfers. Sie werden feststellen, dass sich die Menge automatisch von 10 auf 12 Stk erhöht hat.

![Best Practice Einkauf Bestellmenge ändern Wareneingang Vergrösserung](assets/Best%20Practice%20Einkauf%20Bestellmenge%20ändern%20Wareneingang%20Vergrösserung.png)

Der Chatter rapportierte die Änderung wie folgt:

![[Best Practice Einkauf Bestellmenge ändern Vergrösserung Wareneingang Chatter.png]]

## Fall 2: Verkleinerung der Bestellmenge

Im folgenden Beispiel wird die bestellte Menge von 10 auf 6 Stk verkleinert. Der Chatter rapportiert die Änderung.

![Best Practice Einkauf Bestellmenge ändern Verkleinern Chatter](assets/Best%20Practice%20Einkauf%20Bestellmenge%20ändern%20Verkleinern%20Chatter.png)

Prüfen sie nun über den Smart-Button *Wareneingang* die Veränderung des Internen Transfers. Sie werden feststellen, dass sich die Menge nicht verändert hat. Stattdesen rapportiert der Chatter die folgende Fehlermeldung:

![Best Practice Einkauf Bestellmenge ändern Verkleinern Wareneingang Chatter](assets/Best%20Practice%20Einkauf%20Bestellmenge%20ändern%20Verkleinern%20Wareneingang%20Chatter.png)

Die beiden Internen Transfers von Input --> Quality und Quality --> Stock wurden nicht automatisch nachgeführt. Die beiden Vorgänge müssen manuell geändert werden. Navigieren sie hierfür in die entsprechenden Vorgänge und ändern sie die Stückzahl von 12 auf 6 nachdem sie die Funktionen *Entsperren* und *Bearbeiten* aktiviert haben. Nachdem die beiden Vorgänge richtiggstellt wurden, sollte für die Wahrung der Übersicht die Fehlermeldung auf dem Wareneingang abgeschlossen werden.

![Best Practice Einkauf Bestellmenge ändern Fehlermeldung abschliessen](assets/Best%20Practice%20Einkauf%20Bestellmenge%20ändern%20Fehlermeldung%20abschliessen.gif)