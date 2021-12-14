---
tags:
- HowTo
- Drittanbieter
---
[> Personalabrechnung](Personalabrechnung.md)
# Payroll Customizations Giordano
![](assets/odoo_icon_gioardano.png)

Lohnabrechnung nach Schweizer Anforderungen.

Technischer Name: `gio_payroll_custom`\
Repository: <https://gitlab.giordano.ch/odoo/giordano-addons/swiss-payroll/-/tree/14.0/gio_payroll_custom>

## Anteile Arbeitgeber / Arbeitnehmer konfigurieren

Die Anteile des Arbeitgebener und Arbeitnehmer können als Vorlage erfasst werden. Die Anteile werde werden dem Arbeitsvertrag zugewiesen.

Möchten sie eine neue Vorlage erstellen, öffnen sie *Personalabrechnung > Konfiguration > Anteile Arbeitgeber / Arbeitnehmer* und wählen *Anlegen.*

Geben sie einen Namen mit Jahresdatum ein und legen sie die Fix- und Prozentwerte fest.

::: warning
Legen sie unbedingt die Monatslohngrenze fest. Nur dann werden ALV und NBU korrekt berechnet.
:::

![](assets/Pesonalabrechnung%20Anteile%20Arbeitnehmer%20Arbeitgebener.png)