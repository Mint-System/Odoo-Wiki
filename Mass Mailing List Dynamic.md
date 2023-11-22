---
title: Dynamic Mass Mailing Lists
description: Mailingiste mit Kontakt-Liste synchronisieren.
tags:
- HowTo
- OCA
prev: ./mass-mailing
---
# Dynamic Mass Mailing Lists
![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `mass_mailing_partner`\
Repository: <https://github.com/OCA/social/tree/16.0/mass_mailing_partner>

## Verwendung

### Synchronisierte Mailingliste erstellen

Mit dieser Erweiterung können Sie beispielsweise anhand ausgewählter Stichwörter die Einträge aus Kontakte mit den Kontakten einer Mailingliste synchronisieren. Dazu müssen Sie als erstes [Kontakt-Stichwörter anlegen](Contacts.md#Kontakt-Stichwörter%20anlegen).

Navigieren Sie nach *E-Mail-Marketing > Mailinglisten > Mailinglisten* und erstellen Sie eine neue Liste. Aktivieren Sie die Option *Dynamic*. Im Feld *Synchronization critera* können Sie den Kontakt-Filter definieren. Die Filterung der Kontakte anhand eines Stichworts sieht wie folgt aus:

```python
["&", ("is_blacklisted", "=", False), "&", ("email", "!=", False), ("category_id", "ilike", "Lieferanten")]
```


![](attachments/Mass%20Mailing%20List%20Dynamic.png)

### Mailingliste synchronisieren

Navigieren Sie nach *E-Mail-Marketing > Mailinglisten > Mailinglisten* und zeigen Sie eine dynamische Mailingliste an. Bestimmen Sie die *Sync Method* und wählen Sie die Aktion *Sync now.*