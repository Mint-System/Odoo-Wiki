---
description: Odoo-Metriken mit Prometheus monitoren.
forge: github.com
kind: howto
name: prometheus_exporter
partner: Mint System
prev: ./development
repo: Mint-System/Odoo-Apps-Server-Tools
title: Prometheus Exporter
versions:
- '19.0'
---


# Prometheus Exporter

![](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Odoo-Metrik erstellen

Navigieren Sie nach _Einstellungen > Technisch > Metrics_ und erstellen Sie einen neuen Eintrag.

::: tip
Standardmässig werden die Anazahl der Einträge gemäss Datnemodell und Filter (Domain) als Metrik-Wert publiziert.
:::

![](attachments/Prometheus%20Exporter%20Metrics%20Details.png)

### Odoo-Metrik mit Operation erstellen

Als erstes müssen Sie eine [Odoo-Metrik erstellen](#Odoo-Metrik%20erstellen) und dann wählen Sie im optional Feld _Measured Field_ ein Feld. Wurde ein Feld ausgewählt erscheint die Option _Operation_. Hier können Sie das Berechnungsverfahren wählen.

![](attachments/Prometheus%20Exporter%20Measured%20Field.png)

### Odoo-Metriken abrufen

Die Odoo-Metriken werden unter `/metrics` bereitgestellt. Rufen Sie Sie die Metrik-Seite mit der Url <https://example.com/metrics> auf.

![](attachments/Prometheus%20Exporter%20Metrics.png)
