---
description: Produktsets definieren und einfach hinzufügen.
forge: github.com
kind: howto
name: sale_product_set
partner: OCA
prev: ./sale
repo: OCA/sale-workflow
title: Sale Product Set
versions:
- '17.0'
---


# Sale Product Set

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Produktset anlegen

Navigieren sie nach _Verkauf > Produkte > Produkset_ und erstellen Sie einen neuen Eintrag. Vergeben Sie eine passende _Bezeichnung_ und fügen Sie in der Liste Produkte dem Set hinzu.

![](attachments/Sale%20Product%20Set%20anlegen.png)

### Produktset hinzufügen

Im Angebot wählen Sie die Aktion _Produkset Hinzufügen_. Im Dialog wählen Sie das gewünschte Set und passen die Menge.

![](attachments/Sale%20Product%20Set%20Dialog.png)

Mit der Aktion _Produkset Hinzufügen_ werden auf dem Verkaufsautrag die einzelnen Auftragszeilen angelegt.
