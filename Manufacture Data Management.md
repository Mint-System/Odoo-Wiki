---
title: Fertigung Datenmanagement
description: Produkte und Dienstleistungen zentral pflegen.
kind: howto
prev: ./manufacture
---

# Fertigung Datenmanagement

![icons_odoo_mrp](attachments/icons_odoo_mrp.png)

{{ $frontmatter.description }}

## Produkte

### Produkt anlegen

Navigieren Sie nach _Fertigung > Stammdaten > Produkte_.

![Fertigung Produkt anlegen](attachments/Fertigung%20Produkt%20anlegen.png)

**Verkaufsartikel/Einkaufsartikel**

Die Produkte erscheinen entsprechend zur Auswahl wenn z.B ein Angebot (kann verkauft werden) oder eine Angebotsanfrage (kann eingekauft werden) erstellt werden.

**\*Beschreibung der Felder**

**Titel**

| Feld                   | Beispiel      | Kommentar                                                                                                      |
| ---------------------- | ------------- | -------------------------------------------------------------------------------------------------------------- |
| Produktname            | Lenkerbügel   | Bezeichnet einen Teil des Anzeigenamens in Form von _[Interne Referenz] Produktname_                           |
| Kann verkauft werden   | _aktiviert_   | Der Artikel wird als Verkaufsprodukt angeboten. Damit erscheint er in der Auswahl um ein Angebot zu erstellen. |
| Kann eingekauft werden | _deaktiviert_ | Der Artikel kann von extern bezogen werden. Er erscheint in der Auswahl um eine Angebotsanfrage zu erstellen.  |

**Register Allgemeine Informationen**

| Feld              | Beispiel              | Kommentar                                                                                                                                             |
| ----------------- | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Produktart        | Einlagerbares Produkt | Siehe Abschnitt Definitionen/Produktart                                                                                                               |
| Produktkategorie  | All                   | Siehe Abschnitt Definitionen/Produktkategorie                                                                                                         |
| Interne Referenz  | 1005-0000             | Bezeichnet einen Teil des Anzeigenamens in Form von _[Interne Referenz] Produktname_                                                                  |
| Strichcode        | 1005-0000             | Empfehlung: Gleicher Inhalt wie _Interne Referenz_. Achtung: Falls der Artikel international eindeutig sein soll, sind spezielle Vorgabe zu beachten. |
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
| Volumen                     |                                                                                                                                                                              |
| Durchlaufzeit der Fertigung |                                                                                                                                                                              |
| Auslieferungszeit           | Die Zeitdauer von der Bestellung bis zum Eintreffen des Produkts beim Kunden. Diese Anzahl Tage definiert das "Expected Date" im Verkaufsauftrag (Heute + Auslieferungszeit) |
| Mengeneinheit               | Einheit, in welcher das Produkt verkauft wird und die für alle Lagervorgänge verwendet wird.                                                                                 |
| Einkauf ME                  | Einheit, in welcher das Produkt eingekauft wird. Sie muss in der selben Kategorie sein wie die Standard-Mengeneinheit.                                                       |

In den Einstellungen kann eine Sicherheitsvorlaufzeit eingestellt werden.

Falls eine _Security Lead Time for Sales_ definiert ist (siehe Lager > Konfiguration) dann beeinflusst dies den geplanten Lieferzeitpunkt. D.h. der Warentransfer wird diese Anzahl Tage früher beauftragt. Der im Verkaufsauftrag definierte und für den Kunden sichtbare Termin wird aber durch die _Security Lead Time for Sales_ nicht beeinflusst.

### Produktart festlegen

#### Bis Odoo Version 17

Zur Auswahl stehen

- Einlagerbares Produkt
- Verbrauchsartikel
- Dienstleistung

Falls ein Produkt im Lager eingebucht und die Menge überwacht werden soll, ist _Einlagerbares Produkt_ die richtige Wahl. Für Produkte welche mengenmässig nicht erfasst werden (z.B. Reinigungsflüssigkeit) wählen Sie _Verbrauchsartikel_. Sie können Sie einkaufen aber nicht an Lager legen. Die Produktart _Dienstleistung_ dient zur Darstellung von immateriellen Gütern (z.B. Beratungsleistung).

::: warning 
Bis #Odoo17 kann die Produktart nicht mehr geändert werden, sobald ein Beleg (zum Beipiel eine Warenbewegung) zum Produkt erstellt ist. Das Produkt muss dann mit der anderen Produktart neu angelegt und das alte Produkt archiviert werden.  
#DEPRECATED 
:::

#### Ab Odoo Version 18

Zur Auswahl stehen

- Ware
- Dienstleistung
- Kombination

Als _Ware_ gelten materielle Güter, die eingekauft, verarbeitet, gelagert und verkauft werden können. Die Unterscheidung zwischen 'Verbrauchsartikeln ohne Nachverfolgung' und 'einlagerbaren Produkten' wird über die Option _Bestand verfolgen_ gesteuert. Die Produktart _Dienstleistung_ dient zur Darstellung von immateriellen Gütern (z.B. Beratungsleistung). Mit _Kombination_ können Produkte erfasst werden, die Ware und Dienstleistung beinhalten, wie beispielsweise eine Maschine mit zugehöriger Serviceleistung.

### Produktkategorie festlegen

Die Produktkategorie können Sie nach eigenen Definitionen kategorisieren.

Zur Auswahl stehen:

- All
- All / Expenses
- All / Saleable

### Produktkosten ermitten

Mit der Funktion _Kosten aktualisieren_ kann der Wert manuell geändert werden. Die History wird gespeichert.

Für Fertigungsprodukte können mit der Funktion _Berechnung des Preises aus Stückliste_ die Kosten aus Produkten und Vorgängen (Stücklisten und Arbeitsplänen) berechnet werden.

## Stücklisten

### Fertigung an Subunternehmer vergeben

Damit ein Produkt von einem Subunternehmer gefertigt wird, müssten Sie die Stückliste des Produkts via _Fertigung > Produkte > Stückliste_ öffnen und als _Stücklisten Typ_ die Option _An Subunternehmer vergeben_ auswählen. Als nächstes wählen Sie im Feld _Subunternehmer_ das entsprechende Unternehmen aus.
