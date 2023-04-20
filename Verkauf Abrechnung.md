---
description: Eine einfache und umfassende Odoo-Dokumentation.
tags:
- HowTo
prev: ./verkauf
---
# Verkauf Abrechnung
![icons_odoo_sale](assets/icons_odoo_sale.png)

Verkaufsaufträge unkompliziert abrechnen.

## Konfiguration

### Produkt für Anzahlung auswählen

Navigieren Sie nach *Einstellungen > Verkauf > Abrechnung* und wählen Sie im Feld *Anzahlungen* das entsprechende Produkt aus. Zegien Sie das Produkt an und wählen Sie im Tab *Finanzen* das Erlöskonto festlegen.

::: warning
Damit Anzahlungen korrekt gebucht werden, müssen das [Konto für Anzahlungen festlegen](Finanzen%20Zahlungen.md#Konto%20für%20Anzahlungen%20festlegen).
:::

## Abrechnung

### Verkaufsauftrag abrechnen

Navigieren Sie nach *Verkauf > Aufträge > Aufträge* und öffnen Sie einen Verkaufsaufstag im Status *Abzurechnen*. Wählen Sie die Aktion *Rechnung erstellen*. Im Dialog wählen Sie die Option *Reguläre Rechnung* und bestätigen den Vorgang mit *Rechnung erstellen und anzeigen*.

### Anzahlung erstellen

Navigieren Sie nach *Verkauf > Aufträge > Aufträge* und öffnen Sie einen Verkaufsaufstag. Wählen Sie die Aktion *Rechnung erstellen* und anschliessend die Option *Anzahlung (Prozent)*. Tragen Sie im Feld *Anzahlungsbetrag* den Prozentsatz ein. Dasselbe funktioniert auch mit Fixbeträgen mit der Option *Anzahlung (Fester Betrag)*. Schliessen Sie den Vorgang mit *Rechnung erstellen und anzeigen*. Odoo erstellt eine Rechnung mit dem Produkt *Anzahlung* und trägt dieses auf dem Verkaufsauftrag ein.

### Verkaufsauftrag mit Anzahlungen abrechnen

Navigieren Sie nach *Verkauf > Aufträge > Aufträge* und öffnen Sie einen Verkaufsaufstag mit einer Vorauszahlung. Klicken Sie auf *Rechnung erstellen*. Wenn Sie Option *Abzug von Anzahlung* aktivieren, wird Odoo den Rechnungsbetrag den vorausbezahlte Betrag abziehen. Wenn Sie die Option deaktivieren, erstellt eine normale Rechnung.

::: warning
Wenn die Option *Abzug von Anzahlung* aktiviert ist und der vorausbezahlte Betrag den Rechnungsbetrag übersteigt, erstellt Odoo eine Kunden-Gutschrift.
:::

### Upselling auflösen

Ist ein Verkaufsauftrag im Status *Zusatzverkaufschance* wurde bei der Erstellung der Rechnung neue Positionen hinzugefügt oder bei einer bestehenden eine zusätzliche Menge in Rechnung gestellt. Damit der Verkaufsauftrag als *Abgrechnet* angezeigt wird, geht man wie folgt vor. Öffnen Sie den Verkaufsauftrag und wählen Sie *Abbrechen*. Anschliessend klicken Sie auf *Setze auf Angebot*  und *Bestätigen*. Nun wurde die zusätzliche Position im Verkaufsauftrag registriert.

Bei Käufe aus dem Webshop kann der Status *Zusatzverkaufschance* entstehen, wenn die Versandkosten nicht aktuell sind. Öffnen Sie den Auftrag um die Versandkosten zu aktualisieren. Die Versandkosten werden in gelber Schrift angezeigt und unten beim Total kässt sich diese aktualisieren. Der Text der Versandkosten werden nun in schwarzer Farbe angezeigt und der Link *Aktualisierung der Versandkosten* ist nun grün. Klicken Sie danach oben links auf Speichern.

### Mehrere Verkaufsaufträge abrechnen

Öffnen Sie *Verkauf*, gruppieren Sie die Aufträge nach Kunde und setzen Sie als Filter *Abzurechnen*. Öffnen Sie einen Kunden, markieren Sie die Einträge und wählen Sie *Aktion > Rechnung erzeugen*.

![](assets/Verkauf%20Rechnung%20erzeugen.png)

Im Dialog wählen Sie *Erzeuge und zeige Rechnung an*.

![](assets/Verkauf%20Rechnung%20anzeigen.png)

Nun wird für jeden Positionen in den Verkaufsaufträgen eine Rechnungsposition erstellt. Jede Rechnungsposition ist mit der entsprechenden Verkaufsauftragsposition verknüpft.

![](assets/Verkauf%20Auftragsposition%20verknüpft.png)

### Angebot einem bestehenden Projekt zuweisen

Wenn Sie Dienstleistungen im Angebot haben, die eine Projektaufgabe generieren und Sie diese einem bestehenden Projekt zuordnen möchten, zeigen Sie den Tab *Weitere Informationen* an. Wählen Sie im Feld *Projekt* ein bestehendes Projekt aus. Beim Bestätigen des Angebots wird die Aufgabe im gewählten Projekt erstellt und mit der Auftragszeile verbunden.

![](assets/Verkauf%20Projekt%20auswählen.png)

::: tip
Das Feld *Projekt* wird nur angezeigt, wenn eine Auftragszeile eine Dienstleistung enthält, die zur Abrechnung eine Projekt oder Projektaufgabe erstellt. 
:::