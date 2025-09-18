---
title: Produkt
description: Produkte und Preise.
kind: howto
prev: ./
partner: Odoo S.A.
---
# Produkt
![](attachments/icons_odoo_product.png)

{{ $frontmatter.description }}

## Bereiche

| Bereich                                  | Beschreibung                                            |
| ---------------------------------------- | ------------------------------------------------------- |
| [Produkt Aktionen](Product%20Actions.md) | Arbeitsflüsse in der Produkteverwaltung automatisieren. |

## Erweiterungen

| Erweiterung                                                                                 | Beschreibung                                                                |
| ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| [Packaging UOM](Packaging%20UOM.md)                                                         | Mengeneinheit für Produktverpackung festlegen.                              |
| [Product Barcode Generator](Product%20Barcode%20Generator.md)                               | Autogenerate EAN13 product barcodes.                                        |
| [Product Country of Origin](Product%20Country%20of%20Origin.md)                             | Bestimmen Sie für jedes Produkt ein Herkunftsland                           |
| [Product Dimension Attributes](Product%20Dimension%20Attributes.md)                         | Product dimension attributes.                                               |
| [Product End Of Life Dates](Product%20End%20Of%20Life%20Dates.md)                           | Datum für Ende Support, Verkauf und Bestand auf Produkt festlegen.          |
| [Product Feeder ID](Product%20Feeder%20ID.md)                                               | Feeder-Textfeld auf dem Produkt.                                            |
| [Product Information Management](Product%20Information%20Management.md)                     | Verwalten Sie Produktinformationen ganz flexibel.                           |
| [Product Listprice Currency](Product%20Listprice%20Currency.md)                             | Listenpreise in verschiedenen Währungen für Preislisten-Formeln.            |
| [Product Material Attributes](Product%20Material%20Attributes.md)                           | Product material attributes.                                                |
| [Product Name Sequence](Product%20Name%20Sequence.md)                                       | Generate product names based on a sequence.                                 |
| [Product Packaging Parent](Product%20Packaging%20Parent.md)                                 | Übergeordnete Verpackung für Produktverpackung definieren.                  |
| [Product Pricelist Fixed Discount](Product%20Pricelist%20Fixed%20Discount.md)               | Festpreise in Preisliste mit Rabatt.                                        |
| [Product Sequence](Product%20Sequence.md)                                                   | Produkreferenzen anhand einer Sequenz generieren lassen.                    |
| [Product Set](Product%20Set.md)                                                             | Produkte-Sets definieren.                                                   |
| [Product State](Product%20State.md)                                                         | Lebenszyklus von Produkten festlegen.                                       |
| [Product Supplierinfo for Customer Sale](Product%20Supplierinfo%20for%20Customer%20Sale.md) | Produktspezifische Informationen für ausgewählte Kunden erfassen.           |
| [Product Supplierinfo for Customers](Product%20Supplierinfo%20for%20Customers.md)           | Produktspezifische Informationen für ausgewählte Kunden erfassen.           |
| [Product Type Description](Product%20Type%20Description.md)                                 | Zu jedem Produkt ein Beschreibungsfeld.                                     |
| [Product Usability](Product%20Usability.md)                                                 | Ansichten Produktverwaltung.                                                |
| [Product Variant Description](Product%20Variant%20Description.md)                           | Verkaufs-, Einkaufs- und Lieferbeschreibung auf Produktvarianten festlegen. |
| [Secondary Product Type Description](Secondary%20Product%20Type%20Description.md)           | Zu jedem Produkt ein zweites Beschreibungsfeld.                             |

## Verwendung

### Produkt erfassen

Produkte sind Dreh- und Angelpunkt im Wertschöpfungsprozess des Unternehmens. Die korrekte Erfassung der Produkte ist entscheidend. Navigieren Sie nach *Verkauf > Produkte > Produkte* und wählen Sie *Neu*. Füllen Sie wichtigsten Felder aus:

* **Produktname**: Anzeigename des Produkts
* **Optionen**: Bestimmen Sie wie das Produkt verwendet werden kann
* **Logo**: Laden Sie ein passendes Bild hoch
* **Produktart**: Wählen Sie hier die Art des Produkts
* **Fakturierungsregel**: Bestimmen Sie zu welchem Zeitpunkt das Produkt verrechnet werden soll
* **Verkaufspreis**: Erfassen Sie einen Standardverkaufspreis
* **Steuern (Verkauf)**: Wählen Sie hier die Standardsteuern für den Verkauf
* **Produktkategorie**: Erstellen Sie nach Bedarf Produktkategorien und weisen Sie das Produkt der entsprechenden Kategorie zu.
* **Interne Referenz**: Die interne Referenz ist ein eindeutiger Code bestimmt von ihrem Unternehmen

Wenn Sie die Buchhaltung aktiv haben, konfigurieren Sie zusätzlich diese Felder im Tab *Finanzen:

* **Erlöskonto**: Standard-Erlöskonto für Rechnungszeile
* **Aufwandskonto**: Standard-Aufwandskonto für Rechnungszeile


## Berechtigungen

### Produkte nur anzeigen

Wenn Sie bestimmten Benutzer nur die Anzeige von Produkte, aber nicht die Erstellung erlaube nöchten. Müssen Sie sicherstellen, dass diese in er richtigen Anwendungs-Gruppe Mitglied sind. Navigieren Sie nach *Einstellungen > Technisch > Modelle* und zeigen Sie den Eintrag *product.template* an. Im Tab *Zugriffsrechte* werden die Anwendungsgruppen und deren Zugriffe aufgelistet. Fügen Sie die ausgewählten Benutzer einer Gruppe mit Leseberechtigungen hinzu.
