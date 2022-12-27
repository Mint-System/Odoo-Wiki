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

## Verwendung

### Anteile Arbeitgeber / Arbeitnehmer konfigurieren

Die Anteile des Arbeitgebener und Arbeitnehmer können als Vorlage erfasst werden. Die Anteile werde werden dem Arbeitsvertrag zugewiesen.

Möchten Sie eine neue Vorlage erstellen, öffnen Sie *Personalabrechnung > Konfiguration > Anteile Arbeitgeber / Arbeitnehmer* und wählen *Anlegen.*

Geben Sie einen Namen mit Jahresdatum ein und legen Sie die Fix- und Prozentwerte fest.

::: warning
Legen Sie unbedingt die Monatslohngrenze fest. Nur dann werden ALV und NBU korrekt berechnet.
:::

![](assets/Pesonalabrechnung%20Anteile%20Arbeitnehmer%20Arbeitgebener.png)

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