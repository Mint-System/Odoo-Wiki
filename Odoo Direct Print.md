---
tags:
- HowTo
- Drittanbieter
prev: ./iot
---
# Odoo Direct Print
![](assets/icons_odoo_printnode_base.png)

Jeden Odoo Bericht oder Etikette von überall nach überall drucken.

Technischer Name: `printnode_base`\
Repository: <https://gitlab.com/mint-system/odoo-apps-partner/-/tree/14.0/printnode_base>\
Odoo App Store: <https://apps.odoo.com/apps/modules/14.0/printnode_base/>\
Video: [Odoo Experience 2021 - Automating Direct Printing](https://www.youtube.com/watch?v=6dnHvpsukPg)

## Konfiguration

### PrintNode API Key generieren

Loggen Sie sich unter <https://app.printnode.com/app/apikeys> ein. Geben Sie die URL der Odoo-Instanz ein und wählen Sie *Create*.

![](assets/Odoo%20Direct%20Print%20Generate%20API%20Key.png)

### API Key in Odoo einfügen

Unter *Einstellungen > Direct Print > Account* müssen Sie den *API Key*, den Sie von <https://app.printnode.com/app/apikeys> erhalten haben, eintragen.

![](assets/Odoo%20Direct%20Print%20Key%20einfügen.png)

### PrintNode Client installieren

Öffnen Sie <https://app.printnode.com/app/downloads> und installieren die den Client für ihr Betriebssystem.

Starten Sie den *PrintNode* Client und loggen Sie sich mit dem PrintNode-Account ein.

![](assets/PrintNode%20Sign%20In.png)

## Druckerverwaltung

### PrintNode Client Drucker hinzufügen

Der PrintNode Client erkennt die angeschlossenen Drucker automatisch. Falls das nicht der Fall ist, muss der Drucker-Treiber installiert werden.

**MacOS**

Unter MacOS fügen Sie den Drucker wie folgt hinzu.

![](assets/PrintNode%20Mac%20OS%20Drucker%20hinzufügen.png)

Einmal konfiguriert wird der Drucker im PrintNode Client angezeigt:

![](assets/PrintNode%20Client%20Drucker%20anzeigen.png)

### Direktes Drucken aktivieren

Damit Druckaufträge mit PrintNode gerduckt werden können, muss dies explizit festgelegt werden. Öffnen Sie *Einstellungen > Direct Print* und aktivieren Sie die Option *Print via Direct Print*.

Wurde entweder ein globaler Standarddrucker festegelegt oder ein Standarddrucker auf dem dem Benutzer (siehe [Direktes Drucken für Benutzer einrichten](#Direktes%20Drucken%20für%20Benutzer%20einrichten)), dann erscheint bei druckbaren Objekten das folgende Aktions-Menu:

![](assets/Odoo%20Direct%20Print%20Action%20Menu.png)

### Drucker in Odoo anzeigen

Zeigen Sie *Direct Print > Configuration > Printers* an. Hier werden alle verfügbaren Drucker aufgelistet.

![](assets/Odoo%20Direct%20Print%20Beispiel.png)

Mit der Aktion *Einstellungen > Direct Print > Import Printers* werden die auf PrintNode verfügbaren Drucker importiert.

## Testen

### PrintNode App Testseite drucken

Loggin Sie sich auf <https://app.printnode.com> ein und wählen Sie *Print something*. Wählen Sie eine Quelle, Drucker und die Testseite aus und erstellen Sie einen Druckauftrag mit *Print*.

![](assets/Odoo%20Direct%20Print%20Testseite%20drucken.png)

## Druckszenarien

### Methode erfassen

Navigieren Sie nach *Direct Print > Configuration > Methods* und erstellen Sie einen neuen Eintrag. Dazu ein Beispiel für den Abschluss von Fertigungsaufträgen:

* **Model**: `mrp.workorder`
* **Name**: Weiterfahren
* **Method**: `action_open_manufacturing_order`

### Druck-Aktion erstellen

Wenn Sie beispielsweise beim Abschliessen eines Fertigungsauftrags einen Bericht drucken möchten, müssen Sie dazu eine Druck-Aktion erfassen. Zeigen Sie *Direct Print > Print Action Buttons* an und erstellen Sie den folgenden Eintrag:

* **Model**: `mrp.workorder`
* **Method ID**: Weiterfahren (siehe [Methode erfassen](#Methode%20erfassen))
* **Description**: Print product labels when workorder is continued
* **Report**: Wählen Sie den Bericht aus.

### Druckszenario aktivieren

::: warning
Für den aktuellen Benutzer muss die Option *Print via Direct Print* aktiviert sein.
:::

Odoo Direct Print stellt gängige Druckszenarios unter *Direct Print > Print Scenarios* zur Verfüng. Aktivieren Sie ein Senario mit einem Klick auf *Active* und wählen Sie einen Drucker aus.

![](assets/Odoo%20Direct%20Print%20Szenario%20aktiviert.png)

### Druck-Aktion aktivieren

::: warning
Für den aktuellen Benutzer muss die Option *Print via Direct Print* aktiviert sein.
:::

Mit Odoo Direct Print können Druckaktionen ganz einfach hinzugefügt werden. Öffnen Sie die Ansicht *Direct Print > Print Action Buttons*. Aktivieren Sie eine Aktion mit einem Klick auf *Active* und wählen Sie einen Drucker aus.

![](assets/Odoo%20Direct%20Print%20Buttons.png)

In diesem Beispiel wird der Lieferschein ausgedruck, sobald auf einem Lieferschein der Knopf *Bestätigen* gedrückt wurde.

### Produktlabel von Lieferauftrag drucken

Öffnen Sie eine Lieferung via *Lager > Lieferaufträge > Lieferauftrag auswählen* und klicken Sie auf *Aktion > Print Product Labels*

![](assets/Odoo%20Direct%20Print%20Producut%20LAbels.png)

::: tip
Beachten Sie dass der Druckvorgang einige Sekunden in Anspruch nimmt.
:::

### Packvorgang/Lieferschein automatisch drucken

Mit Druck-Senarien können Sie Druckvorgänge automatisieren. Damit der Packvorgang nach der Bestätigung eines Verkaufsauftrags automatisch gedruckt wird, navigieren Sie als erstes nach *Direct Print > Print Scenarios*. Aktivieren Sie die Zeile *Print Picking Document after Sales Order Confirmation*.

Für das automatische Drucken das Lieferschein aktivieren Sie die Zeile *Print document on Backorder (created after Transfer validation*.

## Einstellungen

### Direktes Drucken für Benutzer einrichten

Für das direkte Drucken kann dem Benutzer ein Standarddrucker zugewiesen werden. Navigieren Sie nach *Einstellungen > Benutzer und Unternehmen > Benutzer > Benutzer auswählen > Tab Einstellungen* und legen Sie im Abschnitt *Print* die Standarddrucker fest. Mit der Option *Print via Direct Print* wird das direkte Drucken aktiviert.

### Standarddrucker für Bericht festlegen

Unter *Direct Print > Print Report Policy > User Rules* können Sie für jeden Benutzer den Standarddrucker für einen bestimmten Bericht festlegen. Erstellen Sie dazu einen Eintrag, wählen Sie den Benutzer, Drucker und Bericht aus.

![](assets/Odoo%20Direct%20Print%20Default%20Printer.png)

## Papierformat

### Papierformat anlegen

Unter *Direct Print > Configuration > Papers* können Sie Papierformat für Bericht hinterlegen.

![](assets/Odoo%20Direct%20Print%20Papers.png)

### Papiefromat für Drucker festlegen

Erstellen Sie unter *Direct Print > Print Report Policy > Printer Settings* einen Eintrag für ihren Drucker.

![](assets/Odoo%20Direct%20Print%20Printer%20Settings.png)

### Papieformat für Bericht festlegen

Erstellen Sie unter *Direct Print > Print Report Policy > Report Settings* einen Eintrag für ihren Bericht.

::: tip
Odoo Direct Print gibt eine Warnung aus, wenn das Papieformat nicht mit dem verknüpften Drucker übereinstimmt.
:::

## Geplante Aktionen

### Geplante Aktion "Rüstschein drucken" erstellen

Navigieren Sie nach *Einstellungen > Technisch > Geplante Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Rüstschein drucken`\
Modell: `ir.actions.server`\
Ausführen alle: `1` Tage\
Nächstes Ausführungsdatum: `DD.MM.YYYY 07:00:00`\
Anzahl der Anrufe: `-1`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Pythoncode*:

```python
## Get deliveries due in 3 days
start_date = (datetime.datetime.now() + datetime.timedelta(days=2)).strftime('%Y-%m-%d')
end_date = (datetime.datetime.now() + datetime.timedelta(days=4)).strftime('%Y-%m-%d')

pickings = env['stock.picking'].search([
('picking_type_id', '=', 2),
('scheduled_date', '>', start_date),
('scheduled_date', '<', end_date)
])

## raise Warning([start_date, end_date, pickings])

report_name = 'stock.action_report_picking'
printer_id = env.user.get_report_printer(report_name)[0]

## raise Warning(["Printer:", printer_id.name])

picking_ids = pickings.filtered(lambda r: not r.printed)

## raise Warning(["Print Pickings:", picking_ids])

if picking_ids:
	log('Start print job for %s on %s' % (picking_ids, printer_id))

number_of_copies = 1
report_id = env.ref(report_name)

printer_id.printnode_print(
  report_id,
  picking_ids,
  copies=number_of_copies
)

picking_ids.write({'printed': True})
```

### Geplante Aktion "Print Scenario Datum aktualisieren" erstellen

Navigieren Sie nach *Einstellungen > Technisch > Geplante Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Print Scenario Datum aktualisieren`\
Modell: `ir.actions.server`\
Ausführen alle: `1` Tage\
Nächstes Ausführungsdatum: `DD.MM.YYYY 05:00:00`\
Anzahl der Anrufe: `-1`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Pythoncode*:

```python
printnode_scenario = env.ref("printnode_base.print_picking_document_after_so_confirmation_scenario")
date = (datetime.datetime.now() + datetime.timedelta(days=1)).strftime('%Y-%m-%d')
printnode_scenario['domain'] = '[["commitment_date", "<=", "' + date + '"]]'
```

## Troubleshooting

### Druckereinstellungen haben keinen Effekt

#### Problem

Die Druckereinstellung auf dem Computer mit dem PrintNode Client haben kein Effekt auf den Druckvorgang.

#### Ursache

Der PrintNode Client ist als Dienst installiert und läuft unter einem anderen Benutzer.

#### Lösung

Der PrintNode Client muss als Programm und nicht als Dienst installiert werden.

Quelle: <https://www.printnode.com/en/faq#q13>

### Drucken mit Methode führt zu Fehler

#### Problem

Wenn Sie eine [Methode erfassen](#Methode%20erfassen) und diese aufrufen wird der folgende Fehler geworfen:

```
ValueError: dictionary update sequence element #0 has length 1; 2 is required
```

#### Ursache

Aufgrund der Methode muss der Druckauftrag vor Ausführung der Methode ausgelöst werden.

#### Lösung

Auf der entsprechenden Methode die Option *Print before action* aktivieren.