---
description: Service-Benutzer von Lizenzvertrag ausschliessen.
forge: github.com
kind: howto
name: mail_service_users
partner: Mint System
prev: ./base
repo: Mint-System/Odoo-Apps-Server-Tools
title: Mail Service Users
versions:
- '19.0'
- '18.0'
- '17.0'
- '16.0'
- '15.0'
- '14.0'
---


# Mail Service Users

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Benutzer als Service-Benutzer festlegen

Mit dieser Erweiterung können Sie bestimmte Benutzer als _Service-Benutzer_ markieren. Diese Benutzer werden vom Lizenzvertrag von Odoo augeschlossen. Sie dürfen diese Benutzer nicht als persönliches Login verwenden.

Rufen Sie einen Benutzer via _Einstellungen > Benutzer und Unternehmen > Benutzer_ auf. Setzen Sie die Checkbox wenn es sich um einen Service-Benutzer handelt.

![](attachments/Mail%20Service%20Users.png)

Unter Einstellungen wird die Zahl der aktiven Benutzer entsprechend angepasst.

![](attachments/Mail%20Service%20Users%20Einstellungen.png)

::: warning
Dieses Modul verändert die Berechnung der aktiven Benutzer auf dem System. Ist die Erweiterung aktiv können Sie gegen Bedingungen im [Odoo Enterprise Abonnementsvertrag](https://www.odoo.com/documentation/18.0/legal/terms/enterprise.html#enterprise-agreement) verstossen.
:::
