---
description: EBICS-Apps mit Odoo Enterprise Buchhaltung integrieren.
forge: github.com
kind: howto
name: account_ebics_oe
partner: Thirdparty
prev: ./accounting
repo: Noviat/account_ebics
title: EBICS banking Odoo Enterprise
versions:
- '17.0'
---


# EBICS banking Odoo Enterprise

![](attachments/icons_odoo_ebics.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Website: <https://apps.odoo.com/apps/modules/18.0/account_ebics_oe>\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Dieses Modul verbindet das EBICS-App mit der Finanzbuchhaltung. Es stellt sicher, dass aus verarbeiteten EBICS-Downloads ein Bankauszug generiert wird. Umgkehrt werden aus Zahlungsdateien EBICS-Uploads erstellt.
