---
title: Fertigung Vorgänge
description: Vorgänge für Fertigung konfigurieren.
kind: howto
prev: ./manufacture
---

# Fertigung Vorgänge

![icons_odoo_mrp](attachments/icons_odoo_mrp.png)

{{ $frontmatter.description }}

## Subunternehmer

### Route zur Versorgung des Subunternehmers festlegen

Öffnen Sie das Produkt, welches zur Verarbeitung an den Subunternehmer verschickt werden soll. Und aktivieren Sie die Route _Subunternehmer nach Auftrag versorgen_ im Tab _Lager_.

### Komponenten für Subunternehmen-Auftrag aufzeichnen

Öffnen Sie die Anlieferung des Subunternehmers unter _Lager > Anlieferung_ und klicken Sie auf _Komponenten Aufzeichnen_. Legen Sie im Feld _Menge_, die produzierte Menge fest.

## Massenproduktion

### Massenproduktion durchführen

Wenn Sie mehrere serialisierte Produkte in einem Vorgang fertigen möchten, müssen Sie einen Fertigungsauftrag unter _Fertigung > Vorgänge > Fertigungsaufträge_ erstellen. Wählen Sie das serialisierte Produkt aus und tragen Sie bei _Menge_ die zu produzierende Menge ein. Bestätigen Sie den Auftrag und wählen Sie die Aktion _Massenproduktion_. Im Dialog geben Sie bei _Erste SN_ die erste Seriennummer ein und wählen _Generieren_.

![](attachments/Manufacture%20Operations%20Seriennummer%20generieren.png)

Bestätigen Sie den Vorgang mit _Anwenden_. Klicken Sie anschliessend auf den Smart-Button _X Lieferrückstände_. Markieren Sie alle Fertigungsaufträge und wählen Sie _Aktionen > Als erledigt markieren_.

::: warning
Dieser Vorgang funktioniert auch für Fertigungsaufträge mit Arbeitsvorgängen. Wenn die Fertigungsaufträge aus Lieferrückständen direkt erledigen, berechnet Odoo die Arbeitszeit gemäss der Zeitvorgabe.
::::
