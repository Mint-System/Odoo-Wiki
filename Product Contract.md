---
title: Product Contract
description: Verbindet Produkte mit Kundenverträgen.
kind: howto
partner: OCA
prev: ./contract
---
# Product Contract

![icon_oms_box](../attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: `product_contract`\
Repository: <https://github.com/OCA/https://github.com/OCA/contract/tree/17.0/product_contract/tree/17.0/product_contract>

## Beschreibung

Mit diesem Modul kann ein Produkt als Vertragsprodukt gekennzeichnet werden. Wird ein Verkaufsautrag für ein solches Produkt angelegt, wird gleichzeitig ein Kundenvertrag zu dem Produkt angelegt. Über Smart Buttons kann zwischen Produkt und zugehörigem Vertrag hin- und hergewechselt werden.

## Verwendung

### Einstellung für Produkt

1. Man öffnet ein vorhandenes Produkt oder erstellt ein neues.
2. Durch Anklicken der Checkbox *Ist ein Vertrag* wird das Produkt als Vertragsprodukt ausgezeichnet.
3. Im Reiter Vertrag (oder direkt beim Anlegen des Produkts) können weitere Vertragsdetails wie Startdatum und Auto-Erneuerung konfiguriert werden.

::: warning
Das Modul erlaubt nur, Produkte vom Typ *Dienstleistung* als Vertragsprodukt auszuzeichnen.
:::

### Verkaufsauftrag

Wird ein neuer Verkaufsauftrag mit einem Vertragsprodukt angelegt und bestätigt, wird gleichzeitig ein Kundenvertrag generiert. Die Details des Kundenvertrags können auf Produktebene oder auf Vertragsebene geändert werden.

Enthält ein Verkaufsautrag mehrere Vertragsprodukte, wird ein gemeinsamer Kundenvertrag angelegt.

::: tip
Wird nachträglich einem Verkaufsauftrag mit Kundenvertrag ein weiteres Vertragsprodukt hinzugefügt, wird ein neuer Kundenvertrag angelegt.
:::

Per Smart Button kann man von einem Verkaufsauftrag zum zugehörigen Kundenvertrag springen und umgekehrt.

### Rechnungsstellung

Die Rechnung zu einem Verkaufsauftrag enthält nur die Nicht-Vertragsprodukte.

## Aktionen

### Wiederkehrendes Produkt in Vertrag umwandeln

Navigieren Sie nach *Einstellungen > Technisch > Server-Aktionen* und erstellen Sie einen neuen Eintrag:

Name der Aktion: `Wiederkehrendes Produkt in Vertrag umwandeln`\
Modell: `product.template`\
Folgeaktion: `Python-Code ausführen`

Kopieren Sie die folgenden Zeilen in das Feld *Python Code*:

```python
mapping = {
	"1M": "monthly",
	"1J": "yearly",
	"1Q": "quarterly",
	"3J": "yearly",
	"5J": "yearly",
	"2J": "yearly",
	"10J": "yearly",
	"7J": "yearly",
	"4J": "yearly",
}
for record in records:  
  record.write({
	  'recurring_invoice': False,
	  'is_contract': True,
	  'is_auto_renew': True,
	  'auto_renew_interval': int(record.subscription_template_id.code.replace("J", "").replace("Q", "").replace("M", "")),
	  'recurring_rule_type': mapping[record.subscription_template_id.code]
	})
```

Die Aktion mit dem Knopf *Kontextuelle Aktion erstellen* bestätigen und dann speichern.
