---
title: Lager Bestand
description: Den Lagerbestand optimal verwalten.
tags:
- HowTo
prev: ./stock
---
# Lager Bestand
![icons_odoo_stock](attachments/icons_odoo_stock.png)

{{ $frontmatter.description }}

## Konfiguration

### GS1-Barcodes aktivieren

Navigieren Sie nach *Einstellungen > Lager > Rückverfolgbarkeit* und aktivieren Sie die Option *GS1-Barcodes für Los- & Seriennummern drucken*. Wenn Sie die Standardetiketten drucken, wird statt dem

### Konsignationslager aktivieren

Mit dem Konsignationslager können Bestände an Kontakte zugeordnet werden. Navigieren Sie nach *Einstellungen > Lager > Rückverfolgbarkeit* und aktivieren Sie dei Option *Konsignationslager*.

## Bestand

### Reservierter Bestand zurücksetzen

Für jeden Lagerort wird ein Bestand geführt *Lager > Konfiguration > Lagerorte > Lagerort auswählen > Smart-Link Bestand*. Wenn Sie die Aktion [Reservierter Bestand zurücksetzen](Stock%20Actions.md#Reservierter%20Bestand%20zurücksetzen) erstellen, können Sie die Bestände markieren und die *Aktionen > Reservierter Bestand zurücksetzen* ausführen.

::: warning
Damit Sie diese Aktion ausführen können, müssen Sie [Superuser werden](Settings.md#Superuser%20werden)
:::

![](attachments/Lager%20Bestand%20Reservierter%20Bestand%20zurücksetzen.png)

Wenn Sie offene Lieferungen mit reservierten Mengen haben, können Sie die Aktion [Reservierungen zurücksetzen](Stock%20Actions.md#Reservierungen%20zurücksetzen) erstellen und ausführen.

### Meldebestand erfassen

Für jedes einlagerbare Produkt kann eine Meldebestand definiert werden. Navigieren Sie nach *Lager > Konfiguration > Meldebestände* und erstellen Sie einen neuen Eintrag.

![](attachments/Lager%20Bestand%20Meldebestand.png)

Für dieses Produkt wird bei Unterschreitung des Minimalbestand automatisch ein Bestellvorschlag generiert. Mit [Scheduler manuell starten](Stock%20Operations.md#Scheduler%20manuell%20starten) können Sie die Bestandsregeln forcieren.

### Verfügbare Menge anzeigen

Navivigieren Sie nach *Lager > Produkte > Produkte* und zeigen Sie ein Produkt an. Wählen Sie den Smart-Link *X kg Verfügbar*. Hier sehen Sie die verfügbare Menge des Produkts.

### Produkt-Bestand zu neuem Lagerort verschieben

Es wird angeommen, dass Sie den gesamten Produktbestand von einem Lagerort zu einem anderen transferieren möchten.

Dazu müssen Sie die [Verfügbare Menge anzeigen](#Verfügbare%20Menge%20anzeigen) und expotieren.\
Dazu können Sie die Vorlage [Bestand exportieren](Stock%20Data%20Management.md#Bestand%20exportieren) verwenden.

Anschliessend müssen Sie eine [Inventur vorbereiten](#Inventur%20vorbereiten). Starten Sie die Inventur und importieren Sie die Bestandsliste 2 Mal.

Legen Sie für die einen Zeilen den neuen Lagerort und die zu übertragende Menge fest und setzen Sie die Menge der anderen Zeilen auf 0.  Schliessen Sie die Inventur ab.

![](attachments/Lager%20Bestand%20Bestand%20verschoben.png)

## Vorgänge

### Nachbestellregeln auslösen

Um die Nachbestellregeln auszulösen, wählen Sie *Lager > Vorgänge > Planer starten*. Bestätigen Sie den Dialog mit *Planer starten*.

## Inventur

### Inventur vorbereiten

Navigieren Sie zum Menu *Lager > Vorgänge > Inventur*. Mit dem Knopf *Neu* erstellen Sie einen Inventurauftrag. Befüllen Sie die Felder gemäss untenstehender Tabelle.

| Bezeichnung                       | Beschreibung                                                                                    |
| --------------------------------- | ----------------------------------------------------------------------------------------------- |
| Veranstaltungsorte                | Auswahl auf ein bestimmtes Lager (erscheint nur falls die Option "Lagerorte" eingeschaltet ist) |
| Inventurauftrag                   | Name der Inventur (z.B. "Jahresabschluss 2020")                                                 |
| Produkte                          | Auswahl der zu inventierenden Produkte (1-n)                                                    |
| Enthaltene Produkte einschliessen | Produkte mit Bestand 0 berücksichtigen oder nicht                                               |
| Buchungsdatum                     | -                                                                                               |
| Unternehmen                       | -                                                                                               |
| Gezählte Mengen                   | -                                                                                               |

### Inventur durchführen

Starten Sie die vorbereitete Inventur mit *Inventur Starten*. Falls ein nicht gelistetes Produkt gezählt wird, kann über *Neu* eine neue Position eingefügt werden.

Befüllen Sie nun die Spalte *Gezählt* entsprechend der gezählten Quantität pro Produkt. Nach der abgeschlossenen Zählung wird mit *Bestandsbuchung Durchführen* der korrigierte Bestand gebucht. Das Protokoll kann über *Print Count Sheet* erstellt werden.

## Disposition

### Bordereau-Ansicht erstellen

Die Bordereau-Ansicht bietet dem Logistiker eine Übersicht der anstehenden Aufträge. Odoo bietet standardmässig keine Bordereau-Ansicht, jedoch können Sie diese einfach selber erstellen. Führen Sie dazu [Neue Ansicht mit Aktion hinzufügen](Development%20Actions.md#Neue%20Ansicht%20mit%20Aktion%20hinzufügen) aus und verwenden diese Werte:

Name der Aktion: `Bordereau`\
Objekt: `stock.picking`\
Ansichtsmodus: `tree,form,pivot`\
Wertebereich:

```json
[
"&",
["carrier_id", "in", ["Bordereau", "Bordereau Migros"]],
["state", "in", ["assigned","done"]],
["scheduled_date", ">=", (datetime.datetime.now().replace(hour=08, minute=00))],
["scheduled_date", "<=", (datetime.datetime.now() + datetime.timedelta(days=3)).strftime('%Y-%m-%d')]
]
```

Wert aus Kontext: `{'contact_display': 'partner_address', 'default_company_id': allowed_company_ids[0], 'search_default_expected_date_day': True}`
Menü: `Bordereau`\
Obermenü: `Lager/Lager`\
Aktion: `ir.actions.act_window` `Bordereau`\
Nummernfolge: `10`

## Auswertung

### Inventur Gebinde anzeigen

Damit Sie eine Übersicht der Gebinde erhalten, folgen Sie dem HowTo [Neue Ansicht mit Aktion hinzufügen](Development%20Actions.md#Neue%20Ansicht%20mit%20Aktion%20hinzufügen) und verwenden diese Werte:

Name der Aktion: `Inventur Gebinde`\
Objekt: `stock.move`\
Ansichtsmodus: `tree,form`\
Wertebereich: `["&", ("state", "=", "done"), ["product_id", "ilike", "Gebinde"], ["picking_partner_id", "!=", False]]`\
Wert aus Kontext: `{'group_by': ['product_id', 'x_picking_partner_id']}`\
Menü: `Inventur Gebinde`\
Obermenü: `Verkauf/Aufträge`\
Aktion: `ir.actions.act_window` `Inventur Gebinde`\
Nummernfolge: `2`

Das Ergebnis sollte so aussehen:

![](attachments/Lager%20Bestand%20Inventur%20Gebinde.png)
