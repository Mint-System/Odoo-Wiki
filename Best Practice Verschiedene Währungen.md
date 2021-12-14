---
tags:
- Best-Practice
---
[🔗 Best Practice](Best%20Practice.md)
# Best Practice: Verschiedene Währungen

Odoo unterstützt mehre Währungssätze und kann deren Kurs automatisch abrufen. Zum Zeitpunkt eines Einkaufs oder eines Verkaufs wird der aktuelle Währungskurs abgefragt und festgehalten. Erfolgt zu einem späteren Zeitpunkt der Zahlungsabgleich zu einem anderen Kurs, wird die Differenz als Ertrag oder Aufwand verbucht. Der Wechselkurs wird auf dem Auftrag festgehalten.

## Verkauf in verschiedenen Währungen

Verkaufspreise in einem Angebot können von der Standardwährung abweichen. Dazu müssen sie die Option [Mehrere Währungen aktivieren](Finanzen%20Mehrere%20Währungen.md#Mehrere%20Währungen%20aktivieren).

### Preislisten

Zusätzlich muss pro Währung eine Preisliste hinterlegt sein. Navigieren sie zu *Verkauf > Produkte > Preislisten*.
Die Allgemeine Preisliste für CHF ist in den Standardeinstellungen bereits vorhanden. Für weitere Währungen ist die Liste zu ergänzen. Zum Beispiel:
- Allgemeine Preisliste, Währung EUR
- Allgemeine Preisliste, Währung USD

### Journale

Vorbereitend muss noch pro Währung ein Journal erstellt werden. Zum Beispiel:
- Ausgangsrechnungen, Währung EUR
- Ausgangsrechnungen, Währung USD

Die Bezeichnung der Rechnungen mit dem gewünschten Kürzel kann über das Feld *Kurzzeichen" definiert werden.

::: warning
Die Nummerierung der Rechnungen folgt einem Nummernkreis pro Journal. Es ist deshalb wichtig, unterschiedliche Kürzel zu verwenden. Ansonsten können gleichnamige Rechnungen entstehen.
:::

### Kontos

Die benötigten Kontos *Standard-Sollkonto* und *Standard-Habenkonto* müssen ebenfalls ergänzt werden. Zum Beispiel:
* 3201 Handelserlös EUR
* 3202 Handelserlös USD

### Angebot erstellen

Jetzt kann in einem Angebot im Feld *Preisliste* die gewünschte Währung über die Auswahl der entsprechenden Preisliste ausgesucht werden. Sämtliche Produkte des Angebots erscheinen nun in der vorgegebenen Währung.

### Rechnung erstellen

Beim Erstellen der Rechnung wird die eingestellte Währung berücksichtigt. Sie erscheint im Feld *Währung* automatisch.

::: warning
Das korrekte Journal muss manuell ausgewählt werden.
:::

