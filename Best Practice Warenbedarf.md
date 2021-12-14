---
tags:
- Best-Practice
---
[🔗 Best Practice](Best%20Practice.md)
# Best Practice: Warenbedarf
![Best Practice Materialbedarf](assets/Best%20Practice%20Materialbedarf.svg)

1. Ein Angebot wird durch die Bestätigung (durch den Kunden) zum Verkaufsauftrag.
2. Bei der Erstellung des Angebots ist sichtbar, ob die zu liefernde Ware in der benötigten Menge aktuell verfügbar ist. Die Warnfarbe rot zeigt fehlende Ware. Mit der Übersicht *Prognose* (*Forecasted Report*) werden die Details zukünftiger Zu- und Abgänge sichtbar. Falls zum Lieferzeitpunkt genügend Ware verfügbar ist, steht nach der Bestätigung des Angebots/Erstellung des Verkaufsautrags die Anzeige auf grün. Ansonsten steht sie auf rot.
3. Die Funktionalitäten von *Replenish* ermöglichen situativ zu enscheiden, ob die Ware eingekauft oder selber produziert wird (*Make or buy*). (Hierfür muss für das Produkt eine Meldebestandsregel mit dem Auslöser *Manuell* eingerichtet sein.)
4. Falls dem System vorgegeben wird, dass die Ware eingekauft werden soll (*Route Einkaufen*) resultiert ein automatischer Bestellvorschlag unter Berücksichtigung der *Tage bis Auslieferung* seitens des Lieferanten. Der Einkäufer kann den Entwurf bearbeiten und dann die Bestellung auslösen.
5. Falls dem System vorgegeben wird, dass die Ware produziert werden soll (*Route Fertigung*) resultiert ein automatischer Fertigungsauftrag unter Berücksichtigung der *Durchlaufzeit der Fertigung*. Der Produktionsleiter kann den Auftrag bearbeiten und dann planen.
6. Mit dem Bestätigen einer Bestellung oder dem Planen eines Fertigungsauftrages wird die erwartete Lagerbuchung vorbereitet. Nach dem Eintreffen der Ware vom Lieferanten oder aus der internen Produktion wird der Lagerzugang bestätigt.
7. Die Logistik bearbeitet den Lieferauftrag zur vorgegeben Zeit. Inzwischen ist die Ware verfügbar und kann dem Kunden gesendet werden.