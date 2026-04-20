---
title: Entwicklung Buchhalung
description: Buchhaltungs-Berichte anpassen und erweitern.
kind: howto
section: true
prev: ./development
---

# Entwicklung Buchhaltung

![icons_odoo_web_studio](attachments/icons_odoo_web_studio.png)

{{ $frontmatter.description }}

## Verwendung

### Definition Buchhaltungsbericht anzeigen

Navigieren Sie nach _Buchhalung > Konfiguration > Buchhalungsberichte_. Rufen Sie einen ausgewählten Bericht auf.

### Zeile in Buchhaltungsbericht hinzufügen

Wenn Sie die [Definition Buchhaltungsbericht anzeigen](#Definition%20Buchhaltungsbericht%20anzeigen) asuführen, können Sie neue Zeilen hinzufügen:

- **Name**: Geben Sie einen Namen im folgenden Schema ein:

```
Steuerziffer - Typ Steuersatz (Steuersatz in Prozent): Bezeichnung
```

- **Ebene**: Stufe im Bericht.
- **Übergeordnete Zeile**: Zur hierarchischen Gliederung wählen Sie die überliegende Zeile aus.
- **Code**: Geben Sie einen eindeutigen Code ein.
- **Formeln**:
  - **Buchungstext**: Verwenden Sie hier `balance`.
  - **Berechnungsmaschine**: Art und Weise der Berechnung.
  - **Formel**: Wenn Sie Odoo-Bereich gewählten haben, geben Sie einen Domänen-Ausdruck wie beispielsweise `[("tax_line_id.name", "ilike", "Online Stellenportal")]` ein.
  - **Unterformel**: Wenn Sie Odoo-Bereich gewählt haben, geben Sie `-sum` ein.

### Brutto 1 und Brutto 2 in Schweizer Erfolgsrechnung hinzufügen

Fügen Sie gemäss [Zeile in Buchhaltungsbericht hinzufügen](#Zeile%20in%20Buchhaltungsbericht%20hinzufügen) dem Bericht _Erfolgsrechnung (CH)_ die folgenden Zeilen hinzu.

Hinzufügen Bruttogewinn 1:

- **Name**: Bruttogewinn 1
- **Ebene**: 0
- **Code**: CH_BG1
- **Buchungstext**: `balance`
- **Berechnungsmaschine**: Andere Formel zusammenführen
- **Formel**: CH_3.balance + CH_4.balance

Hinzufügen Bruttogewinn 2:

- **Name**: Bruttogewinn 2
- **Ebene**: 0
- **Code**: CH_BG2
- **Buchungstext**: `balance`
- **Berechnungsmaschine**: Andere Formel zusammenführen
- **Formel**: CH_BG1.balance + CH_5.balance

Anpassung bestehende EBITDA-Zeile:

- **Code**: CH_EBITDA
- **Formel**: CH_BG2.balance + CH_6.balance
