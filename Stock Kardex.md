---
title: Stock Kardex
description: Kommunikation mit externem Kardex-Produktionssystem.
kind: howto
partner: Mint-System
prev: ./stock
---

# Stock Kardex
![icon_oms_box](../attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `stock_kardex`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Connector/tree/18.0/stock_kardex>

## Beschreibung

Das Modul ermöglicht es, mit einem Kardex-Produktionssystem über eine Schnittstellen-Datenbank (im Folgenden *SDB*) zu kommunizieren. Vorgänge, die von Odoo im Zusammenhang mit Verkaufs-, Einkaufs- und Fertigungsaufträgen generiert werdenn (*Pickings*), schreiben einen entsprechenden Auftrag (Im Folgenden *Kardex-Auftrag*) in die SDB:

* Pickings im Zusammenhang mit Einkaufsaufträgeren (*store*) generieren einen Kardex-Auftrag "nehme aus Kardex" in der SDB.
* Pickings im Zusammenhang mit Verkaufs- und Fertigungsaufträgen (*pick*) generieren einen Kardex-Auftrag "lagere in Kardex ein" in der SDB.

Nach Abarbeitung des Kardex-Auftrags in Kardex werden in eine Journal-Tabelle die Daten des Auftrags geschrieben (Menge, Seriennummern usw.). Diese Daten nutzt Odoo, um die Original-Pickings mit der Auftragsbearbeitung zu synchronisieren. Dadurch wird gewährleistet,  dass Bestände eines Produkts in Odoo und Kardex übereinstimmen.

## Voraussetzung

Das Modul benötigt die Installation folgender anderen Module:

* *Base External Mssql*
* *Base Kardex*
* *Product Kardex*

## Realisierung

### Odoo-Vorgänge Kardex-Aufträge

Damit die *automatische* Auslösung eines Kardex-Auftrags erfolgen kann, müssen Kardex-Aufträge und Odoo-Vorgänge miteinander verknüpft werden.

Folgende **Typen eines Kardex-Auftrags** (*Kardex Picking Type*) werden unterschieden:

* *Kardex Entry*: Dieser Auftrag enthält eine Einlagerung eines bestimmten Produkts in Kardex. In der SDB sind diese Aufträge mit der **Richtung 3** gekennzeichnet.
* *Kardex Store*: Dieser Auftrag enthält ebenfalls eine Einlagerung, allerdings nur für Einlagerungen als Folge eines Einkaufs.
*  *Kardex Get*: Dieser Auftrag beschreibt eine Entnahme eines Produkts aus Kardex infolge eines Verkaufsauftrags. In der SDB sind solche Aufträge mit der **Richtung 4** gekennzeichnet.
* *Kardex Prod*: Dieser Auftrag beschreibt ebenfalls die Entnahme eines Produkts aus Kardex, allerdings nur im Rahmen eines Fertigungsauftrags und seiner Stückliste.
* *Kardex Post Production*: Dieser Auftrag beschreibt die Einlagerung eines gefertigten Produkts.

Diese Kardex-Auftragstypen werden in der Konfiguration *Lagerverwaltung > Vorgangsarten* mit Odoo-Vorgängen verknüpft:

| **Vorgangsart**             | **Kardex Picking Type** |
| --------------------------- | ----------------------- |
| Eingänge                    | Kardex Entry            |
| Speicherung                 | Kardex Store            |
| Kommissionieren             | Kardex Get              |
| Komponenten kommissionieren | Kardex Prod             |
| Fertiges Produkt lagern     | Kardex Post Production  |

### Lagerhäuser

### Übermittelte Daten

### Behandlung von Serien- und Chargennummern

### Synchronisierung

### Bestandsabgleich

## Konfiguration

## Text Cases
