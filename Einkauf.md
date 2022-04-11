---
tags:
- HowTo
prev: ./
---
# Einkauf
![icons_odoo_purchase](assets/icons_odoo_purchase.png)

Verbessern Sie die Leistung Ihrer Lieferkette und Ihres Bestands

| Erweiterung                                                                           | Beschreibung                                         |
| ------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| [Einkauf Kaufverträge](Einkauf%20Kaufverträge.md)                                     | Kaufverträge für Rahmenbestellungen erstellen.       |
| [Purchase Order Line Date](Purchase%20Order%20Line%20Date.md)                         | Lieferdatum im Wareneingang automatisch nachtragen.  |
| [Purchase Order Partner Incoterm](Purchase%20Order%20Partner%20Incoterm.md)                         | Für jedem Partner die Incoterms festlegen.           |
| [Pruchase Order Line Position](Purchase%20Order%20Line%20Position.md)                 | Einkaufsaufträge mit Positionsnummern.               |
| [Purchase Order Line Price Default](Purchase%20Order%20Line%20Price%20Default.md)     | Standardpreis einer Einkaufsposition überschreiben.  |
| [Purchase order lines with discounts](Purchase%20order%20lines%20with%20discounts.md) | Rabatte auf Einkaufspositionen festlegen.            |
| [Purchase Order Validate](Purchase%20Order%20Validate.md)                             | Bestellung vor Versenden oder Bestätigen überprüfen. |

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

## Angebotsanfrage nachfassen

Falls man beim Lieferanten bezüglich einem fehlenden Angebot nachfassen will, verwendet man den Knopf *Per e-Mail erneut senden*. Damit öffnet sich ein Dialog für den Versand eines e-Mails an den Lieferanten mit der Angebotsanfrage als Beilage.

## An Beschaffungsauftrag erinnern

Wenn der Lieferant an die Erfüllung des Beschaffungsauftrags erinnert werden soll, dann verwendet man hierzu die Aktion *Send Reminder*. Damit wird vollautomatisch eine e-Mail an den Lieferanten mit vordefiniertem Text und dem Beschaffungsauftrag als Beilage versendet.

::: tip
Die Aktion "Send Reminder" wird mit dem Aktivieren der Option *Ask confirmation* zum festgelegten Zeitpunkt automatisch ausgeführt.
:::

## Portal-Ansicht Bestellung anzeigen

Die Portal-Ansicht einer Bestellung können Sie wie folgt anzeigen:
* Öffnen Angebotsanfrage
* Ausführen *Aktion > Teilen > Text kopieren*
* Neues privates Browser-Fenster öffnen
* Link in Adressleiste einfügen

::: tip
In einem privaten Browser werden die Cookies nicht geladen und somit wird man nicht automatisch bei Odoo angemeldet.
:::

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

## Einkaufszeilen anzeigen

Damit Sie eine Übersicht der Lohnabrechnungszeilen erhalten, folgen Sie dem HowTo [Neue Ansicht mit Aktion hinzufügen](Entwicklung%20Aktionen.md#Neue%20Ansicht%20mit%20Aktion%20hinzufügen) und verwenden diese Werte:

Name der Aktion: `Einkaufszeilen`\
Objekt: `purchase.order.line`\
Ansichtsmodus: `tree,form,pivot`\
Menü: `Einkaufszeilen`\
Obermenü: `Einkauf/Produkte`\
Aktion: `ir.actions.act_window` `Einkaufszeilen`\
Nummernfolge: `90`

Das Ergebnis sollte so aussehen:

![](assets/Einkauf%20Einkaufszeilen.png)