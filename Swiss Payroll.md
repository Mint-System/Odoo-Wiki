---
tags:
- HowTo
- Drittanbieter
prev: ./personalabrechnung
---
# Swiss Payroll
![](assets/odoo_icon_gioardano.png)

Lohnabrechnung nach Schweizer Anforderungen.

Technischer Name: `gio_payroll_custom`\
Repository: <https://gitlab.giordano.ch/odoo/giordano-addons/payroll/gio_payroll_custom>

## Anteile Arbeitgeber / Arbeitnehmer konfigurieren

Die Anteile des Arbeitgebener und Arbeitnehmer können als Vorlage erfasst werden. Die Anteile werde werden dem Arbeitsvertrag zugewiesen.

Möchten Sie eine neue Vorlage erstellen, öffnen Sie *Personalabrechnung > Konfiguration > Anteile Arbeitgeber / Arbeitnehmer* und wählen *Anlegen.*

Geben Sie einen Namen mit Jahresdatum ein und legen Sie die Fix- und Prozentwerte fest.

::: warning
Legen Sie unbedingt die Monatslohngrenze fest. Nur dann werden ALV und NBU korrekt berechnet.
:::

![](assets/Pesonalabrechnung%20Anteile%20Arbeitnehmer%20Arbeitgebener.png)

## Lohndeklaration AVH anzeigen

Damit die Lohndeklaration für die Ausgleichsklasse einfacher gemacht werden, können Sie eine neue Lohnregel erstellen:

![](assets/Payroll%20Customizations%20Giordano%20Lohndeklaration.png)