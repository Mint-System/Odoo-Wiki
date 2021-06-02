---
tags:
- Howto
---

# Verkäufe
![icons_odoo_sale](assets/icons_odoo_sale.png)

Versenden Sie ausgefeilte Preisagebote mit Odoo Unterschrift und Online-Zahlung. 

* [Verkäufe Rahmenbestellungen](Verk%C3%A4ufe-Rahmenbestellungen.md)
* [Standard Verkaufs-Lieferbedienungen pro Partner](Verk%C3%A4ufe-Standard-Verkaufs-Lieferbedienungen-pro-Partner.md)

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

## Proforma-Rechnung anpassen

Mit Odoo [Studio](Studio.md) können sie einfach die Proforma-Rechnung mit neuen Feldern ergänzen oder spezifischen Bedürfnissen anpassen. Für komplizierte Fälle wie eine bedingungsbasierte Anzeige eines Feldes muss der Bericht im Entwicklermodus direkt bearbeitet werden. Dazu folgendes Bespiel einer Anpassung: 

```xml
<data>
  <xpath expr="/t/t/div/table/tbody/t[2]/tr/t[1]/td[1]/span" position="after">
    <t t-if="is_pro_forma">
      <t t-if="line.product_id.hs_code">
        <br/>
        <span>Zolltarifnummer: </span>
        <span t-field="line.product_id.hs_code"/>
      </t>
    </t>
  </xpath>
  <xpath expr="/t/t/div/p[2]" position="after">
    <t t-if="is_pro_forma">
        <span>
          <p>Der Unterzeichner erklärt, dass die in diesem Dokument aufgeführten Waren und Ursprungserzeugnisse der Schweiz sind und den Ursprungsregeln im Präferenzverkehr mit der EU entsprechen.<br/><br/></p>
          <p>Unterschrift: _______________________    Datum: _______________________<br/>                        Velo Manufaktur AG<br/></p>
        </span>
    </t>
  </xpath>
</data>
```

## Rabatte hinzufügen

Soll bei ein Produkt in der Rechnung mit einem Rabatt verkauft werden, so kann je Auftragszeile einen indivduellen Rabatt manuell eingefügt werden.

![](assets/Verk%C3%A4ufe%20Auftragszeilen%20mit%20Rabatt.png)

![](assets/Verk%C3%A4ufe%20Ansicht%20Rabatt%20in%20der%20Rechnung.png)

#FIXME 