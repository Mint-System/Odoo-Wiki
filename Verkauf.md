---
tags:
- HowTo
prev: ./
---
# Verkauf
![icons_odoo_sale](assets/icons_odoo_sale.png)

Versenden Sie ausgefeilte Preisangebote mit Odoo Unterschrift und Online-Zahlung. 

| Bereich                                       | Beschreibung                                         |
| --------------------------------------------- | ---------------------------------------------------- |
| [Verkauf Stammdaten](Verkauf%20Stammdaten.md) | Produkte, Preislisten und Varianten zentral pflegen. |
| [Verkauf Versand](Verkauf%20Versand.md)       | Versandmethoden und Logistik definieren.             |

| Erweiterung                                                                         | Beschreibung                                                         |
| ----------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [Default sales incoterm per partner](Default%20sales%20incoterm%20per%20partner.md) | Standardlieferbedingungen für Kunden.                                |
| [Sale Blanket Order](Sale%20Blanket%20Order.md)                                     | Rahmenverträge für Verkäufe erstellen.                               |
| [Sale Order Line Pos](Sale%20Order%20Line%20Pos.md)                                 | Verkaufsaufträge mit Positionsnummern.                               |
| [Sale Order Contact Person](Sale%20Order%20Contact%20Person.md)                     | Kontaktperson auf Verkaufsauftrag festlegen.                         |
| [Sale Order Line Description](Sale%20Order%20Line%20Description.md)                 | Nur Verkausbeschreibung im Feld Beschreibung übertragen.             |
| [Product Listprice Currency](Product%20Listprice%20Currency.md)                     | Listenpreise in verschiedenen Währungen für Preislisten-Formeln.     |
| [Sale Force Invoiced](Sale%20Force%20Invoiced.md)                                   | Markieren Sie den Verkaufsauftrag als abgerechnet.                   |
| [Sale Order Notes](Sale%20Order%20Notes.md)                                         | Verkaufsaufträge mit Notizfelder.                                    |
| [Sale Order Template Notes](Sale%20Order%20Template%20Notes.md)                     | Notizen auf Angebotsvorlage.                                         |
| [Sale Order Line Not Billable](Sale%20Order%20Line%20Not%20Billable.md)             | Produkt als nicht verrechbar festlegen und bei Abrechnunung filtern. |

## Verkauf Dashboard anzeigen

Öffnen Sie die App *Verkauf*. Hier sehen Sie alle offenen Angebote und Verkaufsaufträge.

## Produkte zum Verkauf deklarieren

Öffnen Sie ein Produkt via *Verkauf > Produkte > Produkte* und markieren Sie *Kann verkauft werden*. Neue Optionen erscheinen auf der Produktansicht.

![Produkte zum Verkauf deklarieren](assets/Produkte%20zum%20Verkauf%20deklarieren.gif)

## Angebot erstellen

Erstellen Sie mit dem Knopf *Anlegen* ein neues Angebot. Befüllen Sie die Kopfdaten gemäss folgender Tabelle:

| Bezeichnung         | Beschreibung                                         |
| ------------------- | ---------------------------------------------------- |
| Kunde               | Auswahl eines Kunden aus der Liste *Kontakte*        |
| Ablauf              | Zeitdauer für die Gültigkeit des Angebots            |
| Preisliste          | Auswahl der relevanten Preisliste                    |
| Zahlungsbedingungen | Der geforderte Zeitraum zur Begleichung der Rechnung |

Wählen Sie die Line-Items aus den Produkt-Stammdaten gemäss folgender Tabelle:

| Bezeichnung  | Beschreibung                                                               |
| ------------ | -------------------------------------------------------------------------- |
| Produkt      | Auswahl eines beliebigen Produktes mit dem Attribut *Kann verkauft werden* |
| Beschreibung | Text aus dem Feld *Verkaufs Beschreibung* der Produkt-Stammdaten           |
| Menge        | Angebotene Menge                                                           |
| UoM          | Masseinheit des Produktes                                                  |
| Preis pro ME | Preis pro Mengeneinheit (Masseinheit des Produktes)                        |

Für jedes Produkt zeigt der Bericht *Forecasted Report* eine detaillierte Übersicht bezüglich Verfügbarkeit. Zu- und Abgänge sowie potentielle Verkäufe werden berücksichtigt.

## Angebot senden

Mit dem Knopf *Per E-Mail Versenden* erstellt das System automatisch einen e-Mail Entwurf mit dem Angebot als PDF-Attachment. Die Textnachricht ist als Template hinterlegt, kann aber editiert werden.
Mit *Senden* wird die e-Mail gesendet und der Status ändert auf *Angebot Gesendet*.

## Auftrag bestätigen

Das Angebot wird über folgende alternativen Aktionen zum Verkaufsauftrag:
* Der Kunde bestätigt in der Kundenansicht (Kunden-Portal)
* Der Verkäufer bestätigt mit dem Knopf *Bestätigen*

Damit wechselt das Angebot in den Status *Verkaufsauftrag*.

Die Option Einstellungen > Verkauf > Angebote und Aufträge > Angebotsvorlagen ermöglicht das Einrichten eines automatischen Bestätigungs-eMail.

Mit der Aktion *Per E-Mail Versenden* wird automatisch ein e-Mail Entwurf für das Versenden der Auftragsbestätigung generiert.

## Lieferung anzeigen

Durch einen Verkaufsauftrag entsteht automatisch ein Lieferauftrag. Die Verbindung wird über einen entsprechenden *Smart Button* oben rechts sichtbar.

## Rabatte hinzufügen

Soll ein Produkt mit einem Rabatt verkauft werden, so kann dieser je Auftragszeile manuell eingefügt werden.

![](assets/Verkauf%20Auftragszeilen%20mit%20Rabatt.png)

Entsprechend wird der Rabatt auf der Rechnung ausgewiesen.

![](assets/Verkauf%20Ansicht%20Rabatt%20in%20der%20Rechnung.png)

## Upselling auflösen

Ist ein Verkaufsauftrag im Status *Zusatzverkaufschance* wurde bei der Erstellung der Rechnung neue Positionen hinzugefügt oder bei einer bestehenden eine zusätzliche Menge in Rechnung gestellt. Damit der Verkaufsauftrag als *Abgrechnet* angezeigt wird, geht man wie folgt vor. Öffnen Sie den Verkaufsauftrag und wählen Sie *Abbrechen*. Anschliessend klicken Sie auf *Setze auf Angebot*  und *Bestätigen*. Nun wurde die zusätzliche Position im Verkaufsauftrag registriert.

Bei Käufe aus dem Webshop kann der Status *Zusatzverkaufschance* entstehen, wenn die Versandkosten nicht aktuell sind. Öffnen Sie den Auftrag um die Versandkosten zu aktualisieren. Die Versandkosten werden in gelber Schrift angezeigt und unten beim Total kässt sich diese aktualisieren. Der Text der Versandkosten werden nun in schwarzer Farbe angezeigt und der Link *Aktualisierung der Versandkosten* ist nun grün. Klicken Sie danach oben links auf Speichern.

## Mindestbestellmenge festlegen

Für jedes Produkt in einer Preisliste kann eine Mindestbestellmenge definiert werden. Öffnen Sie *Verkauf > Produkte > Preislisten* und wählen Sie eine Preisliste aus. In der Spalte *Min. Bestellmenge* können Sie die Mindestbestellmenge eintragen.

## Für mehrere Verkaufsaufträge eine Rechnung generieren

Öffnen Sie *Verkauf*, gruppieren Sie die Aufträge nach Kunde und setzen Sie als Filter *Abzurechnen*. Öffnen Sie einen Kunden, markieren Sie die Einträge und wählen Sie *Aktion > Rechnung erzeugen*.

![](assets/Verkauf%20Rechnung%20erzeugen.png)

Im Dialog wählen Sie *Erzeuge und zeige Rechnung an*.

![](assets/Verkauf%20Rechnung%20anzeigen.png)

Nun wird für jeden Positionen in den Verkaufsaufträgen eine Rechnungsposition erstellt. Jede Rechnungsposition ist mit der entsprechenden Verkaufsauftragsposition verknüpft.

![](assets/Verkauf%20Auftragsposition%20verknüpft.png)

## Incoterms festlegen

Damit Sie die Lieferbedinungen auf einem Angebot festlegen können, müssen Sie Mitglied in der Grupp *Lieferbedingungen auf Angeboten und Rechnungen anzeigen* sein.

Ist diese Bedinung erfüllt können Sie ein Angebot öffnen *Verkauf > Angebot auswählen > Tab Weitere Informationen*. Im Feld *Lieferbedingungen* können Sie die Incoterm festlegen.

![](assets/Verkauf%20Lieferbedingungen.png)

## Liefer- und Rechnungsadresse festlegen

Damit Sie die Liefer- und Rechnungsadresse explizit festlegen können, muss die Option *Einstellungen > Verkauf > Angebote und Aufträge > Kundenadresse* aktiviert sein.

![](assets/Verkauf%20Rechnung-%20und%20Lieferadresse.png)

## Auftragszeilen anzeigen

Damit Sie eine Übersicht der Lohnabrechnungszeilen erhalten, folgen Sie dem HowTo [Neue Ansicht mit Aktion hinzufügen](Entwicklung%20Aktionen.md#Neue%20Ansicht%20mit%20Aktion%20hinzufügen) und verwenden diese Werte:

Name der Aktion: `Auftragszeilen`\
Objekt: `sale.order.line`\
Ansichtsmodus: `tree,form,pivot`\
Menü: `Auftragszeilen`\
Obermenü: `Verkauf/Aufträge`\
Aktion: `ir.actions.act_window` `Auftragszeilen`\
Nummernfolge: `2`

Das Ergebnis sollte so aussehen:

![](assets/Verkauf%20Auftragszeilen.png)

## Margen anzeigen

Mit der aktivierten Option *Einstellungen > Verkauf > Margen* sehen Sie für jede Auftragszeile die Marge.

![](assets/Verkauf%20Margen%20in%20Auftragszeilen.png)

Die Berechnung der Margen ist `Zwischensumme - Kosten * Menge`. Diese Inputs können einem Angebot geändert werden.