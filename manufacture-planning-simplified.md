---
title: Fertigung Planung vereinfachen
description: Fertigungsplanung möglichst einfach Umsetzen
kind: howto
tags:
  - Mint-System
prev: ./manufacture
---

# Fertigung Planung vereinfachen

![icons_odoo_mrp](attachments/icons_odoo_mrp.png)

{{ $frontmatter.description }}

Die Fertigungsdaten eines Produktionsbetriebes sollen so organisiert und gepflegt werden, dass Abläufe im Alltag möglichst zuverlässig und unkompliziert erledigt werden können.

## Grad der Automatisierung bestimmen

Bei jedem Schritt der Datenpflege soll bewusst entschieden werden, wie stark auf die automatischen Hilfsmittel von Odoo zurückgegriffen wird. Dabei helfen folgende Fragen:

- Wer pflegt im Alltag die Daten und bestätigt erledigte Arbeitsschritte? 
- Wie fein sollen Arbeitsabläufe in Odoo abgebildet und planbar werden?
- Lässt sich beispielsweise eine Beschaffungsstrategie genügend präzise in verfügbaren Regelvorlagen beschreiben?
- Wird ein scheinbar einfacher Vorgang oft aufgrund von Betriebskenntnissen angepasst?

::: tip
Es lohnt sich, bei der Beantwortung dieser Fragen den aktuellen Zustand oder eine erreichbare Verbesserung zu beschreiben. Daten anhand eines Ideals zu pflegen kann zu Mehraufwand und Unordnung führen.
:::

### Beispiele

1. In einem Betrieb mit stabil etablierten Abläufen, eingespielter Arbeitsteilung und digitalisierten Arbeitsplätzen in der Fertigung kann in grossem Masse auf automatische Abläufe in Odoo und fein definierte Fertigungsaufträge gesetzt werden. Damit wird der Aufwand von Fertigungsplanung reduziert sowie Produktionsindikatoren einfach erhebbar.
2. In einem Betrieb mit vielen Spezialaufträgen, viel Kompetenz bei den Produktionsmitarbeiter\*innen und geringem Digitalisierungsgrad erlauben die manuellen Werkzeuge in Odoo mit wenig Aufwand den Überblick zu behalten und situativ die Realität im ERP abzubilden.

## Datenpflege

Für jedes Produkt müssen die Daten in Odoo gepflegt sein. Die Grundlagen hierzu sind in [Manufacture Data Management](Manufacture%20Data%20Management.md) beschrieben. Mit Blick auf die Fertigungsplanung werden hier weitere Aspekte beschrieben.

### Routen

In _Fertigung > Produkte > Produkte_ das betreffende Produkt auswählen. Im Reiter _Lager > Vorgänge_ können die gewünschten Routen gewählt werden. Die Routen legen fest, wie der Bedarf ausgeglichen werden soll.

![Fertigung Produkt Routen](attachments/Fertigung%20Produkt%20Routen.png)

Die Option _Auffüllung nach Auftrag (Auftragsfertigung)_ ist sinnvoll, wenn eine 1-zu-1 Beziehung zwischen Verkaufsauftrag und Fertigungsauftrag/Einkaufsbestellung bestehen soll. Mit der Option Auftragsfertigung wird jeweils ein Fertigungsauftrag respektive eine Angebotsanfrage automatisch erstellt, sofern das Produkt noch nicht verfügbar ist. Mittels Smart-Button kann direkt zum erstellten Element und zurück navigiert werden. Die Option Auftragsfertigung ist im Standard archiviert und setzt voraus, dass _Lager > Konfiguration > Einstellungen >  Lagerhaus > Mehrstufige Routen_ aktiviert ist. Danach kann die Option in _Lager > Konfiguration > Routen > Filter: Archiviert_  mit _Archivierung aufheben_ verfügbar gemacht werden.

### Stücklisten

Zu einem Produkt mit der Route _Fertigung_ legt die Stückliste fest, mit welchen _Komponenten_ und Arbeitsschritten (_Vorgänge_) das Produkt hergestellt wird.

![Fertigung Stückliste Smartbutton](attachments/Fertigung%20Stückliste%20Smartbutton.png)

Von der Produktansicht gelangt man über den Smart Button _Stückliste_ zur Stückliste.

![Fertigung Stückliste](attachments/Fertigung%20Stückliste.png)

Wenn ein Bedarf für dieses Produkt aufgefüllt wird, erstellt Odoo anhand der Stückliste einen Fertigungsauftrag. Mit dem Stücklistentyp _Bausatz_ kann dies unterbunden werden: Die Komponenten dieser Stückliste werden dann einzeln in den übergeordneten Fertigungsauftrag übernommen.

### Nachbestellregeln

Falls der Bestand eines Produkts automatisch aufgefüllt werden soll, kann dies in Nachbestellregeln definiert werden. Aus der Produktansicht findet man diese mittels dem entsprechenden Smart Button

![Fertigung Nachbestellregeln Smartbutton](attachments/Fertigung%20Nachbestellregeln%20Smartbutton.png)

Nachbestellregeln erzeugen bei Bedarf automatisch Offertanfragen (bei Route _Einkaufen_) oder Fertigungsaufträge (bei Route _Fertigung_).