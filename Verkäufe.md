---
tags:
- HowTo
---
# Verkäufe
![icons_odoo_sale](assets/icons_odoo_sale.png)

Versenden Sie ausgefeilte Preisangebote mit Odoo Unterschrift und Online-Zahlung. 

| Bereich                                       | Beschreibung                                         |
| --------------------------------------------- | ---------------------------------------------------- |
| [Verkäufe Stammdaten](Verkäufe-Stammdaten.md) | Produkte, Preislisten und Varianten zentral pflegen. |

| Erweiterung                                                                 | Beschreibung                                                           |
| --------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [Blanket Sale Order](Blanket-Sale-Order.md)                                 | Rahmenverträge für Verkäufe erstellen.                                 |
| [Default sales incoterm per partner](Default-sales-incoterm-per-partner.md) | Standardlieferbedingungen für Kunden.                                  |
| [Sale Order Line Date](Sale-Order-Line-Date.md)                             | Lieferdatum pro Position.                                              |
| [Sale Blanket Order](Sale-Blanket-Order.md)                                 | Rahmenverträge für Verkäufe erstellen.                                 |
| [Sale Blanket Order Notes](Sale-Blanket-Order-Notes.md)                     | Rahmenaufträge mit Notizen, die in den Verkaufsauftrag kopiert werden. |
| [Sale Order Line Position](Sale-Order-Line-Position.md)                     | Verkaufsaufträge mit Positionsnummern.                                 |
| [Sale Order Default Commitment Date](Sale-Order-Default-Commitment-Date.md) | Standardlieferdatum festlegen.                                         |
| [Sale Order Contact Person](Sale-Order-Contact-Person.md)                   | Kontaktperson auf Verkaufsauftrag festlegen.                           |
| [Sale Order Line Description](Sale-Order-Line-Description.md)               | Nur Verkausbeschreibung im Feld Beschreibung übertragen.               |
| [Product Listprice Currency](Product-Listprice-Currency.md)                 | Listenpreise in verschiedenen Währungen für Preislisten-Formeln.       |

## Verkäufe Dashboard anzeigen

Öffnen sie die App *Verkäufe*. Hier sehen Sie alle offenen Angebote und Verkaufsaufträge.

## Angebot erstellen

Erstellen sie mit dem Knopf *Anlegen* ein neues Angebot. Befüllen sie die Kopfdaten gemäss folgender Tabelle:

| Bezeichnung       | Beschreibung                                                  |
| ----------------- | ------------------------------------------------------------- |
| Kunde             | Auswahl eines Kunden aus der Liste *Kontakte* |
| Ablauf            | Zeitdauer für die Gültigkeit des Angebots                      |
| Preisliste        | Auswahl der relevanten Preisliste                             |
| Zahlungsbedingungen | Der geforderte Zeitraum zur Begleichung der Rechnung                                                             |

Wählen sie die Line-Items aus den Produkt-Stammdaten gemäss folgender Tabelle:

| Bezeichnung  | Beschreibung                                                                  |
| ------------ | ----------------------------------------------------------------------------- |
| Produkt      | Auswahl eines beliebigen Produktes mit dem Attribut *Kann verkauft werden*   |
| Beschreibung | Text aus dem Feld *Verkaufs Beschreibung* der Produkt-Stammdaten              |
| Menge        | Angebotene Menge                                                                             |
| UoM          | Masseinheit des Produktes                                                                             |
| Preis pro ME | Preis pro Mengeneinheit (Masseinheit des Produktes)                                                                            |

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
[Best-Practice-Warenbedarf](Best-Practice-Warenbedarf.md)

## Lieferung anzeigen

Durch einen Verkaufsauftrag entsteht automatisch ein Lieferauftrag. Die Verbindung wird über einen entsprechenden *Smart Button* oben rechts sichtbar.

## Rabatte hinzufügen

Soll ein Produkt mit einem Rabatt verkauft werden, so kann dieser je Auftragszeile manuell eingefügt werden.

![](assets/Verk%C3%A4ufe%20Auftragszeilen%20mit%20Rabatt.png)

Entsprechend wird der Rabatt auf der Rechnung ausgewiesen.

![](assets/Verk%C3%A4ufe%20Ansicht%20Rabatt%20in%20der%20Rechnung.png)

## Upselling auflösen

Ist ein Verkaufsauftrag im Status *Zusatzverkaufschance* wurde bei der Erstellung der Rechnung neue Positionen hinzugefügt oder bei einer bestehenden eine zusätzliche Menge in Rechnung gestellt. Damit der Verkaufsauftrag als *Abgrechnet* angezeigt wird, geht man wie folgt vor. Öffnen sie den Verkaufsauftrag und wählen sie *Abbrechen*. Anschliessend klicken sie auf *Setze auf Angebot*  und *Bestätigen*. Nun wurde die zusätzliche Position im Verkaufsauftrag registriert.

Bei Käufe aus dem Webshop kann der Status *Zusatzverkaufschance* entstehen, wenn die Versandkosten nicht aktuell sind. Öffnen sie den Auftrag um die Versandkosten zu aktualisieren. Die Versandkosten werden in gelber Schrift angezeigt und unten beim Total kässt sich diese aktualisieren. Der Text der Versandkosten werden nun in schwarzer Farbe angezeigt und der Link *Aktualisierung der Versandkosten* ist nun grün. Klicken sie danach oben links auf Speichern.

## Mindestbestellmenge festlegen

Für jedes Produkt in einer Preisliste kann eine Mindestbestellmenge definiert werden. Öffnen sie *Verkauf > Produkte > Preislisten* und wählen sie eine Preisliste aus. In der Spalte *Min. Bestellmenge* können sie die Mindestbestellmenge eintragen.
