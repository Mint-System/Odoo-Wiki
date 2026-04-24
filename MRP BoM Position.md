---
description: Jede Komponente in der Stückliste erhält eine Positionsnummer.
forge: github.com
kind: howto
name: mrp_bom_position
partner: Mint System
prev: ./order-positions
repo: Mint-System/Odoo-Apps-Manufacture
title: MRP BoM Position
versions:
- '17.0'
---


# MRP BoM Position

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Positionsnummern generieren

Mit dieser Erweiterung wird auf jeder Stückliste für jede Komponente eine Positionsnummer generiert.

![](attachments/MRP%20BoM%20Position.png)

### Positionsnummer anzeigen

Unter <https://odoo.build/snippets.html> finden Sie Snippets mit der Bezeichnung _Get Postition_, beispielsweise <https://odoo.build/snippets/purchase.html#get-position>. Verwenden Sie diese Snippets um auf Berichten, die Positionsnummer aus Verkaufs-, Einkaufs- und Fertigungsaufträgen anzuzeigen.

![](attachments/MRP%20BoM%20Position%20Report.png)

## Aktionen

### Positionsnummer festlegen

Navigieren Sie nach _Einstellungen > Technisch > Server-Aktionen_ und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Positionsnummer festlegen`\
Modell: `mrp.bom`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld _Python-Code_:

```python
for record in records:
  record.set_position()
```

Die Aktion mit dem Knopf _Kontextuelle Aktion erstellen_ bestätigen und dann speichern.

In der Listen- und Formularansicht der Stücklisten haben Sie nun _Aktionen > Positionsnummer festlegen_ zur Auswahl.
