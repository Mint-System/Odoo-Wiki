---
tags:
- HowTo
- OCA
prev: ./finanzen
---
# Recurring - Contracts Management
![icon_oca_app](assets/icon_oca_app.png)

Wiederholende Verträge verwalten und automatisch verrechnen.

Technischer Name: `contract`\
Repository: <https://github.com/OCA/contract/tree/14.0/contract>

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


## Lieferantenvertrag einrichten

Rufen Sie *Finanzen >  Lieferanten > Lieferantenverträge* auf und wählen Sie *Anlegen*. Füllen mindestens diese Felder aus:

* **Vertragsname**: Titel des Vertrags
* **Lieferant**: Das ist der Vertragspartner
* **Abrechnugsintervall**: Gemäss Vertrag festlegen
* **Startdatum**: Datum Vertragsbeginn
* **Periodische Rechnungen**: Dienstleistungen und Produkte die es zur verrechnen gilt
