---
tags:
- HowTo
---
# Einkauf
![icons_odoo_purchase](assets/icons_odoo_purchase.png)

Verbessern Sie die Leistung Ihrer Lieferkette und Ihres Bestands

Erweiterungen:
* [Einkauf Kaufverträge](Einkauf-Kaufverträge.md)
* [Purchase Order Line Date](Purchase-Order-Line-Date.md)
* [Purchase Partner Incoterm](Purchase-Partner-Incoterm.md)
* [Pruchase Order Line Position](Purchase-Order-Line-Position.md)

## Angebotsanfrage erstellen

Über *Anlegen* wird eine Angebotsanfrage eröffnet. Die Felder der Eingabemaske sind gemäss folgender Tabelle zu editieren:

| Bezeichnung         | Beschreibung                                                                                                                             |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Lieferant           | Es erscheinen alle Einträge der Liste "Kontakte" zur Auswahl.                                                                            |
| Lieferantenreferenz | Referenz zur Bezeichnung seitens Lieferanten (ist zum Beispiel nützlich um beim Wareneingang einen Zusammenhang zu schaffen).            |
| Währung             | Die gemäss Optionen eingeschaltenen Währung erscheinen zur Auswahl.                                                                      |
| Order Deadline      | Der geplante Zeitpunkt, wann die Bestellung zum Auftrag werden soll.                                                                     |
| Lieferdatum         | Der erwartete Lieferzeitpunkt. Dieses Datum wird für die Prognosen verwedent.                                                            |
| Ask confirmation    | Wenn die Option eingeschaltet ist, erhält der Lieferant automatisch eine eMail-Erinnerung in der er den Lieferzeitpunkt bestätigen muss. |

Im Register Produkte werden die gewünschten Artikel gelistet. 

## Angebotsanfrage senden

Mit dem Knopf *Per E-Mail Versenden* wird eine PDF-Datei generiert und per eMail an den Lieferanten gesendet.

## Portal-Ansicht Bestellung anzeigen

Die Portal-Ansicht einer Bestellung können sie wie folgt anzeigen:
* Öffnen Angebotsanfrage
* Ausführen *Aktion > Teilen > Text kopieren*
* Neues privates Browser-Fenster öffnen
* Link in Adressleiste einfügen

::: tip
In einem privaten Browser werden die Cookies nicht geladen und somit wird man nicht automatisch bei Odoo angemeldet.
:::