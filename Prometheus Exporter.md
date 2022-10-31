---
tags:
- HowTo
- Drittanbieter
prev: ./entwicklung
---
# Prometheus Exporter
![icon_oms_box](assets/icon_oms_box.png)

Odoo-Metriken mit Prometheus monitoren.

Technischer Name: `prometheus_exporter`\
Repository: <https://github.com/Mint-System/Odoo-Apps-Server-Tools/tree/14.0/prometheus_exporter>

## Verwendung

### Odoo-Metrik erstellen

Navigieren Sie nach *Einstellungen > Technisch > Metrics* und erstellen Sie einen neuen Eintrag.

::: tip
Standardmässig werden die Anazahl der Einträge gemäss Datnemodell und Filter (Domain) als Metrik-Wert publiziert.
:::

![](assets/Prometheus%20Exporter%20Metrics%20Details.png)

### Odoo-Metrik mit Operation erstellen

Als erstes müssen Sie eine [Odoo-Metrik erstellen](#Odoo-Metrik%20erstellen) und dann wählen Sie im optional Feld *Measured Field* ein Feld. Wurde ein Feld ausgewählt erscheint die Option *Operation*. Hier können Sie das Berechnungsverfahren wählen.

![](assets/Prometheus%20Exporter%20Measured%20Field.png)

### Odoo-Metriken abrufen

Die Odoo-Metriken werden unter `/metrics` bereitgestellt. Rufen Sie Sie die Metrik-Seite mit der Url <https://example.com/metrics> auf.

![](assets/Prometheus%20Exporter%20Metrics.png)