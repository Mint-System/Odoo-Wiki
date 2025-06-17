---
title: Entwicklung Buchhalung
description: Buchhaltungs-Berichte anpassen und erweitern.
kind: howto
prev: ./development
---
# Entwicklung Buchhaltung
![icons_odoo_web_studio](attachments/icons_odoo_web_studio.png)

{{ $frontmatter.description }}

## Verwendung

### Definition Buchhaltungsbericht anzeigen

Navigieren Sie nach *Buchhalung > Konfiguration > Buchhalungsberichte*. Rufen Sie einen ausgewählten Bericht auf.

### Zeile in Buchhaltungsbericht hinzufügen

Wenn Sie die [Definition Buchhaltungsbericht anzeigen](#Definition%20Buchhaltungsbericht%20anzeigen) fügen Sie eine Zeile hinzu:

* **Berichtszeile**: Geben Sie einen Namen im folgenden Schema:

	Steuerziffer - Typ Steuersatz (Steuersatz in Prozent): Bezeichnung

* **Übergeordnete Zeile**: Zur hierarchischen Gleiderung wählen Sie die überliegende Zeile aus.
* **Code**: Geben Sie einen eindeutigen Code ein.
* **Ausdrücke**:
	* **Ausdruck**: Verwenden Sie hier `balance`.
	* **Berechnungsmaschine**: Art und Weise der Berechnung.
	* **Formel**: Wenn Sie Odoo-Bereich gewählten haben, geben Sie einen Domänen-Ausdruck wie beispielsweise `[("tax_line_id.name", "ilike", "Online Stellenportal")]` ein.
	* **Unterformel**: Wenn Sie Odoo-Bereich gewählt haben, geben Sie `-sum` ein.
