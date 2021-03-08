# Fertigung Stammdaten
![icons_odoo_mrp](assets/icons_odoo_mrp.png)

## Produkt anlegen

Navigieren sie nach *Fertigung > Stammdaten > Produkte*.

![Fertigung Produkt anlegen](assets/Fertigung%20Produkt%20anlegen.png)

**Verkaufsartikel/Einkaufsartikel**

Die Produkte erscheinen entsprechend zur Auswahl wenn z.B ein Angebot (kann verkauft werden) oder eine Angebotsanfrage (kann eingekauft werden) erstellt werden.

### Beschreibung der Felder

**Titel**

Feld |Beispiel|Kommentar
:- |:- |:-
Produktname|Lenkerbügel|Bezeichnet einen Teil des Anzeigenamens in Form von *[Interne Referenz] Produktname*
Kann verkauft werden|*aktiviert*|Der Artikel wird als Verkaufsprodukt angeboten. Damit erscheint er in der Auswahl um ein Angebot zu erstellen.
Kann eingekauft werden|*deaktiviert*|Der Artikel kann von extern bezogen werden. Er erscheint in der Auswahl um eine Angebotsanfrage zu erstellen.

**Register Allgemeine Informationen**

Feld |Beispiel |Kommentar
:- |:- |:-
Produktart|Einlagerbares Produkt|Siehe Abschnitt Definitionen/Produktart
Produktkategorie|All|Siehe Abschnitt Definitionen/Produktkategorie
Interne Referenz|1005-0000|Bezeichnet einen Teil des Anzeigenamens in Form von *[Interne Referenz] Produktname*
Strichcode|1005-0000|Empfehlung: Gleicher Inhalt wie *Interne Referenz*. Achtung: Falls der Artikel international eindeutig sein soll, sind spezielle Vorgabe zu beachten.
Verkaufspreis|---|---
Steuern (Verkauf)|---|---
Kosten|26.15 CHF|Siehe Abschnitt Definition/Kosten

In verschiedenen Darstellungen erscheint die Produktbezeichnung als zusammengesetzter Text in der Form \[Interne Referenz\] Produktname.

Zum Beispiel als Beschreibung auf einem Angebot.

**Register Lager**

![Fertigung Felder Produkte Lager Logistik](assets/Fertigung%20Felder%20Produkte%20Lager%20Logistik.svg)

In den Einstellungen kann eine Sicherheitsvorlaufzeit eingestellt werden.

Falls eine *Security Lead Time for Sales* definiert ist (siehe Lager > Konfigruation) dann beeinflusst dies den geplanten Lieferzeitpunkt. D.h. der Warentransfer wird diese Anzahl Tage früher beauftragt. Der im Verkaufsauftrag definierte und für den Kunden sichtbare Termin wird aber durch die *Security Lead Time for Sales* nicht beeinflusst.

## Produktart festlegen

Zur Auswahl stehen 
- Einlagerbares Produkt
- Verbrauchsartikel
- Dienstleistung

Falls ein Produkt im Lager eingebucht und die Menge überwacht werden soll, ist *Einlagerbares Produkt* die richtige Wahl. Für Produkte welche mengenmässig nicht erfasst werden (z.B. Reinigungsflüssigkeit) wählen Sie *Verbrauchsartikel*. Sie können sie einkaufen aber nicht an Lager legen. Die Produktart *Dienstleistung* dient zur Darstellung von immateriellen Gütern (z.B. Beratungsleistung).

## Produktkategorie festlegen

Die Produktkategorie können sie nach eigenen Definitionen kategorisieren.

Zur Auswahl stehen:
- All
- All / Expenses
- All / Saleable

## Produktkosten ermitten

Mit der Funktion *Kosten aktualisieren* kann der Wert manuell geändert werden. Die History wird gespeichert.

Für Fertigungsprodukte können mit der Funktion *Berechnung des Preises aus Stückliste* die Kosten aus Produkten und Vorgängen (Stücklisten und Arbeitsplänen) berechnet werden.


