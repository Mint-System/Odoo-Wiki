---
title: Lager Vorgänge
description: Vorgänge im Lager ausführen.
kind: howto
tags:
- Actions
prev: ./stock
---
# Lager Vorgänge
![icons_odoo_stock](attachments/icons_odoo_stock.png)

{{ $frontmatter.description }}

## Vorgangstypen

### Erweiterte Vorgangstypen einrichten

Wenn in den Einstellungen für das Lager die Option *Mehrstufige Routen* eingeschaltet wird, erweitert sich die Liste der Vorgangstypen mit *Interne Transfers*. Die neue Liste zeigt sich wie folgt:

1. Anlieferungen
2. Interne Transfers
3. Lieferaufträge
4. Manufacturing

Die Option *Mehrere Lagerorte* wird automatisch eingeschaltet und es erscheinen im Menu die neuen Funktion *Lagerorte* und *Regeln*.

![](attachments/Lager%20Erweitertes%20Menu.png)

### Vorgangstyp für Retouren definieren

Öffnen Sie *Lager > Konfiguration > Route* und wählen Sie eine Route aus. Klicken Sie auf die *Regel* auf der die Retoure erfolgt. Wählen Sie auf der Regel den *Vorgangstyp* aus und bearbeiten Sie diesen. Im Feld *Vorgangstyp für Retouren* wählen Sie den Vorgangstyp für die Retoure aus.

## Transfer

### Produkt aufstocken

Mit *Aufstocken* werden Produkte an Lager gelegt. Für die Produkte bestehenden unterschiedliche Vorgänge wie diese ins Lager gelanden. Zum Aufstocken öffnen Sie *Lager > Produkte > Produkte* und öffnen ein Produkt. Wählen Sie nun *Aufstocken*.

![](attachments/Lager%20Produkt%20aufstocken.png)

Geben Sie die Menge ein und wählen Sie *Bestätigen*. Nun wird entsprechend der Einstellung im Tab *Lager* des Produkts ein Transfer angelegt.

### Transfer korrigieren

Wurde ein Transfer einmal erledigt, kann er nicht mehr bearbeitet werden. Jedoch können Sie diesen *Entsperren* um bestimmte Felder zu ändern.

![Lager Transfer entsperren](attachments/Lager%20Transfer%20entsperren.gif)

### Erledigte Menge korrigieren

Wurde ein Transfer einmal erledigt, ist die Bearbeitung gesperrt. Wenn Sie dennoch die *Erledigte Menge* korrigieren möchten. Wählen Sie auf dem Transfer *Entsperren* und passen die Menge in den detaillierten Vorgänge in der Spalte *Erledigt* an. Anschliessend wählen Sie wieder *Sperren*.

::: tip
Wird die erledigte Menge verändert, wird der Bestand des Produkts entsprechend angepasst.
:::

### Produkt auf Transfer entsorgen

Mit der Aktion *Ausschuss Melden* können Sie auf Transfers *Lager > Vorgänge > Bewegungen* bestimme Produkte entsorgen. Wenn Sie die Aktion ausführen wählen Sie im Dialog das Produkt und die Menge, die entsorgt werden soll.

### Produkt an Lagerort entsorgen

Wenn Sie an bestimmten Lagerort ein Produkt entsorgen möchten, wählen Sie *Lager > Vorgänge > Ausschuss melden*. Im Dialog geben Sie Produkt, Menge und Lagerort ein. Bestätigen Sie den Vorgang um das Produkt zu entsorgen.

## Scheduler

### Scheduler manuell starten

Der Lager Scheduler wird von Odoo in regelmässig Abständen ausgeführt. In bestimmten Fällen, möchten Sie diesen manuell starten. Klicken Sie dazu auf *Lager > Vorgänge > Scheduler starten* und wählen Sie *Scheduler starten*.

::: tip
Der Scheduler wird im Hintergrund ausgeführt. Sind viele Vorgänge am laufen, kann die Ausführung des Schedulers länger dauern.
:::

## MTO

### Route "Auffüllung nach Auftrag (MTO)" wiederherstellen

Rufen Sie die Ansicht der Routen auf *Lager > Konfiguration > Routen* und wählen Sie *Filter > Archiviert*. Klicken Sie auf die Route *Auffüllung nach Auftrag (MTO)* und wählen anschliessend *Aktionen > Archivierung aufheben*.

## Beschaffung

### Beschaffungsgruppe weitergeben

Navigieren Sie nach *Lager > Konfiguration > Route* und Route *Fertigung* auswählen. Im Abschnitt *Regel* wählen Sie die bestehende Regel *Einkaufen* oder *Fertigung*. Im Feld *Weitergabe Beschaffungsgruppe* legen Sie *Weitergeben* fest.

![](attachments/Lager%20Vorgänge%20Weitergabe%20Beschaffungsgruppe.png)

### Bestand beim Einkauf ignorieren

Wenn Sie beim Einkauf das Lager nicht berücksichtigen wollen. Müssen Sie auf der Route *Auffüllung nach Auftrag (MTO)* die Beschaffungsregel *WH: Stock → Customers (MTO)* anpassen. Legen Sie als *Beschaffungsmethode* die Option *Andere Regel auslösen* aus.

![Lager Vorgänge Stock ignorieren](attachments/Lager%20Vorgänge%20Stock%20ignorieren.gif)

### Bestand bei Fertigung ignorieren

Wenn Sie bei Fertigung das Lager nicht berücksichtigen wollen. Müssen Sie auf der Route *Auffüllung nach Auftrag (MTO)* die Fertigungsregel anpassen. Navigieren Sie nach *Lager > Konfiguration > Routen* und öffnen Sie die Route *Auffüllung nach Auftrag (MTO)*.  Bearbeiten Sei die erste Regel *WH: Stock → Customers (MTO)* und wählen Sie im Feld *Beschaffungsmethode* den Wert *Eine andere Regel auslösen* aus.

## Einstellungen

### Automatische Reservierung deaktivieren

Ab #Odoo16.

Zeigen Sie eine Vorgangsart unter *Lager > Konfiguration > Vorgangsart* an. Wähle Sie bei *Reservierungsmethode* die Option *Manuell* aus.

Gilt bis #Odoo15.

Navigieren Sie nach *Einstellungen > Lager > Vorgänge*. Wählen Sie für *Reservierung* die Option *Manuell oder auf Basis eines automatisierten Zeitplans*.

![](attachments/Lager%20Vorgänge%20Reservierung.png)