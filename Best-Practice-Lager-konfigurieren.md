---
tags:
- Best-Practice
---
# Best Practice: Lager konfigurieren

In den Grundeinstellungen ist ein Lager mit dem Namen *San Francisco*, dem Kurznamen *WH* und der Adresse der Firma angelegt.

Beispiel:

![Lager Lager anlegen](assets/Lager%20Lager%20anlegen.png)

(Der Name *San Francisco* hat damit zu tun, dass der Name des Lagers mit einem geografischen Ort zusammenhängen soll. Das Beispiel-Lager liegt also in den USA im Norden Kaliforniens.)

### Standard Lagerorte für Lieferungen

Zu diesem Zeitpunkt sind bereits Standard Lagerorte angelegt. Sie werden aber erst sichtbar, wenn man die Option *Lagerorte* einschaltet. Navigieren sie hierfür in den Einstellungen zum Abschnitt *Lager > Lager* und aktivieren sie *Lagerorte*.
Anschliessend werden in der App *Lager* über den Menüpunkt *Konfiguration > Lager & Logistik > Lagerorte* die folgenden Lagerorte sichtbar (schalten sie den Filter *intern* aus):

![Lager Lagerorte Standard](assets/Lager%20Lagerorte%20Standard.png)

Die folgenden zusätzlichen Lager sind vobereitet aber als *archiviert* vorerst verborgen. (Die archivierten Lagerorte werden sichtbar, wenn durch die Auswahl von komplexeren Lagerrouten zusätzliche Lager benötigt werden.)

![Lager Lagerorte Standard archiviert](assets/Lager%20Lagerorte%20Standard%20archiviert.png)

### Standard Routen für Lieferungen

Um das Einrichten der kundenspezifischen Warentransfers im Lager zu vereinfachen sind Standard Konfigurationen programmiert. Öffnen sie das entsprechende Lager über die Liste in der Ansicht *Konfiguration > Lager & Logistik > Lager*). Nach dem Einschalten von *Bearbeiten* zeigt sich die folgende Auswahl:

![Lager Konfiguration Standard](assets/Lager%20Konfiguration%20Standard.png)

Um Ware zwischen den Lagerorten zu bewegen sind *Routen* und *Regeln* vorbereitet. Für die oben dargestellte Konfiguration *1 Schritt* sind die folgenden zwei Routen im Menu *Konfiguration > Lager & Logistik > Routen* vorgesehen:

![Lager Routen Standard 1 step](assets/Lager%20Routen%20Standard%201%20step.png)

Die entsprechenden Regeln finden sich im Menu *Konfiguration > Lager & Logistik > Regeln*.  (Damit in der Liste der Name sichtbar ist, wurde im Entwicklermodus die Spalte `<field name="name"/>` eingefügt.)

![Lager Regeln Standard 1 Step](assets/Lager%20Regeln%20Standard%201%20Step.png)

Für die genannte Einstellung *1 Schritt* sind nur die ersten zwei Regeln relevant. Die anderen Regeln stehen im Zusammenhang mit archivierten Routen.

**Wareneingang und Ausgehende Lieferungen 1 Schritt**

Damit funktioniert der Warentransfer mit der Konfiguration *1 Schritt* mit den programmierten Routen und den Lagerorten nach dem folgenden Schema:

![Lager Konfiguration Schema 1 Schritt](assets/Lager%20Konfiguration%20Schema%201%20Schritt.svg)

**Wareneingang 2 Schritte**

Mit dem Einschalten der Konfiguration *2 steps* für den Wareneingang erscheint in der Liste der Lagerorte zusätzlich *WH/Input* und die Liste der Routen enthält zusätzlich *San Francisco: In 2 Schritten erhalten (input + Lager)*.

Damit funktioniert der *Wareneingang* mit der Konfiguration *2 steps* mit den programmierten Routen und den Lagerorten nach dem folgenden Schema:

![Lager Konfiguration Schema 2 Schritt](assets/Lager%20Konfiguration%20Schema%202%20Schritt.svg)

** Wareneingang 3 Schritte **

![Lager Konfiguration Schema 3 Schritt](assets/Lager%20Konfiguration%20Schema%203%20Schritt.svg)

** Ausgehende Lieferungen 2 Schritte **

Für ausgehende Lieferungen zeigt sich das Schema folgendermassen (die Bezeichnung der Route ist falsch übersetzt. Es sollte heissen *Auslieferung in 2 Schritten*):

![Lager Konfiguration Schema 2 Schritt Lieferung](assets/Lager%20Konfiguration%20Schema%202%20Schritt%20Lieferung.svg)

** Ausgehende Lieferungen 3 Schritte **

![Lager Konfiguration Schema 3 Schritt Lieferung](assets/Lager%20Konfiguration%20Schema%203%20Schritt%20Lieferung.svg)

### Standard Lagerorte für die Beschaffung

Mit der Installation der App *Fertigung* werden die Funktionen im Lager mit den folgenden Möglichkeiten ergänzt:

![Lager Konfiguration Standard Beschaffung](assets/Lager%20Konfiguration%20Standard%20Beschaffung.png)

Falls auch die App *Einkauf* installiert ist, wird die Auswahl mit der folgenden Option ergänzt:

![Lager Konfiguration Standard Beschaffung Einkauf](assets/Lager%20Konfiguration%20Standard%20Beschaffung%20Einkauf.png)

Damit zusammenhängend erweitert sich die Liste der Routen mit *Fertigung* und *Einkaufen*.

![Lager Routen Standard 1 Step Fertigung Einkaufen](assets/Lager%20Routen%20Standard%201%20Step%20Fertigung%20Einkaufen.png)

Mit der Einstellung *Herstellung (1 Schritt)* werden noch keine zusätzlichen Lagerorte benötigt. Falls aber auf *Zusammenstellen der Komponenten und dann fertigen (2ter Schritt)* geändert wird, erscheint das zusätzliche Lager *WH/Pre-Production*.

### Standard Routen für die Beschaffung

**Fertigung 2 Schritte**

![Lager Konfiguration Schema 2 Schritt Beschaffung](assets/Lager%20Konfiguration%20Schema%202%20Schritt%20Beschaffung.svg)

**Fertigung 3 Schritte**

![Lager Konfiguration Schema 3 Schritt Beschaffung](assets/Lager%20Konfiguration%20Schema%203%20Schritt%20Beschaffung.svg)

**Reihenfolge**

Die Reihenfolge der Routen und damit die Priorisierung wird über die Liste in der Darstellung Lager > Konfiguration > Routen definiert.

![Lager Routen Reihenfolge](assets/Lager%20Routen%20Reihenfolge.png)

Die entsprechende Darstellung im Tab *Lager* in der Produktansicht zeigt sich wie folgt:

![Lager Routen Reihenfolge Produkt](assets/Lager%20Routen%20Reihenfolge%20Produkt.png)

Die Sichtbarkeit der Routen in den verschiedenen Darstellungen wird über die Option *Auswahlmöglichkeit* für jede Route eingestellt.

![Lager Routen](assets/Lager%20Routen.svg)

**Vordefinierte Routen**

Für den Empfang und die Lieferung von Produkten sind Routen für die Varianten 1, 2 oder 3 Schritte vordefiniert. Über die Auswahl in der Ansicht Lager > Lager Konfiguration werden die Routen automatisch eingerichtet.

**Empfangsschritte**

Zur Auswahl stehen folgende drei Varianten:
1.  Produkte direkt anliefern (1 Schritt)
2. Receive goods in input and then stock (2 steps)
3. Receive goods in input, then quality and then stock (3 steps)

![Lager Empfangsschritte](assets/Lager%20Empfangsschritte.svg)

**Lieferungsschritte**

Zur Auswahl stehen:
1. Güter direkt anliefern (1 Schritt)
2. Send goods in output and then deliver (2 steps)
3. Ware verpacken, Ware in die Ausgabe schicken und dann ausliefern (3 Schritte)

![Lager Lieferungsschritte](assets/Lager%20Lieferungsschritte.svg)

### Strategien

Mit Odoo 14 wurde die Funktionalität "Replenishment" ausgebaut. *Replenish on Order (MTO)* soll damit an Bedeutung verlieren.

![Lager Strategien](assets/Lager%20Strategien.svg)

### Regeln

Es besteht folgender Zusammenhang zwischen Lager, Routen und Regeln:

![Lager Zusammenhänge Routen](assets/Lager%20Zusammenh%C3%A4nge%20Routen.svg)

**Propagation**

![Lager Regeln](assets/Lager%20Regeln.svg)

::: tip
Über die Einstellung *Weitergabe Beschaffungsgruppe* wird programmiert ob Bestellvorschläge kummuliert werden oder ob separate Angebotsanfragen erstellt werden.
:::
