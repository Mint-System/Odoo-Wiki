---
tags:
- HowTo
- Aktionen
prev: ./finanzen
---
# Finanzen Anlagenverwaltung
![icons_odoo_account_asset](assets/icons_odoo_account_asset.png)

Anlagen verwalten und automatisch Abschreibungen erstellen.

## Journal Inventur erstellen

Zur Verwaltung und Abschreibung der Anlagen soll ein eigenes Journal erstellt werden. Navigieren Sie nach *Finanzen > Konfiugration > Journale* und erstellen Sie ein neues Journal vom Typ *Sonstiges*.

## Anlagevermögen erstellen

Rufen Sie *Finanzen > Finanzen > Anlagevermögen* auf und erstellen Sie einen neuen Eintrag mit diesen Parameter:

* **Bezeichnung**: Name der Anlage
* **Original Value**: Kaufwert der Anlage
* **Kaufdatum**: Kaufdatum der Anlage

Im Abschnitt Abschreibungen wählen Sie diese Parameter:

* **Methode**: Abschreibungsmethoden: Linear, Degressiv oder Kombiniert
* **Dauer**: Dauer der Abschreibung

Für korrekte Buchungen geben Sie im Abschnitt Finanzen diese Werte an:

* **Aktivkonto der Anlage**: Konto vom Typ Anlagevermögen. Beispiel: 1500 Maschinen und Apparate
* **Kum. Wertberichtigungskonto**: Konto vom Typ Anlagevermögen. Beispiel: 1509 Abschreibungen auf Maschinen und Apparate
* **Aktivkonto der Anlage**: Aufwandskonto. Beispiel: 6800 Abschreibungen und Wertberichtigungen auf Positionen des Anlagevermögens
* * **Journal**: Siehe [Journal Inventur erstellen](#Journal%20Inventur%20erstellen)

![](assets/Finanzen%20Anlagenverwaltung%20Beispiel%20Drehbank.png)

Aktivieren Sie die Anlage *Bestätigen*.

## Abschreibungsspiegel berechnen

Zeigen Sie eine Anlage mit Abschreibungen an *Finanzen > Finanzen > Anlagevermögen* und klicken Sie auf *Abschreibungen Berechnen*. Im Tab *Abschreibungsspiegel* werden die Abschreibungen für die Buchung vorbereitet.

![](assets/Finanzen%20Anlagenverwaltung%20Buchung%20Abschreibung.png)