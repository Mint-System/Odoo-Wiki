---
title: Fertigung Vorgänge
description: Vorgänge für Fertigung konfigurieren.
tags:
- HowTo
prev: ./manufacture
---
# Fertigung Vorgänge
![icons_odoo_mrp](attachments/icons_odoo_mrp.png)

{{ $frontmatter.description }}

## Subunternehmer

### Route zur Versorgung des Subunternehmers festlegen

Öffnen Sie das Produkt, welches zur Verarbeitung an den Subunternehmer verschickt werden soll. Und aktivieren Sie die Route *Subunternehmer nach Auftrag versorgen* im Tab *Lager*.

### Komponenten für Subunternehmen-Auftrag aufzeichnen

Öffnen Sie die Anlieferung des Subunternehmers unter *Lager > Anlieferung* und klicken Sie auf *Komponenten Aufzeichnen*. Legen Sie im Feld *Menge*, die produzierte Menge fest.

## Massenproduktion

### Massenproduktion durchführen

Wenn Sie mehrere serialisierte Produkte in einem Vorgang fertigen möchten, müssen Sie einen Fertigungsauftrag unter *Fertigung > Vorgänge > Fertigungsaufträge* erstellen. Wählen Sie das serialisierte Produkt aus und tragen Sie bei *Menge* die zu produzierende Menge ein. Bestätigen Sie den Auftrag und wählen Sie die Aktion *Massenproduktion*. Im Dialog geben Sie bei *Erste SN* die erste Seriennummer ein und wählen *Generieren*.

![](attachments/Manufacture%20Operations%20Seriennummer%20generieren.png)

Bestätigen Sie den Vorgang mit *Anwenden*. Klicken Sie anschliessend auf den Smart-Button *X Lieferrückstände*. Markieren Sie alle Fertigungsaufträge und wählen Sie *Aktion > Als erledigt markieren*.


::: warning
Dieser Vorgang funktioniert auch für Fertigungsaufträge mit Arbeitsvorgängen. Wenn die Fertigungsaufträge aus Lieferrückständen direkt erledigen, berechnet Odoo die Arbeitszeit gemäss der Zeitvorgabe.
::::