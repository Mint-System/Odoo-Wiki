---
tags:
- Best-Practice
prev: ./best-practice
---

# Best Practice: Subunternehmer beauftragen

Wenn die Fertigung eines Produktes an einen Subunternehmer übertragen wird, dann sind in der Auftragsabwicklung die folgenden Punkte zu berücksichtigen.

## Vorbereitung

* App *Fertigung (mrp)* installieren
* Die Option *An Subunternehmer vergeben* einschalten (Einstellungen > Fertigung)

## Stückliste definieren

Ein Produkt das extern gefertigt wird benötigt eine Stückliste vom Typ *An Subunternehmer vergeben*. Im Feld *Subunternehmer* werden die vorgesehenen Lieferanten eingetragen.

![Einkauf Subunternehmer Stückliste](assets/Einkauf%20Subunternehmer%20Stückliste.png)

## Route einstellen

Die in der Stückliste enthaltenen Produkte müssen als Route *Subunternehmer nach Auftrag versorgen* eingestellt haben.

![Einkauf Subunternehmer Stückliste Typ](assets/Einkauf%20Subunternehmer%20Stückliste%20Typ.png)

## Bei Subunternehmer bestellen

Ein extern zu fertigendes Produkt wird über einen entsprechenden Beschaffungsauftrag beim vorgesehenen Subunternehmer beauftragt. Mit dem Bestätigen der Bestellung werden die folgenden zwei Transfers programmiert.

* Wareneingang (WH/IN/---) 
* Lieferauftrag an den Subunternehmer (WH/OUT/---).