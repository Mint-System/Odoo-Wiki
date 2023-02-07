---
tags:
- HowTo
prev: ./
---
# Contract
![icon_oca_agreement](assets/icon_oca_agreement.png)

Wiederholende Verträge verwalten und automatisch verrechnen.

Technischer Name: `contract`\
Repository: <https://github.com/OCA/contract/tree/15.0/contract>

## Erweiterungen

| Erweiterung                                                         | Beschreibung                                                  |
| ------------------------------------------------------------------- | ------------------------------------------------------------- |
| [Contract Format Date Marker](Contract%20Format%20Date%20Marker.md) | Datum aus Vertragszeile in Rechnung anzeigen und formatieren. |

## Verwendung

### Kundenverträge anzeigen

Navigieren Sie nach *Finanzen >  Kunden > Kundenverträge*.

### Kundenvertrag erstellen

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

### Kundenvertrag und Periodische Rechnungen terminieren

Wenn Sie den Entwicklermodus aktivieren, werden auf den Zeilen *Periodische Buchungen* das Feld *Datum der letzten Rechnung* sichtbar. Dieses Feld können Sie mit dem entsprechenden Snippet bearbeitbar machen. Um eine Verrechnung mit *Abrechnungsart* zu *Periodenbeginn* zu erledigen.

![](assets/Contract%20Abrechnungsart.png)

### Lieferantenverträge anzeigen

Navigieren Sie nach *Finanzen >  Lieferanten > Lieferantenverträge*.

### Lieferantenvertrag erstellen

Rufen Sie *Finanzen >  Lieferanten > Lieferantenverträge* auf und wählen Sie *Anlegen*. Füllen mindestens diese Felder aus:

* **Vertragsname**: Titel des Vertrags
* **Lieferant**: Das ist der Vertragspartner
* **Abrechnugsintervall**: Gemäss Vertrag festlegen
* **Startdatum**: Datum Vertragsbeginn
* **Periodische Rechnungen**: Dienstleistungen und Produkte die es zur verrechnen gilt
