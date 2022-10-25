---
tags:
- HowTo
- OCA
prev: ./finanzen
---
# Contracts Management Recurring
![icon_oca_app](assets/icon_oca_app.png)

Wiederholende Verträge verwalten und automatisch verrechnen.

Technischer Name: `contract`\
Repository: <https://github.com/OCA/contract/tree/14.0/contract>

## Erweiterungen

| Erweiterung                              | Beschreibung                                             |
| ---------------------------------------- | -------------------------------------------------------- |
| [Contracts Management Recurring Sales](Contracts%20Management%20Recurring%20Sales.md) | Aus wiederholenden Verträge Verkaufsangebote generieren. |

## Kundenverträge anzeigen

Navigieren Sie nach *Finanzen >  Kunden > Kundenverträge*.

## Kundenvertrag erstellen

Rufen Sie *Finanzen >  Kunden > Kundenverträge* auf und wählen Sie *Anlegen*. Füllen mindestens diese Felder aus:

* **Vertragsname**: Titel des Vertrags
* **Kunde**: Das ist der Vertragspartner
* **Abrechnugsintervall**: Gemäss Vertrag festlegen
* **Startdatum**: Datum Vertragsbeginn
* **Periodische Rechnungen**: Dienstleistungen und Produkte die es zur verrechnen gilt

![](assets/Contract%20Beispiel.png)

::: tip
Täglich wird ein Cron-Job ausgeführt, der entsprechend dem *Datum der nächsten Rechnung* anhand des Vertrags eine Rechnung generiert.
:::

## Lieferantenverträge anzeigen

Navigieren Sie nach *Finanzen >  Lieferanten > Lieferantenverträge*.

## Lieferantenvertrag erstellen

Rufen Sie *Finanzen >  Lieferanten > Lieferantenverträge* auf und wählen Sie *Anlegen*. Füllen mindestens diese Felder aus:

* **Vertragsname**: Titel des Vertrags
* **Lieferant**: Das ist der Vertragspartner
* **Abrechnugsintervall**: Gemäss Vertrag festlegen
* **Startdatum**: Datum Vertragsbeginn
* **Periodische Rechnungen**: Dienstleistungen und Produkte die es zur verrechnen gilt
