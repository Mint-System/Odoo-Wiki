---
tags:
- HowTo
prev: ./
---
# Verkauf
![icons_odoo_sale](assets/icons_odoo_sale.png)

Versenden Sie ausgefeilte Preisangebote mit Odoo Unterschrift und Online-Zahlung. 

| Bereich                                     | Beschreibung                                         |
| ------------------------------------------- | ---------------------------------------------------- |
| [Verkauf Stammdaten](Verkauf%20Stammdaten.md) | Produkte, Preislisten und Varianten zentral pflegen. |

| Erweiterung                                                                         | Beschreibung                                                           |
| ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [Blanket Sale Order](Blanket%20Sale%20Order.md)                                     | Rahmenverträge für Verkäufe erstellen.                                 |
| [Default sales incoterm per partner](Default%20sales%20incoterm%20per%20partner.md) | Standardlieferbedingungen für Kunden.                                  |
| [Sale Order Line Date](Sale%20Order%20Line%20Date.md)                               | Lieferdatum pro Position.                                              |
| [Sale Blanket Order](Sale%20Blanket%20Order.md)                                     | Rahmenverträge für Verkäufe erstellen.                                 |
| [Sale Blanket Order Notes](Sale%20Blanket%20Order%20Notes.md)                       | Rahmenaufträge mit Notizen, die in den Verkaufsauftrag kopiert werden. |
| [Sale Order Line Position](Sale%20Order%20Line%20Position.md)                       | Verkaufsaufträge mit Positionsnummern.                                 |
| [Sale Order Default Commitment Date](Sale%20Order%20Default%20Commitment%20Date.md) | Standardlieferdatum festlegen.                                         |
| [Sale Order Contact Person](Sale%20Order%20Contact%20Person.md)                     | Kontaktperson auf Verkaufsauftrag festlegen.                           |
| [Sale Order Line Description](Sale%20Order%20Line%20Description.md)                 | Nur Verkausbeschreibung im Feld Beschreibung übertragen.               |
| [Product Listprice Currency](Product%20Listprice%20Currency.md)                     | Listenpreise in verschiedenen Währungen für Preislisten-Formeln.       |
| [Sale Order Delivery Note](Sale%20Order%20Delivery%20Note.md)                       | Notiz auf Verkaufsauftrag für Lieferung hinzufügen.                    |
| [Sale Blanket Order Contact Person](Sale%20Blanket%20Order%20Contact%20Person.md)   | Kontaktperson auf Rahmenauftrag festlegen.                             |
| [Sale Blanket Order Stock Terms](Sale%20Blanket%20Order%20Stock%20Terms.md)         | Legen sie Lieferbedinungen auf dem Rahmenauftrag fest.                 |
| [Sale Blanket Order Send](Sale%20Blanket%20Order%20Send.md)                         | Workflow mit Rahmenauftrag per E-Mail.                                 |
| [Sale Stock Picking Note](Sale%20Stock%20Picking%20Note.md)                         | Interne und externe Notiz für Lieferungen.                             |
| [Sale Order Line Default Packaging](Sale%20Order%20Line%20Default%20Packaging.md)   | Standardverpackung auf Position setzen.                                |
| [Sale Order Default Carrier](Sale%20Order%20Default%20Carrier.md)                   |                                                                        |

## Verkauf Dashboard anzeigen

Öffnen sie die App *Verkauf*. Hier sehen Sie alle offenen Angebote und Verkaufsaufträge.

## Angebot erstellen

Erstellen sie mit dem Knopf *Anlegen* ein neues Angebot. Befüllen sie die Kopfdaten gemäss folgender Tabelle:

| Bezeichnung         | Beschreibung                                         |
| ------------------- | ---------------------------------------------------- |
| Kunde               | Auswahl eines Kunden aus der Liste *Kontakte*        |
| Ablauf              | Zeitdauer für die Gültigkeit des Angebots            |
| Preisliste          | Auswahl der relevanten Preisliste                    |
| Zahlungsbedingungen | Der geforderte Zeitraum zur Begleichung der Rechnung |

Wählen sie die Line-Items aus den Produkt-Stammdaten gemäss folgender Tabelle:

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

## Kundenansicht

Das versendete Angebots-eMail enthält einen Hyperlink auf die Kundenansicht in Form einer Website (Kunden-Portal). Auf dieser Seite findet der Kunde alle Informationen zum Angebot inklusiv der Möglichkeit des Downloads von PDF-Dokumenten.

## Auftrag bestätigen

Das Angebot wird über folgende alternativen Aktionen zum Verkaufsauftrag:
* Der Kunde bestätigt in der Kundenansicht (Kunden-Portal)
* Der Verkäufer bestätigt mit dem Knopf *Bestätigen*

Damit wechselt das Angebot in den Status *Verkaufsauftrag*.

Die Option Einstellungen > Verkauf > Angebote und Aufträge > Angebotsvorlagen ermöglicht das Einrichten eines automatischen Bestätigungs-eMail.

Mit der Aktion *Per E-Mail Versenden* wird automatisch ein e-Mail Entwurf für das Versenden der Auftragsbestätigung generiert.

## Warenbedarf anzeigen

Durch einen Verkaufsauftrag entsteht Warenbedarf der (falls nicht im Lager vorhanden) automatisch zu Einkaufs- oder Fertigungsvorschlägen führt. Folgende Beschreibung zeigt die Systematik:
[Best Practice Warenbedarf](Best%20Practice%20Warenbedarf.md)

## Lieferung anzeigen

Durch einen Verkaufsauftrag entsteht automatisch ein Lieferauftrag. Die Verbindung wird über einen entsprechenden *Smart Button* oben rechts sichtbar.

## Rabatte hinzufügen

Soll ein Produkt mit einem Rabatt verkauft werden, so kann dieser je Auftragszeile manuell eingefügt werden.

![](assets/Verkauf%20Auftragszeilen%20mit%20Rabatt.png)

Entsprechend wird der Rabatt auf der Rechnung ausgewiesen.

![](assets/Verkauf%20Ansicht%20Rabatt%20in%20der%20Rechnung.png)

## Upselling auflösen

Ist ein Verkaufsauftrag im Status *Zusatzverkaufschance* wurde bei der Erstellung der Rechnung neue Positionen hinzugefügt oder bei einer bestehenden eine zusätzliche Menge in Rechnung gestellt. Damit der Verkaufsauftrag als *Abgrechnet* angezeigt wird, geht man wie folgt vor. Öffnen sie den Verkaufsauftrag und wählen sie *Abbrechen*. Anschliessend klicken sie auf *Setze auf Angebot*  und *Bestätigen*. Nun wurde die zusätzliche Position im Verkaufsauftrag registriert.

Bei Käufe aus dem Webshop kann der Status *Zusatzverkaufschance* entstehen, wenn die Versandkosten nicht aktuell sind. Öffnen sie den Auftrag um die Versandkosten zu aktualisieren. Die Versandkosten werden in gelber Schrift angezeigt und unten beim Total kässt sich diese aktualisieren. Der Text der Versandkosten werden nun in schwarzer Farbe angezeigt und der Link *Aktualisierung der Versandkosten* ist nun grün. Klicken sie danach oben links auf Speichern.

## Mindestbestellmenge festlegen

Für jedes Produkt in einer Preisliste kann eine Mindestbestellmenge definiert werden. Öffnen sie *Verkauf > Produkte > Preislisten* und wählen sie eine Preisliste aus. In der Spalte *Min. Bestellmenge* können sie die Mindestbestellmenge eintragen.

## Für mehrere Verkaufsaufträge eine Rechnung generieren

Öffnen sie *Verkauf*, gruppieren sie die Aufträge nach Kunde und setzen sie als Filter *Abzurechnen*. Öffnen sie einen Kunden, markieren sie die Einträge und wählen sie *Aktion > Rechnung erzeugen*.

![](assets/Verkauf%20Rechnung%20erzeugen.png)

Im Dialog wählen sie *Erzeuge und zeige Rechnung an*.

![](assets/Verkauf%20Rechnung%20anzeigen.png)

Nun wird für jeden Positionen in den Verkaufsaufträgen eine Rechnungsposition erstellt. Jede Rechnungsposition ist mit der entsprechenden Verkaufsauftragsposition verknüpft.

![](assets/Verkauf%20Auftragsposition%20verknüpft.png)

## Incoterms festlegen

Damit sie die Lieferbedinungen auf einem Angebot festlegen können, müssen sie Mitglied in der Grupp *Lieferbedingungen auf Angeboten und Rechnungen anzeigen* sein.

Ist diese Bedinung erfüllt können sie ein Angebot öffnen *Verkauf > Angebot auswählen > Tab Weitere Informationen*. Im Feld *Lieferbedingungen* können sie die Incoterm festlegen.

![](assets/Verkauf%20Lieferbedingungen.png)

## Liefer- und Rechnungsadresse festlegen

Damit sie die Liefer- und Rechnungsadresse explizit festlegen können, muss die Option *Einstellungen > Verkauf > Angebote und Aufträge > Kundenadresse* aktiviert sein.

![](assets/Verkauf%20Rechnung-%20und%20Lieferadresse.png)

## Auftragszeilen anzeigen

Damit sie eine Übersicht der Lohnabrechnungszeilen erhalten, folgen sie dem HowTo [Neue Ansicht mit Aktion hinzufügen](Entwicklung%20Aktionen.md#Neue%20Ansicht%20mit%20Aktion%20hinzufügen) und verwenden diese Werte:

Name der Aktion: `Auftragszeilen`\
Objekt: `sale.order.line`\
Menü: `Auftragszeilen`\
Obermenü: `Verkauf/Aufträge`\
Aktion: `ir.actions.act_window` `Auftragszeilen`\
Nummernfolge: `2`

Das Ergebnis sollte so aussehen:

![](assets/Verkauf%20Auftragszeilen.png)