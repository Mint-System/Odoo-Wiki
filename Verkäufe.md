---
tags:
- HowTo
---

# Verkäufe
![icons_odoo_sale](assets/icons_odoo_sale.png)

Versenden Sie ausgefeilte Preisagebote mit Odoo Unterschrift und Online-Zahlung. 

* [Blanket Sale Order](Blanket-Sale-Order.md)
* [Standard Verkaufs-Lieferbedienungen pro Partner](Default-sales-incoterm-per-partner.md)
* [Sale-Order-Line-Date](Sale-Order-Line-Date.md)

## Verkäufe Dashboard anzeigen

Öffnen sie die App *Verkäufe*. Hier sehen Sie alle offenen Angebote und Verkaufsaufträge.

## Angebot erstellen

Erstellen sie mit dem Knopf *Anlegen* ein neues Angebot.

| Bezeichnung       | Beschreibung                                                  |
| ----------------- | ------------------------------------------------------------- |
| Kunde             | Es erscheinen alle Einträge der Liste "Kontakte" zur Auswahl. |
| Ablauf            | Frist wie lange das Angebot gültig ist.                       |
| Preisliste        | Auswahl der relevanten Preisliste                             |
| Zahlungsbediungen | -                                                             |

Befüllen sie die Kopfdaten gemäss folgender Tabelle:
![Verkäufe Felder Kopfdaten](assets/Verkäufe%20Felder%20Kopfdaten.svg)

Wählen sie die Line-Items aus den Produkt-Stammdaten gemäss folgender Tabelle:

| Beziechnung  | Beschreibung                                                                  |
| ------------ | ----------------------------------------------------------------------------- |
| Produkt      | Auswahl eines beliebigen Produktes mit dem Attribut "Kann verkauft werden".   |
| Beschreibung | Text aus dem Feld "Verkaufs Beschreibung" der Produkt-Stammdaten              |
| Route        | Der erwartete Lieferzeitpunkt. Dieses Datum wird für die Prognosen verwedent. |
| Menge        | -                                                                             |
| UoM          | -                                                                             |
| Preis pro ME | -                                                                             |
| Vorlaufzeit  | -                                                                             |
| Steuern      | -                                                                              |

![Verkäufe Felder Auftragszeilen](assets/Verkäufe%20Felder%20Auftragszeilen.svg)

Für jedes Produkt zeigt der Bericht *Forecasted Report* eine detaillierte Übersicht bezüglich Verfügbarkeit. Zu- und Abgänge sowie potentielle Verkäufe werden berücksichtigt.

## Angebot senden

Mit dem Knopf *Per E-Mail Versenden* erstellt das System automatisch einen e-Mail Entwurf mit dem Angebot als PDF-Attachment. Die Textnachricht ist als Template hinterlegt, kann aber editiert werden.
Mit *Senden* wird die e-Mail gesendet und der Status ändert auf *Angebot Gesendet*.

## Auftrag bestätigen

Das Angebot wird über folgende alternativen Aktionen zum Verkaufsauftrag:
* Der Kunde bestätigt im Kunden-Portal
* Der Verkäufer bestätigt mit dem Knopf *Bestätigen*
Damit wechselt das Angebot in den Status *Verkaufsauftrag*.
Mit der Aktion *Per E-Mail Versenden* wird automatisch ein e-Mail Entwurf für das Versenden der Auftragsbestätigung generiert.

## Warenbedarf anzeigen

Durch einen Verkaufsauftrag entsteht Warenbedarf der (falls nicht im Lager vorhanden) automatisch zu Einkaufs- oder Fertigungsvorschlägen führt. Folgende Beschreibung zeigt die Systematik:
[Best-Practice-Warenbedarf](Best-Practice-Warenbedarf.md)

## Lieferung anzeigen

Durch einen Verkaufsauftrag entsteht automatisch ein Lieferauftrag. Die Verbindung wird über einen entsprechenden *Smart Button* oben rechts sichtbar.

## Rabatte hinzufügen

Soll bei ein Produkt in der Rechnung mit einem Rabatt verkauft werden, so kann je Auftragszeile einen indivduellen Rabatt manuell eingefügt werden.

![](assets/Verk%C3%A4ufe%20Auftragszeilen%20mit%20Rabatt.png)

Entsprechend wird der Rabatt auf der Rechnung augeweisen.

![](assets/Verk%C3%A4ufe%20Ansicht%20Rabatt%20in%20der%20Rechnung.png)

## Upselling auflösen

Ist ein Verkaufsauftrag im Status *Zusatzverkaufschance* wurde bei der Erstellung der Rechnung neue Positionen hinzugefügt oder bei einer bestehenden eine zusätzliche Menge in Rechnung gestellt. Damit der Verkaufsauftrag als *Abgrechnet* angezeigt wird, geht man wie folgt vor. Öffnen sie den Verkaufsauftrag und wählen sie *Abbrechen*. Anschliessend klicken sie auf *Setze auf Angebot*  und *Bestätigen*. Nun wurde die zusätzliche Position im Verkaufsauftrag registriert.

