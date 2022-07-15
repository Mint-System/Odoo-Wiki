---
tags:
- HowTo
- Aktionen
prev: ./lager
---
# Lager Vorgänge
![icons_odoo_stock](assets/icons_odoo_stock.png)

Vorgänge im Lager ausführen.

## Erweiterte Vorgangstypen einrichten

Wenn in den Einstellungen für das Lager die Option *Mehrstufige Routen* eingeschaltet wird, erweitert sich die Liste der Vorgangstypen mit *Interne Transfers*. Die neue Liste zeigt sich wie folgt:

1. Anlieferungen
2. Interne Transfers
3. Lieferaufträge
4. Manufacturing

Die Option *Mehrere Lagerorte* wird automatisch eingeschaltet und es erscheinen im Menu die neuen Funktion *Lagerorte* und *Regeln*.

![](assets/Lager%20Erweitertes%20Menu.png)

## Vorgangstyp für Retouren definieren

Öffnen Sie *Lager > Konfiguration > Route* und wählen Sie eine Route aus. Klicken Sie auf die *Regel* auf der die Retoure erfolgt. Wählen Sie auf der Regel den *Vorgangstyp* aus und bearbeiten Sie diesen. Im Feld *Vorgangstyp für Retouren* wählen Sie den Vorgangstyp für die Retoure aus.

## Produkt aufstocken

Mit *Aufstocken* werden Produkte an Lager gelegt. Für die Produkte bestehenden unterschiedliche Vorgänge wie diese ins Lager gelanden. Zum Aufstocken öffnen Sie *Lager > Produkte > Produkte* und öffnen ein Produkt. Wählen Sie nun *Aufstocken*.

![](assets/Lager%20Produkt%20aufstocken.png)

Geben Sie die Menge ein und wählen Sie *Bestätigen*. Nun wird entsprechend der Einstellung im Tab *Lager* des Produkts ein Transfer angelegt.

## Transfer korrigieren

Wurde ein Transfer einmal erledigt, kann er nicht mehr bearbeitet werden. Jedoch können Sie diesen *Entsperren* um bestimmte Felder zu ändern.

![Lager Transfer entsperren](assets/Lager%20Transfer%20entsperren.gif)

## Erledigte Menge korrigieren

Wurde ein Transfer einmal erledigt, ist die Bearbeitung gespeert. Wenn Sie dennoch die *Erledigte Menge* korrigieren möchten. Wählen Sie auf dem Transfer *Entsperren* und passen die Menge in den detaillierten Vorgänge in der Spalte *Erledigt* an. Anschliessend wählen Sie wieder *Sperren*.

::: tip
Wird die erledigte Menge verändert, wird der Bestand des Produkts entsprechend angepasst.
:::

## Scheduler manuell starten

Der Lager Scheduler wird von Odoo in regelmässig Abständen ausgeführt. In bestimmten Fällen, möchten Sie diesen manuell starten. Klicken Sie dazu auf *Lager > Vorgänge > Scheduler starten* und wählen Sie *Scheduler starten*.

::: tip
Der Scheduler wird im Hintergrund ausgeführt. Sind viele Vorgänge am laufen, kann die Ausführung des Schedulers länger dauern.
:::
