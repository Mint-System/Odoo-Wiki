---
description: Mindestbestellmenge eines Produkts als Default im Webshop festlegen.
forge: github.com
kind: howto
name: sale_restricted_qty_default
partner: Mint System
prev: ./sale
repo: Mint-System/Odoo-Apps-Sale-Workflow
title: Sale Restricted Qty Default
versions:
- '18.0'
---


# Sale Restricted Qty Default

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Beschreibung

Mit dieser Erweiterung wird der Mindestbestellwert eines Produkts für einen Verkauf im Webshop als Vorgabewert für die Produktmenge, die dem Warenkorb hinzugefügt werden soll, gesetzt.
Im Backend können Verkäufer mit entsprechende Berechtigung die Mindestmenge unterschreiten.
