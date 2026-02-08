---
title: Lager Vorgänge
description: Vorgänge im Lager ausführen.
kind: howto
section: true
prev: ./stock
---

# Lager Vorgänge

![icons_odoo_stock](attachments/icons_odoo_stock.png)

{{ $frontmatter.description }}

## Vorgangstypen

### Erweiterte Vorgangstypen einrichten

Wenn in den Einstellungen für das Lager die Option _Mehrstufige Routen_ eingeschaltet wird, erweitert sich die Liste der Vorgangstypen mit _Interne Transfers_. Die neue Liste zeigt sich wie folgt:

1. Anlieferungen
2. Interne Transfers
3. Lieferaufträge
4. Manufacturing

Die Option _Mehrere Lagerorte_ wird automatisch eingeschaltet und es erscheinen im Menu die neuen Funktion _Lagerorte_ und _Regeln_.

![](attachments/Lager%20Erweitertes%20Menu.png)

### Vorgangstyp für Retouren definieren

Öffnen Sie _Lager > Konfiguration > Route_ und wählen Sie eine Route aus. Klicken Sie auf die _Regel_ auf der die Retoure erfolgt. Wählen Sie auf der Regel den _Vorgangstyp_ aus und bearbeiten Sie diesen. Im Feld _Vorgangstyp für Retouren_ wählen Sie den Vorgangstyp für die Retoure aus.

## Transfer

### Produkt aufstocken

Mit _Aufstocken_ werden Produkte an Lager gelegt. Für die Produkte bestehenden unterschiedliche Vorgänge wie diese ins Lager gelanden. Zum Aufstocken öffnen Sie _Lager > Produkte > Produkte_ und öffnen ein Produkt. Wählen Sie nun _Aufstocken_.

![](attachments/Lager%20Produkt%20aufstocken.png)

Geben Sie die Menge ein und wählen Sie _Bestätigen_. Nun wird entsprechend der Einstellung im Tab _Lager_ des Produkts ein Transfer angelegt.

### Transfer korrigieren

Wurde ein Transfer einmal erledigt, kann er nicht mehr bearbeitet werden. Jedoch können Sie diesen _Entsperren_ um bestimmte Felder zu ändern.

![Lager Transfer entsperren](attachments/Lager%20Transfer%20entsperren.gif)

### Erledigte Menge korrigieren

Wurde ein Transfer einmal erledigt, ist die Bearbeitung gesperrt. Wenn Sie dennoch die _Erledigte Menge_ korrigieren möchten. Wählen Sie auf dem Transfer _Entsperren_ und passen die Menge in den detaillierten Vorgänge in der Spalte _Erledigt_ an. Anschliessend wählen Sie wieder _Sperren_.

::: tip
Wird die erledigte Menge verändert, wird der Bestand des Produkts entsprechend angepasst.
:::

### Produkt auf Transfer entsorgen

Mit der Aktion _Ausschuss Melden_ können Sie auf Transfers _Lager > Vorgänge > Bewegungen_ bestimme Produkte entsorgen. Wenn Sie die Aktion ausführen wählen Sie im Dialog das Produkt und die Menge, die entsorgt werden soll.

### Produkt an Lagerort entsorgen

Wenn Sie an bestimmten Lagerort ein Produkt entsorgen möchten, wählen Sie _Lager > Vorgänge > Ausschuss melden_. Im Dialog geben Sie Produkt, Menge und Lagerort ein. Bestätigen Sie den Vorgang um das Produkt zu entsorgen.

## Scheduler

### Scheduler manuell starten

Der Lager Scheduler wird von Odoo in regelmässig Abständen ausgeführt. In bestimmten Fällen, möchten Sie diesen manuell starten. Klicken Sie dazu auf _Lager > Vorgänge > Scheduler starten_ und wählen Sie _Scheduler starten_.

::: tip
Der Scheduler wird im Hintergrund ausgeführt. Sind viele Vorgänge am laufen, kann die Ausführung des Schedulers länger dauern.
:::

## MTO

### Route "Auffüllung nach Auftrag (MTO)" wiederherstellen

Rufen Sie die Ansicht der Routen auf _Lager > Konfiguration > Routen_ und wählen Sie _Filter > Archiviert_. Klicken Sie auf die Route _Auffüllung nach Auftrag (MTO)_ und wählen anschliessend _Aktionen > Archivierung aufheben_.

## Beschaffung

### Beschaffungsgruppe weitergeben

Navigieren Sie nach _Lager > Konfiguration > Route_ und Route _Fertigung_ auswählen. Im Abschnitt _Regel_ wählen Sie die bestehende Regel _Einkaufen_ oder _Fertigung_. Im Feld _Weitergabe Beschaffungsgruppe_ legen Sie _Weitergeben_ fest.

![](attachments/Lager%20Vorgänge%20Weitergabe%20Beschaffungsgruppe.png)

### Bestand beim Einkauf ignorieren

Wenn Sie beim Einkauf das Lager nicht berücksichtigen wollen. Müssen Sie auf der Route _Auffüllung nach Auftrag (MTO)_ die Beschaffungsregel _WH: Stock → Customers (MTO)_ anpassen. Legen Sie als _Beschaffungsmethode_ die Option _Andere Regel auslösen_ aus.

![Lager Vorgänge Stock ignorieren](attachments/Lager%20Vorgänge%20Stock%20ignorieren.gif)

### Bestand bei Fertigung ignorieren

Wenn Sie bei Fertigung das Lager nicht berücksichtigen wollen. Müssen Sie auf der Route _Auffüllung nach Auftrag (MTO)_ die Fertigungsregel anpassen. Navigieren Sie nach _Lager > Konfiguration > Routen_ und öffnen Sie die Route _Auffüllung nach Auftrag (MTO)_. Bearbeiten Sei die erste Regel _WH: Stock → Customers (MTO)_ und wählen Sie im Feld _Beschaffungsmethode_ den Wert _Eine andere Regel auslösen_ aus.

## Einstellungen

### Automatische Reservierung deaktivieren

Ab #Odoo16.

Zeigen Sie eine Vorgangsart unter _Lager > Konfiguration > Vorgangsart_ an. Wähle Sie bei _Reservierungsmethode_ die Option _Manuell_ aus.

Gilt bis #Odoo15.

Navigieren Sie nach _Einstellungen > Lager > Vorgänge_. Wählen Sie für _Reservierung_ die Option _Manuell oder auf Basis eines automatisierten Zeitplans_.

![](attachments/Lager%20Vorgänge%20Reservierung.png)
