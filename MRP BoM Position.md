---
tags:
- HowTo
- Drittanbieter
prev: ./order-positions
---
# MRP BoM Position
![icon_oms_box](assets/icon_oms_box.png)

Jede Komponente in der Stückliste erhält eine Positionsnummer.

Technischer Name: `mrp_bom_position`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Manufacture/tree/14.0/mrp_bom_position>

## Verwendung

### Positionsnummern generieren

Mit dieser Erweiterung wird auf jeder Stückliste für jede Komponente eine Positionsnummer generiert.

![](assets/MRP%20BoM%20Position.png)

### Positionsnummer anzeigen

Unter <https://odoo.build/snippets.html> finden Sie Snippets mit der Bezeichnung *Get Postition*, beispielsweise <https://odoo.build/snippets/purchase.html#get-position>. Verwenden Sie diese Snippets um auf Berichten, die Positionsnummer aus Verkaufs-, Einkaufs- und Fertigungsaufträgen anzuzeigen.

![](assets/MRP%20BoM%20Position%20Report.png)

### Aktion "Positionsnummer festlegen" erstellen

Navigieren Sie nach *Einstellungen > Technisch > Server Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Positionsnummer festlegen`\
Modell: `mrp.bom`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Pythoncode*:

```python
for record in records:  
  record.set_position()
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.

In der Listen- und Formularansicht der Stücklisten haben Sie nun *Aktion > Positionsnummer festlegen* zur Auswahl.