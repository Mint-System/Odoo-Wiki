---
title: Odoo Direct Print
description: Jeden Odoo Bericht oder Etikette von überall nach überall drucken.
kind: howto
partner: Mint-System
prev: ./iot
---

# Odoo Direct Print

![](attachments/icons_odoo_printnode_base.png)

{{ $frontmatter.description }}

Technischer Name: `printnode_base`\
Repository: <https://gitlab.com/mint-system/odoo-apps-partner/-/tree/14.0/printnode_base>\
Odoo App Store: <https://apps.odoo.com/apps/modules/14.0/printnode_base/>\
Video: [Odoo Experience 2021 - Automating Direct Printing](https://www.youtube.com/watch?v=6dnHvpsukPg)

## Konfiguration

### PrintNode API Key generieren

Loggen Sie sich unter <https://app.printnode.com/app/apikeys> ein. Geben Sie die URL der Odoo-Instanz ein und wählen Sie _Create_.

![](attachments/Odoo%20Direct%20Print%20Generate%20API%20Key.png)

### API Key in Odoo einfügen

Unter _Einstellungen > Direct Print > Account_ müssen Sie den _API Key_, den Sie von <https://app.printnode.com/app/apikeys> erhalten haben, eintragen.

![](attachments/Odoo%20Direct%20Print%20Key%20einfügen.png)

### PrintNode Client installieren

Öffnen Sie <https://app.printnode.com/app/downloads> und installieren die den Client für ihr Betriebssystem.

Starten Sie den _PrintNode_ Client und loggen Sie sich mit dem PrintNode-Account ein.

![](attachments/PrintNode%20Sign%20In.png)

## Druckerverwaltung

### PrintNode Client Drucker hinzufügen

Der PrintNode Client erkennt die angeschlossenen Drucker automatisch. Falls das nicht der Fall ist, muss der Drucker-Treiber installiert werden.

**MacOS**

Unter MacOS fügen Sie den Drucker wie folgt hinzu.

![](attachments/PrintNode%20Mac%20OS%20Drucker%20hinzufügen.png)

Einmal konfiguriert wird der Drucker im PrintNode Client angezeigt:

![](attachments/PrintNode%20Client%20Drucker%20anzeigen.png)

### Direktes Drucken aktivieren

Damit Druckaufträge mit PrintNode gerduckt werden können, muss dies explizit festgelegt werden. Öffnen Sie _Einstellungen > Direct Print_ und aktivieren Sie die Option _Print via Direct Print_.

Wurde entweder ein globaler Standarddrucker festegelegt oder ein Standarddrucker auf dem dem Benutzer (siehe [Direktes Drucken für Benutzer einrichten](#Direktes%20Drucken%20für%20Benutzer%20einrichten)), dann erscheint bei druckbaren Objekten das folgende Aktions-Menu:

![](attachments/Odoo%20Direct%20Print%20Action%20Menu.png)

### Drucker in Odoo anzeigen

Zeigen Sie _Direct Print > Configuration > Printers_ an. Hier werden alle verfügbaren Drucker aufgelistet.

![](attachments/Odoo%20Direct%20Print%20Beispiel.png)

Mit der Aktion _Einstellungen > Direct Print > Import Printers_ werden die auf PrintNode verfügbaren Drucker importiert.

## Testen

### PrintNode App Testseite drucken

Loggin Sie sich auf <https://app.printnode.com> ein und wählen Sie _Print something_. Wählen Sie eine Quelle, Drucker und die Testseite aus und erstellen Sie einen Druckauftrag mit _Print_.

![](attachments/Odoo%20Direct%20Print%20Testseite%20drucken.png)

## Druckszenarien

### Methode erfassen

Navigieren Sie nach _Direct Print > Configuration > Methods_ und erstellen Sie einen neuen Eintrag. Dazu ein Beispiel für den Abschluss von Fertigungsaufträgen:

- **Model**: `mrp.workorder`
- **Name**: Weiterfahren
- **Method**: `action_open_manufacturing_order`

### Druck-Aktion erstellen

Wenn Sie beispielsweise beim Abschliessen eines Fertigungsauftrags einen Bericht drucken möchten, müssen Sie dazu eine Druck-Aktion erfassen. Zeigen Sie _Direct Print > Print Action Buttons_ an und erstellen Sie den folgenden Eintrag:

- **Model**: `mrp.workorder`
- **Method ID**: Weiterfahren (siehe [Methode erfassen](#Methode%20erfassen))
- **Description**: Print product labels when workorder is continued
- **Report**: Wählen Sie den Bericht aus.

### Druckszenario aktivieren

::: warning
Für den aktuellen Benutzer muss die Option _Print via Direct Print_ aktiviert sein.
:::

Odoo Direct Print stellt gängige Druckszenarios unter _Direct Print > Print Scenarios_ zur Verfüng. Aktivieren Sie ein Senario mit einem Klick auf _Active_ und wählen Sie einen Drucker aus.

![](attachments/Odoo%20Direct%20Print%20Szenario%20aktiviert.png)

### Druck-Aktion aktivieren

::: warning
Für den aktuellen Benutzer muss die Option _Print via Direct Print_ aktiviert sein.
:::

Mit Odoo Direct Print können Druckaktionen ganz einfach hinzugefügt werden. Öffnen Sie die Ansicht _Direct Print > Print Action Buttons_. Aktivieren Sie eine Aktion mit einem Klick auf _Active_ und wählen Sie einen Drucker aus.

![](attachments/Odoo%20Direct%20Print%20Buttons.png)

In diesem Beispiel wird der Lieferschein ausgedruck, sobald auf einem Lieferschein der Knopf _Bestätigen_ gedrückt wurde.

### Produktlabel von Lieferauftrag drucken

Öffnen Sie eine Lieferung via _Lager > Lieferaufträge > Lieferauftrag auswählen_ und klicken Sie auf _Aktionen > Print Product Labels_

![](attachments/Odoo%20Direct%20Print%20Producut%20LAbels.png)

::: tip
Beachten Sie dass der Druckvorgang einige Sekunden in Anspruch nimmt.
:::

### Packvorgang/Lieferschein automatisch drucken

Mit Druck-Senarien können Sie Druckvorgänge automatisieren. Damit der Packvorgang nach der Bestätigung eines Verkaufsauftrags automatisch gedruckt wird, navigieren Sie als erstes nach _Direct Print > Print Scenarios_. Aktivieren Sie die Zeile _Print Picking Document after Sales Order Confirmation_.

Für das automatische Drucken das Lieferschein aktivieren Sie die Zeile _Print document on Backorder (created after Transfer validation_.

## Einstellungen

### Direktes Drucken für Benutzer einrichten

Für das direkte Drucken kann dem Benutzer ein Standarddrucker zugewiesen werden. Navigieren Sie nach _Einstellungen > Benutzer und Unternehmen > Benutzer > Benutzer auswählen > Tab Einstellungen_ und legen Sie im Abschnitt _Print_ die Standarddrucker fest. Mit der Option _Print via Direct Print_ wird das direkte Drucken aktiviert.

### Standarddrucker für Bericht festlegen

Unter _Direct Print > Print Report Policy > User Rules_ können Sie für jeden Benutzer den Standarddrucker für einen bestimmten Bericht festlegen. Erstellen Sie dazu einen Eintrag, wählen Sie den Benutzer, Drucker und Bericht aus.

![](attachments/Odoo%20Direct%20Print%20Default%20Printer.png)

## Papierformat

### Papierformat anlegen

Unter _Direct Print > Configuration > Papers_ können Sie Papierformat für Bericht hinterlegen.

![](attachments/Odoo%20Direct%20Print%20Papers.png)

### Papiefromat für Drucker festlegen

Erstellen Sie unter _Direct Print > Print Report Policy > Printer Settings_ einen Eintrag für ihren Drucker.

![](attachments/Odoo%20Direct%20Print%20Printer%20Settings.png)

### Papieformat für Bericht festlegen

Erstellen Sie unter _Direct Print > Print Report Policy > Report Settings_ einen Eintrag für ihren Bericht.

::: tip
Odoo Direct Print gibt eine Warnung aus, wenn das Papieformat nicht mit dem verknüpften Drucker übereinstimmt.
:::

## Aktionen

### Produktetiketten drucken

Auf Transfers _Lager > Vorgänge > Transfers_ können Sie eine bestimmte Anzahl Produktetiketten drucken. Öffnen Sie einen Transfer und wählen Sie _Aktionen > Print Product Labels_. Im Dialog wählen Sie den Bericht aus, bestimmen die Produkte und Anzahl der Etiketten, die Sie drucken möchten, wählen den Drucker aus und führen den Vorgang mit _Print_ aus.

![](attachments/Odoo%20Direct%20Print%20Print%20Product%20Labels.png)

## Geplante Aktionen

### Rüstschein drucken

Navigieren Sie nach _Einstellungen > Technisch > Geplante Aktionen_ und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Rüstschein drucken`\
Modell: `ir.actions.server`\
Ausführen alle: `1` Tage\
Nächstes Ausführungsdatum: `DD.MM.YYYY 07:00:00`\
Anzahl der Anrufe: `-1`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld _Python-Code_:

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

### Print Scenario Datum aktualisieren

Navigieren Sie nach _Einstellungen > Technisch > Geplante Aktionen_ und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Print Scenario Datum aktualisieren`\
Modell: `ir.actions.server`\
Ausführen alle: `1` Tage\
Nächstes Ausführungsdatum: `DD.MM.YYYY 05:00:00`\
Anzahl der Anrufe: `-1`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld _Python-Code_:

```python
printnode_scenario = env.ref("printnode_base.print_picking_document_after_so_confirmation_scenario")
date = (datetime.datetime.now() + datetime.timedelta(days=1)).strftime('%Y-%m-%d')
printnode_scenario['domain'] = '[["commitment_date", "<=", "' + date + '"]]'
```

## Troubleshooting

### Druckereinstellungen haben keinen Effekt

**Problem**

Die Druckereinstellung auf dem Computer mit dem PrintNode Client haben kein Effekt auf den Druckvorgang.

**Ursache**

Der PrintNode Client ist als Dienst installiert und läuft unter einem anderen Benutzer.

**Lösung**

Der PrintNode Client muss als Programm und nicht als Dienst installiert werden.

Quelle: <https://www.printnode.com/en/faq#q13>

### Drucken mit Methode führt zu Fehler

**Problem**

Wenn Sie eine [Methode erfassen](#Methode%20erfassen) und diese aufrufen wird der folgende Fehler geworfen:

```
ValueError: dictionary update sequence element #0 has length 1; 2 is required
```

**Ursache**

Aufgrund der Methode muss der Druckauftrag vor Ausführung der Methode ausgelöst werden.

**Lösung**

Auf der entsprechenden Methode die Option _Print before action_ aktivieren.
