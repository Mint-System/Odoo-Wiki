---
title: Verkauf Abrechnung
description: Verkaufsaufträge unkompliziert abrechnen.
kind: howto
prev: ./sale
---

# Verkauf Abrechnung

![icons_odoo_sale](attachments/icons_odoo_sale.png)

{{ $frontmatter.description }}

## Konfiguration

### Produkt für Anzahlungen erstellen

Zeigen Sie _Verkauf > Produkte > Produkte_ an und erstellen Sie einenen neuen Eintrag _Anzahlungen_. Stellen Sie sicher, dass die _Steuern (Verkauf)_ korrekt ist.

Navigieren Sie nach _Einstellungen > Verkauf > Abrechnung_ und wählen Sie im Feld _Anzahlungen_ das erstellte Produkt aus.

::: warning
Damit Anzahlungen korrekt gebucht werden, müssen Sie das [Konto für Anzahlungen festlegen](Accounting%20Payments.md#Konto%20für%20Anzahlungen%20festlegen).
:::

### Produkt für Anzahlung auswählen

## Abrechnung

### Verkaufsauftrag abrechnen

Navigieren Sie nach _Verkauf > Aufträge > Aufträge_ und öffnen Sie einen Verkaufsaufstag im Status _Abzurechnen_. Wählen Sie die Aktion _Rechnung erstellen_. Im Dialog wählen Sie die Option _Reguläre Rechnung_ und bestätigen den Vorgang mit _Rechnung erstellen und anzeigen_.

### Anzahlung erstellen

Navigieren Sie nach _Verkauf > Aufträge > Aufträge_ und öffnen Sie einen Verkaufsaufstag. Wählen Sie die Aktion _Rechnung erstellen_ und anschliessend die Option _Anzahlung (Prozent)_. Tragen Sie im Feld _Anzahlungsbetrag_ den Prozentsatz ein. Dasselbe funktioniert auch mit Fixbeträgen mit der Option _Anzahlung (Fester Betrag)_. Schliessen Sie den Vorgang mit _Rechnung erstellen und anzeigen_. Odoo erstellt eine Rechnung mit dem Produkt _Anzahlung_ und trägt dieses auf dem Verkaufsauftrag ein.

### Verkaufsauftrag mit Anzahlungen abrechnen

Navigieren Sie nach _Verkauf > Aufträge > Aufträge_ und öffnen Sie einen Verkaufsaufstag mit einer Vorauszahlung. Klicken Sie auf _Rechnung erstellen_. Wenn Sie Option _Abzug von Anzahlung_ aktivieren, wird Odoo den Rechnungsbetrag den vorausbezahltem Betrag abziehen. Wenn Sie die Option deaktivieren, erstellt Odoo eine normale Rechnung.

::: warning
Wenn die Option _Abzug von Anzahlung_ aktiviert ist und der vorausbezahlten Betrag den Rechnungsbetrag übersteigt, erstellt Odoo eine Kunden-Gutschrift.
:::

### Upselling auflösen

Ist ein Verkaufsauftrag im Status _Zusatzverkaufschance_ wurde bei der Erstellung der Rechnung neue Positionen hinzugefügt oder bei einer bestehenden eine zusätzliche Menge in Rechnung gestellt. Damit der Verkaufsauftrag als _Abgrechnet_ angezeigt wird, geht man wie folgt vor. Öffnen Sie den Verkaufsauftrag und wählen Sie _Abbrechen_. Anschliessend klicken Sie auf _Setze auf Angebot_ und _Bestätigen_. Nun wurde die zusätzliche Position im Verkaufsauftrag registriert.

Bei Käufe aus dem Webshop kann der Status _Zusatzverkaufschance_ entstehen, wenn die Versandkosten nicht aktuell sind. Öffnen Sie den Auftrag um die Versandkosten zu aktualisieren. Die Versandkosten werden in gelber Schrift angezeigt und unten beim Total kässt sich diese aktualisieren. Der Text der Versandkosten werden nun in schwarzer Farbe angezeigt und der Link _Aktualisierung der Versandkosten_ ist nun grün. Klicken Sie danach oben links auf Speichern.

### Mehrere Verkaufsaufträge abrechnen

Öffnen Sie _Verkauf_, gruppieren Sie die Aufträge nach Kunde und setzen Sie als Filter _Abzurechnen_. Öffnen Sie einen Kunden, markieren Sie die Einträge und wählen Sie _Aktionen > Rechnung erzeugen_.

![](attachments/Verkauf%20Rechnung%20erzeugen.png)

Im Dialog wählen Sie _Erzeuge und zeige Rechnung an_.

![](attachments/Verkauf%20Rechnung%20anzeigen.png)

Nun wird für jeden Positionen in den Verkaufsaufträgen eine Rechnungsposition erstellt. Jede Rechnungsposition ist mit der entsprechenden Verkaufsauftragsposition verknüpft.

![](attachments/Verkauf%20Auftragsposition%20verknüpft.png)

### Angebot einem bestehenden Projekt zuweisen

Wenn Sie Dienstleistungen im Angebot haben, die eine Projektaufgabe generieren und Sie diese einem bestehenden Projekt zuordnen möchten, zeigen Sie den Tab _Weitere Informationen_ an. Wählen Sie im Feld _Projekt_ ein bestehendes Projekt aus. Beim Bestätigen des Angebots wird die Aufgabe im gewählten Projekt erstellt und mit der Auftragszeile verbunden.

![](attachments/Verkauf%20Projekt%20auswählen.png)

::: tip
Das Feld _Projekt_ wird nur angezeigt, wenn eine Auftragszeile eine Dienstleistung enthält, die zur Abrechnung eine Projekt oder Projektaufgabe erstellt.
:::
