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

## Anlageklasse erfassen

Anlageklasse (Abschreibungsmodelle) können Sie unter *Finanzen > Konfiguration > Anlageklasse* vorerfassen. Mit diesen Modellen können Sie schneller neue Anlagen mit Abschreibungen erfassen. Dazu ein Beispiel mit 10% Abschreibung über 10 Jahre: 

![](assets/Finanzen%20Anlagenverwaltung%20Asset%20Modell.png)

## Aus Lieferantenrechnung eine Anlage mit Abschreibung erstellen

Wenn Sie auf dem Aktivenkonto eine Anlageklasse (Abschreibungsmodell) hinterlegen, wird aus einer Rechnungszeile direkt eine Anlage mit Abschreibung erstellt und verknüpft. Zur Aktivierung rufen Sie das Konto in der Formularansicht auf.

![](assets/Finanzen%20Anlagenverwaltung%20Rechnungszeile.png)

In der Formular-Ansicht können Sie unter *Asset Options* die Anlageklasse hinterlegen. Wenn die Auswahl leer ist müssen Sie zuerst eine [Anlageklasse erfassen](#Anlageklasse%20erfassen).

![](assets/Finanzen%20Anlagenverwaltung%201500%20Konto.png)

Wird die Rechnung verbucht, erstellt Odoo automtisch eine neue Anlage und verknüpft diese mit der Rechnung.

![](assets/Finanzen%20Anlagenverwaltung%20Anlage.png)