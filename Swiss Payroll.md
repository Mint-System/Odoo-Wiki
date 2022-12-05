---
tags:
- HowTo
- Drittanbieter
prev: ./personalabrechnung
---
# Swiss Payroll
![](assets/odoo_icon_gioardano.png)

Lohnarten für die Schweizer Lohnabrechnung.

Technischer Name: `gio_payroll_custom`\
Repository: <https://gitlab.giordano.ch/odoo/giordano-addons/payroll/gio_payroll_custom>

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

### Lohndeklaration AVH anzeigen

Damit die Lohndeklaration für die Ausgleichsklasse einfacher gemacht werden, können Sie eine neue Lohnregel erstellen:

![](assets/Payroll%20Customizations%20Giordano%20Lohndeklaration.png)