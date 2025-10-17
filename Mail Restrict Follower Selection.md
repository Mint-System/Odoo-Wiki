---
title: Mail Restrict Follower Selection
description: Auswahl der Follower einschränken.
kind: howto
partner: OCA
prev: ./dialog
---

# Mail Restrict Follower Selection

![icon_oca_app](attachments/icon_oca_app.png)

{{ $frontmatter.description }}

Technischer Name: `mail_restrict_follower_selection`\
Repository: <https://github.com/OCA/mail/tree/18.0/mail_restrict_follower_selection>

## Verwendung

### Auswahl Follower global einschränken

Die Erweiterung wird mit Systemparameter konfiguriert. Dazu müssen Sie den `mail_restrict_follower_selection.domain` [Systemparameter bearbeiten](Development.md#Systemparameter%20bearbeiten). Geben Sie hier einen Domänen-Filter ein.

::: tip
Der Standard-Domänen-Filter ist `[('category_id.name', '=', 'Employees')]`. Mit diesem Filter könnnen nur Kontakte ausgewählt werden, die als Stichwort _Employee_ haben.
:::

### Auswahl Follower für Datenmodell einschränken

Wenn Sie die Auswahl der Follower für ein bestimmtes Datenmodell einschränken möchten, müssen Sie einen [Systemparameter anlegen](Development.md#Systemparameter%20anlegen). Als Vorlage für den Schlüssel verwenden Sie `mail_restrict_follower_selection.domain.$MODEL`. Dazu ein Beispiel damit auf Kontakten nur Follower mit der Mail-Adresse `@example.com` ausgewählt werden können:

- **Schlüssel**: `mail_restrict_follower_selection.domain.res.partner`
- **Wert**: `[('email', 'like', 'example.com')]`

::: tip
Der Systemparameter für ein Datenmodell übersteuert den globalen Systemparameter.
:::
