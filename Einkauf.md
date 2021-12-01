---
tags:
- HowTo
---
# Einkauf
![icons_odoo_purchase](assets/icons_odoo_purchase.png)

Verbessern Sie die Leistung Ihrer Lieferkette und Ihres Bestands

| Erweiterung                                                               | Beschreibung                                        |
| ------------------------------------------------------------------------- | --------------------------------------------------- |
| [Einkauf Kaufverträge](Einkauf-Kaufverträge.md)                           | Kaufverträge für Rahmenbestellungen erstellen.       |
| [Purchase Order Line Date](Purchase-Order-Line-Date.md)                   | Lieferdatum im Wareneingang automatisch nachtragen. |
| [Purchase Partner Incoterm](Purchase-Partner-Incoterm.md)                 | Für jedem Partner die Incoterms festlegen.          |
| [Pruchase Order Line Position](Purchase-Order-Line-Position.md)           | Einkaufsaufträge mit Positionsnummern.              |
| [Purchase Order Line Price Default](Purchase-Order-Line-Price-Default.md) | Standardpreis einer Einkaufsposition überschreiben. |
| [Purchase order lines with discounts](Purchase-order-lines-with-discounts.md) | Rabatte auf Einkaufspositionen festlegen. |

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

## Portal Benutzerkonto anlegen
Falls sie für das Portal noch keinen Zugang haben, können sie über die Funktion *Benutzerkonto anlegen* ein Konto erstellen.

![Einkauf Portal Benutzerkonto anlegen](assets/Einkauf%20Portal%20Benutzerkonto%20anlegen.png)

Benutzername und Passwort können gewählt werden.

![Einkauf Portal Benutzerkonto registrieren](assets/Einkauf%20Portal%20Benutzerkonto%20registrieren.png)


## Lieferadresse ändern
Auf einer Bestellung ist die Lieferadresse standardmässig die Adresse der eigenen Firma gemäss *Einstellungen > Unternehmen*.
Falls eine andere Lieferadresse gewünscht ist, lässt sich das über das Einrichten eines entsprechendes Lagers/Vorgangstyp erreichen.

Jedes Lager hat eine Adresse.

![Einkauf Lager Adresse](assets/Einkauf%20Lager%20Adresse.png)

Die Adresse kann auch eine spezielle Lieferandresse sein.

![Einkauf Lager Adresse Lieferadresse](assets/Einkauf%20Lager%20Adresse%20Lieferadresse.png)

Falls also für eine Bestellung verschiedene Lieferadressen zur Verfügung stehen sollen,  muss für jede Adresse ein Lager eingerichtet werden.

![Einkauf Lager Anlieferung](assets/Einkauf%20Lager%20Anlieferung.png)

Die Lieferanschrift kann auf der Bestellung gemäss der folgenden Abbildung gewählt werden (die Markierung zeigt den Vorgangstyp):

![Einkauf Lieferadresse Anlieferung](assets/Einkauf%20Lieferadresse%20Anlieferung.png)

Die Bestellung sieht dann wie folgt aus:

![Einkauf Bestellung Beispiel Lieferadresse](assets/Einkauf%20Bestellung%20Beispiel%20Lieferadresse.png)