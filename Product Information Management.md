---
description: Verwalten Sie Produktinformationen ganz flexibel.
forge: github.com
kind: howto
name: product_information_management
partner: Mint System
prev: ./product
repo: Mint-System/Odoo-Apps-Product-Attribute
title: Product Information Management
versions:
- '16.0'
---


# Product Information Management

![icon_oms_box](attachments/icons_odoo_mint_system.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Produktinformationen anlegen

Navigieren Sie nach _Verkauf > Konfiguration > Product Informations_ und erstellen Sie einen neuen Eintrag. Wählen Sie einen _Key_ aus und erfassen Sie einen _Value_.

::: tip
Produktinformationen können für mehrere Produkte verwendet werden. Werte in Produktinformationen können für mehrere Einträge verwendet, wenn der Attribut-Typ der gleiche ist.
:::

### Produktinformationen hinterlegen

Navigieren Sie nach _Verkauf > Produkte > Produkte_ und zeigen Sie ein Produkt an. Im Tab _Product Information_ können Sie die Produktinformationen dem Produkt zuweisen.

::: warning
Wenn Sie die Produktinformationen auf einer Produkt-Vorlage hinzufügen, werden gleichzeitig den Produktvarianten hinzugefügt.
:::
