---
title: Entwicklung Datenmodelle
description: Odoo Datenmodell erweitern.
kind: howto
prev: ./development
---

# Entwicklung Datenmodelle

![icons_odoo_web_studio](attachments/icons_odoo_web_studio.png)

{{ $frontmatter.description }}

## Modelle

### Datenmodell anzeigen

Öffnen Sie _Einstellungen > Technisch > Datenbankstruktur > Modelle_ und suchen Sie das entsprechende Datenmodell.

### Datenmodell entfernen

Öffnen Sie _Einstellungen > Technisch > Datenbankstruktur > Modelle_ und suchen Sie das entsprechende Datenmodell. Markieren Sie dieses und wählen Sie _Aktionen > Löschen_.

::: warning
Diese Vorgang kann die Integrität und Verfügbarkeit des Systems beeinträchtigen. Führen Sie die Aktion nur aus, wenn Sie sich den möglichen Auswirkungen bewusst sind.
:::

## Felder

### Neues Feld hinzufügen

An jedem Objekt kann an einfach ein Feld hinzugefügt werden. Öffnen Sie eine Ansicht im Entwicklermodus und wählen Sie _Entwicklertools > Felder anzeigen_. Wählen Sie _+ Anlegen_ und geben Sie folgende Informationen ein:

- Feldname: Beginnt mit `x_` und darf keine Leerschläge enthalten und sollte kleingeschrieben und auf Englisch sein.
- Feldbezeichnung: Passender Name in der angezeigten Sprache.
- Typfeld-Text: Auswahls den Felddatentyps.

Dazu ein Beispiel mit [Abwesenheit](HR%20Holidays.md):

![](attachments/Entwicklung%20Neues%20Feld%20auf%20Abwesenheitszeiten.png)

### Neues berechnetes Feld hinzufügen

Wir nehmen an, dass Sie auf der Lagerbechnung ein berechnetes Feld benötigen. Dieses Feld soll die Anzahl Kisten berechnen, die es braucht um das Produkt zu verpacken. Immer wenn die _Erledigte Menge_ ändert, soll das Feld berechnet werden.

Erstellen Sie ein neues Feld unter _Einstellungen > Technisch > Datenbankstruktur > Felder_ mit diesen Attributen:

- **Feldname**: `x_count_boxes`
- **Feldbezeichnung**: Anzahl Kisten
- **Modell**: Lagerbuchung (technischer Name ist `stock.move`)
- **Typfeld-Text**: Ganzzahl
- **Basiseigenschaften**:
  - Nur Lesen
  - Gespeichert
- **Abhängigkeiten**: `quantity_done`
- **Berechnen**:

```python
for rec in self:
	if rec.product_packaging:
		if rec.product_packaging.name == "Schale":
			rec['x_count_boxes'] = (rec.quantity_done + 2.4)/2.5
		if rec.product_packaging.name == "Kiste":
			rec['x_count_boxes'] = (rec.quantity_done + 9)/10
```

Dieser Code berechnet abhängig von der gewählten Verpackung und deren Füllmenge die Anzahl Kisten. Mit Python-Code können Sie natürlich jegliche Logik für die Berechnung entwickeln.

![](attachments/Entwicklung%20Berechnetes%20Feld.png)

### Neues Beziehungs-Feld hinzufügen

Wir nehmen an, dass Sie auf der Auftragsposition ein Beziehungs-Feld benötigen. Dieses Feld soll die Kundenreferenz auf dem zugehörigen Verkaufsauftrag anzeigen.

Erstellen Sie ein neues Feld unter _Einstellungen > Technisch > Datenbankstruktur > Felder_ mit diesen Attributen:

- **Feldname**: `x_client_order_ref`
- **Feldbezeichnung**: Kundenreferenz
- **Modell**: Auftragsposition (technischer Name ist `sale.order.line`)
- **Typfeld-Text**: Text
- **Basiseigenschaften**:
  - Nur Lesen
  - Gespeichert
- **Beziehungs-Feld**: `order_id.client_order_ref`

![](attachments/Entwicklung%20Neues%20Beziehungs-Feld%20hinzufügen.png)

Dieses Feld können Sie nun in Berichten oder Listenansichten anzeigen.

### Datenmodell für Webfomulare freischalten

Navigieren Sie nach _Einstellungen > Technisch > Modelle_ und zeigen Sie das Datenmodell an, welche Sie für Webformulare freischalten möchten. Im Tab _Webformulare_ aktivieren Sie die Option _Nutzbar in Formularen_. Geben Sie eine passe Bezeichnung im Feld _Bezeichnung für die Formularaktion_ ein und schränken die verfügbaren Felder mit _Feld für benutzerdefinierte Formulardaten_ ein.
