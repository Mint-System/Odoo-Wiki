---
tags:
- HowTo
- Drittanbieter
prev: ./personalabrechnung
---
# Gio Payroll Custom
![](assets/odoo_icon_gioardano.png)

Lohnarten für die Schweizer Lohnabrechnung.

Technischer Name: `gio_payroll_custom`\
Repository: <https://gitlab.com/mint-system/odoo-apps-swiss-payroll/-/tree/15.0>

## Konfiguration

### Schweizer Lohnarten aktivieren

Mit der Installation dieser Erweiterung werden Schweizer Lohnarten aktiviert. Navigieren Sie nach *Personalabrechung > Konfiguration > Regeln*.

![](assets/Swiss%20Payroll%20Vorschau.png)

### Standardlohnregeln entfernen

Navigieren Sie nach *Personalabrechung > Konfiguration > Regeln* und archivieren Sie diese Lohnregeln:

* ​Grundgehalt (BASIC)
* Brutto (GROSS)
* Nettogehalt (NET)

### Gehaltsstruktur auf Strukturtyp festlegen

Navigieren Sie nach *Personalabrechnung > Konfiguraiton > Strukturtypen* und wählen Sie hier *Montaslohn* aus. Im Feld *Reguläre Gehaltsstruktur* wählen Sie den Wert *Lohnabrechnung* aus und speichern die Bearbeitung.

### Strukturtyp auf Arbeitsvertrag festlegen

Navigieren Sie nach *Personalabrechnung > Verträge > Verträge* und öffnen Sie einen Arbeitsvertrag. Im Feld *Art der Gehaltsstruktur* wählen Sie *Monatslohn*aus.

### Lohnart zum Aufrunden des Nettolohns erstellen

Damit der Nettolohn auf 0.05 CHF aufgerundet wird, müssen Sie folgende [Lohnart erstellen](Personalabrechnung.md#Lohnart%20erstellen):

* **Regelbezeichnung**: Aufrunden
* **Kategorie**: Zuwendung
* **Code**: ROUND
* **Vergütungsstruktur**: Lohnabrechnung
* **Erscheint in der Lohnabrechnung**: Deaktivieren
* **Reihenfolge**: 199

Im Tab *Allgemein* machen Sie diese Angaben:

* **Bedingung basiert auf**: Immer Wahr
* **Berechnungsart**: Python Code
* **Python Code**:

```python
amount = categories.BASIC + categories.ALW + categories.DED + categories.FALW + categories.PAG + categories.WNA
digits = 0.05
amount_round = round( (amount + digits / 2) / digits ) * digits
result = amount_round - amount
```

Damit der Rundungsbetrag als Verlust gebucht wird müssen Sie die entsprechenden [Finanzkonten den Lohnarten zuweisen](Personalabrechnung.md#Finanzkonten%20den%20Lohnarten%20zuweisen).

## Verwendung

### Anteile Arbeitgeber / Arbeitnehmer konfigurieren

Die Anteile des Arbeitgebener und Arbeitnehmer können als Vorlage erfasst werden. Die Anteile werde werden dem Arbeitsvertrag zugewiesen.

Möchten Sie eine neue Vorlage erstellen, öffnen Sie *Personalabrechnung > Konfiguration > Anteile Arbeitgeber / Arbeitnehmer* und wählen *Anlegen.*

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

Navigieren Sie nach *Personalabrechnung > Personal > Verträge* und zeigen Sie den Tab *Gehaltsinformationen* an. Wählen Sie im Feld *Lohntyp* den entsprechenden Wert aus.

### Gehaltsinformationen auf Arbeitsvertrag hinterlegen

Navigieren Sie nach *Personalabrechnung > Personal > Verträge*, öffnen Sie einen Vertrag und wählen Sie als erstes im Feld *Art der Gehaltsstruktur* den entsprechenden Wert aus. Füllen Sie im Tab *Gehaltsinformation* alle relevanten Felder aus.

* **Vergütung**: Geben Sie hier den Monatslohn an, wenn die *Art der Gehaltsstruktur* *Monatslohn* entspricht
* **Hourly Wage**: Geben Sie hier den Stundelohn an, wenn die *Art der Gehaltsstruktur* *Stundenlohn* entspricht
* **Lohntyp**: Wählen Sie hier Monatslohn oder Stundenlohn aus
* **Monatslohn**: Geben Sie hier nochmals den Monatslohn an
* **Stundenlohn**: Geben Sie hier nochmals den Stundenlohn an
* **Anteile AN / AG**: Wählen Sie hier den Eintrag mit den aktuellsten Werten aus

### Struktur Lohnabrechnung konfigurieren

Navigieren Sie nach *Personalabrechnung > Konfiguration > Structures* und öffnen Sie den Eintrag *Lohnabrechnung*. Diese Lohnstruktur wurde von der Erweiterung erstellt. Passen Sie diese gemäss Anforderungen an.

## Bericht

### Lohndeklaration AVH anzeigen

Damit die Lohndeklaration für die Ausgleichsklasse einfacher gemacht werden, können Sie eine neue Lohnregel erstellen:

![](assets/Payroll%20Customizations%20Giordano%20Lohndeklaration.png)

* **Regelbezeichnung**: # Lohndeklaration AHV
* **Kategorie**: Lohndeklaration (DLK)
* **Code**: 4999
* **Vergütungsstruktur**: Lohnabrechnung
* **Erscheint in der Lohnabrechnung**: Deaktivieren
* **Reihenfolge**: 99

Im Tab *Allgemein* machen Sie diese Angaben:

* **Bedingung basiert auf**: Immer Wahr
* **Berechnungsart**: Python Code
* **Python Code**:

```python
result = categories.BASIC + categories.ALW + categories.PAG
```