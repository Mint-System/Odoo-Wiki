---
description: Mailingiste mit Kontakt-Liste synchronisieren.
forge: github.com
kind: howto
name: mass_mailing_list_dynamic
partner: OCA
prev: ./mass-mailing
repo: OCA/mass-mailing
title: Dynamic Mass Mailing Lists
versions:
- '18.0'
---


# Dynamic Mass Mailing Lists

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: {{ $frontmatter.name }}\
Repository: <a v-bind:href="`https://${$frontmatter.forge}/${$frontmatter.repo}/tree/${$frontmatter.versions[0]}/${$frontmatter.name}`">https://{{ $frontmatter.forge }}/{{ $frontmatter.repo }}/tree/{{ $frontmatter.versions[0] }}/{{ $frontmatter.name }}</a>

## Verwendung

### Synchronisierte Mailingliste erstellen

Mit dieser Erweiterung können Sie beispielsweise anhand ausgewählter Stichwörter die Einträge aus Kontakte mit den Kontakten einer Mailingliste synchronisieren. Dazu müssen Sie als erstes [Kontakt-Stichwörter anlegen](Contacts.md#Kontakt-Stichwörter%20anlegen).

Navigieren Sie nach _E-Mail-Marketing > Mailinglisten > Mailinglisten_ und erstellen Sie eine neue Liste. Aktivieren Sie die Option _Dynamic_. Im Feld _Synchronization critera_ können Sie den Kontakt-Filter definieren. Die Filterung der Kontakte anhand eines Stichworts sieht wie folgt aus:

```python
["&", ("is_blacklisted", "=", False), "&", ("email", "!=", False), ("category_id", "ilike", "Lieferanten")]
```

![](attachments/Mass%20Mailing%20List%20Dynamic.png)

### Mailingliste synchronisieren

Navigieren Sie nach _E-Mail-Marketing > Mailinglisten > Mailinglisten_ und zeigen Sie eine dynamische Mailingliste an. Bestimmen Sie die _Sync Method_ und wählen Sie die Aktion _Sync now._
