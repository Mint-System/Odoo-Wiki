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

## Odoo-Metrik erstellen

Navigieren Sie nach *Einstellungen > Technisch > Metrics* und erstellen Sie einen neuen Eintrag.

![](assets/Prometheus%20Exporter%20Metrics%20Details.png)

## Odoo-Metriken abrufen

Die Odoo-Metriken werden unter `/metrics` bereitgestellt. Rufen Sie Sie die Metrik-Seite mit der Url <http://example.com/metrics> auf.

![](assets/Prometheus%20Exporter%20Metrics.png)