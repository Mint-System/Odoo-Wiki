---
tags:
- HowTo
prev: ./verkauf
---
# Verkauf Stammdaten
![icons_odoo_sale](assets/icons_odoo_sale.png)

Produkte, Preislisten und Varianten zentral pflegen.

## Produktverwaltung

### Produkte zum Verkauf festlegen

Öffnen Sie ein Produkt via *Verkauf > Produkte > Produkte* und markieren Sie *Kann verkauft werden*. Neue Optionen erscheinen auf der Produktansicht.

![Produkte zum Verkauf deklarieren](assets/Produkte%20zum%20Verkauf%20deklarieren.gif)

### Produktvarianten aktivieren

Navigieren Sie nach *Einstellungen > Verkauf > Produktkatalog* und aktiveren Sie die Option *Varianten*.

### Produktattributte erstellen

Öffnen Sie *Verkäufe > Konfiguration > Produkte > Attribute* und wählen Sie *Anlegen*. Geben den Attributnamen an und legen Sie den Anzeigetyp fest. Für das Feld *Variants Creation Mode* haben Sie diese Optionen:
* **Instantly**: Alle möglichen Produkvarianten werden angelegt.
* **Dynamically**: Produktvarianten werden nur angelegt, wenn diese explizit konfiguriert werden.
* **Niemals**: Mögliche Produktvarianten werden für dieses Attribut nicht angelegt.
Zuletzt tragen Sie Werte für das Attribut ein.

![](assets/Verkauf%20Stammdaten%20Produktattributte.png)

## Preislisten

### Erweiterte Preisregeln aktivieren

Navigieren Sie nach *Verkauf > Konfiguration > Preiskalkulation* und aktivieren Sie die Option *Preislisten* mit der Unteroption *Erweiterte Preisregeln*.

### Preisliste mit Rabatt erstellen

Wenn Sie die [Erweiterte Preisregeln aktivieren](#Erweiterte%20Preisregeln%20aktivieren) können Sie eine Preisliste erstellen, die auf einer bestehenden Preisliste Rabatt gewährt.

Navigieren Sie nach *Verkauf > Prdukte > Preislisten* und erstellen Sie einen neuen Eintrag mit dem Prozentsatz im Namen. Fügen Sie im Tab *Preisregeln* folgende Regeln hinzu:

* **Anzuwenden auf**: Alle Produkte
* **Startdatum**: Gemäss Laufzeit
* **Enddatum**: Gemäss Laufzeit
* **Ermittle Preis**: Formel
* **Basiert auf**: Amdere Preisliste
* **Stardatum**: Preisliste auswählen
* **Rabatt**: Rabatt in Prozent

Dazu ein Beispiel:

![](assets/Verkauf%20Preisregel%20Rabat.png)

Beim Auswahl der Preisliste im Angebot wird anschliessend der Preis mit Rabatt berechnet und eingetragen.

### Preisliste mit Rabatt für eine bestimmte Periode einrichten

Wenn Sie die [Erweiterte Preisregeln aktivieren](#Erweiterte%20Preisregeln%20aktivieren) können Sie eine Preisliste erstellen, die auf einer bestehenden Preisliste Rabatt gewährt.

Wenn Sie auf eine bestehenden Preisliste in einem bestimmten Zeitraum Rabatt gewähren möchten, müssen Sie eine neue Preisliste mit zwei Preisregeln einrichten. Navigieren Sie nach *Verkauf > Prdukte > Preislisten* und erstellen Sie einen neuen Eintrag mit dem Prozentsatz im Namen. Erstellen Sie eine für den Rabatt:

* **Anzuwenden auf**: Alle Produkte
* **Enddatum**: Ende der Kampange
* **Ermittle Preis**: Formel
* **Basiert auf**: Andere Preisliste
* **Andere Preisliste**: Preisliste auswählen
* **Rabatt**: Rabatt in Prozent

Erstellen Sie eine zweite Preisregel für den normalen Preis:

* **Anzuwenden auf**: Alle Produkte
* **Startdatum**: Ende der Kampange
* **Ermittle Preis**: Formel
* **Basiert auf**: Andere Preisliste
* **Andere Preisliste**: Preisliste auswählen

Dazu ein Beispiel:

![](assets/Verkauf%20Stammdaten%20Preisliste%20mit%20Rabatt.png)
