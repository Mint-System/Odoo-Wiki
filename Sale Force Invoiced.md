---
description: Markieren Sie den Verkaufsauftrag als abgerechnet.
forge: github.com
kind: howto
name: sale_force_invoiced
partner: OCA
prev: ./sale
repo: OCA/sale-workflow
title: Sale Force Invoiced
versions:
- '19.0'
---


# Sale Force Invoiced

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Konfiguration

### Berechtigung für V:erkaufsauftrag als abgerechnet markieren" erteilen

Zeigen Sie die Gruppen unter *Einstellungen > Benutzer & Unternehmen > Gruppen* an. Suchen Sie nach *Enable Force Invoiced*. Öffnen Sie die Gruppe und fügen Sie Benutzer hinzu.

## Verwendung

### Verkaufsauftrag als abgerechnet markieren

Mit dieser Erweiterung können Sie einen Verkaufsauftrag unabhängig vom Abrechnungsstatus als abgerechnet festlegen. Öffnen Sie _Verkauf > Abzurechnen > Zu fakturierende Aufträge_ und wählen Sie den Auftrag, der nicht mehr als _Abzurechnen_ erscheinen soll. Setzten Sie die Option _als abgerechnet markieren_ im Tab _Weitere Informationen_.

![Sale Force Invoiced](attachments/Sale%20Force%20Invoiced.gif)
