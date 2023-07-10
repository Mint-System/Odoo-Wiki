---
title: Verkauf
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- HowTo
prev: ./
---
# Verkauf
![icons_odoo_sale](attachments/icons_odoo_sale.png)

Versenden Sie ausgefeilte Preisangebote mit Odoo Unterschrift und Online-Zahlung. 

Website: <https://www.odoo.com/de_DE/app/sales>

## Bereiche

| Bereich                                   | Beschreibung                                         |
| ----------------------------------------- | ---------------------------------------------------- |
| [Verkauf Abrechnung](Sale%20Invoicing.md) | Verkaufsaufträge unkompliziert abrechnen.            |
| [Verkauf Aktionen](Sale%20Actions.md)     | Arbeitsflüsse in Verkauf automatisieren.             |
| [Verkauf Berichte](Sale%20Reports.md)     | Verkaufsdaten immer aktuell.                         |
| [Verkauf Lager](Sale%20Stock.md)          | Lieferungen aus Verkaufsaufträge erstellen.          |
| [Verkauf Preise](Sale%20Price.md)         | Produkte, Preislisten und Varianten zentral pflegen. |
| [Verkauf Projekt](Sale%20Project.md)      | Dienstleistungen mit Verkauf und Projekt abwickeln.  |
| [Verkauf True](Sale%20Loyalty.md)         |  Kundentrue mit Rabatten, Coupons und Geschenkkarten belohnen.                                                     |

## Erweiterungen

| Erweiterung                                                                                       | Beschreibung                                                                  |
| ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [Contract Sale Generation](Contract%20Sale%20Generation.md)                                       | Aus wiederholenden Verträge Verkaufsangebote generieren.                      |
| [Packaging UOM](Packaging%20UOM.md)                                                               | Mengeneinheit für Produktverpackung festlegen.                                |
| [Product Listprice Currency](Product%20Listprice%20Currency.md)                                   | Listenpreise in verschiedenen Währungen für Preislisten-Formeln.              |
| [Product Supplierinfo for Customer Sale](Product%20Supplierinfo%20for%20Customer%20Sale.md)       | Produktspezifische Informationen für ausgewählte Kunden erfassen.             |
| [Sale Blanket Order Comment](Sale%20Blanket%20Order%20Comment.md)                                 | Kommentar auf Rahmenauftrag.                                                  |
| [Sale Force Invoiced](Sale%20Force%20Invoiced.md)                                                 | Markieren Sie den Verkaufsauftrag als abgerechnet.                            |
| [Sale Order Archive](Sale%20Order%20Archive.md)                                                   | Abgebrochene Verkaufsaufträge archivieren.                                    |
| [Sale Order Check Price](Sale%20Order%20Check%20Price.md)                                         | Preis vor Bestätigung des Angebots prüfen.                                    |
| [Sale Order Comment](Sale%20Order%20Comment.md)                                                   | Kommentar auf Verkaufsauftrag.                                                |
| [Sale Order Contact Person](Sale%20Order%20Contact%20Person.md)                                   | Kontaktperson auf Verkaufsauftrag festlegen.                                  |
| [Sale Order Line Description Name](Sale%20Order%20Line%20Description%20Name.md)                   | Produktname in Beschreibung ohne interne Referenz.                            |
| [Sale Order Line Description](Sale%20Order%20Line%20Description.md)                               | Nur Verkausbeschreibung im Feld Beschreibung übertragen.                      |
| [Sale Order Line Name Get](Sale%20Order%20Line%20Name%20Get.md)                                   | Produktname als Anzeigename für Verkaufspositionen.                           |
| [Sale Order Line Not Billable](Sale%20Order%20Line%20Not%20Billable.md)                           | Produkt als nicht verrechbar festlegen und bei Abrechnunung filtern.          |
| [Sale Order Line Pos](Sale%20Order%20Line%20Pos.md)                                               | Verkaufsaufträge mit Positionsnummern.                                        |
| [Sale Order Line Position](Sale%20Order%20Line%20Position.md)                                     | Verkaufsaufträge mit Positionsnummern.                                        |
| [Sale Order Line Pricelist Fixed Discount](Sale%20Order%20Line%20Pricelist%20Fixed%20Discount.md) | Auftragszeilen mit Rabaut aus Preisliste mit Fixpreis.                        |
| [Sale Order Line Purchase Margin](Sale%20Order%20Line%20Purchase%20Margin.md)                     | Kalkulation der Marge basierend auf verlinkter Bestellung.                    |
| [Sale Order MRP Production Cancel](Sale%20Order%20MRP%20Production%20Cancel.md)                   | Verlinkter Fertigungsauftrag bei Abbruch Verkaufsauftrag ebenfalls abbrechen. |
| [Sale Order Multi Pricelist](Sale%20Order%20Multi%20Pricelist.md)                                 | Partner-Preisliste anhand Lieferdatum filtern.                                |
| [Sale Order Notes](Sale%20Order%20Notes.md)                                                       | Verkaufsaufträge mit Notizfelder.                                             |
| [Sale Order Project Key](Sale%20Order%20Project%20Key.md)                                         | Angebotsname von verlinkter Projektnummer übernehmen.                         |
| [Sale Order Sale Partner](Sale%20Order%20Sale%20Partner.md)                                       | Verkaufsadresse auf Verkaufsauftrag festlegen.                                |
| [Sale Order Template Notes](Sale%20Order%20Template%20Notes.md)                                   | Notizen auf Angebotsvorlage.                                                  |
| [Sale Partner Incoterm](Sale%20Partner%20Incoterm.md)                                             | Standardlieferbedingungen für Kunden.                                         |
| [Sale Product Set Layout](Sale%20Product%20Set%20Layout.md)                                       | Produktset mit Notizen und Abschnitten.                                       |
| [Sale Product Set](Sale%20Product%20Set.md)                                                       | Produktsets definieren und einfach hinzufügen.                                |
| [Sale Timesheet Total Validated](Sale%20Timesheet%20Total%20Validated.md)                         | Nur bestätige Zeiterfassungs-Einträge in Verkaufsauftrag anzeigen.            |

## Produkte

### Standard-Steuern für Verkauf auf Produkt festlegen

Die Standard-Steuer für ein bestimmtes Produkt wird in den Produkt-Stammdaten unter *Allgemeine Informationen > Steuern (Verkauf)* definiert.

Unterschiedliche Steuern der einzelnen Line-Items werden im Formular und im Bericht gruppiert dargestellt. Die Zuordnung erfolgt über die *Steuergruppe* gemäss dem Feld *Steuergruppe* im Tab *Erweiterte Optionen*.

![](attachments/Verkauf%20Steuer-Gruppen.png)

## Aufträge

### Verkauf Dashboard anzeigen

Öffnen Sie die App *Verkauf*. Hier sehen Sie alle offenen Angebote und Verkaufsaufträge.

### Angebot erstellen

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

### Angebot senden

Mit dem Knopf *Per E-Mail Versenden* erstellt das System automatisch einen e-Mail Entwurf mit dem Angebot als PDF-Attachment. Die Textnachricht ist als Template hinterlegt, kann aber editiert werden.
Mit *Senden* wird die e-Mail gesendet und der Status ändert auf *Angebot Gesendet*.

### Angebot bestätigen

Das Angebot wird über folgende alternativen Aktionen zum Verkaufsauftrag:
* Der Kunde bestätigt in der Kundenansicht (Kunden-Portal)
* Der Verkäufer bestätigt mit dem Knopf *Bestätigen*

Damit wechselt das Angebot in den Status *Verkaufsauftrag*.

Die Option Einstellungen > Verkauf > Angebote und Aufträge > Angebotsvorlagen ermöglicht das Einrichten eines automatischen Bestätigungs-eMail.

Mit der Aktion *Per E-Mail Versenden* wird automatisch ein e-Mail Entwurf für das Versenden der Auftragsbestätigung generiert.

### Verkaufsauftrag abbrechen

Klicken Sie im Verkaufsauftrag auf *Abbrechen* um den Auftrag in den Status *Abgebrochen* zu setzen. Damit gilt der Verkaufsauftrag als ungültig.

### Verkaufsauftrag zurücksetzen

Ist der Verkaufsauftrag im Status *Abgebrochen* können Sie ihn mit *Setze auf Angebot* in den Status *Angebot* zurücksetzen. Anschliessend können Sie das [Angebot bestätigen](#Angebot%20bestätigen) und haben wieder einen gültigen Verkaufsauftrag.

## Auftragszeilen

### Rabatte hinzufügen

Soll ein Produkt mit einem Rabatt verkauft werden, so kann dieser je Auftragszeile manuell eingefügt werden.

![](attachments/Verkauf%20Auftragszeilen%20mit%20Rabatt.png)

Entsprechend wird der Rabatt auf der Rechnung ausgewiesen.

![](attachments/Verkauf%20Ansicht%20Rabatt%20in%20der%20Rechnung.png)

### Mindestbestellmenge festlegen

Für jedes Produkt in einer Preisliste kann eine Mindestbestellmenge definiert werden. Öffnen Sie *Verkauf > Produkte > Preislisten* und wählen Sie eine Preisliste aus. In der Spalte *Min. Bestellmenge* können Sie die Mindestbestellmenge eintragen.

### Margen anzeigen

Mit der aktivierten Option *Einstellungen > Verkauf > Margen* sehen Sie für jede Auftragszeile die Marge.

![](attachments/Verkauf%20Margen%20in%20Auftragszeilen.png)

Die Berechnung der Margen ist `Zwischensumme - Kosten * Menge`. Diese Inputs können einem Angebot geändert werden.

## Auswertung

### Auftragszeilen anzeigen

Damit Sie eine Übersicht der Auftragszeilen erhalten, folgen Sie dem HowTo [Neue Ansicht mit Aktion hinzufügen](Development%20Actions.md#Neue%20Ansicht%20mit%20Aktion%20hinzufügen) und verwenden diese Werte:

Name der Aktion: `Auftragszeilen`\
Objekt: `sale.order.line`\
Ansichtsmodus: `tree,form,pivot`\
Menü: `Auftragszeilen`\
Obermenü: `Verkauf/Aufträge`\
Aktion: `ir.actions.act_window` `Auftragszeilen`\
Nummernfolge: `2`

Das Ergebnis sollte so aussehen:

![](attachments/Verkauf%20Auftragszeilen.png)

## Kontakte

### Rechnungs- und Lieferadresse aktivieren

Für Angebote können Sie eine separate Rechnungs- und Lieferadresse festlegen. Aktivieren Sie die Option *Einstellungen > Verkauf > Angebote und Aufträge > Kundenadresse*. Anschliessend können Sie die Adresse auswählen.

![](attachments/Verkauf%20Rechnungs-%20und%20Lieferadresse.png)

### Kunde anhand Adresstyp auswählen

Wenn Sie eine Rechnungs- oder Lieferadresse mit gleichen Anzeigename wie der Hauptkontakt gespeichert haben, können diese im Feld *Kunde* nicht unterschieden werden. Um sicherzustellen, dass die korrekte Adresse gewählt wurde, können Sie die [Rechnungsadresse in Anzeigenamen einblenden](Partner.md#Rechnungsadresse%20in%20Anzeigenamen%20einblenden) oder über die erweiterte Suche anzeigen:

![](attachments/Verkauf%20Kontakt-Suche.png)

::: warning
Die Verfügbarkeit des Felds *Adresstyp* in der Listenauswahl muss mit einem Snippet sichergestellt werden.
:::