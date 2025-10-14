---
title: Swiss Payroll
description: Lohnarten für die Schweizer Lohnabrechnung.
kind: howto
partner: Giordano
prev: ./hr-payroll
---

# Gio Payroll Custom

![](attachments/odoo_icon_gioardano.png)

{{ $frontmatter.description }}

Technischer Name: `gio_payroll_custom`\
Website: <https://www.giordano.ch/odoo/l%C3%B6sungen/lohnprogramm-ch-d>
Repository: <https://gitlab.com/mint-system/odoo-apps-swiss-payroll/-/tree/15.0>

## Konfiguration

### Schweizer Lohnarten aktivieren

Mit der Installation dieser Erweiterung werden Schweizer Lohnarten aktiviert. Navigieren Sie nach _Personalabrechung > Konfiguration > Regeln_.

![](attachments/Swiss%20Payroll%20Vorschau.png)

### Standardlohnregeln entfernen

Navigieren Sie nach _Personalabrechung > Konfiguration > Regeln_ und archivieren Sie diese Lohnregeln:

- ​Grundgehalt (BASIC)
- Brutto (GROSS)
- Nettogehalt (NET)

### Gehaltsstruktur auf Strukturtyp festlegen

Navigieren Sie nach _Personalabrechnung > Konfiguration > Strukturtypen_ und wählen Sie hier _Montaslohn_ aus. Im Feld _Reguläre Gehaltsstruktur_ wählen Sie den Wert _Lohnabrechnung_ aus und speichern die Bearbeitung.

### Strukturtyp auf Arbeitsvertrag festlegen

Navigieren Sie nach _Personalabrechnung > Verträge > Verträge_ und öffnen Sie einen Arbeitsvertrag. Im Feld _Art der Gehaltsstruktur_ wählen Sie *Monatslohn*aus.

### Lohnart zum Aufrunden des Nettolohns erstellen

Damit der Nettolohn auf 0.05 CHF aufgerundet wird, müssen Sie folgende [Lohnart erstellen](HR%20Payroll.md#Lohnart%20erstellen):

- **Regelbezeichnung**: Aufrunden
- **Kategorie**: Zuwendung
- **Code**: ROUND
- **Vergütungsstruktur**: Lohnabrechnung
- **Erscheint in der Lohnabrechnung**: Deaktivieren
- **Reihenfolge**: 199

Im Tab _Allgemein_ machen Sie diese Angaben:

- **Bedingung basiert auf**: Immer Wahr
- **Berechnungsart**: Python Code
- **Python Code**:

```python
amount = categories.BASIC + categories.ALW + categories.DED + categories.FALW + categories.PAG + categories.WNA
digits = 0.05
amount_round = round( (amount + digits / 2) / digits ) * digits
result = amount_round - amount
```

Damit der Rundungsbetrag als Verlust gebucht wird müssen Sie die entsprechenden [Finanzkonten den Lohnarten zuweisen](HR%20Payroll.md#Finanzkonten%20den%20Lohnarten%20zuweisen).

## Verwendung

### Anteile Arbeitgeber / Arbeitnehmer konfigurieren

Die Anteile des Arbeitgebener und Arbeitnehmer können als Vorlage erfasst werden. Die Anteile werde werden dem Arbeitsvertrag zugewiesen.

Möchten Sie eine neue Vorlage erstellen, öffnen Sie _Personalabrechnung > Konfiguration > Anteile Arbeitgeber / Arbeitnehmer_ und wählen _Anlegen._

Geben Sie einen Namen mit Jahresdatum ein und legen Sie die Fix- und Prozentwerte fest.

::: warning
Legen Sie unbedingt die Monatslohngrenze fest. Nur dann werden ALV und NBU korrekt berechnet.
:::

| Feld               | Wert               |
| ------------------ | ------------------ |
| Name               | 2023               |
| Monatslohngrenze   | 140'000.00         |
| AHV / IV / EO %    | 5.3000             |
| ALV %              | 1.1000             |
| NBU %              | 0.9130             |
| AHV / IV / EO AG % | AHV / IV / EO AG % |
| ALV AG %           | 1.1000             |
| BU %               | 0.1650             |

### Lohntyp festlegen

Navigieren Sie nach _Personalabrechnung > Personal > Verträge_ und zeigen Sie den Tab _Gehaltsinformationen_ an. Wählen Sie im Feld _Lohntyp_ den entsprechenden Wert aus.

### Gehaltsinformationen auf Arbeitsvertrag hinterlegen

Navigieren Sie nach _Personalabrechnung > Personal > Verträge_, öffnen Sie einen Vertrag und wählen Sie als erstes im Feld _Art der Gehaltsstruktur_ den entsprechenden Wert aus. Füllen Sie im Tab _Gehaltsinformation_ alle relevanten Felder aus.

- **Vergütung**: Geben Sie hier den Monatslohn an, wenn die _Art der Gehaltsstruktur_ _Monatslohn_ entspricht
- **Hourly Wage**: Geben Sie hier den Stundelohn an, wenn die _Art der Gehaltsstruktur_ _Stundenlohn_ entspricht
- **Lohntyp**: Wählen Sie hier Monatslohn oder Stundenlohn aus
- **Monatslohn**: Geben Sie hier nochmals den Monatslohn an
- **Stundenlohn**: Geben Sie hier nochmals den Stundenlohn an
- **Anteile AN / AG**: Wählen Sie hier den Eintrag mit den aktuellsten Werten aus

### Struktur Lohnabrechnung konfigurieren

Navigieren Sie nach _Personalabrechnung > Konfiguration > Structures_ und öffnen Sie den Eintrag _Lohnabrechnung_. Diese Lohnstruktur wurde von der Erweiterung erstellt. Passen Sie diese gemäss Anforderungen an.

## Bericht

### Lohndeklaration AVH anzeigen

Damit die Lohndeklaration für die Ausgleichsklasse einfacher gemacht werden, können Sie eine neue Lohnregel erstellen:

![](attachments/Payroll%20Customizations%20Giordano%20Lohndeklaration.png)

- **Regelbezeichnung**: # Lohndeklaration AHV
- **Kategorie**: Lohndeklaration (DLK)
- **Code**: 4999
- **Vergütungsstruktur**: Lohnabrechnung
- **Erscheint in der Lohnabrechnung**: Deaktivieren
- **Reihenfolge**: 99

Im Tab _Allgemein_ machen Sie diese Angaben:

- **Bedingung basiert auf**: Immer Wahr
- **Berechnungsart**: Python Code
- **Python Code**:

```python
result = categories.BASIC + categories.ALW + categories.PAG
```
