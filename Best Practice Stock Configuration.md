---
title: Konfiguration Lager
description: Eine einfache und umfassende Odoo-Dokumentation.
kind: explain
prev: ./best-practice
---

# Konfiguration Lager

In den Grundeinstellungen ist ein Lager mit dem Namen _San Francisco_, dem Kurznamen _WH_ und der Adresse der Firma angelegt.

Beispiel:

![Lager Lager anlegen](attachments/Lager%20Lager%20anlegen.png)

(Der Name _San Francisco_ hat damit zu tun, dass der Name des Lagers mit einem geografischen Ort zusammenhängen soll.)

### Standard Lagerorte für Lieferungen

Zu diesem Zeitpunkt sind bereits Standard Lagerorte angelegt. Sie werden aber erst sichtbar, wenn man die Option _Lagerorte_ einschaltet. Navigieren Sie hierfür in den Einstellungen zum Abschnitt _Lager > Lager_ und aktivieren Sie _Lagerorte_.
Anschliessend werden in der App _Lager_ über den Menüpunkt _Konfiguration > Lager & Logistik > Lagerorte_ die folgenden Lagerorte sichtbar (schalten Sie den Filter _intern_ aus):

![Lager Lagerorte Standard](attachments/Lager%20Lagerorte%20Standard.png)

Die folgenden zusätzlichen Lager sind vobereitet aber als _archiviert_ vorerst verborgen. (Die archivierten Lagerorte werden sichtbar, wenn durch die Auswahl von komplexeren Lagerrouten zusätzliche Lager benötigt werden.)

![Lager Lagerorte Standard archiviert](attachments/Lager%20Lagerorte%20Standard%20archiviert.png)

### Standard Routen für Lieferungen

Um das Einrichten der kundenspezifischen Warentransfers im Lager zu vereinfachen sind Standard Konfigurationen programmiert. Öffnen Sie das entsprechende Lager über die Liste in der Ansicht _Konfiguration > Lager & Logistik > Lager_). Nach dem Einschalten von _Bearbeiten_ zeigt sich die folgende Auswahl:

![Lager Konfiguration Standard](attachments/Lager%20Konfiguration%20Standard.png)

Um Ware zwischen den Lagerorten zu bewegen sind _Routen_ und _Regeln_ vorbereitet. Für die oben dargestellte Konfiguration _1 Schritt_ sind die folgenden zwei Routen im Menu _Konfiguration > Lager & Logistik > Routen_ vorgesehen:

![Lager Routen Standard 1 step](attachments/Lager%20Routen%20Standard%201%20step.png)

Die folgenden zwei Routen sind vorhanden, aber archiviert:

![Lager Routen Standard 1 archivert](attachments/Lager%20Routen%20Standard%201%20archivert.png)

Die entsprechenden Regeln finden sich im Menu _Konfiguration > Lager & Logistik > Regeln_. (Damit in der Liste der Name sichtbar ist, wurde im Entwicklermodus die Spalte `<field name="name"/>` eingefügt.)

![Lager Regeln Standard 1 Step](attachments/Lager%20Regeln%20Standard%201%20Step.png)

Für die genannte Einstellung _1 Schritt_ sind nur die ersten zwei Regeln relevant. Die anderen Regeln stehen im Zusammenhang mit archivierten Routen.

**Wareneingang und Ausgehende Lieferungen 1 Schritt**

Damit funktioniert der Warentransfer mit der Konfiguration _1 Schritt_ mit den programmierten Routen und den Lagerorten nach dem folgenden Schema:

![Lager Konfiguration Schema 1 Schritt](attachments/Lager%20Konfiguration%20Schema%201%20Schritt.svg)

**Wareneingang 2 Schritte**

Mit dem Einschalten der Konfiguration _2 steps_ für den Wareneingang erscheint in der Liste der Lagerorte zusätzlich _WH/Input_ und die Liste der Routen enthält zusätzlich _San Francisco: In 2 Schritten erhalten (input + Lager)_.

Damit funktioniert der _Wareneingang_ mit der Konfiguration _2 steps_ mit den programmierten Routen und den Lagerorten nach dem folgenden Schema:

![Lager Konfiguration Schema 2 Schritt](attachments/Lager%20Konfiguration%20Schema%202%20Schritt.svg)

**Wareneingang 3 Schritte**

![Lager Konfiguration Schema 3 Schritt](attachments/Lager%20Konfiguration%20Schema%203%20Schritt.svg)

**Ausgehende Lieferungen 2 Schritte**

Für ausgehende Lieferungen zeigt sich das Schema folgendermassen (die Bezeichnung der Route ist falsch übersetzt. Es sollte heissen _Auslieferung in 2 Schritten_):

![Lager Konfiguration Schema 2 Schritt Lieferung](attachments/Lager%20Konfiguration%20Schema%202%20Schritt%20Lieferung.svg)

**Ausgehende Lieferungen 3 Schritte**

![Lager Konfiguration Schema 3 Schritt Lieferung](attachments/Lager%20Konfiguration%20Schema%203%20Schritt%20Lieferung.svg)

### Standard Lagerorte für die Beschaffung

Mit der Installation der App _Fertigung_ werden die Funktionen im Lager mit den folgenden Möglichkeiten ergänzt:

![Lager Konfiguration Standard Beschaffung](attachments/Lager%20Konfiguration%20Standard%20Beschaffung.png)

Falls auch die App _Einkauf_ und _Fertigung_ installiert sind, wird die Auswahl mit der folgenden Option ergänzt:

![Lager Konfiguration Standard Beschaffung Einkauf](attachments/Lager%20Konfiguration%20Standard%20Beschaffung%20Einkauf.png)

Damit zusammenhängend erweitert sich die Liste der Routen mit _Fertigung_ und _Einkaufen_.

![Lager Routen Standard 1 Step Fertigung Einkaufen](attachments/Lager%20Routen%20Standard%201%20Step%20Fertigung%20Einkaufen.png)

Mit der Einstellung _Herstellung (1 Schritt)_ werden noch keine zusätzlichen Lagerorte benötigt. Falls aber auf _Zusammenstellen der Komponenten und dann fertigen (2ter Schritt)_ geändert wird, erscheint das zusätzliche Lager _WH/Pre-Production_.

### Standard Routen für die Beschaffung

**Fertigung 2 Schritte**

![Lager Konfiguration Schema 2 Schritt Beschaffung](attachments/Lager%20Konfiguration%20Schema%202%20Schritt%20Beschaffung.svg)

**Fertigung 3 Schritte**

![Lager Konfiguration Schema 3 Schritt Beschaffung](attachments/Lager%20Konfiguration%20Schema%203%20Schritt%20Beschaffung.svg)

**Reihenfolge**

Die Reihenfolge der Routen und damit die Priorisierung wird über die Liste in der Darstellung Lager > Konfiguration > Routen definiert.

![Lager Routen Reihenfolge](attachments/Lager%20Routen%20Reihenfolge.png)

Die entsprechende Darstellung im Tab _Lager_ in der Produktansicht zeigt sich wie folgt:

![Lager Routen Reihenfolge Produkt](attachments/Lager%20Routen%20Reihenfolge%20Produkt.png)

**Sichtbarkeit**

Die Sichtbarkeit der Routen in den verschiedenen Darstellungen wird über die Option _Auswahlmöglichkeit_ für jede Route eingestellt.

![Lager Routen](attachments/Lager%20Routen.svg)

**Vordefinierte Routen**

Für den Empfang und die Lieferung von Produkten sind Routen für die Varianten 1, 2 oder 3 Schritte vordefiniert. Über die Auswahl in der Ansicht Lager > Lager Konfiguration werden die Routen automatisch eingerichtet.

**Lagerort / Lagerbewegung / Vorgangstyp**

Empfangsschritte:

![Lager Empfangsschritte](attachments/Lager%20Empfangsschritte.svg)

Lieferungsschritte:

![Lager Lieferungsschritte](attachments/Lager%20Lieferungsschritte.svg)

### Spezifische Route für die Wareneingangsprüfung

Wenn die Lager-Konfiguration für Lieferungen von _1 Schritt_ auf _3 Schritte_ geändert wird, überschreibt Odoo die entsprechende Route. D.h. die Route _In 1 Schritt erhalten (Lager)_ wird ersetzt durch _In 3 Schritten erhalten (input + quality + Lager)_. Das führt auch dazu, dass die Änderung in allen Produkten nachgeführt wird.

Falls nun für jedes Produkt einzeln die Wareneingangsprüfung ein- oder ausgeschaltet werden soll, empfiehlt es sich die Route _In 3 Schritten erhalten (input + quality + Lager)_ zu duplizieren.

Zusätzlich muss der Lagerot _WH/Input_ aus dem Archiv zurückgeholt werden.

Achtung: Die Regel _In 1 Schritt erhalten (Lager)_ macht gar nichts! (Sie ist nur ein Platzhalter.)

Mit der Umstellung wird die Regel auf der Route _Einkauf_ geändert.

Regel für 1 Schritt:

![Lager Routen Standard Buy](attachments/Lager%20Routen%20Standard%20Buy.png)

Regel für 3 Schritt:

![Lager Routen Standard Input](attachments/Lager%20Routen%20Standard%20Input.png)

![Lager Vorgangstypen Standard Anlieferungen](attachments/Lager%20Vorgangstypen%20Standard%20Anlieferungen.png)

![Lager Vorgangstypen Standard Anlieferungen direkt](attachments/Lager%20Vorgangstypen%20Standard%20Anlieferungen%20direkt.png)
