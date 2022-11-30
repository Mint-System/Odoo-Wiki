---
tags:
- HowTo
prev: ./fertigung
---
# Fertigung Stammdaten
![icons_odoo_mrp](assets/icons_odoo_mrp.png)

Produkte und Dienstleistungen zentral pflegen.

## Produktverwaltung

## Produkt anlegen

Navigieren Sie nach *Fertigung > Stammdaten > Produkte*.

![Fertigung Produkt anlegen](assets/Fertigung%20Produkt%20anlegen.png)

**Verkaufsartikel/Einkaufsartikel**

Die Produkte erscheinen entsprechend zur Auswahl wenn z.B ein Angebot (kann verkauft werden) oder eine Angebotsanfrage (kann eingekauft werden) erstellt werden.

***Beschreibung der Felder**

**Titel**

| Feld                   | Beispiel      | Kommentar                                                                                                      |
| ---------------------- | ------------- | -------------------------------------------------------------------------------------------------------------- |
| Produktname            | Lenkerbügel   | Bezeichnet einen Teil des Anzeigenamens in Form von *[Interne Referenz] Produktname*                           |
| Kann verkauft werden   | *aktiviert*   | Der Artikel wird als Verkaufsprodukt angeboten. Damit erscheint er in der Auswahl um ein Angebot zu erstellen. |
| Kann eingekauft werden | *deaktiviert* | Der Artikel kann von extern bezogen werden. Er erscheint in der Auswahl um eine Angebotsanfrage zu erstellen.  |

**Register Allgemeine Informationen**

| Feld              | Beispiel              | Kommentar                                                                                                                                             |
| ----------------- | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Produktart        | Einlagerbares Produkt | Siehe Abschnitt Definitionen/Produktart                                                                                                               |
| Produktkategorie  | All                   | Siehe Abschnitt Definitionen/Produktkategorie                                                                                                         |
| Interne Referenz  | 1005-0000             | Bezeichnet einen Teil des Anzeigenamens in Form von *[Interne Referenz] Produktname*                                                                  |
| Strichcode        | 1005-0000             | Empfehlung: Gleicher Inhalt wie *Interne Referenz*. Achtung: Falls der Artikel international eindeutig sein soll, sind spezielle Vorgabe zu beachten. |
| Verkaufspreis     | ---                   | ---                                                                                                                                                   |
| Steuern (Verkauf) | ---                   | ---                                                                                                                                                   |
| Kosten            | 26.15 CHF             | Siehe Abschnitt Definition/Kosten                                                                                                                     |

In verschiedenen Darstellungen erscheint die Produktbezeichnung als zusammengesetzter Text in der Form \[Interne Referenz\] Produktname.

Zum Beispiel als Beschreibung auf einem Angebot.

**Register Lager**

| Bezeichnung                 | Beschreibung                                                                                                                                                                 |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Verantwortlich              |                                                                                                                                                                              |
| Gewicht                     |                                                                                                                                                                              |
| Volumenen                   |                                                                                                                                                                              |
| Durchlaufzeit der Fertigung |                                                                                                                                                                              |
| Auslieferungszeit           | Die Zeitdauer von der Bestellung bis zum Eintreffen des Produkts beim Kunden. Diese Anzahl Tage definiert das "Expected Date" im Verkaufsauftrag (Heute + Auslieferungszeit) |
| Mengeneinheit | Einheit, in welcher das Produkt verkauft wird und die für alle Lagervorgänge verwendet wird.
| Einkauf ME  | Einheit, in welcher das Produkt eingekauft wird. Sie muss in der selben Kategorie sein wie die Standard-Mengeneinheit.

In den Einstellungen kann eine Sicherheitsvorlaufzeit eingestellt werden.

Falls eine *Security Lead Time for Sales* definiert ist (siehe Lager > Konfigruation) dann beeinflusst dies den geplanten Lieferzeitpunkt. D.h. der Warentransfer wird diese Anzahl Tage früher beauftragt. Der im Verkaufsauftrag definierte und für den Kunden sichtbare Termin wird aber durch die *Security Lead Time for Sales* nicht beeinflusst.

### Produktart festlegen

Zur Auswahl stehen 
* Einlagerbares Produkt
* Verbrauchsartikel
* Dienstleistung

Falls ein Produkt im Lager eingebucht und die Menge überwacht werden soll, ist *Einlagerbares Produkt* die richtige Wahl. Für Produkte welche mengenmässig nicht erfasst werden (z.B. Reinigungsflüssigkeit) wählen Sie *Verbrauchsartikel*. Sie können Sie einkaufen aber nicht an Lager legen. Die Produktart *Dienstleistung* dient zur Darstellung von immateriellen Gütern (z.B. Beratungsleistung).

### Produktkategorie festlegen

Die Produktkategorie können Sie nach eigenen Definitionen kategorisieren.

Zur Auswahl stehen:
* All
* All / Expenses
* All / Saleable

### Produktkosten ermitten

Mit der Funktion *Kosten aktualisieren* kann der Wert manuell geändert werden. Die History wird gespeichert.

Für Fertigungsprodukte können mit der Funktion *Berechnung des Preises aus Stückliste* die Kosten aus Produkten und Vorgängen (Stücklisten und Arbeitsplänen) berechnet werden.

## Stücklisten

### Fertigung an Subunternehmer vergeben

Damit ein Produkt von einem Subunternehmer gefertigt wird, müssten Sie die Stückliste des Produkts via *Fertigung > Produkte > Stückliste* öffnen und als *Stücklisten Typ* die Option *An Subunternehmer vergeben* auswählen. Als nächstes wählen Sie im Feld *Subunternehmer* das entsprechende Unternehmen aus.